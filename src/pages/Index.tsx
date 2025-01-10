import { useState } from "react";
import { TokenSelector } from "@/components/TokenSelector";
import { KeyInfo } from "@/components/KeyInfo";
import { DexSelector } from "@/components/DexSelector";
import { AddressCounter } from "@/components/AddressCounter";
import { BuyAmount } from "@/components/BuyAmount";
import { MevTip } from "@/components/MevTip";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { initializeConnection, createKeypairFromPrivateKey, executeSwap } from "@/utils/raydium";
import { Connection } from "@solana/web3.js";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [connection, setConnection] = useState<Connection | null>(null);
  const [selectedToken, setSelectedToken] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [buyAmount, setBuyAmount] = useState(0);

  const handleStart = async () => {
    if (!selectedToken || !privateKey || !buyAmount) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const conn = connection || initializeConnection();
      if (!connection) setConnection(conn);

      const keypair = createKeypairFromPrivateKey(privateKey);
      const result = await executeSwap(conn, keypair, selectedToken, buyAmount);

      toast({
        title: "Success",
        description: `Transaction executed: ${result.txId}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <TokenSelector onSelect={(token) => setSelectedToken(token)} />
          <KeyInfo onKeyChange={(key) => setPrivateKey(key)} />
          <DexSelector />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AddressCounter />
            <BuyAmount onAmountChange={(amount) => setBuyAmount(amount)} />
          </div>
          <MevTip />
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
            onClick={handleStart}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Start"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;