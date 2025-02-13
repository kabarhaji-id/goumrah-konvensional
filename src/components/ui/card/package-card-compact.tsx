"use client";

import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import "moment/locale/id";

import GoldAccent from "@/public/patterns/gold-accent.svg";
import SilverAccent from "@/public/patterns/silver-accent.svg";
import PlatinumAccent from "@/public/patterns/platinum-accent.svg";
import CustomSunMoonIcon from "@/public/icons/tabler_sun-moon.svg";

import { Badge } from "../badge";
import { UmrahPackage } from "@/types/package-details";
import { useEffect, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { getAmountOfDiscount, priceToLocale } from "@/lib/utils";
import { Skeleton } from "../skeleton-loader";

interface PackageCardProps {
  dataPackage: UmrahPackage;
}

const PackageCardCompact = ({ dataPackage }: PackageCardProps) => {
  moment.locale("id");

  const [isImageError, setIsImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  useEffect(() => {
    if ("connection" in navigator) {
      const connection = (navigator as NavigatorConnection).connection;
      if (connection) {
        const speed = connection.effectiveType;
        setNetworkSpeed(speed);
      }
    }
  }, []);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (networkSpeed === "4g" || networkSpeed === "wifi") {
      clearTimeout(loadingTimeout);
      setIsLoading(false);
    }

    return () => clearTimeout(loadingTimeout);
  }, [networkSpeed]);

  return (
    <Link href={`/umrah/${dataPackage.id}`}>
      <div className="flex w-[314px] overflow-hidden rounded-[14px] !bg-white tracking-wide shadow-custom-sm">
        <div className="relative aspect-square w-full overflow-hidden rounded-[10px]">
          {!isImageError && dataPackage.thumbnail ? (
            isLoading ? (
              <Skeleton className="aspect-[4/3] h-full w-full rounded-[14px]" />
            ) : (
              <Image
                src={dataPackage.thumbnail}
                alt={`Paket ${dataPackage.type} ${dataPackage.title} ${dataPackage.category}`}
                title= {`Paket ${dataPackage.type} ${dataPackage.title} ${dataPackage.category}`}
                width={942}
                height={708}
                className="aspect-[4/3] h-full rounded-[14px] object-cover"
                onError={() => setIsImageError(true)}
              />
            )
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100">
              <span className="text-sm text-gray-500">Foto tidak tersedia</span>
            </div>
          )}

          <div className="absolute -bottom-1 -left-2 h-fit">
            {dataPackage.category === "Silver" && (
              <SilverAccent className="w-[100%]" />
            )}
            {dataPackage.category === "Gold" && (
              <GoldAccent className="w-[100%]" />
            )}
            {dataPackage.category === "Platinum" && (
              <PlatinumAccent className="w-[100%]" />
            )}
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 bg-white p-3">
          <div className="space-y-2">
            {isLoading ? (
              <Skeleton className="h-[18px] w-16 rounded" />
            ) : (
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
                    className="h-fit rounded-[6px] px-1.5 py-0.5 text-[8px]"
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
            )}

            {isLoading ? (
              <Skeleton className="h-10 w-36" />
            ) : (
              <span className="line-clamp-2 pb-0.5 text-sm font-bold leading-5 text-primary-foreground">
                {dataPackage.title}
              </span>
            )}

            {isLoading ? (
              <Skeleton className="h-4 w-20 rounded" />
            ) : (
              <span className="text-xs font-medium opacity-80">
                {moment(
                  dataPackage.flight_details.departure_flight
                    .departure_datetime,
                ).format("DD MMMM YYYY")}
              </span>
            )}

            {isLoading ? (
              <Skeleton className="h-6 w-full" />
            ) : (
              <p className="font-extrabold">
                {dataPackage.quadFinalPrice &&
                dataPackage.quadPrice !== dataPackage.quadFinalPrice
                  ? priceToLocale(dataPackage.quadFinalPrice)
                  : priceToLocale(dataPackage.quadPrice)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export { PackageCardCompact };
