"use client";

import Link from "next/link";
import WhatsAppIcon from "@/public/icons/whatsapp.svg";
import { Button } from "@/components/ui/buttons/button";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { NavigatorConnection } from "@/types/navigator-connection";

const ButtonWhatsApp = ({ orderUrl, consultUrl }: { orderUrl: string; consultUrl: string }) => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  useEffect(() => {
    if ("connection" in navigator) {
      const connection = (navigator as NavigatorConnection).connection;
      if (connection) {
        setNetworkSpeed(connection.effectiveType);
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
        <div className="flex flex-row gap-2 w-full">
          {/* View Package Button */}
          <Button variant="primary" size="default" className="h-11 w-full shadow-custom-md">
            <Link href={orderUrl ?? "#"}>Pesan Paket</Link>
          </Button>

          {/* Order Now (WhatsApp) Button */}
          <Button
            variant="primary" size="default" className="h-11 w-full shadow-custom-md"
            icon={<WhatsAppIcon />}
            iconPosition="end"
          >
            <Link href={consultUrl ?? "#"}>Konsultasi Paket</Link>
          </Button>
        </div>
      )}
    </>
  );
};


export default ButtonWhatsApp;
