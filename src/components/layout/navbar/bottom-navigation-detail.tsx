"use client";

import React from "react";
import Link from "next/link";

import WhatsAppIcon from "@/assets/icons/ic_baseline-whatsapp.svg";
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
      <Button
        size="lg"
        variant="primary"
        className="flex h-11 w-full justify-center"
      >
        <Link href={orderUrl} className="flex items-center gap-2">
          <p className="whitespace-nowrap font-semibold leading-[150%] tracking-wide">
            Pesan Paket Umrah Ini
          </p>
          <WhatsAppIcon className="size-6" fill="#FFFFFF" />
        </Link>
      </Button>
    </nav>
  );
};

export default BottomNavigationDetail;
