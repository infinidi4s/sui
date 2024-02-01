// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use std::{
    collections::{
        btree_map::{self, BTreeMap},
        HashMap,
    },
    ops::Bound,
    sync::Arc,
    time::Duration,
};

use anemo::PeerId;
use fastcrypto::groups::bls12381;
use fastcrypto_tbls::{dkg, tbls::ThresholdBls, types::ThresholdBls12381MinSig};
use futures::{stream::FuturesUnordered, StreamExt};
use mysten_metrics::spawn_monitored_task;
use mysten_network::anemo_ext::NetworkExt;
use serde::{Deserialize, Serialize};
use sui_types::{
    base_types::AuthorityName,
    committee::EpochId,
    crypto::{RandomnessPartialSignature, RandomnessRound},
};
use tokio::sync::mpsc;
use tracing::{debug, info};

mod generated {
    include!(concat!(env!("OUT_DIR"), "/sui.Randomness.rs"));
}
mod server;

pub use generated::{
    randomness_client::RandomnessClient,
    randomness_server::{Randomness, RandomnessServer},
};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct SendPartialSignaturesRequest {
    epoch: EpochId,
    round: RandomnessRound,
    // BCS-serialized `RandomnessPartialSignature` values. We store raw bytes here to enable
    // defenses against too-large messages.
    sigs: Vec<Vec<u8>>,
}

/// A handle to the Randomness network subsystem.
///
/// This handle can be cloned and shared. Once all copies of a Randomness system's Handle have been
/// dropped, the Randomness system will be gracefully shutdown.
#[derive(Clone, Debug)]
pub struct Handle {
    sender: mpsc::Sender<RandomnessMessage>,
    // checkpoint_event_sender: broadcast::Sender<VerifiedCheckpoint>, TODO-DNS
}

impl Handle {
    /// Transitions the Randomness system to a new epoch. Cancels all partial signature sends for
    /// prior epochs.
    pub async fn update_epoch(
        &self,
        new_epoch: EpochId,
        authority_peer_ids: HashMap<AuthorityName, PeerId>,
        dkg_output: dkg::Output<bls12381::G2Element, bls12381::G2Element>,
    ) {
        self.sender
            .send(RandomnessMessage::UpdateEpoch(
                new_epoch,
                authority_peer_ids,
                dkg_output,
            ))
            .await
            .unwrap()
    }

    /// Begins transmitting partial signatures for the given epoch and round until canceled.
    pub async fn send_partial_signatures(&self, epoch: EpochId, round: RandomnessRound) {
        self.sender
            .send(RandomnessMessage::SendPartialSignatures(epoch, round))
            .await
            .unwrap()
    }

    /// Cancels transmitting partial signatures for the given epoch and round.
    pub async fn cancel_send_partial_signatures(&self, epoch: EpochId, round: RandomnessRound) {
        self.sender
            .send(RandomnessMessage::CancelSendPartialSignatures(epoch, round))
            .await
            .unwrap()
    }

    #[cfg(test)]
    pub fn new_stub() -> Self {
        let (sender, _) = mpsc::channel(1);
        Self { sender }
    }
}

#[derive(Clone, Debug)]
enum RandomnessMessage {
    UpdateEpoch(
        EpochId,
        HashMap<AuthorityName, PeerId>,
        dkg::Output<bls12381::G2Element, bls12381::G2Element>,
    ),
    SendPartialSignatures(EpochId, RandomnessRound),
    CancelSendPartialSignatures(EpochId, RandomnessRound),
}

struct RandomnessEventLoop {
    mailbox: mpsc::Receiver<RandomnessMessage>,
    network: anemo::Network,

    epoch: EpochId,
    authority_peer_ids: Arc<HashMap<AuthorityName, PeerId>>,
    dkg_output: Option<dkg::Output<bls12381::G2Element, bls12381::G2Element>>,
    pending_tasks: BTreeMap<(EpochId, RandomnessRound), ()>,
    send_tasks: BTreeMap<(EpochId, RandomnessRound), tokio::task::JoinHandle<()>>,
    received_sigs: BTreeMap<(EpochId, RandomnessRound), Vec<RandomnessPartialSignature>>,
}

impl RandomnessEventLoop {
    pub async fn start(mut self) {
        info!("Randomness network event loop started");

        loop {
            tokio::select! {
                maybe_message = self.mailbox.recv() => {
                    // Once all handles to our mailbox have been dropped this
                    // will yield `None` and we can terminate the event loop.
                    if let Some(message) = maybe_message {
                        self.handle_message(message);
                    } else {
                        break;
                    }
                },
            }
        }

        info!("Randomness network event loop ended");
    }

    fn handle_message(&mut self, message: RandomnessMessage) {
        match message {
            RandomnessMessage::UpdateEpoch(epoch, authority_peer_ids, dkg_output) => {
                self.update_epoch(epoch, authority_peer_ids, dkg_output)
            }
            RandomnessMessage::SendPartialSignatures(epoch, round) => {
                self.send_partial_signatures(epoch, round)
            }
            RandomnessMessage::CancelSendPartialSignatures(epoch, round) => {
                self.cancel_send_partial_signatures(epoch, round)
            }
        }
    }

    fn update_epoch(
        &mut self,
        new_epoch: EpochId,
        authority_peer_ids: HashMap<AuthorityName, PeerId>,
        dkg_output: dkg::Output<bls12381::G2Element, bls12381::G2Element>,
    ) {
        assert!(self.dkg_output.is_none() || new_epoch > self.epoch);

        self.epoch = new_epoch;
        self.authority_peer_ids = Arc::new(authority_peer_ids);
        self.dkg_output = Some(dkg_output);
        for (_, task) in std::mem::take(&mut self.send_tasks) {
            task.abort();
        }

        let split_key = &(new_epoch + 1, RandomnessRound(0));
        self.received_sigs = self.received_sigs.split_off(split_key);

        // Start any pending tasks for the new epoch.
        self.maybe_start_pending_tasks();
    }

    fn send_partial_signatures(&mut self, epoch: EpochId, round: RandomnessRound) {
        if epoch < self.epoch {
            info!(
                    "skipping sending partial sigs for epoch {epoch} round {round}, we are already up to epoch {}",
                    self.epoch
                );
            return;
        }

        self.pending_tasks.insert((epoch, round), ());
        self.maybe_start_pending_tasks();
    }

    fn cancel_send_partial_signatures(&mut self, epoch: EpochId, round: RandomnessRound) {
        self.pending_tasks.remove(&(epoch, round));
        if let Some(task) = self.send_tasks.remove(&(epoch, round)) {
            task.abort();
            self.maybe_start_pending_tasks();
        }
    }

    fn maybe_start_pending_tasks(&mut self) {
        let dkg_output = if let Some(dkg_output) = &self.dkg_output {
            dkg_output
        } else {
            return; // can't start tasks until first DKG completes
        };
        let shares = if let Some(shares) = &dkg_output.shares {
            shares
        } else {
            return; // can't participate in randomness generation without shares
        };

        let mut last_handled_key = None;
        for ((epoch, round), _) in &self.pending_tasks {
            last_handled_key = Some((*epoch, *round));
            if epoch < &self.epoch {
                info!(
                    "skipping sending partial sigs for epoch {epoch} round {round}, we are already up to epoch {}",
                    self.epoch
                );
                continue;
            }
            if epoch > &self.epoch {
                break; // wait for DKG in new epoch
            }

            const MAX_CONCURRENT_SEND_PARTIAL_SIGNATURES: usize = 5;
            if self.send_tasks.len() >= MAX_CONCURRENT_SEND_PARTIAL_SIGNATURES {
                break; // limit concurrent tasks
            }

            self.send_tasks.entry((*epoch, *round)).or_insert_with(|| {
                let network = self.network.clone();
                let authority_peer_ids = self.authority_peer_ids.clone();
                let epoch = *epoch;
                let round = *round;
                let sigs = ThresholdBls12381MinSig::partial_sign_batch(
                    shares.iter(),
                    &round.signature_message(),
                );
                spawn_monitored_task!(RandomnessEventLoop::send_partial_signatures_task(
                    network,
                    authority_peer_ids,
                    epoch,
                    round,
                    sigs
                ))
            });
        }

        if let Some(last_handled_key) = last_handled_key {
            // Remove stuff from the pending_tasks map that we've handled.
            let split_point = self
                .pending_tasks
                .range((Bound::Excluded(last_handled_key), Bound::Unbounded))
                .next()
                .map(|(k, _)| *k);
            if let Some(key) = split_point {
                let mut keep_tasks = self.pending_tasks.split_off(&key);
                std::mem::swap(&mut self.pending_tasks, &mut keep_tasks);
            } else {
                self.pending_tasks.clear();
            }
        }
    }

    async fn send_partial_signatures_task(
        network: anemo::Network,
        authority_peer_ids: Arc<HashMap<AuthorityName, PeerId>>,
        epoch: EpochId,
        round: RandomnessRound,
        sigs: Vec<RandomnessPartialSignature>,
    ) {
        let peers: HashMap<_, _> = authority_peer_ids
            .iter()
            .map(|(name, peer_id)| (name, network.waiting_peer(peer_id.clone())))
            .collect();
        let sigs: Vec<_> = sigs
            .iter()
            .map(|sig| bcs::to_bytes(sig).expect("message serialization should not fail"))
            .collect();

        loop {
            let mut requests = FuturesUnordered::new();
            for (name, peer) in &peers {
                let mut client = RandomnessClient::new(peer.clone());
                const SEND_PARTIAL_SIGNATURES_TIMEOUT: Duration = Duration::from_secs(10);
                let request = anemo::Request::new(SendPartialSignaturesRequest {
                    epoch,
                    round,
                    sigs: sigs.clone(),
                })
                .with_timeout(SEND_PARTIAL_SIGNATURES_TIMEOUT);
                requests.push(async move {
                    let result = client.send_partial_signatures(request).await;
                    if let Err(e) = result {
                        debug!("failed to send partial signatures to {name}: {e:?}");
                    }
                });
            }

            while let Some(_) = requests.next().await {
                // Process all requests.
            }

            // Keep retrying send to all peers until task is aborted via external message.
            const SEND_PARTIAL_SIGNATURES_RETRY_TIME: Duration = Duration::from_secs(5);
            tokio::time::sleep(SEND_PARTIAL_SIGNATURES_RETRY_TIME).await;
        }
    }
}
