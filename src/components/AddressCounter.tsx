import { Button } from "@/components/ui/button";

const counts = [4, 40, 100, 500, 1000];

export const AddressCounter = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold">Buy Address Count</label>
      <div className="flex flex-wrap gap-2">
        {counts.map((count) => (
          <Button
            key={count}
            variant={count === 4 ? "default" : "secondary"}
            className={count === 4 ? "bg-primary hover:bg-primary/90" : ""}
          >
            {count}
          </Button>
        ))}
      </div>
    </div>
  );
};