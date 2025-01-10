import { Input } from "@/components/ui/input";

export const BuyAmount = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold">Buy Amount(SOL)</label>
      <div className="relative">
        <Input placeholder="0.00001" />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
          SOL
        </span>
      </div>
    </div>
  );
};