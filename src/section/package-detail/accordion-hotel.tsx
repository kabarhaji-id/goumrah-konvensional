"use client";

import Link from "next/link";
import GoogleMapsEmbed from "@/components/ui/maps";
import moment from "moment";
import "moment/locale/id";

import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CircleIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { useAccordionHotelStore } from "@/store/useInterfaceStore";
import { HotelDetail } from "@/types/package-details";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";
import { Separator } from "@/components/ui/separator";
import { DescriptionCollapsible } from "@/components/ui/accordion/accordion-description";
import { Button } from "@/components/ui/button";
import { getIconFacility } from "@/components/ui/helper/getIcon";

interface AccordionHotelProps {
  dataHotel: HotelDetail;
  id: string;
}

moment.locale("id");

const AccordionHotel = ({ dataHotel, id }: AccordionHotelProps) => {
  const { isAllOpen, toggleAllAccordion } = useAccordionHotelStore();
  return (
    <Accordion
      type="multiple"
      value={isAllOpen ? [id] : []}
      onValueChange={() => toggleAllAccordion()}
      className="items-center bg-white"
    >
      <AccordionItem value={id}>
        <AccordionContent className="space-y-4">
          {/* --- Check-in and Check-out --- */}
          {dataHotel.check_in_time && dataHotel.check_out_time && (
            <div className="flex gap-4 bg-primary-background px-4 pt-2">
              <div className="flex flex-shrink-0 flex-col gap-1 text-neutral-foreground">
                <span className="text-xs font-medium leading-4 text-primary">
                  Check-in
                </span>
                <span className="text-sm font-bold leading-5">
                  {moment(dataHotel.check_in_time).format("DD MMM YYYY")}
                </span>
                <span className="text-xs leading-4">
                  {moment(dataHotel.check_in_time).format("HH:mm")}
                </span>
              </div>

              <div className="flex w-full items-center py-1.5">
                <CircleIcon className="h-2 w-2 stroke-primary" />
                <Separator className="bg-primary" />
                <CircleIcon className="h-2 w-2 stroke-primary" />
              </div>

              <div className="flex flex-shrink-0 flex-col gap-1 text-right text-neutral-foreground">
                <span className="text-xs font-medium leading-4 text-primary">
                  Check-out
                </span>
                <span className="text-sm font-bold leading-5">
                  {moment(dataHotel.check_out_time).format("DD MMM YYYY")}
                </span>
                <span className="text-xs leading-4">
                  {moment(dataHotel.check_out_time).format("HH:mm")}
                </span>
              </div>
            </div>
          )}

          {/* --- Hotel Facilities --- */}
          <div className="flex flex-col gap-2 px-4 pt-2">
            <h4 className="text-sm font-bold text-primary-foreground">
              Fasilitas Hotel
            </h4>
            <div className="flex justify-between">
              {dataHotel.facilities.slice(0, 4).map((facility, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-1/4 flex-col items-center gap-2"
                  >
                    {getIconFacility(facility)}
                    <span className="text-center text-[11px] leading-[14px] text-primary-foreground opacity-75">
                      {facility}
                    </span>
                  </div>
                );
              })}
            </div>
            {dataHotel.facilities.length > 4 && (
              <AccordionFacilities facilities={dataHotel.facilities.slice(4)} />
            )}
          </div>

          {/* --- Meals --- */}
          <div className="flex flex-col gap-2 px-4">
            <h4 className="text-sm font-bold text-primary-foreground">
              Makanan yang disediakan
            </h4>

            <div className="flex justify-between">
              <div
                className={`flex flex-col gap-1 text-neutral-foreground ${!dataHotel.food_menu && "w-full"}`}
              >
                <span className="text-xs leading-4 opacity-60">Jenis</span>
                <span className="text-xs font-semibold leading-4">
                  {dataHotel.food_type}
                </span>
              </div>

              {dataHotel.food_amount && (
                <div
                  className={`flex flex-col gap-1 text-neutral-foreground ${!dataHotel.food_menu && "w-full"}`}
                >
                  <span className="text-xs leading-4 opacity-60">Banyak</span>
                  <span className="text-xs font-semibold leading-4">
                    {dataHotel.food_amount}x /hari
                  </span>
                </div>
              )}

              {dataHotel.food_menu && (
                <div className="flex flex-col gap-1 text-neutral-foreground">
                  <span className="text-xs leading-4 opacity-60">Menu</span>
                  <span className="text-xs font-semibold leading-4">
                    {dataHotel.food_menu}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* --- Location --- */}
          <div className="flex flex-col gap-2 px-4">
            <h4 className="text-sm font-bold text-primary-foreground">
              Lokasi Hotel
            </h4>

            <div className="flex flex-col gap-2">
              <div className="h-[100px] w-full overflow-hidden rounded-md">
                <GoogleMapsEmbed
                  mapUrl={dataHotel.google_maps_link}
                  mapUrlMobile={dataHotel.google_maps_link_noembed}
                />
              </div>
              <p className="text-xs text-neutral-foreground opacity-75">
                {dataHotel.address}
              </p>
            </div>
          </div>

          {/* --- Google Review --- */}
          <div className="flex flex-col gap-1.5 px-4">
            <h4 className="text-sm font-bold text-primary-foreground">
              Review Google
            </h4>

            <Link
              href={`${dataHotel.google_review_link || "#"}`}
              target="_blank"
              className="flex items-center gap-1.5"
            >
              <span className="text-xs font-semibold text-primary">
                Klik untuk lihat review di Google
              </span>
              <ExternalLinkIcon
                className="h-4 w-4 stroke-primary"
                stroke="none"
              />
            </Link>
          </div>

          {/* --- Description --- */}
          <div className="flex flex-col gap-1.5 px-4">
            <h4 className="text-sm font-bold text-primary-foreground">
              Deskripsi Hotel
            </h4>

            <DescriptionCollapsible dataDescription={dataHotel.description} />
          </div>
        </AccordionContent>

        <Button
          variant="ghost"
          onClick={toggleAllAccordion}
          className="flex h-fit w-full justify-center gap-1 py-1"
        >
          {isAllOpen ? (
            <div className="flex cursor-pointer gap-1">
              <span className="text-xs font-semibold leading-4 tracking-wide text-primary">
                Lihat lebih sedikit
              </span>
              <ChevronUpIcon
                className="h-4 w-4 stroke-primary transition-transform"
                stroke="none"
              />
            </div>
          ) : (
            <div className="flex cursor-pointer gap-1">
              <span className="text-xs font-semibold leading-4 tracking-wide text-primary">
                Lihat detail
              </span>
              <ChevronDownIcon
                className="h-4 w-4 stroke-primary transition-transform"
                stroke="none"
              />
            </div>
          )}
        </Button>
      </AccordionItem>
    </Accordion>
  );
};

const AccordionFacilities = ({ facilities }: { facilities: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion
      type="single"
      collapsible
      className="items-center rounded-b-xl bg-white"
    >
      <AccordionItem value="item-1">
        <AccordionContent className="grid grid-cols-4 space-y-4">
          {/* --- Hotel Facilities Extended --- */}
          {facilities.map((facility, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col items-center gap-2 ${index === 0 && "mt-4"}`}
              >
                {getIconFacility(facility)}
                <span className="text-center text-xs text-primary-foreground opacity-75">
                  {facility}
                </span>
              </div>
            );
          })}
        </AccordionContent>
        <AccordionTrigger
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-2 py-1.5 text-xs font-medium text-primary"
          variant="primary"
        >
          {isOpen ? "Lihat lebih sedikit" : "Lihat lebih banyak"}
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionHotel;
