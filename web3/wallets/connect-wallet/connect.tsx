"use client";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useEffect, useState } from "react";


export default function Home() {

  const [endpoint, setEndpoint] = useState<string | null>(null);
  useEffect(() => {
    // This will only run on the client side after the component mounts
    setEndpoint("https://solana-devnet.g.alchemy.com/v2/PIc1wmnH_QhOEwH3vtddMUwcYluAEHMU");
  }, []);

  if (!endpoint) {
    return <p>Loading...</p>;
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
        <div className="flex justify-center">
              <WalletMultiButton />
              <WalletDisconnectButton />
        
        </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}