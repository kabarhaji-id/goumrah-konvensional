import { Airlines } from "./airlines";

interface Embarkations {
  id: string;
  slug: string;
  name: string;
  latitude: string;
  longitude: string;
  airlines: Airlines[];
}

export type { Embarkations };
