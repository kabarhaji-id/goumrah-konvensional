"use client";

import CustomSunMoonIcon from "@/public/icons/tabler_sun-moon.svg";
import CustomVacationIcon from "@/public/icons/custom-vacation.svg";
import CustomFastTrainIcon from "@/public/icons/material-symbols_train-rounded.svg";
import CustomKaabaIcon from "@/public/icons/la_kaaba.svg";
import ReceiptIcon from "@/public/icons/fluent_receipt-money-16-regular.svg";
import CustomAirplaneIcon from "@/public/icons/bi_airplane.svg";

import { Chip } from "@/components/ui/chip";
import { UmrahPackage } from "@/types/package-details";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { NavigatorConnection } from "@/types/navigator-connection";
import { CustomSwiper } from "@/components/layout/swiper";

const HeaderComponent = ({
  packageData,
  durationDays,
}: {
  packageData: UmrahPackage;
  durationDays: string;
}) => {
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
    <div className="flex flex-col gap-4">
      <CustomSwiper padding={4} gap={8}>
        {/* --- Duration Days */}
        {isLoading ? (
          <Skeleton className="h-[25px] w-[70px] rounded-[8px]" />
        ) : (
          <Chip variant="default" className="overflow-hidden">
            <div className="w-full bg-primary-accent p-1">
              <CustomSunMoonIcon className="h-4 w-4 stroke-primary" />
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
          <Chip variant="default" className="overflow-hidden">
            <div className="w-full bg-primary-accent p-1">
              {packageData.type === "Plus" ? (
                <CustomVacationIcon className="h-4 w-4" fill="#1B8386" />
              ) : (
                <CustomKaabaIcon className="h-4 w-4" fill="#1B8386" />
              )}
            </div>
            <span className="py-1 pl-1 pr-1.5 text-sm font-semibold leading-4 tracking-wide text-neutral-foreground">
              {packageData.type === "Plus" ? "Plus Wisata" : "Reguler"}
            </span>
          </Chip>
        )}

        {/* --- Flight Type */}
        {isLoading ? (
          <Skeleton className="h-[25px] w-[110px] rounded-[8px]" />
        ) : (
          <Chip variant="default" className="overflow-hidden">
            <div className="bg-primary-accent py-1 pl-1 pr-0.5">
              {packageData.flight_details.departure_flight.transit ? (
                <CustomAirplaneIcon
                  className="h-4 w-4 rotate-90"
                  fill="#1B8386"
                />
              ) : (
                <CustomAirplaneIcon className="h-4 w-4" fill="#1B8386" />
              )}
            </div>
            <span className="py-1 pl-1 pr-1.5 text-sm font-semibold leading-4 tracking-wide text-neutral-foreground">
              {packageData.flight_details.departure_flight.transit
                ? "Transit"
                : "Langsung"}
            </span>
          </Chip>
        )}

        {/* --- Fast Train? */}
        {packageData.isFastTrain &&
          (isLoading ? (
            <Skeleton className="h-[25px] w-[110px] rounded-[8px]" />
          ) : (
            <Chip variant="default" className="overflow-hidden">
              <div className="bg-primary-accent pb-[3px] pl-1 pr-0.5 pt-1">
                <CustomFastTrainIcon className="h-4 w-4" fill="#1B8386" />
              </div>
              <span className="py-[3px] pl-1 pr-1.5 text-sm font-semibold leading-[18px] text-neutral-foreground">
                Kereta Cepat
              </span>
            </Chip>
          ))}
      </CustomSwiper>

      <div className="flex flex-col gap-2 px-4">
        {/* --- Title */}
        {isLoading ? (
          <Skeleton className="h-[26px] w-[200px]" />
        ) : (
          <h3 className="flex text-xl font-semibold leading-[130%] tracking-[0.5px]">
            {packageData.title}
          </h3>
        )}

        {/* --- Fast Train? */}
        {packageData.isFastTrain &&
          (isLoading ? (
            <Skeleton className="h-[21px] w-[300px]" />
          ) : (
            <p className="text-sm font-medium leading-[150%] tracking-wide text-primary">
              Lebih Nyaman dengan Kereta Cepat
            </p>
          ))}

        {/* --- Days */}
        {isLoading ? (
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
        )}

        {/* --- Early Payment (DP) */}
        {isLoading ? (
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
        )}
      </div>
    </div>
  );
};

export { HeaderComponent };
