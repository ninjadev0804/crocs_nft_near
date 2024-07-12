import * as nearAPI from "near-api-js";
import React, { useCallback, useEffect, useState } from "react";

const { connect, WalletConnection } = nearAPI;

export const NFT_CONTRACT_ID = "dev-1656636043758-76224805007943"
export const MAX_GAS = "300000000000000";

export const WalletContext = React.createContext({
  near: undefined,
  wallet: undefined,
  signIn: () => { },
  signOut: () => { },
  getNftMetadata: () => { },
  getCollectionList: () => { },
  getCollectionMetadata: () => { },
  getMainCollectionList: () => { },
})

// connect to NEAR
const WalletProvider = (props) => {
  const [near, setNear] = useState()
  const [wallet, setWallet] = useState()
  const { keyStore } = props;

  const signIn = () => {
    if (wallet)
      wallet.requestSignIn(NFT_CONTRACT_ID);
  };

  const signOut = () => {
    if (!wallet) return
    wallet.signOut()
    // location.replace("/")
  };

  const connectToNear = useCallback(async () => {
    try {
      if (keyStore) {
        // const config = {
        //   networkId: "mainnet",
        //   keyStore, // optional if not signing transactions
        //   nodeUrl: "https://rpc.mainnet.near.org",
        //   walletUrl: "https://wallet.mainnet.near.org",
        //   helperUrl: "https://helper.mainnet.near.org",
        //   // explorerUrl: "https://explorer.mainnet.near.org",
        //   headers: {}
        // };
        const config = {
            networkId: "testnet",
            keyStore, // optional if not signing transactions
            nodeUrl: "https://rpc.testnet.near.org",
            walletUrl: "https://wallet.testnet.near.org",
            helperUrl: "https://helper.testnet.near.org",
            explorerUrl: "https://explorer.testnet.near.org",
            headers: {}
          };
        const near = await connect(config);
        const wallet = new WalletConnection(near, null);
        setNear(near);
        setWallet(wallet);
      }
    } catch (error) {
      console.log(error, "error")
    }
  }, [keyStore])

  useEffect(() => {
    connectToNear()
  }, [keyStore, connectToNear])

  return (
    <WalletContext.Provider
      value={{ near, wallet, signIn, signOut }}
    >
      {props.children}
    </WalletContext.Provider>
  )
}

export default WalletProvider
