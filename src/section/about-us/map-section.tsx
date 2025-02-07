import * as React from "react";
import InteractiveMap from "./component/interactive-map";

export const MapSection: React.FC = () => {
  return (
    <section className="h-[500] bg-gray-50">
        <InteractiveMap />
    </section>
  );
};