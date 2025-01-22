"use client";

import React from "react";
import Link from "next/link";
import "swiper/css";

import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { PackageCard } from "@/components/ui/package-card";
import { PackageCategory } from "@/types/package-details";
import { packageDetailData } from "@/data/package-details";
import { Swiper, SwiperSlide } from "swiper/react";

const RecommendedPackagesSection = () => {
  const generateDataByType = (type: PackageCategory) => {
    const packagePlatinum = useMemo(() => {
      return packageDetailData.filter((pkg) => pkg.category === type);
    }, []);

    return packagePlatinum;
  };

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

  /*
    // use state untuk resize image
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
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
    <div className="relative flex h-fit flex-col gap-4 pb-6">
      <div className="space-y-6">
        {recommendationSection.map((item, index) => {
          return (
            <section
              key={index}
              id={`recommendedPackages-${item.type}`}
              className="relative flex flex-col items-center justify-center gap-6 bg-white py-0"
            >
              <div className="z-20 flex flex-col items-center gap-2">
                <p className="text-base leading-[140%] tracking-wider text-primary">
                  {item.subTitle}
                </p>
                <h2 className="text-2xl font-bold leading-[130%] tracking-normal text-primary">
                  {item.title}
                </h2>
              </div>

              {generateDataByType(item.type as PackageCategory).length > 1 ? (
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={20}
                  centeredSlides={false}
                  className={`w-full !px-6`}
                >
                  {generateDataByType(item.type as PackageCategory).map(
                    (pkg) => (
                      <SwiperSlide
                        key={pkg.id}
                        className={`h-fit w-full max-w-[90%] pb-2 md:max-w-[80%]`}
                        style={{ marginRight: "20px" }}
                      >
                        <PackageCard data={pkg} />
                      </SwiperSlide>
                    ),
                  )}
                </Swiper>
              ) : (
                <div className="z-50 px-6">
                  <PackageCard
                    data={generateDataByType(item.type as PackageCategory)[0]}
                  />
                </div>
              )}
            </section>
          );
        })}
      </div>

      <Button
        className="z-[999] flex h-11 w-[317px] self-center px-5 py-1"
        asChild
      >
        <Link href="/umrah/rekomendasi">
          <p className="whitespace-nowrap text-base font-semibold leading-[150%] tracking-wide">
            Lihat Semua Paket
          </p>
        </Link>
      </Button>
    </div>
  );
};

export default RecommendedPackagesSection;
