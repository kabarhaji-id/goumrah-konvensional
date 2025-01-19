"use client";

import React from "react";
import ButtonWhatsApp from "@/section/package-detail/button-whatsapp";

import CustomChevronUpIcon from "@/assets/icons/mingcute_up-fill.svg";

import { Button } from "@/components/ui/button";

const BottomNavigationDetail = ({ orderUrl }: { orderUrl: string }) => {
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky bottom-0 z-50 flex items-start justify-center gap-3 rounded-t-2xl bg-white px-4 py-5 shadow-custom-xl">
      {/* Scroll to Top Button */}
      <Button
        className="flex h-11 w-fit items-center justify-center gap-2 bg-[#90CFD0] px-5"
        onClick={scrollToTop}
      >
        <CustomChevronUpIcon className="size-6" fill="#FFFFFF" />
      </Button>

      {/* Order Package Button */}
      <ButtonWhatsApp orderUrl={orderUrl} />
    </nav>
  );
};

export default BottomNavigationDetail;
