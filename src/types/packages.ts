// import { Images } from "./images";

type PackageCategory = "Silver" | "Gold" | "Platinum" | "Luxury";
type PackageStatus = "Draft" | "Active" | "Expired";
type PackageType = "Plus" | "Reguler";

interface Packages {
  id: string;
  slug: string;
  thumbnail: string;
  category: PackageCategory;
  type: PackageType;
  duration: string;
  name: string;
  departureDates: string;
  airlineName: string;
  hotelRating: string;
  price: number;
  finalPrice: number;
  otherDepartureCount: number;
}

// interface PackageThumbnail {
//   id: string;
//   alt: string;
//   category: string;
// }

export type { Packages, PackageCategory, PackageStatus, PackageType };
