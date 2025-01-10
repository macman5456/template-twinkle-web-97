import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const TokenSelector = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold">Select Token</label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Please select a token or enter the token address" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sol">Solana (SOL)</SelectItem>
          <SelectItem value="usdc">USDC</SelectItem>
          <SelectItem value="ray">Raydium (RAY)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};