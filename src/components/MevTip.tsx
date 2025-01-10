import { Button } from "@/components/ui/button";

const tips = [
  { label: "Default", value: "0.00003" },
  { label: "High", value: "0.00008" },
  { label: "Ultra-High", value: "0.00015" },
  { label: "Custom", value: "0.001" },
];

export const MevTip = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold flex items-center gap-2">
        Jito MEV Tip
        <span className="text-xs text-gray-500">ⓘ</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {tips.map((tip) => (
          <Button
            key={tip.label}
            variant={tip.label === "Ultra-High" ? "default" : "secondary"}
            className={tip.label === "Ultra-High" ? "bg-primary hover:bg-primary/90" : ""}
          >
            {tip.label} {tip.value}
          </Button>
        ))}
        <span className="flex items-center text-sm text-gray-500">SOL</span>
      </div>
    </div>
  );
};