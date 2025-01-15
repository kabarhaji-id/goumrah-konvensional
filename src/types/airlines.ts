interface Airlines {
  id: string;
  flightType: "Direct" | "Transit";
  name: string;
  logo: string;
  skytrax: Skytrax;
}

interface Skytrax {
  type: string;
  rating: string;
}

export type { Airlines };
