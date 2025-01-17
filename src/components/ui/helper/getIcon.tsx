import {
  AccessibilityIcon,
  AirVentIcon,
  ArrowUpDownIcon,
  BedDoubleIcon,
  CircleParkingIcon,
  DumbbellIcon,
  HandPlatterIcon,
  MartiniIcon,
  ToiletIcon,
  TvIcon,
  UtensilsCrossedIcon,
  WifiIcon,
} from "lucide-react";
import { FaSwimmer, FaSpa } from "react-icons/fa";

export const getIconFacility = (facility: string) => {
  switch (facility) {
    case "Gym":
      return <DumbbellIcon className="h-8 w-8 stroke-primary" stroke="none" />;
    case "AC":
      return <AirVentIcon className="h-8 w-8 stroke-primary" stroke="none" />;
    case "TV":
      return <TvIcon className="h-8 w-8 stroke-primary" stroke="none" />;
    case "Kolam Renang":
      return <FaSwimmer className="h-8 w-8 stroke-primary" fill="#1B8386" />;
    case "Restaurant":
      return <UtensilsCrossedIcon className="h-8 w-8 stroke-primary" />;
    case "Kamar Mandi Dalam":
      return <ToiletIcon className="h-8 w-8 stroke-primary" />;
    case "Spa":
      return <FaSpa className="h-8 w-8 stroke-primary" fill="#1B8386" />;
    case "Room Services":
      return <HandPlatterIcon className="h-8 w-8 stroke-primary" />;
    case "WiFi":
      return <WifiIcon className="h-8 w-8 stroke-primary" />;
    case "Lift":
      return <ArrowUpDownIcon className="h-8 w-8 stroke-primary" />;
    case "Kamar Keluarga":
      return <BedDoubleIcon className="h-8 w-8 stroke-primary" />;
    case "Parkir":
      return <CircleParkingIcon className="h-8 w-8 stroke-primary" />;
    case "Bar":
      return <MartiniIcon className="h-8 w-8 stroke-primary" />;
    case "Ramah Disabilitas":
      return <AccessibilityIcon className="h-8 w-8 stroke-primary" />;
    default:
      return null;
  }
};
