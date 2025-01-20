"use client";

import "swiper/css";

import { PackageCard } from "@/components/ui/package-card";
import { packageDetailData } from "@/data/package-details";
import {  useMemo, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const RecommendedPackagesSection = () => {
  const packages = useMemo(() => {
    return packageDetailData.filter((pkg) => pkg.type === "Reguler");
  }, []);

  // use state untuk resize image
  const [slidesPerView, setSlidesPerView] = useState(1);

/*  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(Math.min(3, packages.length)); // Show up to 3 slides on larger screens
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(Math.min(2, packages.length)); // Show up to 2 slides on medium screens
      } else {
        setSlidesPerView(1); // Show 1 slide on small screens
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [packages.length]);*/

  return (
    <section
      id="recommendedPackages"
      className="relative -mt-0 flex flex-col items-center justify-center gap-6 bg-primary-accent py-0"
    >
      <span className="absolute -top-6 z-0 h-16 w-full bg-gradient-to-t from-primary-accent to-[#E2E8F0]" />

      <div className="z-20 -mt-2 flex flex-col items-center gap-2">
        <p className="text-base leading-[140%] tracking-wider text-primary">
          Sambut Panggilan-Nya
        </p>
        <h2 className="text-2xl font-bold leading-[130%] tracking-normal text-primary">
          Paket Rekomendasi
        </h2>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        centeredSlides={false}
        className={`w-full !px-4`}
      >
        {packages.map((pkg) => (
          <SwiperSlide
            key={pkg.id}
            className={`h-fit w-full max-w-[90%] md:max-w-[80%]`}
            style={{ marginRight: "16px" }}
          >
            <PackageCard data={pkg} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button className="z-20 mb-4 h-11 w-[317px] px-5 py-1" asChild>
        <Link href="/umrah/rekomendasi">
          <p className="whitespace-nowrap text-base font-semibold leading-[150%] tracking-wide">
            Lihat Semua Paket
          </p>
        </Link>
      </Button>
    </section>
  );
};

export default RecommendedPackagesSection;
