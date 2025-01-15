import { Images } from "./images";

interface Buses {
  id: string;
  name: string;
  seat: number;
  class: string;
  departure: string;
  arrival: string;
  images: string[];
}

export type { Buses };
