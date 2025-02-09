"use client";
import { useEffect, useState, useCallback } from "react";

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default function GoogleMap() {
  const [placeDetails, setPlaceDetails] = useState<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Untuk Skeleton Loader

  // **Memuat Detail Tempat**
  const fetchPlaceDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `/api/getPlaceDetails?placeId=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error);
        console.error("API Error:", data.error);
        return;
      }

      setPlaceDetails(data.result);
    } catch (error) {
      console.error("Error fetching place details:", error);
      setError("Failed to fetch place details");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // **Memuat Google Maps API**
  const loadGoogleMaps = useCallback(() => {
    if (window.google && window.google.maps) {
      setMapLoaded(true);
      return;
    }

    const existingScript = document.querySelector("script[src*='maps.googleapis']");
    if (existingScript) {
      existingScript.addEventListener("load", () => setMapLoaded(true));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker,places&v=beta`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    fetchPlaceDetails();
    loadGoogleMaps();
  }, [fetchPlaceDetails, loadGoogleMaps]);

  useEffect(() => {
    if (!placeDetails || !mapLoaded || !window.google) return;

    const mapElement = document.getElementById("map") as HTMLElement;
    if (!mapElement) return;

    const { geometry } = placeDetails;
    if (!geometry || !geometry.location) {
      setError("Invalid location data from API");
      return;
    }

    const { lat, lng } = geometry.location;

    const map = new window.google.maps.Map(mapElement, {
      center: { lat, lng },
      zoom: 18,
      mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
    });

    // **Gunakan Path Publik untuk Marker**
    const markerIcon = document.createElement('img');
    markerIcon.src =  "/assets/icons/marker.png";

    const marker = new window.google.maps.marker.AdvancedMarkerElement({
      position: { lat, lng },
      map,
      content: markerIcon,

    });

    console.log("Marker created:", marker);
  }, [placeDetails, mapLoaded]);

  // **Pisahkan Nama Lokasi**
  const placeName = placeDetails?.name || "";
  const [firstPart, ...rest] = placeName.split(" ");
  const remainingText = rest.join(" ");

  return (
    <div className="relative w-full h-[500px]">
      {/* Skeleton Loader untuk Peta */}
      {isLoading && <SkeletonLoader className="absolute inset-0 w-full h-full" />}

      {/* Peta */}
      <div id="map" className={`w-full h-full ${isLoading ? "hidden" : ""}`}></div>

      {/* Pesan Error */}
      {error && (
        <div className="absolute top-4 left-4 bg-red-500 text-white p-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Skeleton Loader untuk Detail Lokasi */}
      {isLoading ? (
        <SkeletonLoader className="absolute bottom-4 bg-gray-200 p-4 shadow-md rounded-lg m-5 w-[300px] h-[80px]" />
      ) : (
        placeDetails && (
          <div className="absolute bottom-4 bg-white p-4 shadow-md rounded-lg m-5">
            <h2 className="text-lg font-bold">
              {firstPart} <br /> {remainingText}
            </h2>
            <p className="mt-5">{placeDetails.formatted_address}</p>
          </div>
        )
      )}
    </div>
  );
}

// **Komponen Skeleton Loader**
function SkeletonLoader({ className }: { className?: string }) {
  return <div className={`${className} animate-pulse bg-gray-300 rounded-lg`}></div>;
}
