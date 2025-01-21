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
  // const packages = useMemo(() => {
  //   return packageDetailData.filter((pkg) => pkg.type === "Reguler");
  // }, []);

  const packageSilver = useMemo(() => {
    return packageDetailData.filter((pkg) => pkg.category === "Silver");
  }, []);

  const packageGold = useMemo(() => {
    return packageDetailData.filter((pkg) => pkg.category === "Gold");
  }, []);

  const packagePlatinum = useMemo(() => {
    return packageDetailData.filter((pkg) => pkg.category === "Platinum");
  }, []);

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
    <div className="space-y-6">
      <section
        id="recommendedPackages"
        className="relative flex flex-col items-center justify-center gap-6 bg-white py-0"
      >
        {/* <section
        id="recommendedPackages"
        className="relative -mt-0 flex flex-col items-center justify-center gap-6 bg-primary-accent py-0"
      > */}
        {/* <span className="absolute -top-6 z-0 h-16 w-full bg-gradient-to-t from-primary-accent to-[#E2E8F0]" /> */}

        <div className="z-20 flex flex-col items-center gap-2">
          <p className="text-base leading-[140%] tracking-wider text-primary">
            Paket Hemat, Ibadah Khidmat
          </p>
          <h2 className="text-2xl font-bold leading-[130%] tracking-normal text-primary">
            Paket Rekomendasi Silver
          </h2>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          centeredSlides={false}
          className={`w-full !px-4`}
        >
          {packageSilver.map((pkg) => (
            <SwiperSlide
              key={pkg.id}
              className={`h-fit w-full max-w-[90%] pb-2 md:max-w-[80%]`}
              style={{ marginRight: "16px" }}
            >
              <PackageCard data={pkg} />
            </SwiperSlide>
          ))}
          {packageSilver.map((pkg) => (
            <SwiperSlide
              key={pkg.id}
              className={`h-fit w-full max-w-[90%] pb-2 md:max-w-[80%]`}
              style={{ marginRight: "16px" }}
            >
              <PackageCard data={pkg} />
            </SwiperSlide>
          ))}
          {packageSilver.map((pkg) => (
            <SwiperSlide
              key={pkg.id}
              className={`h-fit w-full max-w-[90%] pb-2 md:max-w-[80%]`}
              style={{ marginRight: "16px" }}
            >
              <PackageCard data={pkg} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section
        id="recommendedPackages"
        className="relative -mt-0 flex flex-col items-center justify-center gap-6 bg-white py-0"
      >
        {/* <span className="absolute -top-6 z-0 h-16 w-full bg-gradient-to-t from-primary-accent to-[#E2E8F0]" /> */}

        <div className="z-20 flex flex-col items-center gap-2">
          <p className="text-base leading-[140%] tracking-wider text-primary">
            Pilihan Bijak Untuk Perjalanan Penuh Makna
          </p>
          <h2 className="text-2xl font-bold leading-[130%] tracking-normal text-primary">
            Paket Rekomendasi Gold
          </h2>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          centeredSlides={false}
          className={`w-full !px-4`}
        >
          {packageGold.map((pkg) => (
            <SwiperSlide
              key={pkg.id}
              className={`h-fit w-full max-w-[90%] pb-2 md:max-w-[80%]`}
              style={{ marginRight: "16px" }}
            >
              <PackageCard data={pkg} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section
        id="recommendedPackages"
        className="relative -mt-0 flex flex-col items-center justify-center gap-6 bg-white pb-6 pt-0"
      >
        {/* <span className="absolute -top-6 z-0 h-16 w-full bg-gradient-to-t from-primary-accent to-[#E2E8F0]" /> */}

        <div className="z-20 flex flex-col items-center gap-2">
          <p className="text-base leading-[140%] tracking-wider text-primary">
            Ibadah Tenang, Nyaman Maksimal
          </p>
          <h2 className="text-2xl font-bold leading-[130%] tracking-normal text-primary">
            Paket Rekomendasi Platinum
          </h2>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          centeredSlides={false}
          className={`w-full !px-4`}
        >
          {packagePlatinum.map((pkg) => (
            <SwiperSlide
              key={pkg.id}
              className={`h-fit w-full max-w-[90%] md:max-w-[80%]`}
              style={{ marginRight: "16px" }}
            >
              <PackageCard data={pkg} />
            </SwiperSlide>
          ))}
          {packagePlatinum.map((pkg) => (
            <SwiperSlide
              key={pkg.id}
              className={`h-fit w-full max-w-[90%] md:max-w-[80%]`}
              style={{ marginRight: "16px" }}
            >
              <PackageCard data={pkg} />
            </SwiperSlide>
          ))}
          {packagePlatinum.map((pkg) => (
            <SwiperSlide
              key={pkg.id}
              className={`h-fit w-full max-w-[90%] md:max-w-[80%]`}
              style={{ marginRight: "16px" }}
            >
              <PackageCard data={pkg} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Button className="z-20 h-11 w-[317px] px-5 py-1" asChild>
          <Link href="/umrah/rekomendasi">
            <p className="whitespace-nowrap text-base font-semibold leading-[150%] tracking-wide">
              Lihat Semua Paket
            </p>
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default RecommendedPackagesSection;
