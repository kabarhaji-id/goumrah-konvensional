"use client";

import moment from "moment";
import "moment/locale/id";
import "../../../app/globals.css";

import CustomAirplaneMarkerIcon from "@/public/icons/mdi_airplane-marker.svg";

import { Fragment, useEffect, useState } from "react";
import { CalendarDaysIcon } from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { CardDetail, CardDetailContent, CardDetailHeader } from "@/components/ui/card/package-detail-card";
import { DepartureCityDetail, DepartureDateDetail, Flight } from "@/types/package-details";
import { CustomSwiper } from "@/components/layout/swiper";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Tooltip } from "react-tooltip";

interface FilterProps {
  flight: Flight;
  departureDates: DepartureDateDetail[];
  embarkation: DepartureCityDetail[];
  variant: "departureDate" | "departureCity";
}

const FilterSection = ({
  flight,
  departureDates,
  embarkation,
  variant,
}: FilterProps) => {
  moment.locale("id");

  // const filteredDates = departureDates.filter((d) => d.status === "active");

  // const resultDates = filteredDates.length > 0 ? filteredDates : departureDates;

  // const [selectedDate, setSelectedDate] = useState(resultDates[0].date);
  const [isLoading, setIsLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  // Fungsi untuk mendapatkan index initial slide
  const getInitialSlideIndex = () => {
    const activeIndex = departureDates.findIndex((d) => d.status === "active");
    if (activeIndex <= 0) return 0;

    const prev = departureDates[activeIndex - 1];
    if (prev.status === "expired" || prev.status === "musim-haji" || prev.status === "closing-umrah") {
      return activeIndex - 1; // Kembali ke expired sebelumnya
    }

    return activeIndex;
  };

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
    <Section className="px-4 py-0">
      <SectionContent>
        <CardDetail>
          <CardDetailHeader className="flex items-center">
            {variant === "departureDate" ? (
              <>
                <CalendarDaysIcon className="h-4 w-4 stroke-primary" />
                <span className="text-sm font-semibold text-primary">
                  Pilih Tanggal Keberangkatan
                </span>
              </>
            ) : (
              <>
                <CustomAirplaneMarkerIcon className="h-4 w-4" fill="#1B8386" />
                <span className="text-sm font-semibold text-primary">
                  Keberangkatan & Kepulangan
                </span>
              </>
            )}
          </CardDetailHeader>

          <CardDetailContent
            className={`flex items-center gap-2 overflow-visible rounded-[10px] pb-4 pt-3 ${variant === "departureCity" && "px-2"}`}
          >
            {variant === "departureDate" && departureDates ? (
              <CustomSwiper
                gap={8}
                padding={2}
                slidesClass="pb-2 w-[110px]"
                initialSlide={getInitialSlideIndex()} // Menggunakan index yang dihitung
              >
                {departureDates.map((date, index) => {
                  return isLoading ? (
                    <Skeleton key={index} className="h-16 w-[110px]" />
                  ) : (
                    <div key={index} id="departure-date" className="flex w-[110px] gap-2">
                      <div
                        className={`relative flex h-16 w-full flex-col items-center justify-center rounded-[10px] px-1 pb-3.5 pt-2 ${date.status === "active"
                          ? "border border-primary bg-primary-background text-primary"
                          : "bg-gray border text-neutral-foreground"
                          } ${date.status === "expired" &&
                          "pointer-events-none bg-subtle-background"
                          } ${date.status === "musim-haji" &&
                          "gold-border pointer-events-none bg-custom-gold-gradient"
                          } ${date.status === "closing-umrah" &&
                          "pointer-events-none bg-[#8E8E93] text-white"
                          } ${date.status === "coming-soon" &&
                          "pointer-events-none bg-subtle-background"
                          }`}
                      >
                        <span className="text-xs tracking-tight">
                          {date.status !== "musim-haji" &&
                            date.status !== "closing-umrah" &&
                            moment(date.date).format("dddd")}
                          {date.status === "musim-haji" && "Musim Haji 2025"}
                          {date.status === "closing-umrah" && "Penutupan Musim"}
                        </span>
                        <span className="text-base font-semibold tracking-wide">
                          {date.status !== "musim-haji"
                            ? moment(date.date).format("DD MMM")
                            : moment(date.date).format("MMMM")}
                        </span>

                        {date.status === "coming-soon" && (
                          <span
                            className={`absolute -bottom-2 !z-[999] rounded-[4px] bg-[#999999] px-1 text-[10px] font-medium tracking-wide text-gray-100`}
                          >
                            Belum Dibuka
                          </span>
                        )}

                        {date.status === "musim-haji" && (
                          <span
                            className={`absolute -bottom-2 !z-[999] rounded-[4px] bg-accent-light-gold px-1 text-[10px] font-medium tracking-wide text-neutral-foreground`}
                          >
                            Pelaksanaan Haji
                          </span>
                        )}

                        {date.status === "active" && (
                          <span
                            className={`absolute -bottom-2 rounded-[4px] bg-primary px-1 text-[10px] font-medium tracking-wide text-white`}
                          >
                            Kuota Tersedia
                          </span>
                        )}

                        {date.status === "closing-umrah" && (
                          <span
                            className={`absolute -bottom-2 w-fit flex-shrink-0 whitespace-nowrap rounded-[4px] bg-[#999999] px-1 text-[10px] font-medium tracking-wide text-white`}
                          >
                            Penutupan Umrah 2025
                          </span>
                        )}

                        {date.status === "expired" && (
                          <span
                            className={`absolute -bottom-2 !z-[999] rounded-[4px] bg-[#999999] px-1 text-[10px] font-medium tracking-wide text-gray-100`}
                          >
                            Kuota Penuh
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CustomSwiper>
            ) : (
              <CustomSwiper gap={8} padding={2} slidesClass="min-w-48 xxs:min-w-56">
                {embarkation &&
                  embarkation.map((city, index: number) => {
                    return isLoading ? (
                      <Skeleton key={index} className="h-[58px] w-full" />
                    ) : (
                      <div key={index} className="flex w-full cursor-pointer divide-x divide-primary border border-primary rounded-[10px] bg-primary-background">
                        <div className="flex grow flex-col gap-1 px-3 py-2 text-center">
                          <p className="text-sm font-normal tracking-tight whitespace-nowrap">
                            {city.city}
                          </p>
                          <p className="text-[13px] font-medium tracking-wide whitespace-nowrap">
                            {city.route}
                          </p>
                        </div>
                        <div className="flex flex-col gap-0 items-center justify-center text-center basis-1/4 px-3.5">
                          <p className="text-base font-semibold leading-tight whitespace-nowrap">
                            {city.date}
                          </p>
                          {/* <p className="text-sm font-medium leading-snug">{city.date.split(" ")[1]}</p> */}
                        </div>
                      </div>
                    )
                  })
                }
              </CustomSwiper>
              // <Fragment key={index}>
              //   <div
              //     onClick={() => onFilterChange(city.city)}
              //     className={`flex w-full cursor-pointer flex-col gap-1 rounded-[10px] px-3 pb-3.5 pt-1 text-center ${selectedCity! === city.city
              //       ? "border border-primary bg-primary-background text-neutral-foreground"
              //       : "border border-neutral-200"
              //       }`}
              //   >
              //     <p className="text-sm font-semibold tracking-tight">
              //       {city.city}
              //     </p>
              //     <p className="text-[13px] font-medium tracking-wide">
              //       {city.route}&nbsp;&nbsp;|&nbsp;&nbsp;{city.date}
              //     </p>
              //   </div>
              //   <div
              //     onClick={() => onFilterChange(city.city)}
              //     className={`flex w-full cursor-pointer flex-col gap-1 rounded-[10px] px-3 pb-3.5 pt-1 text-center ${selectedCity! === city.city
              //       ? "border border-primary bg-primary-background text-neutral-foreground"
              //       : "border border-neutral-200"
              //       }`}
              //   >
              //     <p className="text-sm font-semibold tracking-tight">
              //       {city.returnCity}
              //     </p>
              //     <p className="text-[13px] font-medium tracking-wide">
              //       {city.returnRoute}&nbsp;&nbsp;|&nbsp;&nbsp;{city.returnDate}
              //     </p>
              //   </div>
              // </Fragment>
            )}
          </CardDetailContent>
        </CardDetail >
      </SectionContent >
      <Tooltip anchorSelect="#departure-date" positionStrategy="fixed" className="text-center" place="top">
        <p>Keberangkatan : {moment(flight.departure_flight.departure_datetime).format("DD MMM")} ( {flight.departure_flight.airport_code_departure} - {flight.departure_flight.transit ? flight.departure_flight.transit.airport_code_arrival : flight.departure_flight.airport_code_arrival} )</p>
        {flight.wisata_flight.map((wisataFlight, index) => (
          <p key={index}>Plus Wisata : {moment(wisataFlight.departure_datetime).format("DD MMM")} ( {wisataFlight.airport_city_arrival} )</p>
        ))}
        <p>Kepulangan : {moment(flight.return_flight.departure_datetime).format("DD MMM")} ( {flight.return_flight.airport_code_departure} - {flight.return_flight.transit ? flight.return_flight.transit.airport_code_arrival : flight.return_flight.airport_code_arrival} )</p>
      </Tooltip>
    </Section >
  );
};

export { FilterSection };
