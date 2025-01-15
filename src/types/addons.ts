import { CityTours } from "./city-tour";

interface Addons {
    id: string;
    category: AddOnsCategory;
    name: string;
    price: number;
    cityTour?: CityTours
}

interface AddOnsCategory {
    id: string;
    name: string;
}

export type { Addons }