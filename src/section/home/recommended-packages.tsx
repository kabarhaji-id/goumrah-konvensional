"use client";

import "swiper/css";

import { PackageCard } from "@/components/ui/package-card";
import { packageDetailData } from "@/data/package-details";
import { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const RecommendedPackagesSection = () => {
  const packages = useMemo(() => {
    return packageDetailData.filter((pkg) => pkg.type === "Reguler");
  }, []);

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
      {/* 
      <Swiper
        navigation={true}
        modules={[Navigation]}
        centeredSlides={true}
        className={`w-full ${packages.length > 1 && "!px-6"}`}
      >
        {packages.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <PackageCard data={pkg} />
          </SwiperSlide>
        ))}
      </Swiper> */}

      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        centeredSlides={false}
        className={`w-full ${packages.length > 1 && "!px-6"}`}
      >
        {packages.map((pkg) => (
          <SwiperSlide key={pkg.id} className="">
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
