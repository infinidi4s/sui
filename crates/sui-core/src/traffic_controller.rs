// Copyright (c) 2021, Facebook, Inc. and its affiliates
// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use std::net::SocketAddr;

use chrono::{DateTime, Utc};
use fastcrypto::hash::Hash;
use mysten_metrics::spawn_monitored_task;
use parking_lot::RwLock;
use serde::Serialize;
use sui_types::error::{SuiError, SuiResult};
use sui_types::traffic_control::{TrafficControlPolicy, TrafficTally};
use tokio::sync::mpsc;

pub struct TrafficController {
    tally_channel: mpsc::Sender<TrafficTally>,
    policy: TrafficControlPolicy,
    blocklist: RwLock<HashMap<SocketAddr, DateTime<Utc>>>,
    frequency_list: RwLock<HashMap<Hash, DateTime<Utc>>>,
    //metrics: TrafficControllerMetrics, // TODO
}

impl TrafficController {
    // TODO(william) combine policy and capacity into a config struct in NodeConfig
    pub async fn spawn(policy: TrafficControlPolicy, channel_capacity: usize) -> Self {
        let (tx, rx) = mpsc::channel(channel_capacity);
        spawn_monitored_task!(self.run_tally_loop(rx));
        TrafficControllerService {
            tally_channel: tx,
            policy: TrafficControlPolicy::default(),
            blocklist: RwLock::new(HashMap::new()),
        }
    }

    pub async fn tally(&self, tally: TrafficTally) {
        if let Err(e) = self.tally_channel.send(tally).await {
            panic!("TrafficController tally channel closed unexpectedly: {}", e);
        }
    }

    pub async fn check(
        &self,
        remote_addr: Option<SocketAddr>,
        end_user_addr: Option<SocketAddr>,
    ) -> bool {
        match (remote_addr, end_user_addr) {
            (Some(remote), _) => self.check_and_update_blocklist(remote).await,
            (_, Some(end_user)) => self.check_and_update_blocklist(end_user).await,
            _ => true,
        }
    }

    async fn check_and_update_blocklist(&self, ip: SocketAddr) -> bool {
        let now = Utc::now();
        let expiration = { *self.blocklist.read().get(&ip) };
        match expiration {
            Some(expiration) if &now >= expiration => {
                self.blocklist.write().remove(&ip);
                true
            }
            None => true,
            _ => false,
        }
    }

    async fn run_tally_loop(&mut self, receiver: mpsc::Receiver<TrafficTally>) {
        loop {
            tokio::select! {
                received = channel.recv() => match received {
                    Some(tally) => {
                        self.handle_spam_tally(tally).await;
                        if tally.result.is_err() {
                            self.handle_error_tally(tally).await;
                        }
                    }
                    None => {
                        panic!("TrafficController tally channel closed unexpectedly");
                    },
                }
            }
        }
    }

    async fn handle_error_tally(&self, tally: TrafficTally) {
        if self
            .policy
            .tallyable_error_codes
            .contains(&tally.result.unwrap())
        {
            (self.policy.stateful_error_handler)(tally);
            // match (tally.remote_addr, tally.end_user_addr) {
            //     (Some(remote), _) => {
            //         self.blocklist.write().insert(
            //             remote,
            //             Utc::now()
            //                 + chrono::Duration::seconds(self.policy.remote_blocklist_ttl_sec),
            //         );
            //     }
            //     (_, Some(end_user)) => {
            //         self.blocklist.write().insert(
            //             end_user,
            //             Utc::now()
            //                 + chrono::Duration::seconds(self.policy.end_user_blocklist_ttl_sec),
            //         );
            //     }
            //     _ => {}
            // }
        }
    }

    async fn handle_spam_tally(&self, tally: TrafficTally) {
        if let Some(handler) = &self.policy.stateful_spam_handler {
            handler(tally);
        }
    }
}
