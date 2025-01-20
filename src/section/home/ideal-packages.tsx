"use client";

import "swiper/css";

import { PackageCard } from "@/components/ui/package-card";
import { packageDetailData } from "@/data/package-details";
import { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const IdealPackagesSection = () => {
  const packages = useMemo(() => {
    return packageDetailData.filter((pkg) => pkg.type === "Plus");
  }, []);

  return (
    <section className="relative -mt-20 flex flex-col items-center justify-center gap-6 bg-[#E2E8F0] px-6 pb-10">
      <span
        className="absolute -top-40 z-0 h-40 w-full bg-gradient-to-t from-primary-accent to-[#E2E8F0]"
        style={{
          background:
            "linear-gradient(0deg, rgba(226,232,240,1) 11%, rgba(255,255,255,1) 100%)",
        }}
      />

      <div className="z-20 mt-10 flex flex-col items-center gap-2">
        <p className="text-base leading-[140%] tracking-wider text-primary">
          Sambut Panggilan-Nya
        </p>
        <h2 className="text-center text-2xl font-bold leading-[130%] tracking-normal text-primary">
          Paket Umrah Ideal, dengan Perjalanan yang Tak Terlupakan
        </h2>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        className={`w-full ${packages.length > 1 && "!px-6"}`}
      >
        {packages.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <PackageCard data={pkg} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button className="z-20 h-11 w-[317px] px-5 py-1" asChild>
        <Link href="/umrah/ideal">
          <p className="whitespace-nowrap text-base font-semibold leading-[150%] tracking-wide">
            Lihat Semua Paket
          </p>
        </Link>
      </Button>
    </section>
  );
};

export default IdealPackagesSection;
