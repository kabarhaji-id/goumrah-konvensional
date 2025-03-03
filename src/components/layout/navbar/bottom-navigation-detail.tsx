"use client";

import React, { useEffect, useState } from "react";
import ButtonWhatsApp from "@/section/package-detail/section-component/button-whatsapp";

import CustomChevronUpIcon from "@/public/icons/mingcute_up-fill.svg";

import { Button } from "@/components/ui/button";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "@/components/ui/skeleton-loader";

const BottomNavigationDetail = ({ orderUrl }: { orderUrl: string;}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isLoading, setIsLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  useEffect(() => {
    if ("connection" in navigator) {
      const connection = (navigator as NavigatorConnection).connection;
      if (connection) setNetworkSpeed(connection.effectiveType);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), networkSpeed === "4g" || networkSpeed === "wifi" ? 0 : 2000);
    return () => clearTimeout(timeout);
  }, [networkSpeed]);

  return (
    <nav className="sticky bottom-0 z-50 flex items-start justify-center gap-3 rounded-t-2xl bg-white px-4 py-5 shadow-custom-xl">
      {isLoading ? (
        <Skeleton className="rounded-[14px] h-11 w-16 flex-shrink-0" />
      ) : (
        <Button className="flex h-11 w-fit items-center justify-center gap-2 bg-[#90CFD0] px-5" onClick={scrollToTop}>
          <CustomChevronUpIcon className="size-6" fill="#FFFFFF" />
        </Button>
      )}
      <ButtonWhatsApp orderUrl={orderUrl} />
    </nav>
  );
};

export default BottomNavigationDetail;
