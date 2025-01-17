"use client";

import "swiper/css";

import { PackageCard } from "@/components/ui/package-card";
import { dummyData } from "@/data/package-details";
import { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RecommendedPackagesSection = () => {
  const packages = useMemo(() => {
    return dummyData.filter((pkg) => pkg.type === "Reguler");
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center gap-6 bg-primary-accent px-6 pb-10 pt-16">
      <div className="mt-4 flex flex-col items-center gap-2">
        <p className="text-base leading-[140%] tracking-wider text-primary">
          Sambut Panggilan-Nya
        </p>
        <h2 className="text-2xl font-bold leading-[130%] tracking-normal text-primary-foreground">
          Paket Rekomendasi
        </h2>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        className="w-full"
      >
        {packages.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <PackageCard data={pkg} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button className="mb-4 h-11 w-[317px] px-5 py-1" asChild>
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
