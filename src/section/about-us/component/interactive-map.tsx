"use client";
import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const InteractiveMap: React.FC = () => {
  const [placeDetails, setPlaceDetails] = useState<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    async function fetchPlaceDetails() {
      try {
        const response = await fetch(`/api/getPlaceDetails?placeId=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID}`);
        const data = await response.json();
        setPlaceDetails(data);
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    }

    function loadGoogleMaps() {
      if (window.google && window.google.maps) {
        setMapLoaded(true);
        return;
      }

      // Define initMap function in the global scope
      window.initMap = () => setMapLoaded(true);

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker&loading=async&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    fetchPlaceDetails();
    loadGoogleMaps();
  }, []);

  useEffect(() => {
    if (!placeDetails || !mapLoaded || !window.google) return;

    const mapElement = document.getElementById("map") as HTMLElement;
    if (!mapElement) return;

    const { lat, lng } = placeDetails.geometry.location;
    const map = new window.google.maps.Map(mapElement, {
      center: { lat, lng },
      zoom: 18,
    });

    new window.google.maps.marker.AdvancedMarkerElement({
      position: { lat, lng },
      map,
      title: placeDetails.name,
    });
  }, [placeDetails, mapLoaded]);

  // Split placeDetails.name into two parts
  const placeName = placeDetails?.name || "";
  const [firstPart, ...rest] = placeName.split(" ");
  const remainingText = rest.join(" ");

  return (
    <div className="relative w-full h-[500px]">
      <div id="map" className="w-full h-full"></div>
      {placeDetails && (
        <div className="absolute bottom-4 left-4 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-bold">
            {firstPart} <br /> {remainingText}
          </h2>
          <p>{placeDetails.formatted_address}</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
