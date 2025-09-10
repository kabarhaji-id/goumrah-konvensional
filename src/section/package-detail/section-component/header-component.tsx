"use client";

import CustomSunMoonIcon from "@/public/icons/tabler_sun-moon.svg";
import CustomVacationIcon from "@/public/icons/custom-vacation.svg";
import CustomFastTrainIcon from "@/public/icons/material-symbols_train-rounded.svg";
import CustomKaabaIcon from "@/public/icons/la_kaaba.svg";
import ReceiptIcon from "@/public/icons/fluent_receipt-money-16-regular.svg";
import CustomAirplaneIcon from "@/public/icons/bi_airplane.svg";

import { Chip } from "@/components/ui/chip";
import { UmrahPackage } from "@/types/package-details";
import { useEffect, useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { NavigatorConnection } from "@/types/navigator-connection";
import { CustomSwiper } from "@/components/layout/swiper";
import { CalendarDaysIcon, HotelIcon, MountainIcon } from "lucide-react";
import moment from "moment";
import { Rating } from "@/components/ui/helper/getRating";

const HeaderComponent = ({
  packageData,
  durationDays,
}: {
  packageData: UmrahPackage;
  durationDays: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  const departureDate = useMemo(() => {
    return (
      packageData.departure_date.find(
        (departureDate) => departureDate.status === "active",
      ) ?? packageData.departure_date[0]
    );
  }, [packageData.departure_date]);

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
    <div className="flex flex-col gap-3">
      <div className="flex items-center px-4 gap-2 flex-wrap">
        {/* Tanggal Keberangkatan */}
        {isLoading ? (
          <Skeleton className="h-[25px] w-20 rounded-[8px]" />
        ) : (
          <Chip variant="default" className="overflow-hidden border-[3px]">
            <div className="w-full bg-primary-accent p-1">
              <CalendarDaysIcon className="h-4 w-4 stroke-primary" />
            </div>
            <span className="py-1 pl-1 pr-1.5 text-sm font-semibold leading-4 tracking-wide text-neutral-foreground">
              {moment(departureDate.date).format("DD MMM YYYY")}
            </span>
          </Chip>
        )}

        {/* --- Duration Days */}
        {isLoading ? (
          <Skeleton className="h-[25px] w-[70px] rounded-[8px]" />
        ) : (
          <Chip variant="default" className="overflow-hidden border-[3px]">
            <div className="w-full bg-primary-accent p-1">
              <CustomSunMoonIcon className="h-4 w-4 xxs:h-5 xxs:w-5 stroke-primary" />
            </div>
            <span className="py-1 pl-1 pr-1.5 text-sm font-semibold leading-4 tracking-wide text-neutral-foreground">
              {durationDays}
            </span>
          </Chip>
        )}

        {/* --- Package Type */}
        {isLoading ? (
          <Skeleton className="h-[25px] w-[81px] rounded-[8px]" />
        ) : (
          <Chip variant="default" className="overflow-hidden border-[3px]">
            <div className="w-full bg-primary-accent p-1">
              {packageData.type === "Plus" ? (
                <CustomVacationIcon className="h-4 w-4 xxs:h-5 xxs:w-5" fill="#1B8386" />
              ) : (
                <CustomKaabaIcon className="h-4 w-4 xxs:h-5 xxs:w-5" fill="#1B8386" />
              )}
            </div>
            <span className="py-1 pl-1 pr-1.5 text-sm font-semibold leading-4 tracking-wide text-neutral-foreground">
              {packageData.type === "Plus" ? "Plus Wisata" : "Reguler"}
            </span>
          </Chip>
        )}

        {/* --- Flight Type */}
        {/* {isLoading ? (
          <Skeleton className="h-[25px] w-[110px] rounded-[8px]" />
        ) : (
          <Chip variant="default" className="overflow-hidden border-[3px]">
            <div className="w-full bg-primary-accent p-1">
              <CustomAirplaneIcon
                className="h-4 w-4 xxs:h-5 xxs:w-5 rotate-90"
                fill="#1B8386"
              />
            </div>
            <span className="py-1 pl-1 pr-1.5 text-sm font-semibold leading-4 tracking-wide text-neutral-foreground">
              {packageData.flight_details.departure_flight.transit
                ? "Transit"
                : "Langsung"}
            </span>
          </Chip>
        )} */}

        {/* --- Thaif */}
        {isLoading ? (
          <Skeleton className="h-[25px] w-[110px] rounded-[8px]" />
        ) : (
          <Chip variant="default" className="overflow-hidden border-[3px]">
            <div className="w-full bg-primary-accent p-1">
              <CustomAirplaneIcon
                className="h-4 w-4 xxs:h-5 xxs:w-5 rotate-90"
                fill="#1B8386"
              />
            </div>
            <span className="py-1 pl-1 pr-1.5 text-sm font-semibold leading-4 tracking-wide text-neutral-foreground">
              {packageData.flight_details.departure_flight.airline}
            </span>
          </Chip>
        )}

        {isLoading ? (
          <Skeleton className="h-[25px] w-[81px] rounded-[8px]" />
        ) : (
          <Chip variant="default" className="overflow-hidden border-[3px]">
            <div className="w-full bg-primary-accent p-1">
              <HotelIcon
                className="h-4 w-4 xxs:h-5 xxs:w-5 stroke-[#1B8386]"
              />
            </div>
            <span className="py-1 pl-1 pr-1.5 text-sm font-semibold leading-4 tracking-wide text-neutral-foreground">
              <Rating className="gap-0" totalStars={packageData.hotel_details.makkah.star_rating} />
            </span>
          </Chip>
        )}

        {/* --- Fast Train? */}
        {packageData.isFastTrain &&
          (isLoading ? (
            <Skeleton className="h-[25px] w-[110px] rounded-[8px]" />
          ) : (
            <Chip variant="default" className="overflow-hidden border-[3px]">
              <div className="bg-primary-accent pb-[3px] pl-1 pr-0.5 pt-1">
                <CustomFastTrainIcon className="h-4 w-4 xxs:h-5 xxs:w-5" fill="#1B8386" />
              </div>
              <span className="py-[3px] pl-1 pr-1.5 text-sm font-semibold leading-[18px] text-neutral-foreground">
                Kereta Cepat
              </span>
            </Chip>
          ))}

        {/* --- Thaif */}
        {isLoading ? (
          <Skeleton className="h-[25px] w-[110px] rounded-[8px]" />
        ) : (
          <Chip variant="default" className="overflow-hidden border-[3px]">
            <div className="w-full bg-primary-accent p-1">
              <MountainIcon
                className="h-4 w-4 xxs:h-5 xxs:w-5 stroke-[#1B8386]"
              />
            </div>
            <span className="py-1 pl-1 pr-1.5 text-sm font-semibold leading-4 tracking-wide text-neutral-foreground">
              Thaif
            </span>
          </Chip>
        )}
      </div>

      <div className="flex flex-col gap-2 px-4">
        {/* --- Title */}
        {isLoading ? (
          <Skeleton className="h-[26px] w-[200px]" />
        ) : (
          <h1 className="flex text-xl font-semibold leading-[130%] tracking-[0.5px]">
            {packageData.title}
          </h1>
        )}

        {/* --- Fast Train? */}
        {/* {packageData.isFastTrain &&
          (isLoading ? (
            <Skeleton className="h-[21px] w-[300px]" />
          ) : (
            <p className="text-sm font-medium leading-[150%] tracking-wide text-primary">
              Lebih Nyaman dengan Kereta Cepat
            </p>
          ))} */}

        {/* --- Days */}
        {/* {isLoading ? (
          <Skeleton className="h-4 w-[160px]" />
        ) : (
          <p className="flex gap-1 text-xs text-neutral-foreground">
            {packageData.itineraries.length > 2 && (
              <>
                <span>
                  {
                    packageData.itineraries.find(
                      (i) => i.city !== "Madinah" && i.city !== "Madinah",
                    )?.duration
                  }{" "}
                  hari{" "}
                  {
                    packageData.itineraries.find(
                      (i) => i.city !== "Madinah" && i.city !== "Madinah",
                    )?.city
                  }
                </span>
                ·
              </>
            )}
            <span>
              {
                packageData.itineraries.find((i) => i.city === "Madinah")
                  ?.duration
              }{" "}
              hari Madinah
            </span>
            ·
            <span>
              {
                packageData.itineraries.find((i) => i.city === "Makkah")
                  ?.duration
              }{" "}
              hari Makkah
            </span>
          </p>
        )} */}

        {/* --- Early Payment (DP) */}
        {/* {isLoading ? (
          <Skeleton className="h-4 w-[180px]" />
        ) : (
          <div className="flex items-center gap-1">
            <ReceiptIcon className="h-4 w-4" fill="#EF4444" />
            <p className="text-xs leading-4 text-destructive">
              Pembayaran Awal (DP) :
              <span className="pl-0.5 font-extrabold">
                Rp {packageData.down_payment} Juta
              </span>
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export { HeaderComponent };
