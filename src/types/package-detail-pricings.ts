import { Embarkations } from "./embarkations";
import { Flights } from "./flights";

interface PackageDetailPricings {
  id: string;
  embarkation: Embarkations;
  quota: number;
  fakeQuota?: number;
  quotaRemaining: number;
  flightRoute: string;
  wisataFlights: WisataFlightDetail[];
  departureFlight: Flights;
  departureFlightDate: string;
  departureSecondFlight?: Flights;
  departureSecondFlightDate?: string;
  returnFlight: Flights;
  returnFlightDate: string;
  returnSecondFlight?: Flights;
  returnSecondFlightDate?: string;
  doublePrice: number;
  triplePrice: number;
  quadPrice: number;
  infantPrice?: number;
  doubleFinalPrice?: number;
  tripleFinalPrice?: number;
  quadFinalPrice?: number;
  infantFinalPrice?: number;
}

interface WisataFlightDetail {
  flight: Flights;
  flightDate: string;
  secondFlight?: Flights;
  secondFlightDate?: string;
}

export type { PackageDetailPricings, WisataFlightDetail };
