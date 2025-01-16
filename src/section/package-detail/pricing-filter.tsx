"use client";

import moment from "moment";
import "moment/locale/id";

import CustomAirplaneMarkerIcon from "/src/assets/icons/mdi_airplane-marker.svg";

import { useState } from "react";
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

  const [selectedDate, setSelectedDate] = useState(departureDates[0].date);
  const [selectedCity, setSelectedCity] = useState(embarkation[0].city);

  const onFilterChange = (city?: string, date?: string) => {
    if (city) setSelectedCity(city);
    if (date) setSelectedDate(date);
  };

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

          <CardDetailContent className="flex items-center gap-2 rounded-[10px] px-2 pb-4 pt-3">
            {variant === "departureDate" && departureDates
              ? departureDates.map((date, index) => {
                  return (
                    <div key={index} className="flex w-full gap-2">
                      <div
                        onClick={() => onFilterChange(undefined, date.date)}
                        className={`relative flex h-16 w-full cursor-pointer flex-col items-center justify-center rounded-[10px] px-1 pb-3.5 pt-2 ${
                          selectedDate === date.date && date.status === "active"
                            ? "border border-primary bg-primary-accent text-primary"
                            : "border border-neutral-200 text-neutral-foreground"
                        } ${
                          date.status !== "active" ? "pointer-events-none" : ""
                        }`}
                      >
                        <span className="text-xs tracking-tight">
                          {moment(date.date).format("dddd")}
                        </span>
                        <span className="text-sm font-semibold tracking-wide">
                          {moment(date.date).format("DD MMM")}
                        </span>

                        {date.status !== "active" && (
                          <span
                            className={`absolute -bottom-2 rounded-[4px] bg-[#999999] px-1 text-[10px] font-medium tracking-wide text-gray-100`}
                          >
                            Belum Dibuka
                          </span>
                        )}

                        {selectedDate === date.date &&
                          date.status === "active" && (
                            <span
                              className={`absolute -bottom-2 rounded-[4px] bg-primary px-1 text-[10px] font-medium tracking-wide text-white`}
                            >
                              Dipilih
                            </span>
                          )}
                      </div>
                    </div>
                  );
                })
              : embarkation &&
                embarkation.map((city, index: number) => {
                  return (
                    <div
                      key={index}
                      onClick={() => onFilterChange(city.city, undefined)}
                      className={`flex w-full cursor-pointer flex-col gap-1 rounded-[10px] px-3 pb-3.5 pt-1 text-center ${
                        selectedCity! === city.city
                          ? "border border-primary bg-primary-accent text-primary"
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
                })}
          </CardDetailContent>
        </CardDetail>
      </SectionContent>
    </Section>
  );
};

export { FilterSection };
