"use client";

import Link from "next/link";

import { ShareDialog } from "@/components/ui/share-dialog";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, Share2Icon } from "lucide-react";
import { UmrahPackage } from "@/types/package-details";
import { Skeleton } from "@/components/ui/skeleton-loader";

interface DetailNavbarProps {
  withTitle?: boolean;
  dataPackage: UmrahPackage;
}

interface NavigatorConnection extends Navigator {
  connection?: {
    effectiveType: string;
  };
}

const DetailNavbar = ({ withTitle = true, dataPackage }: DetailNavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if ("connection" in navigator) {
      const connection = (navigator as NavigatorConnection).connection;
      if (connection) {
        const speed = connection.effectiveType;
        setNetworkSpeed(speed);
      }
    }
  }, []);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (networkSpeed === "4g" || networkSpeed === "wifi") {
      clearTimeout(loadingTimeout);
      setIsLoading(false);
    }

    return () => clearTimeout(loadingTimeout);
  }, [networkSpeed]);

  return (
    <>
      <nav
        className={`fixed z-50 flex h-14 w-full max-w-screen-sm items-center justify-between gap-4 overflow-clip bg-white py-3 ${
          scrolled
            ? "top-0 shadow-custom-sm transition-all"
            : "-top-14 transition-all"
        } `}
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="z-20 pl-4">
            <ChevronLeftIcon className="h-5 w-5 stroke-neutral-foreground" />
          </Link>

          {withTitle && (
            <span className="line-clamp-1 font-semibold">
              {dataPackage.tagline}
            </span>
          )}
        </div>

        <div className="relative z-20 pr-4">
          <ShareDialog dataPackage={dataPackage}>
            <Share2Icon className="h-5 w-5 cursor-pointer stroke-neutral-foreground" />
          </ShareDialog>
        </div>
      </nav>

      <nav className="absolute top-0 z-50 flex w-full max-w-screen-sm justify-between overflow-clip bg-transparent py-3">
        <div className="flex w-full items-center justify-between">
          {isLoading ? (
            <Skeleton className="!ml-4 h-9 w-9 rounded-full" />
          ) : (
            <Link href="/" className="z-20 pl-4">
              <div className="w-9 rounded-full bg-white px-2.5 py-2.5 shadow-custom-sm">
                <ChevronLeftIcon className="h-4 w-4 stroke-neutral-foreground" />
              </div>
            </Link>
          )}

          {isLoading ? (
            <Skeleton className="!mr-4 h-9 w-9 rounded-full" />
          ) : (
            <div className="relative z-20 flex gap-5 pr-4">
              <ShareDialog dataPackage={dataPackage}>
                <div className="cursor-pointer rounded-full bg-white p-2.5 shadow-custom-sm">
                  <Share2Icon className="h-4 w-4 stroke-neutral-foreground" />
                </div>
              </ShareDialog>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default DetailNavbar;
