"use client";

import Link from "next/link";
import moment from "moment";
import "moment/locale/id";

import Image from  "next/legacy/image"

import GoldAccent from "@/public/patterns/gold-accent.svg";
import SilverAccent from "@/public/patterns/silver-accent.svg";
import PlatinumAccent from "@/public/patterns/platinum-accent.svg";

import CustomSunMoonIcon from "@/public/icons/tabler_sun-moon.svg";
import CustomVacationIcon from "@/public/icons/custom-vacation.svg";
import CustomPercentWavyIcon from "@/public/icons/percent-wavy.svg";
import CustomKaabaIcon from "@/public/icons/la_kaaba.svg";
import CustomAirplaneIcon from "@/public/icons/bi_airplane.svg";
import CustomFastTrainIcon from "@/public/icons/material-symbols_train-rounded.svg";
import CustomMaskapaiIcon from "@/public/icons/custom-icon/icon-maskapai.svg";

import { Chip } from "./chip";
import { Button } from "./button";
import { CalendarDaysIcon } from "lucide-react";
import { cn, priceToLocale } from "@/lib/utils";
import { UmrahPackage } from "@/types/package-details";
import { useEffect, useMemo, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "./skeleton-loader";
import { Rating2 } from "./helper/getRating";
import { CustomSwiper } from "../layout/swiper";

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
                priority
              />
            )}
            <div className="absolute -bottom-px h-fit">
              {data.category === "Silver" && (
                <SilverAccent className="w-[100%]" />
              )}
              {data.category === "Gold" && <GoldAccent className="w-[100%]" />}
              {data.category === "Platinum" && (
                <PlatinumAccent className="w-[100%]" />
              )}
            </div>
          </div>

          <div className="flex !h-full w-full flex-col gap-2 bg-white p-3">
            <div className="space-y-0">
              <CustomSwiper padding={0} gap={8}>
                {isLoading ? (
                  <Skeleton className="mb-2 h-[22px] w-16" />
                ) : (
                  <Chip variant="default" className="overflow-hidden">
                    <div className="w-full bg-primary-accent pb-1 pl-1 pr-0.5 pt-0.5">
                      <CustomSunMoonIcon className="h-4 w-4 stroke-primary" />
                    </div>
                    <span className="py-0.5 pl-1 pr-1.5 text-[12.5px] font-semibold leading-[18px] text-neutral-foreground">
                      {data.duration}
                    </span>
                  </Chip>
                )}

                {isLoading ? (
                  <Skeleton className="mb-2 h-[22px] w-20" />
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
                    <span className="py-0.5 pl-1 pr-1.5 text-[12.5px] font-semibold leading-[18px] text-neutral-foreground">
                      {data.type === "Plus" ? "Plus Wisata" : data.type}
                    </span>
                  </Chip>
                )}

                {isLoading ? (
                  <Skeleton className="mb-2 h-[22px] w-20" />
                ) : (
                  <Chip variant="default" className="overflow-hidden">
                    <div className="bg-primary-accent py-[3px] pl-1 pr-0.5">
                      {data.flight_details.departure_flight.transit ? (
                        <CustomAirplaneIcon
                          className="h-4 w-4 rotate-90"
                          fill="#1B8386"
                        />
                      ) : (
                        <CustomAirplaneIcon
                          className="h-4 w-4"
                          fill="#1B8386"
                        />
                      )}
                    </div>
                    <span className="py-0.5 pl-1 pr-1.5 text-[12.5px] font-semibold leading-[18px] text-neutral-foreground">
                      {data.flight_details.departure_flight.transit
                        ? "Transit"
                        : "Langsung"}
                    </span>
                  </Chip>
                )}

                {/* --- Fast Train? */}
                {data.isFastTrain &&
                  (isLoading ? (
                    <Skeleton className="mb-2 h-[22px] w-[110px] rounded-[8px]" />
                  ) : (
                    <Chip variant="default" className="overflow-hidden">
                      <div className="bg-primary-accent py-[3px] pl-1 pr-0.5">
                        <CustomFastTrainIcon
                          className="h-4 w-4"
                          fill="#1B8386"
                        />
                      </div>
                      <span className="py-0.5 pl-1 pr-1.5 text-[12.5px] font-semibold leading-[18px] text-neutral-foreground">
                        Kereta Cepat
                      </span>
                    </Chip>
                  ))}
              </CustomSwiper>

              <div className="space-y-2">
                {isLoading ? (
                  <Skeleton className="h-6 w-64" />
                ) : (
                  <div className="line-clamp-2 text-sm leading-6 tracking-[-0.30px] text-primary-foreground xs:text-[17px]">
                    <span className="font-bold">{data.title}</span>
                  </div>
                )}

                <div className="relative space-y-2 text-[13px] leading-[18px] tracking-tight text-neutral-foreground opacity-80">
                  {/* --- Departure Date */}
                  {isLoading ? (
                    <Skeleton className="h-[18px] w-56" />
                  ) : (
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-4 w-4 stroke-neutral-foreground" />
                      <span className="font-medium tracking-wide">
                        {moment(departureDate.date).format("DD MMMM YYYY")}
                      </span>
                      {data.departure_date.length > 1 ? (
                        <span className="text-xs leading-[18px] tracking-wide opacity-60">
                          +{data.departure_date.length - 6} tanggal lainnya
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  )}

                  {/* --- Flight */}
                  {isLoading ? (
                    <Skeleton className="h-6 w-52" />
                  ) : (
                    <div className="flex items-center gap-1 text-[13px] leading-[18px] tracking-wide">
                      <div className="flex items-center gap-2 font-medium">
                        <CustomMaskapaiIcon className="flex flex-shrink-0" />
                        <div className="flex w-[70px] justify-between">
                          <p>Maskapai</p>
                          <span>:</span>
                        </div>
                      </div>
                      <span className="font-bold leading-[18px] tracking-wide">
                        {data.flight_details.departure_flight.airline}
                      </span>
                    </div>
                  )}

                  {/* --- Madinah Hotel's Rating */}
                  {isLoading ? (
                    <Skeleton className="h-6 w-56" />
                  ) : (
                    <div className="flex items-start gap-1 text-[13px] leading-[18px] tracking-wide">
                      <div className="flex flex-shrink-0 items-center gap-2 font-medium">
                        <Rating2
                          starsRating={data.hotel_details.madinah.star_rating}
                        />
                        <div className="flex w-[68px] justify-between">
                          <p>Madinah</p>
                          <span>:</span>
                        </div>
                      </div>
                      <span className="mt-1 font-bold leading-[18px] tracking-wide">
                        {data.hotel_details.madinah.hotel_name}
                      </span>
                    </div>
                  )}

                  {/* --- Makkah Hotel's Rating */}
                  {isLoading ? (
                    <Skeleton className="h-6 w-60" />
                  ) : (
                    <div className="flex items-start gap-1 text-[13px] leading-[18px] tracking-wide">
                      <div className="flex flex-shrink-0 items-center gap-2 font-medium">
                        <Rating2
                          starsRating={data.hotel_details.makkah.star_rating}
                        />
                        <div className="flex w-[68px] justify-between">
                          <p className="w-[60px]">Makkah</p>
                          <span>:</span>
                        </div>
                      </div>
                      <span className="mt-1 font-bold leading-[18px] tracking-wide">
                        {data.hotel_details.makkah.hotel_name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {isLoading ? (
                <Skeleton className="h-6 w-36" />
              ) : (
                <div className="flex flex-1 flex-col gap-1.5 text-primary-foreground">
                  <div className="flex items-center gap-1 xs:gap-2">
                    {/* --- Normal Price */}
                    <h5 className="flex-shrink-0 text-base font-extrabold xs:text-[17.5px]">
                      {data.quadFinalPrice
                        ? priceToLocale(data.quadFinalPrice)
                        : priceToLocale(data.quadPrice)}
                    </h5>

                    {/* --- Discount Price */}
                    {data.quadFinalPrice &&
                      data.quadPrice !== data.quadFinalPrice && (
                        <div className="flex flex-shrink-0 items-center gap-1">
                          <CustomPercentWavyIcon
                            className="h-3 w-3 xs:h-4 xs:w-4"
                            stroke="#EF4444"
                          />
                          <span className="text-[11px] leading-5 text-destructive line-through opacity-80 xs:text-sm">
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
