export type PackageCategory = "Silver" | "Gold" | "Platinum" | "Luxury";
export type PackageType = "Plus" | "Reguler";

export interface Flight {
  wisata_flight: FlightDetail[];
  departure_flight: FlightDetail;
  return_flight: FlightDetail;
}

export interface FlightDetail {
  flight_number?: string;
  duration?: number;
  airport_name_departure: string;
  airport_terminal_departure?: string;
  airport_code_departure: string;
  airport_city_departure: string;
  airport_name_arrival: string;
  airport_terminal_arrival?: string;
  airport_code_arrival: string;
  airport_city_arrival: string;
  departure_datetime?: string;
  class: string;
  flight_type: "Direct" | "Transit";
  airline: string;
  aircraft_type?: string;
  seat_layout?: string;
  baggage_allowance: number;
  cabin_baggage: number;
  airline_logo: string;
  skytrax?: "Low Cost" | "Full Service";
  rating?: string;
  transit?: FlightDetail;
  transit_datetime?: string;
}

export interface Hotel {
  wisata: HotelDetail[];
  makkah: HotelDetail;
  madinah: HotelDetail;
}

export interface HotelDetail {
  id: string;
  city: string;
  hotel_name: string;
  star_rating: number;
  duration: number;
  images: Images[];
  google_maps_link_noembed: string;
  google_maps_link: string;
  google_review_link: string;
  description: string;
  facilities: string[];
  check_in_time?: string;
  check_out_time?: string;
  address: string;
  distance_to_masjid: number;
  food_type: string;
  food_amount: number;
  food_menu?: string;
}

export interface Images {
  id: string;
  src: string;
  category?: string;
}

export interface BusDetail {
  id: string;
  provider: string;
  bus_type: string;
  seat_amount: number;
  images: Images[];
}

export interface DepartureDateDetail {
  date: string;
  status: "active" | "coming-soon" | "musim-haji" | "expired" | "closing-umrah";
}

export interface DepartureCityDetail {
  city: string;
  route: string;
}

export interface PromoDetail {
  imageUrl: string;
  link: string;
}

export interface AddOnsDetail {
  title: string;
  category: string;
  price: number;
  places: string[];
  imageUrl: string;
}

export interface Itinerary {
  id: string;
  nth: number;
  city: string;
  days: ItineraryDays[];
  images: Images[];
}

export interface ItineraryDays {
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
  hotel_name: string;
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

export interface UmrahPackage {
  id: string;
  type: PackageType;
  category: PackageCategory;
  tagline: string;
  thumbnail: string;
  season: string;
  isFastTrain: boolean;
  city_departure: DepartureCityDetail[];
  duration: string;
  package: string;
  down_payment: number;
  order_url: string;
  flight_details: Flight;
  hotel_details: Hotel;
  bus_details: BusDetail;
  departure_date: DepartureDateDetail[];
  doublePrice: number;
  triplePrice: number;
  quadPrice: number;
  infantPrice?: number;
  doubleFinalPrice?: number;
  tripleFinalPrice?: number;
  quadFinalPrice?: number;
  infantFinalPrice?: number;
  promos: PromoDetail[];
  addons: AddOnsDetail[];
  itineraries: Itinerary[];
}
