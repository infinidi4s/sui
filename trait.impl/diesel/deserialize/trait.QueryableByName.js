(function() {var implementors = {
"sui_indexer":[["impl&lt;__DB: Backend&gt; QueryableByName&lt;__DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/transactions/struct.StoredTransaction.html\" title=\"struct sui_indexer::models::transactions::StoredTransaction\">StoredTransaction</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i64.html\">i64</a>: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.tx_sequence_number.html\" title=\"struct sui_indexer::schema::transactions::columns::tx_sequence_number\">tx_sequence_number</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.checkpoint_sequence_number.html\" title=\"struct sui_indexer::schema::transactions::columns::checkpoint_sequence_number\">checkpoint_sequence_number</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.timestamp_ms.html\" title=\"struct sui_indexer::schema::transactions::columns::timestamp_ms\">timestamp_ms</a>&gt;, __DB&gt;,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.transaction_digest.html\" title=\"struct sui_indexer::schema::transactions::columns::transaction_digest\">transaction_digest</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.raw_transaction.html\" title=\"struct sui_indexer::schema::transactions::columns::raw_transaction\">raw_transaction</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.raw_effects.html\" title=\"struct sui_indexer::schema::transactions::columns::raw_effects\">raw_effects</a>&gt;, __DB&gt;,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;&gt;&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.object_changes.html\" title=\"struct sui_indexer::schema::transactions::columns::object_changes\">object_changes</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.balance_changes.html\" title=\"struct sui_indexer::schema::transactions::columns::balance_changes\">balance_changes</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.events.html\" title=\"struct sui_indexer::schema::transactions::columns::events\">events</a>&gt;, __DB&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i16.html\">i16</a>: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.transaction_kind.html\" title=\"struct sui_indexer::schema::transactions::columns::transaction_kind\">transaction_kind</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/columns/struct.success_command_count.html\" title=\"struct sui_indexer::schema::transactions::columns::success_command_count\">success_command_count</a>&gt;, __DB&gt;,</div>"],["impl&lt;__DB: Backend&gt; QueryableByName&lt;__DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredHistoryObject.html\" title=\"struct sui_indexer::models::objects::StoredHistoryObject\">StoredHistoryObject</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.object_id.html\" title=\"struct sui_indexer::schema::objects_history::columns::object_id\">object_id</a>&gt;, __DB&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i64.html\">i64</a>: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.object_version.html\" title=\"struct sui_indexer::schema::objects_history::columns::object_version\">object_version</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.checkpoint_sequence_number.html\" title=\"struct sui_indexer::schema::objects_history::columns::checkpoint_sequence_number\">checkpoint_sequence_number</a>&gt;, __DB&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i16.html\">i16</a>: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.object_status.html\" title=\"struct sui_indexer::schema::objects_history::columns::object_status\">object_status</a>&gt;, __DB&gt;,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.object_digest.html\" title=\"struct sui_indexer::schema::objects_history::columns::object_digest\">object_digest</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.owner_id.html\" title=\"struct sui_indexer::schema::objects_history::columns::owner_id\">owner_id</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.serialized_object.html\" title=\"struct sui_indexer::schema::objects_history::columns::serialized_object\">serialized_object</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.df_name.html\" title=\"struct sui_indexer::schema::objects_history::columns::df_name\">df_name</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.df_object_id.html\" title=\"struct sui_indexer::schema::objects_history::columns::df_object_id\">df_object_id</a>&gt;, __DB&gt;,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i16.html\">i16</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.owner_type.html\" title=\"struct sui_indexer::schema::objects_history::columns::owner_type\">owner_type</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.df_kind.html\" title=\"struct sui_indexer::schema::objects_history::columns::df_kind\">df_kind</a>&gt;, __DB&gt;,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.object_type.html\" title=\"struct sui_indexer::schema::objects_history::columns::object_type\">object_type</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.coin_type.html\" title=\"struct sui_indexer::schema::objects_history::columns::coin_type\">coin_type</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.df_object_type.html\" title=\"struct sui_indexer::schema::objects_history::columns::df_object_type\">df_object_type</a>&gt;, __DB&gt;,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i64.html\">i64</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.coin_balance.html\" title=\"struct sui_indexer::schema::objects_history::columns::coin_balance\">coin_balance</a>&gt;, __DB&gt;,</div>"],["impl&lt;__DB: Backend&gt; QueryableByName&lt;__DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/events/struct.StoredEvent.html\" title=\"struct sui_indexer::models::events::StoredEvent\">StoredEvent</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i64.html\">i64</a>: FromSql&lt;BigInt, __DB&gt;,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;: FromSql&lt;Bytea, __DB&gt;,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;&gt;&gt;: FromSql&lt;Array&lt;Nullable&lt;Bytea&gt;&gt;, __DB&gt;,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: FromSql&lt;Text, __DB&gt;,</div>"],["impl&lt;__DB: Backend&gt; QueryableByName&lt;__DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredDeletedHistoryObject.html\" title=\"struct sui_indexer::models::objects::StoredDeletedHistoryObject\">StoredDeletedHistoryObject</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.object_id.html\" title=\"struct sui_indexer::schema::objects_history::columns::object_id\">object_id</a>&gt;, __DB&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i64.html\">i64</a>: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.object_version.html\" title=\"struct sui_indexer::schema::objects_history::columns::object_version\">object_version</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.checkpoint_sequence_number.html\" title=\"struct sui_indexer::schema::objects_history::columns::checkpoint_sequence_number\">checkpoint_sequence_number</a>&gt;, __DB&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i16.html\">i16</a>: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/columns/struct.object_status.html\" title=\"struct sui_indexer::schema::objects_history::columns::object_status\">object_status</a>&gt;, __DB&gt;,</div>"],["impl&lt;__DB: Backend&gt; QueryableByName&lt;__DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredObject.html\" title=\"struct sui_indexer::models::objects::StoredObject\">StoredObject</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.object_id.html\" title=\"struct sui_indexer::schema::objects::columns::object_id\">object_id</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.object_digest.html\" title=\"struct sui_indexer::schema::objects::columns::object_digest\">object_digest</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.serialized_object.html\" title=\"struct sui_indexer::schema::objects::columns::serialized_object\">serialized_object</a>&gt;, __DB&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i64.html\">i64</a>: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.object_version.html\" title=\"struct sui_indexer::schema::objects::columns::object_version\">object_version</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.checkpoint_sequence_number.html\" title=\"struct sui_indexer::schema::objects::columns::checkpoint_sequence_number\">checkpoint_sequence_number</a>&gt;, __DB&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i16.html\">i16</a>: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.owner_type.html\" title=\"struct sui_indexer::schema::objects::columns::owner_type\">owner_type</a>&gt;, __DB&gt;,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.owner_id.html\" title=\"struct sui_indexer::schema::objects::columns::owner_id\">owner_id</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.df_name.html\" title=\"struct sui_indexer::schema::objects::columns::df_name\">df_name</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.df_object_id.html\" title=\"struct sui_indexer::schema::objects::columns::df_object_id\">df_object_id</a>&gt;, __DB&gt;,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.object_type.html\" title=\"struct sui_indexer::schema::objects::columns::object_type\">object_type</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.coin_type.html\" title=\"struct sui_indexer::schema::objects::columns::coin_type\">coin_type</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.df_object_type.html\" title=\"struct sui_indexer::schema::objects::columns::df_object_type\">df_object_type</a>&gt;, __DB&gt;,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i64.html\">i64</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.coin_balance.html\" title=\"struct sui_indexer::schema::objects::columns::coin_balance\">coin_balance</a>&gt;, __DB&gt;,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i16.html\">i16</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.df_kind.html\" title=\"struct sui_indexer::schema::objects::columns::df_kind\">df_kind</a>&gt;, __DB&gt;,</div>"],["impl&lt;__DB: Backend&gt; QueryableByName&lt;__DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.TxSequenceNumber.html\" title=\"struct sui_indexer::models::tx_indices::TxSequenceNumber\">TxSequenceNumber</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i64.html\">i64</a>: FromSql&lt;BigInt, __DB&gt;,</div>"],["impl&lt;__DB: Backend&gt; QueryableByName&lt;__DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.CoinBalance.html\" title=\"struct sui_indexer::models::objects::CoinBalance\">CoinBalance</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: FromSql&lt;Text, __DB&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i64.html\">i64</a>: FromSql&lt;BigInt, __DB&gt;,</div>"],["impl&lt;__DB: Backend&gt; QueryableByName&lt;__DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.TxDigest.html\" title=\"struct sui_indexer::models::tx_indices::TxDigest\">TxDigest</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;: FromSql&lt;Bytea, __DB&gt;,</div>"],["impl&lt;__DB: Backend&gt; QueryableByName&lt;__DB&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredDeletedObject.html\" title=\"struct sui_indexer::models::objects::StoredDeletedObject\">StoredDeletedObject</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.object_id.html\" title=\"struct sui_indexer::schema::objects::columns::object_id\">object_id</a>&gt;, __DB&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.i64.html\">i64</a>: FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.object_version.html\" title=\"struct sui_indexer::schema::objects::columns::object_version\">object_version</a>&gt;, __DB&gt; + FromSql&lt;SqlTypeOf&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/columns/struct.checkpoint_sequence_number.html\" title=\"struct sui_indexer::schema::objects::columns::checkpoint_sequence_number\">checkpoint_sequence_number</a>&gt;, __DB&gt;,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()