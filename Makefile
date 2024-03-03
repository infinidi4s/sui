BUILD_DIR := "/home/cdmitri/src/github.com/infinidi4s"
#INSTALL_DIR := "/home/cdmitri/sui-bin/dist"
INSTALL_DIR := "/home/cdmitri/.cargo/bin"
SUI_SRC_DIR := "/home/cdmitri/src/github.com/infinidi4s/sui"
PACKAGE_NAME := "examples"
DB_NAME := "sui_indexer"
DB_PORT := "5432"
DB_PASSWORD := "4Test123"
DB_HOST := "localhost"
DB_USER := "postgres"
DB_URL := "postgres://postgres:$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_NAME)"

# this will instlal stuff in INSTALL_DIR
#devshell.install.bins:
#	cargo install --locked --git https://github.com/MystenLabs/sui.git --branch devnet --features gas-profiler sui
#	cargo install --locked --git https://github.com/MystenLabs/sui.git --branch devnet sui-test-validator
#
# cargo install --locked --git https://github.com/MystenLabs/sui.git --branch devnet --features gas-profiler sui
# cargo install --locked --git https://github.com/MystenLabs/sui.git --branch devnet sui-test-validator
# diesel setup --database-url="postgres://postgres:4Test123@localhost:5432/sui_indexer"
# diesel database reset --database-url="postgres://postgres:4Test123@localhost:5432/sui_indexer"	
#cargo run --bin sui-indexer -- --db-url "postgres://postgres:4Test123@localhost:5432/sui_indexer" --rpc-client-url http://0.0.0.0:9000 --fullnode-sync-worker --reset-db
# RUST_BACKTRACE=1 make devshell.validator.start

all: devshell.test

devshell.validator.db.setup:
	diesel setup --database-url=$(DATABASE_URL)

devshell.validator.db.reset:
	diesel database reset --database-url=$(DATABASE_URL)

devshell.validator.db.psql:
	PGPASSWORD=$(DB_PASSWORD) psql -h $(DB_HOST) -p $(DB_PORT) -U $(DB_USER) -d $(DB_NAME)

#devshell.validator.start:
#	RUST_LOG="off,sui_node=info" $(INSTALL_DIR)/sui-test-validator --pg-password '4Test123' --with-indexer

devshell.validator.db.run.sql:
	cd $(SUI_SRC_DIR) && \
	for sql_file in sql/*.sql; do \
	echo "Executing $$sql_file..."; \
	PGPASSWORD=$(DB_PASSWORD) psql -h $(DB_HOST) -p $(DB_PORT) -U $(DB_USER) -d $(DB_NAME) -f $$sql_file; \
	done

devshell.validator.start:
	RUST_LOG="off,sui_node=info" $(INSTALL_DIR)/sui-test-validator

devshell.indexer.start:
	$(SUI_SRC_DIR)/target/debug/sui-indexer --db-url "postgres://postgres:4Test123@localhost:5432/sui_indexer" --rpc-client-url http://0.0.0.0:9000 --fullnode-sync-worker --reset-db

devshell.env.init: devshell.faucet.get devshell.gas.show





#devshell.validator.indexer:
#	cargo run --bin sui-indexer -- --db-url "postgres://postgres:4Test123@localhost:5432/sui_indexer" --rpc-client-url http://localhost:9000 --fullnode-sync-worker --reset-db

devshell.gas.get:
	curl -s --location --request POST 'http://127.0.0.1:9123/gas' \
		--header 'Content-Type: application/json' \
		--data-raw "{\"FixedAmountRequest\": \
				{\"recipient\": \"$$(sui client active-address)\"} \
			    }" | jq .
devshell.gas.show:
	sui client gas

devshell.show.addresses:
	sui client addresses

devshell.explorer.run:
	cd $(SUI_SRC_DIR); pnpm explorer dev

devshell.build:
	cd $(PACKAGE_NAME); sui move build

devshell.test:
	cd $(PACKAGE_NAME); sui move test

#devshell.my_first_package.publish:
#	sui client publish --gas-budget 100000000 my_first_package
#
#devshell.my_first_package.upgrade:
#	cd my_first_package; sui client upgrade --upgrade-capability 0xa28e013057c19ddef0d78de84cba40237be6c32f6cf0673ac3269bb5a0612566# --gas-budget 100000000


