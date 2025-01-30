export type PackageCategory = "Silver" | "Gold" | "Platinum" | "Luxury";
export type PackageType = "Plus" | "Reguler";

export interface Flight {
  wisataFlight: FlightDetail[];
  departureFlight: FlightDetail;
  returnFlight: FlightDetail;
}

export interface FlightDetail {
  flightNumber?: string;
  duration?: number;
  airportNameDeparture: string;
  airportTerminalDeparture?: string;
  airportCodeDeparture: string;
  airportCityDeparture: string;
  airportNameArrival: string;
  airportTerminalArrival?: string;
  airportCodeArrival: string;
  airportCityArrival: string;
  departureDatetime?: string;
  departureArrivalTime?: string;
  class: string;
  flightType: "Direct" | "Transit";
  airline: string;
  aircraftType?: string;
  seatLayout?: string;
  baggageAllowance: number;
  cabinBaggage: number;
  airlineLogo: string;
  skytrax?: "Low Cost" | "Full Service";
  rating?: string;
  transit?: FlightDetail;
  transitDatetime?: string;
}

export interface Hotel {
  wisata: HotelDetail[];
  makkah: HotelDetail;
  madinah: HotelDetail;
}

export interface HotelDetail {
  id: string;
  city: string;
  hotelName: string;
  starRating: number;
  duration?: number;
  images: Images[];
  gmapUrlNoembed: string;
  gmapUrl: string;
  googleReviewUrl: string;
  description: string;
  facilities: string[];
  checkIn?: string;
  checkOut?: string;
  address: string;
  distanceToLandmark?: number;
  landmark?: string;
  isShuttleBus?: boolean;
  foodType: string;
  foodAmount?: number;
  foodMenu?: string;
}

export interface Images {
  id: string;
  src: string;
  category?: string;
}

export interface BusDetail {
  id: string;
  provider: string;
  busType: string;
  seatAmount: number;
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
  duration: number;
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

export interface ItineraryActivityWidgets {
  id: string;
  type: "Activity";
  title: string;
  description: string;
  images: string[];
}

export interface ItineraryHotelWidgets {
  id: string;
  type: "Hotel";
  hotelName: string;
}

export interface ItineraryInformationWidgets {
  id: string;
  type: "Information";
  description: string;
}

export interface ItineraryTransportWidgets {
  id: string;
  type: "Transport";
  transportWith: string;
  from: string;
  to: string;
}

export interface ItineraryRecommendedWidgets {
  id: string;
  type: "Recommended";
  description: string;
  images: string[];
}

export interface UmrahPackage {
  id: string;
  type: PackageType;
  category: PackageCategory;
  title: string;
  thumbnail: string;
  season: string;
  isFastTrain: boolean;
  cityDeparture: DepartureCityDetail[];
  duration: number;
  downPayment: number;
  orderUrl: string;
  flightDetails: Flight;
  hotelDetails: Hotel;
  busDetails: BusDetail;
  departureDate: DepartureDateDetail[];
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
  importantNotes?: string[];
}
