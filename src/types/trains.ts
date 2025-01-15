import { Images } from "./images";

interface Trains {
    id: string;
    name: string;
    seat: number;
    class: string;
    departure: string;
    arrival: string;
    images: Images[];
}

export type { Trains }