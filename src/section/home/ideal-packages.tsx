"use client";

import "swiper/css";

import { PackageCard } from "@/components/ui/package-card";
import { packageDetailData } from "@/data/package-details";
import { useMemo } from "react";
import { UmrahPackage } from "@/types/package-details";

const getRandomIndexByDate = (length: number) => {
  const today = new Date();
  const seed = today.getDate() + today.getMonth() + today.getFullYear();
  return seed % length;
};

const getRandomPackageByCategory = (data: UmrahPackage[], category: string) => {
  const filtered = data.filter((pkg) => pkg.category === category);
  const randomIndex = getRandomIndexByDate(filtered.length);
  return filtered[randomIndex];
};

const IdealPackagesSection = () => {
  const randomPackages = useMemo(() => {
    return {
      silver: getRandomPackageByCategory(packageDetailData, "Silver"),
      gold: getRandomPackageByCategory(packageDetailData, "Gold"),
      platinum: getRandomPackageByCategory(packageDetailData, "Platinum"),
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-6 pb-10">
      <div className="z-20 mt-6 flex flex-col items-center gap-2">
        <p className="text-base leading-[140%] tracking-wider text-primary">
          Sambut Panggilan-Nya
        </p>
        <h2 className="text-center text-2xl font-bold leading-[130%] tracking-normal text-primary">
          Paket Umrah Ideal, dengan Perjalanan yang Tak Terlupakan
        </h2>
      </div>

      <div className="w-full">
        <PackageCard data={randomPackages.silver} />
      </div>

      <div className="w-full">
        <PackageCard data={randomPackages.gold} />
      </div>

      <div className="w-full">
        <PackageCard data={randomPackages.platinum} />
      </div>

      {/* <Button className="z-20 h-11 w-[317px] px-5 py-1" asChild>
        <Link href="/umrah/ideal">
          <p className="whitespace-nowrap text-base font-semibold leading-[150%] tracking-wide">
            Lihat Semua Paket
          </p>
        </Link>
      </Button> */}
    </section>
  );
};

export default IdealPackagesSection;
