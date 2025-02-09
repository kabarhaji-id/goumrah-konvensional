"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/id";

import CustomAirplaneIcon from "@/public/icons/ri_plane-line.svg";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CircleIcon, PlaneIcon } from "lucide-react";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { getArrivalDate } from "@/lib/utils";
import AccordionFlight from "./section-component/accordion-flight";
import { Flight, FlightDetail } from "@/types/package-details";
import {
  CardDetail,
  CardDetailContent,
  CardDetailHeader,
} from "@/components/ui/card/package-detail-card";
import { getSkytrax } from "@/components/ui/helper/getSkytrax";
import Image from "next/legacy/image";
import { useAccordionFlightStore } from "@/store/useInterfaceStore";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "@/components/ui/skeleton-loader";

const FlightSection = ({ dataFlight }: { dataFlight: Flight }) => {
  moment.locale("id");

  const arrTabLists: string[] = [];

  const arrDataFlight = [
    ...dataFlight.wisata_flight.map((wisataItem, index) => {
      const type = `Wisata-${index + 1}`;
      if (!arrTabLists.includes(type)) {
        arrTabLists.push(type);
      }
      return {
        type,
        data: {
          directFlight: wisataItem,
          directFlightDate: wisataItem.departure_datetime,
          transitFlight: wisataItem.transit,
          transitFlightDate: wisataItem.transit_datetime,
        },
      };
    }),
    {
      type: "Keberangkatan",
      data: {
        directFlight: dataFlight.departure_flight,
        directFlightDate: dataFlight.departure_flight.departure_datetime,
        transitFlight: dataFlight.departure_flight.transit,
        transitFlightDate: dataFlight.departure_flight.transit_datetime,
      },
    },
    {
      type: "Kepulangan",
      data: {
        directFlight: dataFlight.return_flight,
        directFlightDate: dataFlight.return_flight.departure_datetime,
        transitFlight: dataFlight.return_flight.transit,
        transitFlightDate: dataFlight.return_flight.transit_datetime,
      },
    },
  ];

  ["Keberangkatan", "Kepulangan"].forEach((type) => {
    if (!arrTabLists.includes(type)) {
      arrTabLists.push(type);
    }
  });

  return (
    <Section className="space-y-4 px-4 py-2">
      <SectionHeader className="mb-2 px-0">
        <div className="flex items-center gap-2">
          <PlaneIcon className="h-5 w-5 stroke-primary" />
          <SectionTitle className="text-sm font-semibold leading-6 tracking-wide text-primary">
            Penerbangan
          </SectionTitle>
        </div>
      </SectionHeader>
      <SectionContent className="mx-0 space-y-4 px-0">
        {arrDataFlight.length > 0 &&
          arrDataFlight.map((data, index) => (
            <FlightCard
              key={index}
              type={data.type}
              dataFlight={data}
              id={index.toString()}
            >
              <AccordionFlight dataFlight={data.data} id={index.toString()} />
            </FlightCard>
          ))}
      </SectionContent>
    </Section>
  );
};

interface FlightCardProps {
  type: string;
  data: {
    directFlight: FlightDetail;
    directFlightDate?: string;
    transitFlight?: FlightDetail;
    transitFlightDate?: string;
  };
}

const FlightCard = ({
  id,
  type,
  dataFlight,
  children,
}: {
  id: string;
  type: "Wisata" | "Keberangkatan" | "Kepulangan" | string;
  dataFlight?: FlightCardProps;
  children?: React.ReactNode;
}) => {
  moment.locale("id");

  const { isOpen } = useAccordionFlightStore();
  const open = isOpen[id] || false;

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

  if (dataFlight) {
    return (
      <CardDetail>
        <CardDetailHeader>
          <span className="text-sm font-semibold text-neutral-foreground">
            {type === "Keberangkatan"
              ? "Keberangkatan Ibadah"
              : type === "Kepulangan"
                ? "Kepulangan"
                : "Keberangkatan Wisata"}
          </span>
        </CardDetailHeader>

        {isLoading ? (
          <Skeleton className="h-[232px] w-full" />
        ) : (
          <CardDetailContent className="w-full space-y-4 rounded-[10px] px-4 pb-2 pt-4">
            <div className="space-y-3">
              <Badge
                className="mr-auto w-fit rounded px-2 py-0.5"
                variant="primaryDarker"
              >
                <span className="font-normal leading-[18px] tracking-wide">
                  {dataFlight.data.transitFlight
                    ? "Penerbangan transit"
                    : "Penerbangan langsung"}
                </span>
              </Badge>

              <div className="flex items-center gap-2">
                {!open && (
                  <Image
                    width={70}
                    height={60}
                    src={dataFlight.data.directFlight.airline_logo}
                    alt={`logo-${dataFlight.data.directFlight.airline}`}
                    className="h-[52px] w-auto"
                  />
                )}
                <span className="text-lg font-semibold leading-5">
                  {dataFlight.data.directFlight.airline}
                </span>
              </div>
            </div>

            {dataFlight.data.directFlight.skytrax &&
              dataFlight.data.directFlight.rating && (
                <div>
                  {getSkytrax(
                    dataFlight.data.directFlight.skytrax,
                    dataFlight.data.directFlight.rating,
                  )}
                </div>
              )}

            <div className="space-y-1">
              <div className="relative flex items-center gap-1 text-sm font-bold text-primary-foreground">
                <span>
                  {dataFlight.data.directFlight.airport_code_departure}
                </span>

                <div className="relative flex w-full items-center">
                  <CircleIcon className="h-2 w-2 flex-shrink-0 opacity-60" />
                  <Separator variant="dashed" className="w-full bg-white" />

                  <div className="absolute left-1/2 flex flex-shrink-0 -translate-x-1/2 flex-col items-center bg-white">
                    <CustomAirplaneIcon className="h-4 w-4 flex-shrink-0" />
                    {dataFlight.data.transitFlight && (
                      <span className="flex w-full flex-shrink-0 px-1 text-[10px] font-normal leading-[14px]">
                        1 Transit
                      </span>
                    )}
                  </div>

                  <Separator variant="dashed" className="w-full bg-white" />
                  <CircleIcon className="h-2 w-2 flex-shrink-0 opacity-60" />
                </div>

                <span>
                  {dataFlight.data.transitFlight
                    ? dataFlight.data.transitFlight.airport_code_arrival
                    : dataFlight.data.directFlight.airport_code_arrival}
                </span>
              </div>

              <div className="flex justify-between">
                <div className="space-y-0.5 text-xs leading-[18px] text-primary-foreground">
                  <span>
                    {dataFlight.data.directFlight.airport_city_departure}
                  </span>
                  {dataFlight.data.directFlightDate && (
                    <div className="flex gap-1 opacity-40">
                      <span>
                        {moment(dataFlight.data.directFlightDate).format(
                          "DD MMM",
                        )}
                      </span>
                      {/* note: this can be activate when there's a fixed flight time data */}
                      {/* <span>∙</span>
                    <span>
                      {moment(dataFlight.data.directFlightDate).format("HH:mm")}
                    </span> */}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end space-y-0.5 text-end text-xs leading-[18px] text-primary-foreground">
                  <span>
                    {dataFlight.data.transitFlight
                      ? dataFlight.data.transitFlight.airport_city_arrival
                      : dataFlight.data.directFlight.airport_city_arrival}
                  </span>
                  <div className="flex w-fit gap-1 opacity-40">
                    {dataFlight.data.transitFlight &&
                    dataFlight.data.transitFlightDate ? (
                      <>
                        {dataFlight.data.transitFlight.departure_arrivaltime ? (
                          <span>
                            {moment(
                              dataFlight.data.transitFlight
                                .departure_arrivaltime,
                            ).format("DD MMM")}
                          </span>
                        ) : (
                          <span>
                            {moment(
                              getArrivalDate(
                                dataFlight.data.transitFlightDate,
                                dataFlight.data.transitFlight.duration,
                              ),
                            ).format("DD MMM")}
                          </span>
                        )}
                        {/* note: this can be activate when there's a fixed flight time data */}
                        {/* <span>∙</span>
                      <span>
                        {moment(
                          getArrivalDate(
                            dataFlight.data.transitFlightDate,
                            dataFlight.data.transitFlight.duration,
                          ),
                        ).format("HH:mm")}
                      </span> */}
                      </>
                    ) : (
                      dataFlight.data.directFlightDate && (
                        <>
                          <span>
                            {dataFlight.data.directFlightDate &&
                              moment(
                                getArrivalDate(
                                  dataFlight.data.directFlightDate,
                                  dataFlight.data.directFlight.duration,
                                ),
                              ).format("DD MMM")}
                          </span>
                          {/* note: this can be activate when there's a fixed flight time data */}
                          {/* <span>∙</span>
                        <span>
                          {dataFlight.data.directFlightDate &&
                            moment(
                              getArrivalDate(
                                dataFlight.data.directFlightDate,
                                dataFlight.data.directFlight.duration,
                              ),
                            ).format("HH:mm")}
                        </span> */}
                        </>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {children}
          </CardDetailContent>
        )}
      </CardDetail>
    );
  }
};

export default FlightSection;
