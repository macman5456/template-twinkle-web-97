import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { createKeypairFromPrivateKey } from "@/utils/raydium";

interface KeyInfoProps {
  onKeyChange: (key: string) => void;
}

export const KeyInfo = ({ onKeyChange }: KeyInfoProps) => {
  const [privateKey, setPrivateKey] = useState("");
  const [address, setAddress] = useState("-");

  useEffect(() => {
    if (privateKey) {
      try {
        const keypair = createKeypairFromPrivateKey(privateKey);
        setAddress(keypair.publicKey.toString());
        onKeyChange(privateKey);
      } catch (error) {
        setAddress("-");
      }
    }
  }, [privateKey, onKeyChange]);

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
          <Input placeholder="-" readOnly />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold flex items-center gap-2">
            TOKEN Balance
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </label>
          <Input placeholder="-" readOnly />
        </div>
      </div>
    </div>
  );
};