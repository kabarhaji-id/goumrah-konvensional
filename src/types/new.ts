// interfaces.ts

// export interface DepartureDetail {
//   id: string;
//   city: string;
//   room_type: string;
//   normal_price: string;
//   discount_price: string | null;
// }

export interface Flight {
  id: string;
  departure: string;
  departure_flight: FlightDetail;
  return_flight: FlightDetail;
}

export interface FlightDetail {
  flight_number: string;
  duration: string;
  departure_datetime: string;
  terminal: string;
  class: string;
  flight_type: "Direct" | "Transit";
  airline: string;
  aircraft_type: string;
  seat_layout: string;
  baggage_allowance: number;
  cabin_baggage: number;
  airline_logo: string;
  skytrax: "Low Cost" | "Full Service";
  rating: string;
}

export interface HotelDetail {
  id: string;
  city: string;
  hotel_name: string;
  star_rating: string;
  room_photos: Images[];
  hotel_front_photo: string;
  google_maps_link: string;
  google_review_link: string;
  description: string;
  facilities: string[];
  check_in_time: string;
  check_out_time: string;
  address: string;
  distance_to_masjid: number;
  food_type: string;
  food_amount: number;
  food_menu: string;
}

export interface Images {
  src: string;
  category?: string;
}

export interface BusDetail {
  id: string;
  provider: string;
  bus_type: string;
  seat_amount: number;
}

export interface DepartureDateDetail {
  date: string;
  status: "active" | "coming-soon";
}

export interface UmrahPackage {
  id: string;
  tagline: string;
  season: string;
  city_departure: string[];
  duration: string;
  package: string;
  down_payment: string;
  // departure_details: DepartureDetail[];
  flight_details: Flight;
  hotel_details: HotelDetail[];
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
}
