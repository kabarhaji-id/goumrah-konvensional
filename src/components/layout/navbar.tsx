"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

import HomeIcon from "@/assets/icons/home.svg";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-50 flex items-start justify-center gap-20 rounded-t-2xl bg-white px-12 py-4">
      <Link
        href="/"
        data-active={pathname == "/"}
        className="group flex flex-col items-center gap-1 text-foreground/30 data-[active=true]:text-primary"
      >
        <HomeIcon className="size-7" />
        <p className="whitespace-nowrap text-xs font-light tracking-normal group-data-[active=true]:font-bold">
          Beranda
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
