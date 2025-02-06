"use client";

import { usePathname, useRouter } from "next/navigation";

import React from "react";

import HomeIcon from "@/public/icons/home.svg";
import CustomerServiceIcon from "@/public/icons/customer-service.svg";
import KaabaIcon from "@/public/icons/kaaba.svg";
import FaqIcon from "@/public/icons/faq-filled.svg";
import AboutIcon from "@/public/icons/about-us.svg";
import TanyaIsma from "@/section/tanya-isma";

interface BottomNavigationProps {  // Define the props interface
  className?: string; // className is optional, can be undefined
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ className }) => {
    const pathname = usePathname();
    const router = useRouter();

    return (
      <nav
        className="sticky bottom-0 z-50 bg-white flex items-center justify-center gap-2 rounded-t-2xl py-4 border-t border-gray-200">
        <button
          onClick={() => router.push("/")}
          data-active={pathname == "/"}
          className="group flex flex-col items-center gap-1 text-primary/50 data-[active=true]:text-primary"
        >
          <HomeIcon className="size-7" />
          <p className={`whitespace-nowrap text-xs font-light tracking-normal group-data-[active=true]:font-bold
        ${pathname === "/" ? "" : "invisible"}`}> {/* Conditional invisible class */}
            Beranda
          </p>
        </button>

        <button
          onClick={() => router.push("/umrah")}
          data-active={pathname == "/umrah"}
          className="group flex flex-col items-center gap-1 text-primary/50 data-[active=true]:text-primary"
        >
          <KaabaIcon className="size-7" />
          <p className={`whitespace-nowrap text-xs font-light tracking-normal group-data-[active=true]:font-bold text-[#1b8386]
        ${pathname === "/umrah" ? "" : "invisible"}`}> {/* Conditional invisible class */}
            Paket Umrah
          </p>
        </button>

        <button
          data-active={false} // You should make this dynamic if you want to use it
          className="group flex flex-col items-center gap-1 text-primary/50 data-[active=true]:text-primary"
        >
          <CustomerServiceIcon className="size-7" />
          <p className={`whitespace-nowrap text-xs font-light tracking-normal group-data-[active=true]:font-bold
        ${pathname === "/tanya-isma" ? "" : "invisible"}`}> {/* Conditional invisible class */}
            Tanya Isma
          </p>
        </button>

        <button
          onClick={() => router.push("/faq")}
          data-active={pathname == "/faq"}
          className="group flex flex-col items-center gap-1 text-primary/50 data-[active=true]:text-primary"
        >
          <FaqIcon className="size-7" />
          <p className={`whitespace-nowrap text-xs font-light tracking-normal group-data-[active=true]:font-bold text-[#1b8386]
        ${pathname === "/faq" ? "" : "invisible"}`}> {/* Conditional invisible class */}
            goumrah Care
          </p>
        </button>

        <button
          onClick={() => router.push("/about-us")}
          data-active={pathname == "/about-us"}
          className="group flex flex-col items-center gap-1 text-primary/50 data-[active=true]:text-primary"
        >
          <AboutIcon className="size-7" />
          <p className={`whitespace-nowrap text-xs font-light tracking-normal group-data-[active=true]:font-bold text-[#1b8386]
        ${pathname === "/about-us" ? "" : "invisible"}`}> {/* Conditional invisible class */}
            Tentang Kami
          </p>
        </button>


        <TanyaIsma />


      </nav>
    );
  }
;

export default BottomNavigation;
