"use client";

import Link from "next/link";

import WhatsAppIcon from "/src/assets/icons/whatsapp.svg";

import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useEffect, useState } from "react";

const ButtonWhatsApp = ({ orderUrl }: { orderUrl: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    window.location.href = orderUrl;
  };

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <Button className="h-11 w-full py-1 shadow-custom-md" onClick={handleClick}>
      <Link href={orderUrl}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex items-center gap-2">
            <p className="text-base font-medium leading-[150%] tracking-wide">
              Pesan Paket Umrah Ini
            </p>
            <WhatsAppIcon />
          </div>
        )}
      </Link>
    </Button>
  );
};

export default ButtonWhatsApp;
