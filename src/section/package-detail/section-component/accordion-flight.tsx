"use client";

import moment from "moment";
import "moment/locale/id";

import { CircleIcon } from "lucide-react";
import {
  formatDuration,
  formatTransitDuration,
  getArrivalDate,
} from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { FlightDetail } from "@/types/package-details";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";
import Image from "next/image";
import { useAccordionFlightStore } from "@/store/useInterfaceStore";

interface DataFlightProps {
  directFlight: FlightDetail;
  directFlightDate?: string;
  transitFlight?: FlightDetail;
  transitFlightDate?: string;
}

interface AccordionFlightProps {
  dataFlight: DataFlightProps;
  id: string;
}

moment.locale("id");

const AccordionFlight = ({ dataFlight, id }: AccordionFlightProps) => {
  const { isOpen, toggleAccordion } = useAccordionFlightStore();

  return (
    <Accordion type="single" collapsible className="items-center bg-white">
      <AccordionItem value={id}>
        <AccordionContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Image
                width={70}
                height={60}
                src={dataFlight.directFlight.airline_logo}
                alt={`logo-${dataFlight.directFlight.airline}`}
                className="h-16 w-auto"
              />

              <div className="w-full">
                <h6 className="font-bold leading-6 tracking-wide">
                  {dataFlight.directFlight.airline}
                </h6>
                <div className="flex items-center gap-1 text-xs font-medium text-neutral-foreground opacity-80">
                  {dataFlight.directFlight.flight_number && (
                    <>
                      <span>{dataFlight.directFlight.flight_number}</span>
                      <div className="h-1 w-1 rounded-full bg-neutral-foreground opacity-80" />
                    </>
                  )}
                  <span>{dataFlight.directFlight.class}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                {dataFlight.directFlightDate && (
                  <div className="flex w-10 flex-shrink-0 flex-col justify-between text-right text-neutral-foreground">
                    {/* <div className="flex w-16 flex-shrink-0 flex-col justify-between text-right text-neutral-foreground"> */}
                    <div className="align- flex flex-col gap-1">
                      {/* note: this can be activate when there's a fixed flight time data */}
                      {/* <span className="font-bold leading-5 tracking-wide">
                        {moment(dataFlight.directFlightDate).format("HH:mm")}
                      </span> */}
                      <span className="text-[11px] opacity-80">
                        {moment(dataFlight.directFlightDate).format("DD MMM")}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] opacity-80">
                        <span className="text-[11px] opacity-80">
                          {formatDuration(dataFlight.directFlight.duration)}
                        </span>
                      </span>
                    </div>
                    <div className="align- flex flex-col gap-1">
                      {/* note: this can be activate when there's a fixed flight time data */}
                      {/* <span className="font-bold leading-5 tracking-wide">
                        {moment(
                          getArrivalDate(
                            dataFlight.directFlightDate,
                            dataFlight.directFlight.duration,
                          ),
                        ).format("HH:mm")}
                      </span> */}
                      <span className="text-[11px] opacity-80">
                        {moment(
                          getArrivalDate(
                            dataFlight.directFlightDate,
                            dataFlight.directFlight.duration,
                          ),
                        ).format("DD MMM")}
                      </span>
                    </div>
                  </div>
                )}

                <div
                  className={`flex flex-col items-center py-1.5 ${!dataFlight.directFlightDate && "pl-4"}`}
                >
                  <CircleIcon className="h-2 w-2 stroke-primary-foreground" />
                  <Separator
                    orientation="vertical"
                    className="w-px bg-primary"
                  />
                  <CircleIcon className="h-2 w-2 stroke-primary-foreground" />
                </div>

                <div className="w-full space-y-4 leading-5 tracking-wide text-neutral-foreground">
                  <div className="space-y-1">
                    <h6 className="text-sm font-bold">
                      {`${dataFlight.directFlight.airport_city_departure} (${dataFlight.directFlight.airport_code_departure})`}
                    </h6>
                    <div className="flex flex-col gap-0.5 text-[11px] font-medium leading-4 opacity-60">
                      <span>
                        {dataFlight.directFlight.airport_name_departure}
                      </span>
                      <span>
                        {dataFlight.directFlight.airport_terminal_departure}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 rounded-[10px] bg-primary-background p-3 text-xs">
                    {dataFlight.directFlight.aircraft_type && (
                      <p>
                        Jenis Pesawat:
                        <span className="ml-1">
                          {dataFlight.directFlight.aircraft_type}
                        </span>
                      </p>
                    )}
                    {dataFlight.directFlight.seat_layout && (
                      <p>
                        Tata Letak Kursi:
                        <span className="ml-1">
                          {dataFlight.directFlight.seat_layout}
                        </span>
                      </p>
                    )}
                    <p>
                      Bagasi Kabin:
                      <span>
                        {Number(dataFlight.directFlight.cabin_baggage)}
                        kg
                      </span>
                    </p>
                    <p>
                      Bagasi Pesawat:
                      <span>
                        {Number(dataFlight?.directFlight.baggage_allowance)}
                        kg
                      </span>
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-sm font-bold">
                      {`${dataFlight.directFlight.airport_city_arrival} (${dataFlight.directFlight.airport_code_arrival})`}
                    </h6>
                    <div className="flex flex-col gap-0.5 text-[11px] font-medium leading-4 opacity-60">
                      <span>
                        {dataFlight.directFlight.airport_name_arrival}
                      </span>
                      <span>
                        {dataFlight.directFlight.airport_terminal_arrival}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {dataFlight.transitFlight && (
            <>
              <div className="rounded-[14px] border border-primary bg-primary-background p-4">
                <p className="text-sm font-bold leading-5 tracking-wide text-primary">
                  Berhenti untuk pergantian pesawat di
                  <span className="mx-1">
                    {dataFlight.directFlight.airport_name_arrival}
                  </span>
                  {/* note: this can be activate when there's a fixed flight time data */}
                  {/* {dataFlight.directFlightDate && dataFlight.transitFlightDate
                    ? `(${
                        dataFlight.directFlightDate &&
                        dataFlight.transitFlightDate &&
                        formatTransitDuration(
                          getArrivalDate(
                            dataFlight.directFlightDate,
                            dataFlight.directFlight.duration,
                          ),
                          dataFlight.transitFlightDate,
                        )
                      })`
                    : ""} */}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <Image
                    width={70}
                    height={60}
                    src={dataFlight.transitFlight.airline_logo}
                    alt={`logo-${dataFlight.transitFlight.airline}`}
                    className="h-16 w-auto"
                  />

                  <div className="w-full">
                    <h6 className="font-bold leading-6 tracking-wide">
                      {dataFlight.transitFlight.airline}
                    </h6>
                    <div className="flex items-center gap-1 text-xs font-medium text-neutral-foreground opacity-80">
                      {dataFlight.transitFlight.flight_number && (
                        <>
                          <span>{dataFlight.transitFlight.flight_number}</span>
                          <div className="h-1 w-1 rounded-full bg-neutral-foreground opacity-80" />
                        </>
                      )}
                      <span>{dataFlight.transitFlight.class}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    {dataFlight.transitFlightDate && (
                      <div className="flex w-10 flex-shrink-0 flex-col justify-between text-right text-neutral-foreground">
                        {/* <div className="flex w-16 flex-shrink-0 flex-col justify-between text-right text-neutral-foreground"> */}
                        <div className="align- flex flex-col gap-1">
                          {/* note: this can be activate when there's a fixed flight time data */}
                          {/* <span className="font-bold leading-5 tracking-wide">
                            {moment(dataFlight.transitFlightDate).format(
                              "HH:mm",
                            )}
                          </span> */}
                          <span className="text-[11px] opacity-80">
                            {moment(dataFlight.transitFlightDate).format(
                              "DD MMM",
                            )}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] opacity-80">
                            {formatDuration(dataFlight.transitFlight.duration)}
                          </span>
                        </div>
                        <div className="align- flex flex-col gap-1">
                          {/* note: this can be activate when there's a fixed flight time data */}
                          {/* <span className="font-bold leading-5 tracking-wide">
                            {moment(
                              getArrivalDate(
                                dataFlight.transitFlightDate,
                                dataFlight.transitFlight.duration,
                              ),
                            ).format("HH:mm")}
                          </span> */}
                          <span className="text-[11px] opacity-80">
                            {moment(
                              getArrivalDate(
                                dataFlight.transitFlightDate,
                                dataFlight.transitFlight.duration,
                              ),
                            ).format("DD MMM")}
                          </span>
                        </div>
                      </div>
                    )}

                    <div
                      className={`flex flex-col items-center py-1.5 ${!dataFlight.transitFlightDate && "pl-4"}`}
                    >
                      <CircleIcon className="h-2 w-2 stroke-primary-foreground" />
                      <Separator
                        orientation="vertical"
                        className="w-px bg-primary"
                      />
                      <CircleIcon className="h-2 w-2 stroke-primary-foreground" />
                    </div>

                    <div className="w-full space-y-4 leading-5 tracking-wide text-neutral-foreground">
                      <div className="space-y-1">
                        <h6 className="text-sm font-bold">
                          {`${dataFlight.transitFlight.airport_city_departure} (${dataFlight.transitFlight.airport_code_departure})`}
                        </h6>
                        <div className="flex flex-col gap-0.5 text-[11px] font-medium leading-4 opacity-60">
                          <span>
                            {dataFlight.transitFlight.airport_name_departure}
                          </span>
                          <span>
                            {
                              dataFlight.transitFlight
                                .airport_terminal_departure
                            }
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 rounded-[10px] bg-primary-background p-3 text-xs">
                        {dataFlight.transitFlight.aircraft_type && (
                          <p>
                            Jenis Pesawat:
                            <span className="ml-1">
                              {dataFlight.transitFlight.aircraft_type}
                            </span>
                          </p>
                        )}
                        {dataFlight.transitFlight.seat_layout && (
                          <p>
                            Tata Letak Kursi:
                            <span className="ml-1">
                              {dataFlight.transitFlight.seat_layout}
                            </span>
                          </p>
                        )}
                        <p>
                          Bagasi Kabin:
                          <span className="ml-1">
                            {Number(dataFlight.transitFlight.cabin_baggage)}
                            kg
                          </span>
                        </p>
                        <p>
                          Bagasi Pesawat:
                          <span className="ml-1">
                            {Number(dataFlight.transitFlight.baggage_allowance)}
                            kg
                          </span>
                        </p>
                      </div>

                      <div className="space-y-1">
                        <h6 className="text-sm font-bold">
                          {`${dataFlight.transitFlight.airport_city_arrival} (${dataFlight.transitFlight.airport_code_arrival})`}
                        </h6>
                        <div className="flex flex-col gap-0.5 text-[11px] font-medium leading-4 opacity-60">
                          <span>
                            {dataFlight.transitFlight.airport_name_arrival}
                          </span>
                          <span>
                            {dataFlight.transitFlight.airport_terminal_arrival}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </AccordionContent>

        <AccordionTrigger
          className="flex h-fit w-full justify-center gap-1 py-1 shadow-none"
          onClick={() => toggleAccordion(id)}
        >
          <div className="flex cursor-pointer gap-1">
            <span className="text-xs font-semibold leading-4 tracking-wide text-primary">
              {isOpen[id] ? "Lihat lebih sedikit" : "Lihat Detail"}
            </span>
          </div>
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionFlight;
