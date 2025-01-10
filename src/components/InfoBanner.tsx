import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InfoBanner = () => {
  return (
    <div className="info-banner">
      <span className="text-amber-500">ⓘ</span>
      <p className="flex-1">
        The cost for each new address buy is primarily the Jito fee. Please adjust in real-time based on network congestion. 
        Do not refresh after the feature is enabled, as this will interrupt the service. 
        If you have any questions during the service, please contact{" "}
        <a href="https://t.me/SlerTools" className="text-primary hover:underline">
          https://t.me/SlerTools
        </a>
      </p>
      <Button variant="ghost" size="icon" className="text-amber-500 hover:text-amber-600">
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};