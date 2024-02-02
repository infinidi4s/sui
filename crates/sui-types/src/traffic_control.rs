// Copyright (c) 2021, Facebook, Inc. and its affiliates
// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use std::net::SocketAddr;

use crate::error::{SuiError, SuiResult};
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug)]
pub struct TrafficTally {
    pub remote_addr: Option<SocketAddr>,
    pub end_user_addr: Option<SocketAddr>,
    pub result: SuiResult,
    pub timestamp: DateTime<Utc>,
}

pub trait StatefulHandler: FnMut<(TrafficTally)> + std::clone::Clone {}

pub struct TrafficControlPolicy {
    pub tallyable_error_codes: Vec<SuiError>,
    pub remote_blocklist_ttl_sec: u64,
    pub end_user_blocklist_ttl_sec: u64,

    #[serde(skip_serializing, skip_deserializing)]
    pub stateful_error_handler: Box<dyn StatefulHandler>,

    #[serde(skip_serializing, skip_deserializing)]
    pub stateful_spam_handler: Option<Box<dyn StatefulHandler>>,
}

impl Default for TrafficControlPolicy {
    fn default() -> Self {
        Self {
            tallyable_error_codes: vec![],
            remote_blocklist_ttl_sec: 60,
            end_user_blocklist_ttl_sec: 60,
            stateful_error_handler: Box::new(|_| {}),
            stateful_spam_handler: None,
        }
    }
}
