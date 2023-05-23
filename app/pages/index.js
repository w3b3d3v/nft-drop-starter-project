import React from "react"
import dynamic from "next/dynamic"
import { useWallet } from "@solana/wallet-adapter-react";
import CandyMachine from "../components/CandyMachine";

// Constants
const TWITTER_HANDLE = "web3dev_"
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`

const Home = () => {
  const WalletMultiButtonDynamic = dynamic(
    async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  )

  const wallet = useWallet()

  const renderNotConnectedContainer = () => (
    <div>
      <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />

      <div className="button-container">
        <WalletMultiButtonDynamic className="cta-button connect-wallet-button" />
      </div>
    </div>
  )


  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Máquina de Doces</p>
          <p className="sub-text">Máquina de doces para mintar NFTs</p>
          {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`construído pela @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  )
}

export default Home
