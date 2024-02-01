// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use super::{Randomness, SendPartialSignaturesRequest};
use anemo::{Request, Response};
use std::sync::{Arc, RwLock};
use sui_types::{
    committee::EpochId,
    crypto::{RandomnessPartialSignature, RandomnessRound},
};

pub(super) struct Server {
    // pub(super) state: Arc<RwLock<State>>,
}

#[anemo::async_trait]
impl Randomness for Server {
    async fn send_partial_signatures(
        &self,
        request: Request<SendPartialSignaturesRequest>,
    ) -> Result<Response<()>, anemo::rpc::Status> {
        // let state = self.state.read().unwrap();
        // let own_info = state
        //     .our_info
        //     .clone()
        //     .ok_or_else(|| anemo::rpc::Status::internal("own_info has not been initialized yet"))?;
        // let known_peers = state.known_peers.values().cloned().collect();

        // Ok(Response::new(GetKnownPeersResponse {
        //     own_info,
        //     known_peers,
        // }))

        // TODO-DNS implement
        Ok(anemo::Response::new(()))
    }
}
