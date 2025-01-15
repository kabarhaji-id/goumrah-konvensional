import { Airlines } from "./airlines";
import { Airports } from "./airports";

interface Flights {
  id: string;
  airline: Airlines;
  code: string;
  class: string;
  aircraftType: string;
  seatLayout: string;
  baggage: number;
  cabinBaggage: number;
  departure: Departure;
  duration: number;
  arrival: Arrival;
}

interface Departure {
  time: string;
  airport: Airports;
  terminal: string;
}

interface Arrival {
  time: string;
  airport: Airports;
  terminal: string;
}

export type { Flights };
