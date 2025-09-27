"use client";

import Link from "next/link";
import WhatsAppIcon from "@/public/icons/whatsapp.svg";
import { Button } from "@/components/ui/buttons/button";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { NavigatorConnection } from "@/types/navigator-connection";

interface ButtonWhatsAppProps {
  orderUrl?: string | null;
  consultUrl?: string | null;
  showWhatsApp?: boolean;
}

const ButtonWhatsApp = ({ orderUrl, consultUrl, showWhatsApp = true }: ButtonWhatsAppProps) => {
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
        <div className={`flex ${consultUrl ? "flex-row gap-2" : "justify-center"} w-full`}>
          {/* View Package Button */}
          <Button
            variant="primary"
            size="default"
            className={!consultUrl ? "h-11 px-4 rounded-xl text-sm font-medium flex items-center gap-2 w-full" : "h-11 px-4 rounded-xl text-sm font-medium w-48 flex items-center gap-2"}
            icon={!consultUrl && showWhatsApp ? <WhatsAppIcon /> : undefined} // Tampilkan ikon jika consultUrl kosong
            iconPosition="end"
          >
            <Link href={orderUrl ?? "#"}>Pilih Paket</Link>
          </Button>

          {/* Order Now (WhatsApp) Button - Only if consultUrl is available */}
          {consultUrl && (
            <Button
              variant="primary"
              size="default"
              className="h-11 px-4 rounded-xl text-sm font-medium flex items-center gap-2 w-96"
              icon={showWhatsApp ? <WhatsAppIcon /> : undefined} // Ikon hanya di "Konsultasi Paket" jika consultUrl tersedia
              iconPosition="end"
            >
              <Link href={consultUrl}>Konsultasi Paket</Link>
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default ButtonWhatsApp;
