import { Addons } from "./addons";
import { Buses } from "./buses";
import { CityTours } from "./city-tour";
import { Embarkations } from "./embarkations";
import { Guides } from "./guides";
import { Hotels } from "./hotels";
import { Itineraries } from "./itineraries";
import { PackageDetailPricings } from "./package-detail-pricings";
import { PackageCategory, PackageStatus, PackageType } from "./packages";
import { Promos } from "./promos";
import { Reviews } from "./reviews";

interface PackageDetails {
  id: string;
  status: PackageStatus;
  reviews: Reviews[];
  rating: number;
  thumbnail: string;
  // images: string;
  name: string;
  // description: string;
  category: PackageCategory;
  type: PackageType;
  // isRecommended: boolean;
  // cityTours: CityTours[];
  // addons: Addons[];
  detail: Details;
  // details: Details[];
  otherDetails: OtherDetails[];
}

interface Details {
  id: string;
  departureDate: string;
  guides: Guides[];
  hotel: DetailHotel;
  bus: Buses;
  promos: Promos[];
  itineraries: Itineraries[];
  pricings: PackageDetailPricings[];
  quotaRemaining: number;
  pricing: PackageDetailPricings;
  otherPricings: OtherPricings[];
}

interface DetailHotel {
  wisata: Hotels[];
  makkah: Hotels;
  madinah: Hotels;
}

interface OtherDetails {
  id: string;
  departureDate: string;
  quotaRemaining: number;
  pricings: OtherPricings[];
}

interface OtherPricings {
  id: string;
  name?: string;
  embarkation: Embarkations;
  route: string;
}

export type { PackageDetails, Details, DetailHotel, OtherDetails };
