import * as React from "react";
import { MapProps } from "@/data/about/map-services";

export const MapEmbedded: React.FC<MapProps> = ({
                                               address,
                                               zoom = 14,
                                               width = "100%",
                                               height = "500px",
                                               className = ""
                                             }) => {
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}&zoom=${zoom}`;

  return (
    <iframe
      title={`Map showing location of ${address}`}
      src={mapSrc}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`${className}`}
      aria-label={`Interactive map showing ${address}`}
    />
  );
};