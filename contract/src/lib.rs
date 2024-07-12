use std::collections::HashMap;
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::{LazyOption, LookupMap, UnorderedMap, UnorderedSet, Vector};
use near_sdk::json_types::{Base64VecU8, U128};
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{
    env, near_bindgen, AccountId, Balance, CryptoHash, PanicOnDefault, Promise, PromiseOrValue,
};
use std::convert::TryInto;

use crate::internal::*;
pub use crate::metadata::*;
pub use crate::mint::*;
pub use crate::nft_core::*;
pub use crate::approval::*;
pub use crate::royalty::*;
pub use crate::events::*;

mod internal;
mod approval; 
mod enumeration; 
mod metadata; 
mod mint; 
mod nft_core; 
mod royalty; 
mod events;

/// This spec can be treated like a version of the standard.
pub const NFT_METADATA_SPEC: &str = "1.0.0";
/// This is the name of the NFT standard we're using
pub const NFT_STANDARD_NAME: &str = "nep171";

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    //contract owner
    pub owner_id: AccountId,

    //keeps track of all the token IDs for a given account
    pub tokens_per_owner: LookupMap<AccountId, UnorderedSet<TokenId>>,

    //keeps track of the token struct for a given token ID
    pub tokens_by_id: LookupMap<TokenId, Token>,

    //keeps track of the token metadata for a given token ID
    pub token_metadata_by_id: UnorderedMap<TokenId, TokenMetadata>,

    //keeps track of the metadata for the contract
    pub metadata: LazyOption<NFTContractMetadata>,
    pub contributor_0: Vector<AccountId>,
    pub contributor_4: Vector<AccountId>,
    pub contributor_7: Vector<AccountId>,
}

/// Helper structure for keys of the persistent collections.
#[derive(BorshSerialize)]
pub enum StorageKey {
    TokensPerOwner,
    TokenPerOwnerInner { account_id_hash: CryptoHash },
    TokensById,
    TokenMetadataById,
    NFTContractMetadata,
    TokensPerType,
    TokensPerTypeInner { token_type_hash: CryptoHash },
    TokenTypesLocked,
    Contributor0,
    Contributor4,
    Contributor7,
}

#[near_bindgen]
impl Contract {
    /*
        initialization function (can only be called once).
        this initializes the contract with default metadata so the
        user doesn't have to manually type metadata.
    */

    /*
        initialization function (can only be called once).
        this initializes the contract with metadata that was passed in and
        the owner_id. 
    */
    #[init]
    pub fn new(owner_id: AccountId) -> Self {
        //create a variable of type Self with all the fields initialized. 
        let this = Self {
            //Storage keys are simply the prefixes used for the collections. This helps avoid data collision
            tokens_per_owner: LookupMap::new(StorageKey::TokensPerOwner.try_to_vec().unwrap()),
            tokens_by_id: LookupMap::new(StorageKey::TokensById.try_to_vec().unwrap()),
            token_metadata_by_id: UnorderedMap::new(
                StorageKey::TokenMetadataById.try_to_vec().unwrap(),
            ),
            //set the owner_id field equal to the passed in owner_id. 
            owner_id,
            metadata: LazyOption::new(
                StorageKey::NFTContractMetadata.try_to_vec().unwrap(),
                Some(&&NFTContractMetadata {
                    spec: "nft-1.0.0".to_string(),
                    name: "TheCrocs".to_string(),
                    symbol: "CROC".to_string(),
                    icon: Some("https://gateway.pinata.cloud/ipfs/QmY9Gj78YobJVgzRpgU5kdVrovGhtk8onSRsYYFBb1hnxz".to_owned()),
                    base_uri: None,
                    reference: None,
                    reference_hash: None,
                })),
            contributor_0: Vector::new(StorageKey::Contributor0.try_to_vec().unwrap()),
            contributor_4: Vector::new(StorageKey::Contributor4.try_to_vec().unwrap()),
            contributor_7: Vector::new(StorageKey::Contributor7.try_to_vec().unwrap()),
        };

        //return the Contract object
        this
    }

    pub fn get_contributor_0(&self) -> Vec<AccountId> {
        self.contributor_0.to_vec()
    }

    pub fn get_contributor_4(&self) -> Vec<AccountId> {
        self.contributor_4.to_vec()
    }

    pub fn get_contributor_7(&self) -> Vec<AccountId> {
        self.contributor_7.to_vec()
    }

    #[payable]
    pub fn init_whitelist_1(
        &mut self,
    ) {
        assert_eq!(
            &env::predecessor_account_id(),
            &self.owner_id,
            "Owner's method"
        );
        self.contributor_0.push(&env::predecessor_account_id().to_string().try_into().unwrap());
        self.contributor_0.push(&"aidgreen.testnet".to_string().try_into().unwrap());
    }

    #[payable]
    pub fn init_whitelist_2(
        &mut self,
    ) {
        assert_eq!(
            &env::predecessor_account_id(),
            &self.owner_id,
            "Owner's method"
        );
        self.contributor_4.push(&"aidgreen.testnet".to_string().try_into().unwrap());
        self.contributor_4.push(&"aid2076aid.testnet".to_string().try_into().unwrap());
    }
    pub fn init_whitelist_3(
        &mut self,
    ) {
        assert_eq!(
            &env::predecessor_account_id(),
            &self.owner_id,
            "Owner's method"
        );
        self.contributor_7.push(&"aid2076aid.testnet".to_string().try_into().unwrap());
    }
}