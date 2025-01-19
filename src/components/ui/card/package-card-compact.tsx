"use client";

import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import "moment/locale/id";

import GoldAccent from "/public/assets/patterns/gold-accent.svg";
import SilverAccent from "/public/assets/patterns/silver-accent.svg";
import PlatinumAccent from "/public/assets/patterns/platinum-accent.svg";
import CustomSunMoonIcon from "/src/assets/icons/tabler_sun-moon.svg";

import { getAmountOfDiscount, priceToLocale } from "@/lib/utils";
import { Badge } from "../badge";
import { useState } from "react";
import { UmrahPackage } from "@/types/package-details";

interface PackageCardProps {
  dataPackage: UmrahPackage;
}

const PackageCardCompact = ({ dataPackage }: PackageCardProps) => {
  moment.locale("id");

  const [isImageError, setIsImageError] = useState(false);

  return (
    <Link href={`/umrah/${dataPackage.id}`}>
      <div className="flex w-[314px] overflow-hidden rounded-[14px] !bg-white tracking-wide shadow-custom-sm">
        <div className="relative aspect-square w-full overflow-hidden rounded-[10px]">
          {!isImageError && dataPackage.thumbnail ? (
            <Image
              src={dataPackage.thumbnail}
              alt="package-cover"
              width={942}
              height={708}
              className="aspect-[4/3] h-full rounded-[14px] object-cover"
              onError={() => setIsImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100">
              <span className="text-sm text-gray-500">Foto tidak tersedia</span>
            </div>
          )}

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
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <CustomSunMoonIcon className="h-4 w-4 stroke-primary" />
                <span className="text-xs font-semibold leading-[18px] text-primary">
                  {dataPackage.duration}
                </span>
              </div>

              {dataPackage.quadFinalPrice ? (
                <Badge
                  variant="destructive"
                  size="small"
                  className="h-fit rounded-[6px] px-1.5 py-0.5 text-[7px]"
                >
                  <span>
                    {getAmountOfDiscount(
                      dataPackage.quadPrice,
                      dataPackage.quadFinalPrice,
                    )}{" "}
                  </span>
                </Badge>
              ) : (
                ""
              )}
            </div>

            <span className="line-clamp-2 text-sm font-bold leading-5 text-primary-foreground">
              {dataPackage.tagline}
            </span>

            <span className="text-xs font-medium opacity-80">
              {moment(
                dataPackage.flight_details.departure_flight.departure_datetime,
              ).format("DD MMMM YYYY")}
            </span>
            <h5 className="font-extrabold">
              {dataPackage.quadFinalPrice &&
              dataPackage.quadPrice !== dataPackage.quadFinalPrice
                ? priceToLocale(dataPackage.quadFinalPrice)
                : priceToLocale(dataPackage.quadPrice)}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { PackageCardCompact };
