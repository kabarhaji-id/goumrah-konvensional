"use client";

import "swiper/css";

import { useMemo } from "react";
import { PackageCard } from "@/components/ui/card/package-card";
import { Packages } from "@/types/packages";

const IdealPackagesSection = ({ packages }: { packages: Packages[] }) => {
  const packageSilver = useMemo(() => {
    return packages
      .filter((pkg) => pkg.data.category === "Silver")
      .reduce((min, pkg) =>
        pkg.data.quadPrice < min.data.quadPrice ? pkg : min,
      );
  }, [packages]);

  const packageGold = useMemo(() => {
    return packages
      .filter((pkg) => pkg.data.category === "Gold")
      .reduce((min, pkg) =>
        pkg.data.quadPrice < min.data.quadPrice ? pkg : min,
      );
  }, [packages]);

  const packagePlatinum = useMemo(() => {
    return packages
      .filter((pkg) => pkg.data.category === "Platinum")
      .reduce((min, pkg) =>
        pkg.data.quadPrice < min.data.quadPrice ? pkg : min,
      );
  }, [packages]);

  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-6 pb-10">
      <div className="z-20 mt-6 flex flex-col items-center gap-2">
        <p className="text-base leading-[140%] tracking-wider text-primary">
          Sambut Panggilan-Nya
        </p>
        <h2 className="text-center text-[21px] font-bold leading-[130%] tracking-normal text-primary">
          Umrah Ideal dengan Momen Tak Terlupakan mulai dari 22 jt
        </h2>
      </div>

      <div className="w-full">
        <PackageCard data={packageSilver.data} />
      </div>

      <div className="w-full">
        <PackageCard data={packageGold.data} />
      </div>

      <div className="w-full">
        <PackageCard data={packagePlatinum.data} />
      </div>
    </section>
  );
};

export default IdealPackagesSection;
