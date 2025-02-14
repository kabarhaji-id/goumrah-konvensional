"use client";
import { useEffect, useState, useCallback } from "react";
import { Loader } from "@googlemaps/js-api-loader";

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
  const [isLoading, setIsLoading] = useState(true);

  // **Load Place Details**
  const fetchPlaceDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `/api/getPlaceDetails?placeId=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      setPlaceDetails(data.result);
    } catch (error) {
      setError("Failed to fetch place details");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // **Load Google Maps using js-api-loader**
  const loadGoogleMaps = useCallback(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""; // Default to empty string if undefined

    if (!apiKey) {
      setError("Google Maps API key is missing");
      return;
    }

    const loader = new Loader({
      apiKey, // Now guaranteed to be a string
      version: "weekly",
      libraries: ["marker", "places"],
    });

    // Loader.load() now returns a Promise<void>
    loader.load().then(() => {
      setMapLoaded(true);
    }).catch((err) => {
      setError("Failed to load Google Maps");
    });
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
    if (!geometry || !geometry.location) return;

    const { lat, lng } = geometry.location;

    const map = new window.google.maps.Map(mapElement, {
      center: { lat, lng },
      zoom: 18,
      mapTypeControl: false,
      fullscreenControl: true,
      streetViewControl: false,
      zoomControl: false,
      mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
    });

    // Create a div for the marker
    const markerContainer = document.createElement("div");
    markerContainer.classList.add("custom-marker");

    const markerIcon = document.createElement("img");
    markerIcon.src = "/assets/icons/marker.png";
    markerIcon.alt = "Marker";
    markerIcon.title = "Goumrah Head Office";
    markerIcon.classList.add("marker-icon");

    markerContainer.appendChild(markerIcon);

    const marker = new window.google.maps.marker.AdvancedMarkerElement({
      position: { lat, lng },
      map,
      content: markerContainer,
    });
  }, [placeDetails, mapLoaded]);

  // **Split Place Name**
  const placeName = placeDetails?.name || "";
  const [firstPart, ...rest] = placeName.split(" ");
  const remainingText = rest.join(" ");

  return (
    <div className="relative w-full h-[500px]">
      {/* Skeleton Loader for Map */}
      {isLoading && <SkeletonLoader className="absolute inset-0 w-full h-full" />}

      {/* Map */}
      <div id="map" className={`w-full h-full ${isLoading ? "hidden" : ""}`}></div>

      {/* Error Message */}
      {error && (
        <div className="absolute top-4 left-4 bg-red-500 text-white p-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Skeleton Loader for Place Details */}
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

// **Skeleton Loader Component**
function SkeletonLoader({ className }: { className?: string }) {
  return <div className={`${className} animate-pulse bg-gray-300 rounded-lg`}></div>;
}
