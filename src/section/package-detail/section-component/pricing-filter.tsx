"use client";

import moment from "moment";
import "moment/locale/id";
import "../../../app/globals.css";

import CustomAirplaneMarkerIcon from "/src/assets/icons/mdi_airplane-marker.svg";

import { useEffect, useState } from "react";
import { CalendarDaysIcon } from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import {
  CardDetail,
  CardDetailContent,
  CardDetailHeader,
} from "@/components/ui/card/package-detail-card";
import {
  DepartureCityDetail,
  DepartureDateDetail,
} from "@/types/package-details";
import { CustomSwiper } from "@/components/layout/swiper";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { NavigatorConnection } from "@/types/navigator-connection";

interface FilterProps {
  departureDates: DepartureDateDetail[];
  embarkation: DepartureCityDetail[];
  variant: "departureDate" | "departureCity";
}

const FilterSection = ({
  variant,
  departureDates,
  embarkation,
}: FilterProps) => {
  moment.locale("id");

  const filteredDates = departureDates.filter((d) => d.status === "active");

  const [selectedDate, setSelectedDate] = useState(filteredDates[0].date);
  const [selectedCity, setSelectedCity] = useState(embarkation[0].city);
  const [isLoading, setIsLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  const onFilterChange = (city?: string, date?: string) => {
    if (city) setSelectedCity(city);
    if (date) setSelectedDate(date);
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
          <CardDetailHeader>
            {variant === "departureDate" ? (
              <>
                <CalendarDaysIcon className="h-4 w-4 stroke-primary" />
                <span className="text-xs font-semibold text-primary">
                  Tanggal Keberangkatan
                </span>
              </>
            ) : (
              <>
                <CustomAirplaneMarkerIcon className="h-4 w-4" fill="#1B8386" />
                <span className="text-xs font-semibold text-primary">
                  Kota Keberangkatan
                </span>
              </>
            )}
          </CardDetailHeader>

          <CardDetailContent
            className={`flex items-center gap-2 overflow-visible rounded-[10px] pb-4 pt-3 ${variant === "departureCity" && "px-2"}`}
          >
            {variant === "departureDate" && departureDates ? (
              <CustomSwiper gap={8} padding={2} slidesClass="pb-2">
                {departureDates.map((date, index) => {
                  return isLoading ? (
                    <Skeleton key={index} className="h-16 w-[118px]" />
                  ) : (
                    <div key={index} className="flex w-[118px] gap-2">
                      <div
                        onClick={() => onFilterChange(undefined, date.date)}
                        className={`relative flex h-16 w-full cursor-pointer flex-col items-center justify-center rounded-[10px] px-1 pb-3.5 pt-2 ${
                          selectedDate === date.date && date.status === "active"
                            ? "border border-primary bg-primary-background text-primary"
                            : "bg-gray border text-neutral-foreground"
                        } ${
                          date.status === "expired" &&
                          "pointer-events-none bg-subtle-background"
                        } ${
                          date.status === "musim-haji" &&
                          "gold-border pointer-events-none bg-custom-gold-gradient"
                        } ${
                          date.status === "closing-umrah" &&
                          "pointer-events-none bg-[#8E8E93] text-white"
                        } ${
                          date.status === "coming-soon" &&
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
                        <span className="text-sm font-semibold tracking-wide">
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

                        {selectedDate === date.date &&
                          date.status === "active" && (
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
                            Sudah Berangkat
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CustomSwiper>
            ) : (
              embarkation &&
              embarkation.map((city, index: number) => {
                return isLoading ? (
                  <Skeleton key={index} className="h-[58px] w-full" />
                ) : (
                  <div
                    key={index}
                    onClick={() => onFilterChange(city.city, undefined)}
                    className={`flex w-full cursor-pointer flex-col gap-1 rounded-[10px] px-3 pb-3.5 pt-1 text-center ${
                      selectedCity! === city.city
                        ? "border border-primary bg-primary-background text-primary"
                        : "border border-neutral-200"
                    }`}
                  >
                    <p className="text-sm font-semibold tracking-tight">
                      {city.city}
                    </p>
                    <p className="text-[10px] font-medium tracking-wide">
                      {city.route}
                    </p>

                    {selectedCity! === city.city && (
                      <span className="absolute bottom-2.5 self-center rounded-[4px] bg-primary px-1 pb-px text-[10px] font-medium leading-[15px] tracking-wide text-white">
                        Dipilih
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </CardDetailContent>
        </CardDetail>
      </SectionContent>
    </Section>
  );
};

export { FilterSection };
