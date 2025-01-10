import { Button } from "@/components/ui/button";

export const DexSelector = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold">DEX Selection</label>
      <div className="flex flex-wrap gap-2">
        <Button variant="default" className="bg-primary hover:bg-primary/90">
          🌟 Raydium
        </Button>
        <Button variant="secondary" className="gap-2">
          🎯 Pump
        </Button>
        <Button variant="secondary" className="gap-2">
          🌙 MoonShot
        </Button>
        <Button variant="link" className="text-primary">
          Find Liquidity Pool
        </Button>
      </div>
    </div>
  );
};