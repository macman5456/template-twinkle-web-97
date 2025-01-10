import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { createKeypairFromPrivateKey, getTokenBalance, initializeConnection } from "@/utils/raydium";
import { Connection } from "@solana/web3.js";

interface KeyInfoProps {
  onKeyChange: (key: string) => void;
}

export const KeyInfo = ({ onKeyChange }: KeyInfoProps) => {
  const [privateKey, setPrivateKey] = useState("");
  const [address, setAddress] = useState("-");
  const [solBalance, setSolBalance] = useState("-");
  const [tokenBalance, setTokenBalance] = useState("-");
  const [connection, setConnection] = useState<Connection | null>(null);

  useEffect(() => {
    const conn = initializeConnection();
    setConnection(conn);
  }, []);

  useEffect(() => {
    const updateBalances = async () => {
      if (privateKey && connection) {
        try {
          const keypair = createKeypairFromPrivateKey(privateKey);
          setAddress(keypair.publicKey.toString());
          onKeyChange(privateKey);

          // Get SOL balance
          const balance = await connection.getBalance(keypair.publicKey);
          setSolBalance((balance / 1e9).toFixed(4)); // Convert lamports to SOL

          // Get token balance (using USDC as example)
          const tokenBal = await getTokenBalance(
            connection,
            keypair.publicKey,
            "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" // USDC mint address
          );
          setTokenBalance(tokenBal.toString());
        } catch (error) {
          console.error("Error updating balances:", error);
          setAddress("-");
          setSolBalance("-");
          setTokenBalance("-");
        }
      }
    };

    updateBalances();
    // Set up interval to update balances
    const interval = setInterval(updateBalances, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [privateKey, connection, onKeyChange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold">Private Key</label>
        <Input 
          placeholder="Enter Private Key" 
          type="password" 
          onChange={(e) => setPrivateKey(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold">Address</label>
        <Input placeholder="-" value={address} readOnly />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold flex items-center gap-2">
            SOL Balance
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </label>
          <Input placeholder="-" value={solBalance} readOnly />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold flex items-center gap-2">
            TOKEN Balance
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </label>
          <Input placeholder="-" value={tokenBalance} readOnly />
        </div>
      </div>
    </div>
  );
};