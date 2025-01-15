import { Images } from "./images";

interface Hotels {
  id: string;
  slug: string;
  location: string;
  name: string;
  rating: number;
  foodType: string;
  foodAmount: number;
  foodMenu: string;
  map: string;
  address: string;
  distance: number;
  review: string;
  description: string;
  images: string[];
  facilities: HotelFacilities[];
  checkIn: string;
  checkOut: string;
}

interface HotelFacilities {
  id: string;
  name: string;
  icon: string;
}

export type { Hotels, HotelFacilities };
