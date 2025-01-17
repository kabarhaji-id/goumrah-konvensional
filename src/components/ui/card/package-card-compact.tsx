"use client";

import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import "moment/locale/id";

import GoldAccent from "/public/assets/patterns/gold-accent.svg";
import SilverAccent from "/public/assets/patterns/silver-accent.svg";
import PlatinumAccent from "/public/assets/patterns/platinum-accent.svg";
import CustomSunMoonIcon from "/src/assets/icons/tabler_sun-moon.svg";

import { discountPercentPrice, priceToLocale } from "@/lib/utils";
import { Packages } from "@/types/packages";
import { Chip } from "../chip";
import { Badge } from "../badge";

interface PackageCardProps {
  dataPackage: Packages;
}

const PackageCardCompact = ({ dataPackage }: PackageCardProps) => {
  moment.locale("id");

  return (
    <Link href={`/umrah/${dataPackage.id}`}>
      <div className="flex w-[314px] overflow-hidden rounded-[14px] !bg-white tracking-wide shadow-custom-sm">
        <div className="relative aspect-square w-full overflow-hidden rounded-[10px]">
          <Image
            src={dataPackage.thumbnail}
            alt="package-cover"
            width={942}
            height={708}
            className="aspect-[4/3] h-full rounded-[14px] object-cover"
          />

          <div className="absolute -bottom-px h-fit">
            {dataPackage.category === "Silver" && (
              <SilverAccent className="w-[150%]" />
            )}
            {dataPackage.category === "Gold" && (
              <GoldAccent className="w-[150%]" />
            )}
            {dataPackage.category === "Platinum" && (
              <PlatinumAccent className="w-[150%]" />
            )}
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 bg-white p-3">
          <div className="space-y-2">
            <div className="flex gap-2">
              <Chip variant="default" className="overflow-hidden">
                <div className="w-full bg-primary-accent pb-1 pl-1 pr-0.5 pt-0.5">
                  <CustomSunMoonIcon className="h-4 w-4 stroke-primary" />
                </div>
                <span className="py-0.5 pl-1 pr-1.5 text-xs font-semibold leading-[18px] text-primary">
                  {dataPackage.duration} Hari
                </span>
              </Chip>

              {!dataPackage.finalPrice ? (
                <Badge variant="destructive" size="small">
                  <span>
                    {discountPercentPrice(
                      dataPackage.price,
                      dataPackage.finalPrice,
                    )}{" "}
                    off
                  </span>
                </Badge>
              ) : (
                ""
              )}
            </div>

            <span className="line-clamp-2 text-sm font-bold leading-5 text-primary-foreground">
              {dataPackage.name}
            </span>

            <span className="text-xs font-medium opacity-80">
              {moment(dataPackage.departureDates[0]).format("DD MMMM YYYY")}
            </span>
            <h5 className="font-extrabold">
              {dataPackage.finalPrice &&
              dataPackage.price !== dataPackage.finalPrice
                ? priceToLocale(dataPackage.finalPrice)
                : priceToLocale(dataPackage.price)}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { PackageCardCompact };
