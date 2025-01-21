"use client";

import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import "moment/locale/id";

import GoldAccent from "@/public/patterns/gold-accent.svg";
import SilverAccent from "@/public/patterns/silver-accent.svg";
import PlatinumAccent from "@/public/patterns/platinum-accent.svg";

import CustomSunMoonIcon from "@/public/icons/tabler_sun-moon.svg";
import CustomVacationIcon from "@/public/icons/custom-vacation.svg";
import CustomSackPercentIcon from "@/public/icons/mdi_sack-percent.svg";
import CustomKaabaIcon from "@/public/icons/la_kaaba.svg";

import { Chip } from "./chip";
import { Button } from "./button";
import { CalendarDaysIcon, HotelIcon, PlaneIcon, StarIcon } from "lucide-react";
import { cn, getAmountOfDiscount, priceToLocale } from "@/lib/utils";
import { UmrahPackage } from "@/types/package-details";
import { useEffect, useMemo, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "./skeleton-loader";

interface PackageCardProps {
  data: UmrahPackage;
  size?: "default" | "sm" | "xs";
  source?: string;
  className?: string;
}

const PackageCard = ({
  data,
  size = "default",
  className,
}: PackageCardProps) => {
  moment.locale("id");

  const [isLoading, setIsLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  const departureDate = useMemo(() => {
    return (
      data.departure_date.find(
        (departureDate) => departureDate.status === "active",
      ) ?? data.departure_date[0]
    );
  }, [data.departure_date]);

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
    <Link href={`/umrah/${data.id}`}>
      {size === "default" && (
        <div
          className={cn(
            "flex h-full w-full flex-col overflow-hidden rounded-[14px] !bg-white tracking-wide shadow-custom-sm",
            className,
          )}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
            {isLoading ? (
              <Skeleton className="aspect-[4/3] h-full rounded-[14px]" />
            ) : (
              <Image
                src={data.thumbnail}
                alt="package-cover"
                width={942}
                height={708}
                className="aspect-[4/3] h-full rounded-[14px] object-cover"
              />
            )}

            <div className="absolute bottom-0 h-fit">
              {data.category === "Silver" && (
                <SilverAccent className="w-[100%]" />
              )}
              {data.category === "Gold" && <GoldAccent className="w-[100%]" />}
              {data.category === "Platinum" && (
                <PlatinumAccent className="w-[100%]" />
              )}
            </div>
          </div>

          <div className="flex !h-full w-full flex-col gap-3 bg-white p-3">
            <div className="space-y-2">
              <div className="flex gap-2">
                {isLoading ? (
                  <Skeleton className="h-[22px] w-16" />
                ) : (
                  <Chip variant="default" className="overflow-hidden">
                    <div className="w-full bg-primary-accent pb-1 pl-1 pr-0.5 pt-0.5">
                      <CustomSunMoonIcon className="h-4 w-4 stroke-primary" />
                    </div>
                    <span className="py-0.5 pl-1 pr-1.5 text-[12.5px] font-semibold leading-[18px] text-primary">
                      {data.duration}
                    </span>
                  </Chip>
                )}

                {isLoading ? (
                  <Skeleton className="h-[22px] w-20" />
                ) : (
                  <Chip variant="default" className="overflow-hidden">
                    <div className="bg-primary-accent py-[3px] pl-1 pr-0.5">
                      {data.type === "Plus" ? (
                        <CustomVacationIcon
                          className="h-4 w-4"
                          fill="#1B8386"
                        />
                      ) : (
                        <CustomKaabaIcon className="h-4 w-4" fill="#1B8386" />
                      )}
                    </div>
                    <span className="py-0.5 pl-1 pr-1.5 text-[12.5px] font-semibold leading-[18px] text-primary">
                      {data.type === "Plus" ? "Plus Wisata" : data.type}
                    </span>
                  </Chip>
                )}
              </div>

              {isLoading ? (
                <Skeleton className="h-5 w-56" />
              ) : (
                <div className="line-clamp-2 text-[17.5px] leading-5 text-primary-foreground">
                  <span>
                    <span className="font-bold">{data.title}</span>
                    {data.tagline && (
                      <span className="font-normal"> {data.tagline}</span>
                    )}
                  </span>
                </div>
              )}

              <div className="relative space-y-1.5 text-[12.5px] leading-[18px] tracking-tight text-primary-foreground opacity-80">
                {/* --- Departure Date */}
                {isLoading ? (
                  <Skeleton className="h-[18px] w-40" />
                ) : (
                  <div className="flex items-center gap-1.5">
                    <CalendarDaysIcon className="h-4 w-4 stroke-primary-foreground" />
                    <span className="font-medium">
                      {moment(departureDate.date).format("DD MMMM YYYY")}
                    </span>
                    {data.departure_date.length > 1 ? (
                      <span className="opacity-60">
                        +{data.departure_date.length - 6} lainnya
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                )}

                <div className="flex gap-4">
                  {/* --- Flight */}
                  {isLoading ? (
                    <Skeleton className="h-4 w-14 rounded" />
                  ) : (
                    <div className="flex gap-1.5 text-[12.5px]">
                      <PlaneIcon className="h-4 w-4 stroke-primary-foreground" />
                      <span className="font-medium">
                        {data.flight_details.departure_flight.airline}
                      </span>
                    </div>
                  )}

                  {/* --- Hotel's Rating */}
                  {isLoading ? (
                    <Skeleton className="h-4 w-9 rounded-sm" />
                  ) : (
                    <div className="flex items-center gap-1.5 text-[12.5px]">
                      <HotelIcon className="h-4 w-4 stroke-primary-foreground" />
                      <div className="flex items-center">
                        <span className="font-medium">
                          {Number(data.hotel_details.makkah.star_rating)}
                        </span>
                        <StarIcon className="ml-0.5 h-4 w-4 fill-accent-gold stroke-none" />
                      </div>
                    </div>
                  )}
                </div>

                {/* --- Airline's Logo */}
                <div className="absolute -top-2 right-0">
                  <Image
                    width={64}
                    height={24}
                    src={data.flight_details.departure_flight.airline_logo}
                    alt={`logo-${data.flight_details.departure_flight.airline}`}
                    className="h-[42px] w-fit"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {isLoading ? (
                <Skeleton className="h-6 w-36" />
              ) : (
                <div className="flex flex-1 flex-col gap-1.5 text-primary-foreground">
                  {/* --- Discount Badge */}
                  {data.quadFinalPrice &&
                    data.quadPrice !== Number(data.quadFinalPrice) && (
                      <div className="flex gap-1">
                        <CustomSackPercentIcon
                          className="h-4 w-4"
                          fill="#ef4444"
                        />
                        <span className="text-[12.5px] font-semibold text-destructive">
                          {getAmountOfDiscount(
                            data.quadPrice,
                            Number(data.quadFinalPrice),
                          )}
                        </span>
                      </div>
                    )}

                  <div className="flex items-center gap-3">
                    {/* --- Normal Price */}
                    <h5 className="text-[17.5px] font-extrabold">
                      {data.quadFinalPrice
                        ? priceToLocale(data.quadFinalPrice)
                        : priceToLocale(data.quadPrice)}
                    </h5>

                    {/* --- Discount Price */}
                    {data.quadFinalPrice &&
                      data.quadPrice !== data.quadFinalPrice && (
                        <div className="flex items-center gap-2">
                          <span className="text-[12.5px] line-through opacity-60">
                            {priceToLocale(data.quadPrice)}
                          </span>
                        </div>
                      )}
                  </div>
                </div>
              )}

              {isLoading ? (
                <Skeleton className="h-9 w-full rounded-[14px]" />
              ) : (
                <Button
                  variant="primary"
                  size="default"
                  className="flex w-full items-center justify-center gap-1.5"
                >
                  <span className="font-semibold">Lihat Paket</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};

export { PackageCard };
