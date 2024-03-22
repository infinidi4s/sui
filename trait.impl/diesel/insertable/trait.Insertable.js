(function() {var implementors = {
"data_transform":[["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"data_transform/schema/events_json/struct.table.html\" title=\"struct data_transform::schema::events_json::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"data_transform/schema/events_json/struct.table.html\" title=\"struct data_transform::schema::events_json::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"data_transform/schema/events/struct.table.html\" title=\"struct data_transform::schema::events::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"data_transform/schema/events/struct.table.html\" title=\"struct data_transform::schema::events::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"data_transform/schema/events_json/struct.table.html\" title=\"struct data_transform::schema::events_json::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"data_transform/models/struct.EventsJson.html\" title=\"struct data_transform::models::EventsJson\">EventsJson</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"data_transform/schema/events/struct.table.html\" title=\"struct data_transform::schema::events::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"data_transform/schema/events/struct.table.html\" title=\"struct data_transform::schema::events::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"data_transform/schema/events_json/struct.table.html\" title=\"struct data_transform::schema::events_json::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"data_transform/schema/events_json/struct.table.html\" title=\"struct data_transform::schema::events_json::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl Insertable&lt;<a class=\"struct\" href=\"data_transform/schema/events_json/struct.table.html\" title=\"struct data_transform::schema::events_json::table\">table</a>&gt; for <a class=\"struct\" href=\"data_transform/models/struct.EventsJson.html\" title=\"struct data_transform::models::EventsJson\">EventsJson</a>"]],
"sui_indexer":[["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/transactions/struct.StoredTransaction.html\" title=\"struct sui_indexer::models::transactions::StoredTransaction\">StoredTransaction</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/transactions_partition_0/struct.table.html\" title=\"struct sui_indexer::schema::transactions_partition_0::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/transactions_partition_0/struct.table.html\" title=\"struct sui_indexer::schema::transactions_partition_0::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_recipients/struct.table.html\" title=\"struct sui_indexer::schema::tx_recipients::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.StoredTxRecipients.html\" title=\"struct sui_indexer::models::tx_indices::StoredTxRecipients\">StoredTxRecipients</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_input_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_input_objects::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.StoredTxInputObject.html\" title=\"struct sui_indexer::models::tx_indices::StoredTxInputObject\">StoredTxInputObject</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/tx_input_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_input_objects::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_input_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_input_objects::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/tx_recipients/struct.table.html\" title=\"struct sui_indexer::schema::tx_recipients::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_recipients/struct.table.html\" title=\"struct sui_indexer::schema::tx_recipients::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredDeletedHistoryObject.html\" title=\"struct sui_indexer::models::objects::StoredDeletedHistoryObject\">StoredDeletedHistoryObject</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/checkpoints/struct.StoredCheckpoint.html\" title=\"struct sui_indexer::models::checkpoints::StoredCheckpoint\">StoredCheckpoint</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/epoch/struct.StoredEpochInfo.html\" title=\"struct sui_indexer::models::epoch::StoredEpochInfo\">StoredEpochInfo</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_input_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_input_objects::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.StoredTxInputObject.html\" title=\"struct sui_indexer::models::tx_indices::StoredTxInputObject\">StoredTxInputObject</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_recipients/struct.table.html\" title=\"struct sui_indexer::schema::tx_recipients::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.StoredTxRecipients.html\" title=\"struct sui_indexer::models::tx_indices::StoredTxRecipients\">StoredTxRecipients</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_changed_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_changed_objects::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.StoredTxChangedObject.html\" title=\"struct sui_indexer::models::tx_indices::StoredTxChangedObject\">StoredTxChangedObject</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/display/struct.table.html\" title=\"struct sui_indexer::schema::display::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/display/struct.table.html\" title=\"struct sui_indexer::schema::display::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/tx_calls/struct.table.html\" title=\"struct sui_indexer::schema::tx_calls::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/tx_calls/struct.table.html\" title=\"struct sui_indexer::schema::tx_calls::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/tx_recipients/struct.table.html\" title=\"struct sui_indexer::schema::tx_recipients::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/tx_recipients/struct.table.html\" title=\"struct sui_indexer::schema::tx_recipients::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/transactions/struct.StoredTransaction.html\" title=\"struct sui_indexer::models::transactions::StoredTransaction\">StoredTransaction</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/packages/struct.StoredPackage.html\" title=\"struct sui_indexer::models::packages::StoredPackage\">StoredPackage</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredDeletedObject.html\" title=\"struct sui_indexer::models::objects::StoredDeletedObject\">StoredDeletedObject</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_senders/struct.table.html\" title=\"struct sui_indexer::schema::tx_senders::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.StoredTxSenders.html\" title=\"struct sui_indexer::models::tx_indices::StoredTxSenders\">StoredTxSenders</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_senders/struct.table.html\" title=\"struct sui_indexer::schema::tx_senders::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.StoredTxSenders.html\" title=\"struct sui_indexer::models::tx_indices::StoredTxSenders\">StoredTxSenders</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredHistoryObject.html\" title=\"struct sui_indexer::models::objects::StoredHistoryObject\">StoredHistoryObject</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/tx_senders/struct.table.html\" title=\"struct sui_indexer::schema::tx_senders::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_senders/struct.table.html\" title=\"struct sui_indexer::schema::tx_senders::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredDeletedObject.html\" title=\"struct sui_indexer::models::objects::StoredDeletedObject\">StoredDeletedObject</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/tx_calls/struct.table.html\" title=\"struct sui_indexer::schema::tx_calls::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_calls/struct.table.html\" title=\"struct sui_indexer::schema::tx_calls::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/epochs/struct.table.html\" title=\"struct sui_indexer::schema::epochs::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/epoch/struct.StoredEpochInfo.html\" title=\"struct sui_indexer::models::epoch::StoredEpochInfo\">StoredEpochInfo</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredObject.html\" title=\"struct sui_indexer::models::objects::StoredObject\">StoredObject</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/events/struct.StoredEvent.html\" title=\"struct sui_indexer::models::events::StoredEvent\">StoredEvent</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/packages/struct.StoredPackage.html\" title=\"struct sui_indexer::models::packages::StoredPackage\">StoredPackage</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/display/struct.table.html\" title=\"struct sui_indexer::schema::display::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/display/struct.StoredDisplay.html\" title=\"struct sui_indexer::models::display::StoredDisplay\">StoredDisplay</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/objects_history_partition_0/struct.table.html\" title=\"struct sui_indexer::schema::objects_history_partition_0::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/objects_history_partition_0/struct.table.html\" title=\"struct sui_indexer::schema::objects_history_partition_0::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/objects_snapshot/struct.table.html\" title=\"struct sui_indexer::schema::objects_snapshot::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_snapshot/struct.table.html\" title=\"struct sui_indexer::schema::objects_snapshot::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/tx_changed_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_changed_objects::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_changed_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_changed_objects::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/objects_snapshot/struct.table.html\" title=\"struct sui_indexer::schema::objects_snapshot::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/objects_snapshot/struct.table.html\" title=\"struct sui_indexer::schema::objects_snapshot::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/display/struct.table.html\" title=\"struct sui_indexer::schema::display::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/display/struct.table.html\" title=\"struct sui_indexer::schema::display::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/display/struct.table.html\" title=\"struct sui_indexer::schema::display::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/display/struct.StoredDisplay.html\" title=\"struct sui_indexer::models::display::StoredDisplay\">StoredDisplay</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredHistoryObject.html\" title=\"struct sui_indexer::models::objects::StoredHistoryObject\">StoredHistoryObject</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/checkpoints/struct.StoredCheckpoint.html\" title=\"struct sui_indexer::models::checkpoints::StoredCheckpoint\">StoredCheckpoint</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/objects_history_partition_0/struct.table.html\" title=\"struct sui_indexer::schema::objects_history_partition_0::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history_partition_0/struct.table.html\" title=\"struct sui_indexer::schema::objects_history_partition_0::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_calls/struct.table.html\" title=\"struct sui_indexer::schema::tx_calls::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.StoredTxCalls.html\" title=\"struct sui_indexer::models::tx_indices::StoredTxCalls\">StoredTxCalls</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/events/struct.StoredEvent.html\" title=\"struct sui_indexer::models::events::StoredEvent\">StoredEvent</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/tx_changed_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_changed_objects::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/tx_changed_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_changed_objects::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/tx_senders/struct.table.html\" title=\"struct sui_indexer::schema::tx_senders::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/tx_senders/struct.table.html\" title=\"struct sui_indexer::schema::tx_senders::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/tx_input_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_input_objects::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/tx_input_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_input_objects::table\">table</a>: Insertable&lt;T&gt;,</div>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredObject.html\" title=\"struct sui_indexer::models::objects::StoredObject\">StoredObject</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_calls/struct.table.html\" title=\"struct sui_indexer::schema::tx_calls::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.StoredTxCalls.html\" title=\"struct sui_indexer::models::tx_indices::StoredTxCalls\">StoredTxCalls</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/tx_changed_objects/struct.table.html\" title=\"struct sui_indexer::schema::tx_changed_objects::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/tx_indices/struct.StoredTxChangedObject.html\" title=\"struct sui_indexer::models::tx_indices::StoredTxChangedObject\">StoredTxChangedObject</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/objects/struct.StoredDeletedHistoryObject.html\" title=\"struct sui_indexer::models::objects::StoredDeletedHistoryObject\">StoredDeletedHistoryObject</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/transactions_partition_0/struct.table.html\" title=\"struct sui_indexer::schema::transactions_partition_0::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions_partition_0/struct.table.html\" title=\"struct sui_indexer::schema::transactions_partition_0::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>: Insertable&lt;T&gt;,</div>"]],
"suins_indexer":[["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"suins_indexer/schema/domains/struct.table.html\" title=\"struct suins_indexer::schema::domains::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"suins_indexer/models/struct.VerifiedDomain.html\" title=\"struct suins_indexer::models::VerifiedDomain\">VerifiedDomain</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"suins_indexer/schema/domains/struct.table.html\" title=\"struct suins_indexer::schema::domains::table\">table</a>&gt; for <a class=\"struct\" href=\"suins_indexer/models/struct.VerifiedDomain.html\" title=\"struct suins_indexer::models::VerifiedDomain\">VerifiedDomain</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"suins_indexer/schema/domains/struct.table.html\" title=\"struct suins_indexer::schema::domains::table\">table</a><div class=\"where\">where\n    &lt;<a class=\"struct\" href=\"suins_indexer/schema/domains/struct.table.html\" title=\"struct suins_indexer::schema::domains::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</div>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"suins_indexer/schema/domains/struct.table.html\" title=\"struct suins_indexer::schema::domains::table\">table</a><div class=\"where\">where\n    <a class=\"struct\" href=\"suins_indexer/schema/domains/struct.table.html\" title=\"struct suins_indexer::schema::domains::table\">table</a>: Insertable&lt;T&gt;,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()