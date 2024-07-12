import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletContext, NFT_CONTRACT_ID, MAX_GAS } from '../contexts/wallet'
import { parseNearAmount } from 'near-api-js/lib/utils/format'
import {
   BodyContent,
   ContentWrap,
   Title,
   Text,
   BtnWrap,
   ConnectBtn,
   Footer,
   ItemWrap,
   TotalTitle,
   MintSupply,
   SupplyWrap
} from './style';

function Header() {

   const { wallet, signIn } = useContext(WalletContext)

   const [nftSupply, setNftSupply] = useState(0);
   const notify = () => toast("Mint ready!");

   const onWallet = async () => {
      signIn();
   }

   useEffect(() => {
      if (wallet && wallet.isSignedIn()) {
         notify();
      }
   }, [wallet])

   useEffect(() => {
      const intervalId = setInterval(() => {
         (async () => {
            if (wallet && wallet.isSignedIn()) {
               const total_supply = await wallet.account().viewFunction(NFT_CONTRACT_ID, "get_total_supply");
               setNftSupply(total_supply);
            }
         })();
      }, 2000)
      return () => clearInterval(intervalId);
   }, [wallet])
   
   const onMint = async () => {
      if (!wallet.isSignedIn()) {
         return;
      }
      const contributor_0 = await wallet.account().viewFunction(NFT_CONTRACT_ID, "get_contributor_0");
      const contributor_4 = await wallet.account().viewFunction(NFT_CONTRACT_ID, "get_contributor_4");
      const contributor_7 = await wallet.account().viewFunction(NFT_CONTRACT_ID, "get_contributor_7");

      let mint_price = "10";
      if (contributor_0.includes(wallet.getAccountId())) {
         mint_price = "0";
      }
      if (contributor_4.includes(wallet.getAccountId())) {
         mint_price = "10";
      }
      if (contributor_7.includes(wallet.getAccountId())) {
         mint_price = "10";
      }

      try {
         await wallet.account().functionCall(
            NFT_CONTRACT_ID,
            "nft_mint",
            {
            },
            MAX_GAS,
            parseNearAmount(mint_price)
         )
      } catch (err) {
         console.log("err => ", err);
      }
   }

   return (
      <>
         <BodyContent className='bodycontent' id="bodycontent">
            {/* <header className="home container" id="homepage">
            <div className="logo-container">
               <img className='logo-size' src="/images/landing/bag-logo.png" alt="" />
            </div>
         </header> */}
            <ContentWrap>
               <ItemWrap>
                  <Title>
                     The Crocs NFT
                  </Title>
                  <Text>
                     TheCrocs is a community driven initiative to help NFT and Vernacular Artists launch their Artwork.
                  </Text>
                  <Text>
                     Our vision at TheCrocs is to build a self-sustained community of NFT Enthusiast where we educate,
                     connect and inspire a group of Artists who need it the most, to bridge the gap between Artists and Blockchain Technology.
                  </Text>
               </ItemWrap>
               <ItemWrap>
                  <TotalTitle>
                     Total Crocs Minted:
                  </TotalTitle>
                  <SupplyWrap>
                     <MintSupply>
                        {nftSupply} / 2000
                     </MintSupply>
                  </SupplyWrap>
               </ItemWrap>
            </ContentWrap>
            <ToastContainer />
            <BtnWrap>

               {wallet && wallet.isSignedIn() ?
                  <ConnectBtn
                     onClick={onMint}
                  >
                     Mint NFT
                  </ConnectBtn>
                  :
                  <ConnectBtn
                     onClick={onWallet}
                  >
                     Connect Wallet
                  </ConnectBtn>}

            </BtnWrap>
         </BodyContent>
         <Footer>
            <p>
               &copy; 2022 THECROCS NFT. All Rights Reserved.
            </p>
         </Footer>
      </>
   )
}

export default Header;
