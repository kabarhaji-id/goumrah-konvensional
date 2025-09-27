"use client";

import CustomSunMoonIcon from "@/public/icons/tabler_sun-moon.svg";
import CustomVacationIcon from "@/public/icons/custom-vacation.svg";
import CustomFastTrainIcon from "@/public/icons/material-symbols_train-rounded.svg";
import CustomAirplaneIcon from "@/public/icons/bi_airplane.svg";
import IconWhite from "@/public/image/icon-white.svg";
import IconNabawi from "@/public/icons/nabawi.svg";
import IconKabaa from "@/public/icons/kabaa.svg";

import { Chip } from "@/components/ui/chip";
import { UmrahPackage } from "@/types/package-details";
import { useEffect, useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { NavigatorConnection } from "@/types/navigator-connection";
import { CustomSwiper } from "@/components/layout/swiper";
import { CalendarDaysIcon, HotelIcon, MountainIcon, RepeatIcon } from "lucide-react";
import moment from "moment";
import { Rating } from "@/components/ui/helper/getRating";
import { Tooltip } from "react-tooltip";

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
      {isLoading ? (
        <Skeleton className="h-[26px] w-[200px]" />
      ) : (
        <h1 className="mx-4 flex text-[21px] font-semibold leading-none tracking-[0.5px] mb-1">
          {packageData.title}
        </h1>
      )}

      <div className="flex items-center gap-2 flex-wrap px-4">
        {/* Start of features */}
        {isLoading ? (
          <Skeleton className="mb-2 h-[22px] w-16" />
        ) : (
          <>
            {packageData.category === "Silver" && (
              <div id="feature-class" className="flex items-center justify-center whitespace-nowrap text-xs font-display font-semibold rounded-[8px] text-white h-fit bg-gradient-to-tr from-[#1B8386] to-[#61B3B6] p-1">
                <div className="p-1">
                  <IconWhite className="h-4 w-4 stroke-white" />
                </div>
                <span className="h-6 py-0.5 pl-0.5 pr-1.5 text-xs font-bold leading-[18px] tracking-wider">
                  Paket Silver
                </span>
              </div>
            )}
            {packageData.category === "Gold" && (
              <div id="feature-class" className="flex items-center justify-center whitespace-nowrap text-xs font-display font-semibold rounded-[8px] text-white h-fit bg-gradient-to-tr from-[#CA9822] to-[#E6CA69] p-1">
                <div className="p-1">
                  <IconWhite className="h-4 w-4 stroke-white" />
                </div>
                <span className="h-6 py-0.5 pl-0.5 pr-1.5 text-xs font-bold leading-[18px] tracking-wider">
                  Paket Gold
                </span>
              </div>
            )}
            {packageData.category === "Platinum" && (
              <div id="feature-class" className="flex items-center justify-center whitespace-nowrap text-xs font-display font-semibold rounded-[8px] text-white h-fit bg-gradient-to-tr from-[#242424] to-[#686868] p-1">
                <div className="p-1">
                  <IconWhite className="h-4 w-4 stroke-white" />
                </div>
                <span className="h-6 py-0.5 pl-0.5 pr-1.5 text-xs font-bold leading-[18px] tracking-wider">
                  Paket Platinum
                </span>
              </div>
            )}
            <Tooltip anchorSelect="#feature-class">Kelas Paket</Tooltip>
          </>
        )}

        {isLoading ? (
          <Skeleton className="mb-2 h-[22px] w-16" />
        ) : (
          <>
            <Chip id="feature-departure-date" variant="default" className="overflow-hidden border-[3px]">
              <div className="w-full bg-primary-accent p-1.5">
                <CalendarDaysIcon className="h-[18px] w-[18px] stroke-primary" />
              </div>
              <span className="py-1 pl-1 pr-1.5 text-[13px] font-semibold leading-[18px] text-neutral-foreground">
                {moment(departureDate.date).format("DD MMM YYYY")}
              </span>
            </Chip>
            <Tooltip anchorSelect="#feature-departure-date">Tanggal Keberangkatan</Tooltip>
          </>
        )}

        {isLoading ? (
          <Skeleton className="mb-2 h-[22px] w-16" />
        ) : (
          <>
            <Chip id="feature-duration" variant="default" className="overflow-hidden border-[3px]">
              <div className="w-full bg-primary-accent p-1.5">
                <CustomSunMoonIcon className="h-[18px] w-[18px] stroke-primary" />
              </div>
              <span className="py-1 pl-1 pr-1.5 text-[13px] font-semibold leading-[18px] text-neutral-foreground">
                {packageData.duration}
              </span>
            </Chip>
            <Tooltip anchorSelect="#feature-duration">Durasi</Tooltip>
          </>
        )}

        {isLoading ? (
          <Skeleton className="mb-2 h-[22px] w-20" />
        ) : (
          <>
            <Chip id="feature-type" variant="default" className="overflow-hidden border-[3px]">
              <div className="w-full bg-primary-accent p-1.5">
                {packageData.type === "Plus" ? (
                  <CustomVacationIcon
                    className="h-[18px] w-[18px]"
                    fill="#1B8386"
                  />
                ) : (
                  <RepeatIcon
                    className="h-[18px] w-[18px]"
                    stroke="#1B8386"
                  />
                )}
              </div>
              <span className="py-1 pl-1 pr-1.5 text-[13px] font-semibold leading-[18px] text-neutral-foreground">
                {packageData.type === "Plus" ? "Plus Wisata" : packageData.type}
              </span>
            </Chip>
            <Tooltip anchorSelect="#feature-type">Tipe Paket</Tooltip>
          </>
        )}

        {isLoading ? (
          <Skeleton className="mb-2 h-[22px] w-20" />
        ) : (
          <>
            <Chip id="feature-flight-type" variant="default" className="overflow-hidden border-[3px]">
              <div className="w-full bg-primary-accent p-1.5">
                {packageData.flight_details.departure_flight.transit ? (
                  <CustomAirplaneIcon
                    className="h-[18px] w-[18px] rotate-90"
                    fill="#1B8386"
                  />
                ) : (
                  <CustomAirplaneIcon
                    className="h-[18px] w-[18px]"
                    fill="#1B8386"
                  />
                )}
              </div>
              <span className="py-1 pl-1 pr-1.5 text-[13px] font-semibold leading-[18px] text-neutral-foreground">
                {packageData.flight_details.departure_flight.transit ? `Transit ${packageData.flight_details.departure_flight.transit.airport_city_departure}` : "Langsung"}
              </span>
            </Chip>
            <Tooltip anchorSelect="#feature-flight-type">Jenis Penerbangan</Tooltip>
          </>
        )}

        {isLoading ? (
          <Skeleton className="mb-2 h-[22px] w-20" />
        ) : (
          <>
            <Chip id="feature-madinah-hotel" variant="default" className="overflow-hidden border-[3px]">
              <div className="w-full bg-primary-accent p-1.5">
                <IconNabawi className="h-[18px] w-[18px] fill-[#1B8386]" />
              </div>
              <span className="py-1 pl-1 pr-1.5 text-[13px] font-semibold leading-[18px] text-neutral-foreground">
                <Rating className="gap-0" totalStars={packageData.hotel_details.madinah.star_rating} starClassName="size-4" />
              </span>
            </Chip>
            <Tooltip anchorSelect="#feature-madinah-hotel">Hotel Madinah</Tooltip>
          </>
        )}

        {isLoading ? (
          <Skeleton className="mb-2 h-[22px] w-20" />
        ) : (
          <>
            <Chip id="feature-makkah-hotel" variant="default" className="overflow-hidden border-[3px]">
              <div className="w-full bg-primary-accent p-1.5">
                <IconKabaa className="h-[18px] w-[18px] fill-[#1B8386]" />
              </div>
              <span className="py-1 pl-1 pr-1.5 text-[13px] font-semibold leading-[18px] text-neutral-foreground">
                <Rating className="gap-0" totalStars={packageData.hotel_details.makkah.star_rating} starClassName="size-4" />
              </span>
            </Chip>
            <Tooltip anchorSelect="#feature-makkah-hotel">Hotel Makkah</Tooltip>
          </>
        )}

        {/* --- Fast Train? */}
        {packageData.isFastTrain &&
          (isLoading ? (
            <Skeleton className="mb-2 h-[22px] w-[110px] rounded-[8px]" />
          ) : (
            <>
              <Chip id="feature-fast-train" variant="default" className="overflow-hidden border-[3px]">
                <div className="w-full bg-primary-accent p-1.5">
                  <CustomFastTrainIcon
                    className="h-[18px] w-[18px]"
                    fill="#1B8386"
                  />
                </div>
                <span className="py-1 pl-1 pr-1.5 text-[13px] font-semibold leading-[18px] text-neutral-foreground">
                  Kereta Cepat
                </span>
              </Chip>
              <Tooltip anchorSelect="#feature-fast-train">Menggunakan Kereta Cepat</Tooltip>
            </>
          ))}

        {/* --- Thaif */}
        {isLoading ? (
          <Skeleton className="mb-2 h-[22px] w-[110px] rounded-[8px]" />
        ) : (
          <>
            <Chip id="feature-thaif" variant="default" className="overflow-hidden border-[3px]">
              <div className="w-full bg-primary-accent p-1.5">
                <MountainIcon
                  className="h-[18px] w-[18px]"
                  stroke="#1B8386"
                />
              </div>
              <span className="py-1 pl-1 pr-1.5 text-[13px] font-semibold leading-[18px] text-neutral-foreground">
                Thaif
              </span>
            </Chip>
            <Tooltip anchorSelect="#feature-thaif">Thaif</Tooltip>
          </>
        )}
      </div>
    </div>
  );
};

export { HeaderComponent };
