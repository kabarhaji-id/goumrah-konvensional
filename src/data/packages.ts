import { PackageCategory, PackageType, SimplePackage } from "@/types/packages";

export const dataPackages: SimplePackage[] = [
  {
    id: "1",
    slug: "umrah-hemat-fokus-ibadah",
    thumbnail: "/assets/image/packages-umrah/package-detail-1.png",
    category: "Silver" as PackageCategory,
    type: "Reguler" as PackageType,
    duration: "9",
    name: "Umrah Hemat, Fokus Ibadah",
    departureDates: "",
    airlineName: "Lion Air",
    hotelRating: "3",
    price: 26000000,
    finalPrice: 23000000,
    otherDepartureCount: 0,
  },
];
