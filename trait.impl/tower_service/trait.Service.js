(function() {var implementors = {
"anemo_benchmark":[["impl&lt;T&gt; Service&lt;Request&lt;Bytes&gt;&gt; for <a class=\"struct\" href=\"anemo_benchmark/struct.BenchmarkServer.html\" title=\"struct anemo_benchmark::BenchmarkServer\">BenchmarkServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"anemo_benchmark/trait.Benchmark.html\" title=\"trait anemo_benchmark::Benchmark\">Benchmark</a>,</div>"]],
"mysten_network":[["impl Service&lt;Request&lt;Bytes&gt;&gt; for <a class=\"struct\" href=\"mysten_network/anemo_ext/struct.WaitingPeer.html\" title=\"struct mysten_network::anemo_ext::WaitingPeer\">WaitingPeer</a>"],["impl&lt;S, M, RequestBody, ResponseBody&gt; Service&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;RequestBody&gt;&gt; for <a class=\"struct\" href=\"mysten_network/callback/struct.Callback.html\" title=\"struct mysten_network::callback::Callback\">Callback</a>&lt;S, M&gt;<div class=\"where\">where\n    S: Service&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;RequestBody&gt;, Response = <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;ResponseBody&gt;&gt;,\n    M: <a class=\"trait\" href=\"mysten_network/callback/trait.MakeCallbackHandler.html\" title=\"trait mysten_network::callback::MakeCallbackHandler\">MakeCallbackHandler</a>,</div>"]],
"narwhal_types":[["impl&lt;T, B&gt; Service&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"narwhal_types/struct.TransactionsServer.html\" title=\"struct narwhal_types::TransactionsServer\">TransactionsServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"narwhal_types/trait.Transactions.html\" title=\"trait narwhal_types::Transactions\">Transactions</a>,\n    B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div>"],["impl&lt;T&gt; Service&lt;Request&lt;Bytes&gt;&gt; for <a class=\"struct\" href=\"narwhal_types/struct.WorkerToWorkerServer.html\" title=\"struct narwhal_types::WorkerToWorkerServer\">WorkerToWorkerServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"narwhal_types/trait.WorkerToWorker.html\" title=\"trait narwhal_types::WorkerToWorker\">WorkerToWorker</a>,</div>"],["impl&lt;T&gt; Service&lt;Request&lt;Bytes&gt;&gt; for <a class=\"struct\" href=\"narwhal_types/struct.PrimaryToWorkerServer.html\" title=\"struct narwhal_types::PrimaryToWorkerServer\">PrimaryToWorkerServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"narwhal_types/trait.PrimaryToWorker.html\" title=\"trait narwhal_types::PrimaryToWorker\">PrimaryToWorker</a>,</div>"],["impl&lt;T&gt; Service&lt;Request&lt;Bytes&gt;&gt; for <a class=\"struct\" href=\"narwhal_types/struct.WorkerToPrimaryServer.html\" title=\"struct narwhal_types::WorkerToPrimaryServer\">WorkerToPrimaryServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"narwhal_types/trait.WorkerToPrimary.html\" title=\"trait narwhal_types::WorkerToPrimary\">WorkerToPrimary</a>,</div>"],["impl&lt;T&gt; Service&lt;Request&lt;Bytes&gt;&gt; for <a class=\"struct\" href=\"narwhal_types/struct.PrimaryToPrimaryServer.html\" title=\"struct narwhal_types::PrimaryToPrimaryServer\">PrimaryToPrimaryServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"narwhal_types/trait.PrimaryToPrimary.html\" title=\"trait narwhal_types::PrimaryToPrimary\">PrimaryToPrimary</a>,</div>"]],
"sui_faucet":[["impl&lt;Inner, Req, Body&gt; Service&lt;Req&gt; for <a class=\"struct\" href=\"sui_faucet/metrics_layer/struct.RequestMetricsService.html\" title=\"struct sui_faucet::metrics_layer::RequestMetricsService\">RequestMetricsService</a>&lt;Inner&gt;<div class=\"where\">where\n    Inner: Service&lt;Req, Response = <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;Body&gt;, Error = BoxError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    Inner::Future: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Req: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div>"]],
"sui_network":[["impl&lt;T, B&gt; Service&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"sui_network/api/struct.ValidatorServer.html\" title=\"struct sui_network::api::ValidatorServer\">ValidatorServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"sui_network/api/trait.Validator.html\" title=\"trait sui_network::api::Validator\">Validator</a>,\n    B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div>"],["impl&lt;T&gt; Service&lt;Request&lt;Bytes&gt;&gt; for <a class=\"struct\" href=\"sui_network/discovery/struct.DiscoveryServer.html\" title=\"struct sui_network::discovery::DiscoveryServer\">DiscoveryServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"sui_network/discovery/trait.Discovery.html\" title=\"trait sui_network::discovery::Discovery\">Discovery</a>,</div>"],["impl&lt;T&gt; Service&lt;Request&lt;Bytes&gt;&gt; for <a class=\"struct\" href=\"sui_network/state_sync/struct.StateSyncServer.html\" title=\"struct sui_network::state_sync::StateSyncServer\">StateSyncServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"sui_network/state_sync/trait.StateSync.html\" title=\"trait sui_network::state_sync::StateSync\">StateSync</a>,</div>"],["impl&lt;T&gt; Service&lt;Request&lt;Bytes&gt;&gt; for <a class=\"struct\" href=\"sui_network/randomness/struct.RandomnessServer.html\" title=\"struct sui_network::randomness::RandomnessServer\">RandomnessServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"sui_network/randomness/trait.Randomness.html\" title=\"trait sui_network::randomness::Randomness\">Randomness</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()