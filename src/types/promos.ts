import { Images } from "./images";

interface Promos {
  id: string;
  slug: string;
  banner: string;
  name: string;
  link: string;
  expiredAt: string;
  status: string;
  discount: number;
  terms: string[];
}

export type { Promos };
