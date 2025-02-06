import * as React from "react";
import { MapEmbedded } from "./component/map-embedded";
export const MapSection: React.FC = () => {
  return (
    <section className="h-[500] bg-gray-50">
      <MapEmbedded
        address="JL. GM Ainul Yakin ADAH 35A Kalibata Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740"
        className="w-full h-[500]"
      />
    </section>
  );
};