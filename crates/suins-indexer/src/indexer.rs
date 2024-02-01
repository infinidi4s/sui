// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use std::{
    collections::{HashMap, HashSet},
    str::FromStr,
};

use move_core_types::language_storage::StructTag;
use sui_json_rpc::name_service::{Domain, NameRecord, SubDomainRegistration};
use sui_types::{
    base_types::{ObjectID, SuiAddress},
    dynamic_field::Field,
    full_checkpoint_content::CheckpointData,
    object::Object,
};

use crate::models::VerifiedDomain;

/// TODO(manos): Hardcode mainnet addresses.
const REGISTRY_TABLE_ID: &str =
    "0xe64cd9db9f829c6cc405d9790bd71567ae07259855f4fba6f02c84f52298c106";
const SUBDOMAIN_REGISTRATION_TYPE: &str =
    "0xPackageIdTBD::subdomain_registration::SubDomainRegistration";

#[derive(Debug, Clone)]
pub struct NameRecordChange {
    /// the NameRecord entry in the table (DF).
    field: Field<Domain, NameRecord>,
    /// the DF's ID.
    field_id: ObjectID,
}
pub struct SuinsIndexer {
    registry_table_id: SuiAddress,
    subdomain_wrapper_type: StructTag,
}

impl std::default::Default for SuinsIndexer {
    fn default() -> Self {
        Self::new(
            REGISTRY_TABLE_ID.to_owned(),
            SUBDOMAIN_REGISTRATION_TYPE.to_owned(),
        )
    }
}

impl SuinsIndexer {
    /// Create a new config by passing the table ID + subdomain wrapper type.
    /// Useful for testing or custom environments.
    pub fn new(registry_address: String, wrapper_type: String) -> Self {
        let registry_table_id = SuiAddress::from_str(&registry_address).unwrap();
        let subdomain_wrapper_type = StructTag::from_str(&wrapper_type).unwrap();

        Self {
            registry_table_id,
            subdomain_wrapper_type,
        }
    }

    /// Checks if the object referenced is a subdomain wrapper.
    /// For subdomain wrappers, we're saving the ID of the wrapper object,
    /// to make it easy to locate the NFT (since the base NFT gets wrapped and indexing won't work there).
    pub fn is_subdomain_wrapper(&self, object: &Object) -> bool {
        object
            .struct_tag()
            .is_some_and(|tag| tag == self.subdomain_wrapper_type)
    }

    // Filter by owner.
    // Owner has to be the TABLE of the registry.
    // A table of that type can only have `Field<Domain,NameRecord> as a child so that check is enough to
    // make sure we're dealing with a registry change.
    pub fn is_name_record(&self, object: &Object) -> bool {
        object
            .get_single_owner()
            .is_some_and(|owner| owner == self.registry_table_id)
    }

    /// Parses the name record changes + subdomain wraps.
    /// and pushes them into the supplied vector + hashmap.
    ///
    /// It is implemented in a way to do just a single iteration over the objects.
    pub fn parse_name_record_changes(
        &self,
        objects: &[&Object],
        name_record_changes: &mut Vec<NameRecordChange>,
        sub_domain_wrappers: &mut HashMap<String, String>,
    ) {
        for &object in objects {
            // Parse all the changes to a `NameRecord`
            if self.is_name_record(object) {
                let name_record: Field<Domain, NameRecord> = object
                    .to_rust()
                    .unwrap_or_else(|| panic!("Failed to parse name record for {:?}", object));

                name_record_changes.push(NameRecordChange {
                    field: name_record,
                    field_id: object.id(),
                });
            }
            // Parse subdomain wrappers and save them in our hashmap.
            // Later, we'll save the id of the wrapper in the name record.
            // NameRecords & their equivalent SubdomainWrappers are always created in the same PTB, so we can safely assume
            // that the wrapper will be created on the same checkpoint as the name record and vice versa.
            if self.is_subdomain_wrapper(object) {
                let sub_domain: SubDomainRegistration = object.to_rust().unwrap();
                sub_domain_wrappers.insert(
                    sub_domain.nft.domain_name,
                    sub_domain.id.id.bytes.to_string(),
                );
            };
        }
    }

    /// For each input object, we're parsing the name record deletions
    /// A deletion we want to track is a deleted object which is of `NameRecord` type.
    /// Domain replacements do not count as deletions, but instead are an update to the latest state.
    pub fn parse_name_record_deletions(
        &self,
        checkpoint: &CheckpointData,
        removals: &mut Vec<String>,
    ) {
        // Gather all object ids that got deleted.
        // This way, we can delete removed name records
        // (detects burning of expired names or leaf names removal).
        let deleted_objects: HashSet<_> = checkpoint
            .transactions
            .iter()
            .flat_map(|x| x.effects.all_removed_objects())
            .map(|((id, _, _), _)| id)
            .collect();

        for input in checkpoint.input_objects() {
            if self.is_name_record(input) && deleted_objects.contains(&input.id()) {
                removals.push(input.id().to_string());
            }
        }
    }

    /// Processes a checkpoint and produces a list of `updates` and a list of `removals`
    ///
    /// We can then use these to execute our DB bulk insertions + bulk deletions.
    ///
    /// Returns
    /// - `Vec<VerifiedDomain>`: A list of NameRecord updates for the database (including sequence number)
    /// - `Vec<String>`: A list of IDs to be deleted from the database (`field_id` is the matching column)
    pub fn process_checkpoint(
        &self,
        checkpoint: CheckpointData,
    ) -> (Vec<VerifiedDomain>, Vec<String>) {
        let mut name_records: Vec<NameRecordChange> = vec![];
        let mut subdomain_wrappers: HashMap<String, String> = HashMap::new();
        let mut removals: Vec<String> = vec![];

        self.parse_name_record_changes(
            &checkpoint.output_objects(),
            &mut name_records,
            &mut subdomain_wrappers,
        );

        self.parse_name_record_deletions(&checkpoint, &mut removals);

        let updates = prepare_db_updates(
            &name_records,
            &subdomain_wrappers,
            checkpoint.checkpoint_summary.sequence_number,
        );

        (updates, removals)
    }
}

/// Allows us to format a SuiNS specific query for updating the DB entries
/// only if the checkpoint is newer than the last checkpoint we have in the DB.
/// Doing that, we do not care about the order of execution and we can use multiple threads
/// to commit from later checkpoints to the DB.
///
/// WARNING: This can easily be SQL-injected, so make sure to use it only with trusted inputs.
pub fn format_update_field_query(field: &str) -> String {
    format!(
        "CASE WHEN excluded.last_checkpoint_updated > domains.last_checkpoint_updated THEN excluded.{field} ELSE domains.{field} END"
    )
}

/// Update the subdomain wrapper ID only if it is part of the checkpoint.
pub fn format_update_subdomain_wrapper_query() -> String {
    "CASE WHEN excluded.subdomain_wrapper_id IS NOT NULL THEN excluded.subdomain_wrapper_id ELSE domains.subdomain_wrapper_id END".to_string()
}

/// Prepares a vector of `VerifiedDomain`s to be inserted into the DB, taking in account
/// the list of subdomain wrappers created as well as the checkpoint's sequence number.
pub fn prepare_db_updates(
    name_record_changes: &[NameRecordChange],
    subdomain_wrappers: &HashMap<String, String>,
    checkpoint_seq_num: u64,
) -> Vec<VerifiedDomain> {
    let mut updates: Vec<VerifiedDomain> = vec![];

    for name_record_change in name_record_changes {
        let name_record = &name_record_change.field;

        let parent = name_record.name.parent().to_string();
        let nft_id = name_record.value.nft_id.bytes.to_string();

        updates.push(VerifiedDomain {
            field_id: name_record_change.field_id.to_string(),
            name: name_record.name.to_string(),
            parent,
            expiration_timestamp_ms: name_record.value.expiration_timestamp_ms as i64,
            nft_id,
            target_address: if name_record.value.target_address.is_some() {
                Some(SuiAddress::to_string(
                    &name_record.value.target_address.unwrap(),
                ))
            } else {
                None
            },
            // unwrapping must be safe as `value.data` is an on-chain value with VecMap<String,String> type.
            data: serde_json::to_value(&name_record.value.data).unwrap(),
            last_checkpoint_updated: checkpoint_seq_num as i64,
            subdomain_wrapper_id: subdomain_wrappers
                .get(&name_record.name.to_string())
                .cloned(),
        });
    }

    updates
}
