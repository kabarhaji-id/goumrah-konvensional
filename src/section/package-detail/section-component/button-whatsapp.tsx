"use client";

import Link from "next/link";

import WhatsAppIcon from "@/public/icons/whatsapp.svg";

import { Button } from "@/components/ui/button";
// import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { NavigatorConnection } from "@/types/navigator-connection";

const ButtonWhatsApp = ({ orderUrl }: { orderUrl: string }) => {
  // const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  const handleClick = () => {
    // setIsLoading(true);
    window.location.href = orderUrl;
  };

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
      setIsPageLoading(false);
    }, 2000);

    if (networkSpeed === "4g" || networkSpeed === "wifi") {
      clearTimeout(loadingTimeout);
      setIsPageLoading(false);
    }

    return () => clearTimeout(loadingTimeout);
  }, [networkSpeed]);

  return (
    <>
      {isPageLoading ? (
        <Skeleton className="h-11 w-full rounded-md" />
      ) : (
        <Button
          className="h-11 w-full py-1 shadow-custom-md"
          onClick={handleClick}
        >
          <Link href={orderUrl}>
            {/* {isLoading ? (
              <LoadingSpinner />
            ) : ( */}
            <div className="flex items-center gap-2">
              <p className="text-base font-medium leading-[150%] tracking-wide">
                Pesan Paket Umrah Ini
              </p>
              <WhatsAppIcon />
            </div>
            {/* )} */}
          </Link>
        </Button>
      )}
    </>
  );
};

export default ButtonWhatsApp;
