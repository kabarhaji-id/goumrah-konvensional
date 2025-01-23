"use client";

import { NavigatorConnection } from "@/types/navigator-connection";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./skeleton-loader";

interface GoogleMapsEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  mapUrl?: string;
  mapUrlMobile?: string;
}

const GoogleMapsEmbed = ({ mapUrl, mapUrlMobile }: GoogleMapsEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  useEffect(() => {
    if ("connection" in navigator) {
      const connection = (navigator as NavigatorConnection).connection;
      if (connection) {
        const speed = connection.effectiveType;
        setNetworkSpeed(speed);
      }
    }
  }, []);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (networkSpeed === "4g" || networkSpeed === "wifi") {
      clearTimeout(loadingTimeout);
      setIsLoading(false);
    }

    return () => clearTimeout(loadingTimeout);
  }, [networkSpeed]);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  if (isMobile) {
    return (
      <>
        {isLoading ? (
          <Skeleton className="h-[150px] w-full rounded-[14px]" />
        ) : (
          <a href={mapUrlMobile} target="_self" rel="noopener noreferrer">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        )}
      </>
    );
  }

  return (
    <>
      {isLoading ? (
        <Skeleton className="h-[150px] w-full rounded-[14px]" />
      ) : (
        <a href={mapUrl} target="_self">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      )}
    </>
  );
};

export default GoogleMapsEmbed;
