#!/bin/bash
set -e

# RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release
# mkdir -p ../out
# cp target/wasm32-unknown-unknown/release/*.wasm ../out/main.wasm

# pub=.testnet
# pc_name=

. variable.sh

tail /home/$pc_name/.near-credentials/testnet/$pub.json