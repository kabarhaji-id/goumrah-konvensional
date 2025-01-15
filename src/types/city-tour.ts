import { Images } from "./images";

interface CityTours {
  id: string;
  name: string;
  location: string;
  images: Images[];
  tourDate: string;
  description: string;
}

export type { CityTours };
