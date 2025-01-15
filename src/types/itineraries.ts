import { Hotels } from "./hotels";

interface Itineraries {
  id: string;
  nth: number;
  city: string;
  days: ItineraryDays[];
  images: string[];
}

interface ItineraryDays {
  id: string;
  nth: number;
  title: string;
  widgets: (
    | ItineraryActivityWidgets
    | ItineraryHotelWidgets
    | ItineraryInformationWidgets
    | ItineraryTransportWidgets
    | ItineraryRecommendedWidgets
  )[];
  description: string;
}

interface ItineraryActivityWidgets {
  id: string;
  type: "Activity";
  title: string;
  description: string;
  images: string[];
}

interface ItineraryHotelWidgets {
  id: string;
  type: "Hotel";
  hotel: Hotels;
}

interface ItineraryInformationWidgets {
  id: string;
  type: "Information";
  description: string;
}

interface ItineraryTransportWidgets {
  id: string;
  type: "Transport";
  transportWith: string;
  from: string;
  to: string;
}

interface ItineraryRecommendedWidgets {
  id: string;
  type: "Recommended";
  description: string;
  images: string[];
}

export type { Itineraries };
