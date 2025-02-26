// import {
//     connect,
//     Contract,
//     keyStores,
//     WalletConnection,
//     Account,
//     utils,
// } from "near-api-js";
// import getConfig from "../config/config";

// const nearConfig = getConfig(process.env.NODE_ENV || "development");

// // Initialize contract & set global variables
// export async function initContract() {
//     // Initialize connection to the NEAR testnet
//     const near = await connect(
//         Object.assign(
//             { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
//             nearConfig
//         )
//     );

//     window.near = near;
//     // Initializing Wallet based Account. It can work with NEAR testnet wallet that
//     // is hosted at https://wallet.testnet.near.org
//     window.walletConnection = new WalletConnection(near);

//     // Getting the Account ID. If still unauthorized, it's just empty string
//     window.accountId = window.walletConnection.getAccountId();

//     // Making Config Info Public
//     window.configInfo = nearConfig;

//     //making utils public
//     window.utils = utils;

//     // Creating new account object
//     window.account = new Account(near, window.accountId);
//     // Initializing our contract APIs by contract name and configuration
//     window.contract = await new Contract(
//         window.walletConnection.account(),
//         nearConfig.contractName,
//         {
//             // View methods are read only. They don't modify the state, but usually return some value.
//             viewMethods: ["check_token"],
//             // Change methods can modify the state. But you don't receive the returned value when called.
//             changeMethods: ["nft_mint"],
//         }
//     );
// }

// export function logout() {
//     window.walletConnection.signOut();
//     // reload page
//     window.location.replace(window.location.origin + window.location.pathname);
// }

// export async function handleMint() {
//     await window.contract.nft_mint(
//         {
//             token_id: "ninja",
//             metadata: {
//                 media: "https://www.giantbomb.com/a/bundles/phoenixsite/images/core/loose/profile-gb.png"
//             },
//             receiver_id: window.accountId
//         },
//         "300000000000000",
//         "1000000000000000000000000"
//     );
// }

// export function login() {
//     // Allow the current app to make calls to the specified contract on the
//     // user's behalf.
//     // This works by creating a new access key for the user's account and storing
//     // the private key in localStorage.
//     window.walletConnection.requestSignIn(nearConfig.contractName);
// }
