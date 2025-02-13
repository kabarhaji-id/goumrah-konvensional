"use client";

import "swiper/css";

import { packageDetailData } from "@/data/package-details";
import { useMemo } from "react";
import { PackageCard } from "@/components/ui/package-card";

// const IdealPackagesSection = ({ packages }: { packages: Packages[] }) => {
const IdealPackagesSection = () => {
  const packageSilver = useMemo(() => {
    return packageDetailData.filter((pkg) => pkg.category === "Silver");
  }, []);

  const packageGold = useMemo(() => {
    return packageDetailData.filter((pkg) => pkg.category === "Gold");
  }, []);

  const packagePlatinum = useMemo(() => {
    return packageDetailData.filter((pkg) => pkg.category === "Platinum");
  }, []);


  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-6 pb-10">
      <div className="z-20 mt-6 flex flex-col items-center gap-2">
        <p className="text-base leading-[140%] tracking-wider text-primary">
          Sambut Panggilan-Nya
        </p>
        <h4 className="text-center text-[21px] font-bold leading-[130%] tracking-normal text-primary">
          Umrah Ideal dengan Momen Tak Terlupakan mulai dari 22 jt
        </h4>
      </div>

      <div className="w-full">
        <PackageCard data={packageSilver[0]} />
      </div>

      <div className="w-full">
        <PackageCard data={packageGold[0]} />
      </div>

      <div className="w-full">
        <PackageCard data={packagePlatinum[0]} />
      </div>
    </section>
  );
};

export default IdealPackagesSection;
