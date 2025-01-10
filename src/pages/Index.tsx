import { TokenSelector } from "@/components/TokenSelector";
import { KeyInfo } from "@/components/KeyInfo";
import { DexSelector } from "@/components/DexSelector";
import { AddressCounter } from "@/components/AddressCounter";
import { BuyAmount } from "@/components/BuyAmount";
import { MevTip } from "@/components/MevTip";
import { InfoBanner } from "@/components/InfoBanner";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <TokenSelector />
          <KeyInfo />
          <DexSelector />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AddressCounter />
            <BuyAmount />
          </div>
          <MevTip />
          <InfoBanner />
          <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;