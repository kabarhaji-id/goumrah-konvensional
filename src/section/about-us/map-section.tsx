import * as React from "react";
import GoogleMap from "@/components/analytic/google-map";

export const MapSection: React.FC = () => {
  return (
    <section className="h-[500] bg-gray-50">
        <GoogleMap />
    </section>
  );
};