import { Input } from "@/components/ui/input";

export const KeyInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold">Private Key</label>
        <Input placeholder="Enter Private Key" type="password" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold">Address</label>
        <Input placeholder="-" readOnly />
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