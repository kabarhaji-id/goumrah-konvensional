"use client";

import { usePathname, useRouter } from "next/navigation";

import React from "react";

import HomeIcon from "@/public/icons/home.svg";
import CustomerServiceIcon from "@/public/icons/customer-service.svg";
import KaabaIcon from "@/public/icons/kaaba.svg";
import TanyaIsma from "@/section/tanya-isma";

const BottomNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="sticky bottom-0 z-50 flex items-start justify-center gap-20 rounded-t-2xl bg-white px-12 py-4">
      <button
        onClick={() => router.push("/")}
        data-active={pathname == "/"}
        className="group flex flex-col items-center gap-1 text-primary/50 data-[active=true]:text-primary"
      >
        <HomeIcon className="size-7" />
        <p className="whitespace-nowrap text-xs font-light tracking-normal group-data-[active=true]:font-bold">
          Beranda
        </p>
      </button>
      <button
        data-active={false}
        className="group flex flex-col items-center gap-1 ttext-primary/50 data-[active=true]:text-primary"
      >
        <CustomerServiceIcon className="size-7" />
        <p className="whitespace-nowrap text-xs font-light tracking-normal group-data-[active=true]:font-bold">
          Tanya Isma
        </p>
      </button>
      <button
        onClick={() => router.push("/umrah")}
        data-active={pathname == "/umrah"}
        className="group flex flex-col items-center gap-1 text-primary/50 data-[active=true]:text-primary"
      >
        <KaabaIcon className="size-7" />
        <p className="whitespace-nowrap text-xs font-light tracking-normal group-data-[active=true]:font-bold text-[#1b8386]">
          Paket Umrah
        </p>
      </button>

      <TanyaIsma />
    </nav>
  );
};

export default BottomNavigation;
