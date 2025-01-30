"use client";

import React from "react";
import Link from "next/link";
import "swiper/css";

import CustomArrowIcon from "@/public/icons/mingcute_down-fill.svg";

import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { packageDetailData } from "@/data/packages";
import { Swiper, SwiperSlide } from "swiper/react";
import { PackageCard } from "@/components/ui/card/package-card";

const RecommendedPackagesSection = () => {
  const packageDataByType = useMemo(() => {
    const recommendationSection = [
      {
        type: "Silver",
        subTitle: "Paket Hemat, Ibadah Khidmat",
        title: "Paket Rekomendasi Silver",
      },
      {
        type: "Gold",
        subTitle: "Pilihan Bijak Untuk Perjalanan Penuh Makna",
        title: "Paket Rekomendasi Gold",
      },
      {
        type: "Platinum",
        subTitle: "Ibadah Tenang, Nyaman Maksimal",
        title: "Paket Rekomendasi Platinum",
      },
    ];

    return recommendationSection.map((item) => ({
      ...item,
      packages: packageDetailData.filter((pkg) => pkg.category === item.type),
    }));
  }, []);

  return (
    <div className="relative flex h-fit flex-col gap-4 pb-6">
      <div className="space-y-6">
        {packageDataByType.map((item, index) => {
          return (
            <section
              key={index}
              id={`recommendedPackages-${item.type}`}
              className="relative flex flex-col items-center justify-center gap-6 bg-white py-0"
            >
              <div className="z-20 flex flex-col items-center gap-2 text-center">
                <p className="text-base leading-[140%] tracking-wider text-primary">
                  {item.subTitle}
                </p>
                <h2 className="text-2xl font-bold leading-[130%] tracking-normal text-primary">
                  {item.title}
                </h2>
              </div>

              {item.packages.length > 1 ? (
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={16}
                  centeredSlides={false}
                  className={`w-full !px-6`}
                >
                  {item.packages.map((pkg) => (
                    <SwiperSlide
                      key={pkg.id}
                      className={`md:max-w-[80%] h-fit w-full max-w-[95%] pb-2`}
                      style={{ marginRight: "16px" }}
                    >
                      <PackageCard data={pkg} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="z-50 px-6">
                  <PackageCard data={item.packages[0]} />
                </div>
              )}
            </section>
          );
        })}
      </div>

      <Button
        className="z-20 flex h-11 w-[270px] items-center self-center px-5 py-1 xs:w-[317px]"
        asChild
      >
        <Link href="/umrah">
          <p className="whitespace-nowrap text-base font-semibold leading-[150%] tracking-wide">
            Lihat Semua Paket
          </p>
          <CustomArrowIcon className="h-6 w-6" fill="#FFFFFF" />
        </Link>
      </Button>
    </div>
  );
};

export default RecommendedPackagesSection;
