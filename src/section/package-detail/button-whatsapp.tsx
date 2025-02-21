"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/buttons/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import WhatsAppIcon from "/src/assets/icons/whatsapp.svg";

const ButtonWhatsApp = ({ packageUrl, consultUrl }: { packageUrl: string; consultUrl?: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleWhatsAppClick = () => {
    if (!consultUrl) {
      return;
    }
    setIsLoading(true);
    window.location.href = consultUrl;
  };

  const handlePackageClick = () => {
    window.location.href = packageUrl;
  };

  useEffect(() => {
    return () => setIsLoading(false);
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Tombol Lihat Paket */}
      <Button variant="primary" size="default" onClick={handlePackageClick}>
        Lihat Paket
      </Button>

      {/* Tombol Pesan Sekarang dengan WhatsApp Icon */}
      <Button
        variant="primary"
        size="default"
        onClick={handleWhatsAppClick}
        icon={!isLoading ? <WhatsAppIcon /> : <LoadingSpinner />}
        iconPosition="end"
      >
        Konsultasi Paket
      </Button>
    </div>
  );
};

export default ButtonWhatsApp;
