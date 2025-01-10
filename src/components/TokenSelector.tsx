import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TokenSelectorProps {
  onSelect: (token: string) => void;
}

export const TokenSelector = ({ onSelect }: TokenSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold">Select Token</label>
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Please select a token or enter the token address" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="So11111111111111111111111111111111111111112">Solana (SOL)</SelectItem>
          <SelectItem value="EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v">USDC</SelectItem>
          <SelectItem value="4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R">Raydium (RAY)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};