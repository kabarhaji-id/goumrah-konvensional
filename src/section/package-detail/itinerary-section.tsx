"use client";

import Link from "next/link";
import Image from "next/image";

import CustomNIghtStaysIcon from "/src/assets/icons/material-symbols_nights-stay-outline-rounded.svg";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CustomSwiper } from "@/components/layout/swiper";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import {
  CalendarCheckIcon,
  CircleIcon,
  LightbulbIcon,
  MapPinIcon,
  RouteIcon,
  SparklesIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Itinerary } from "@/types/package-details";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";
import { useEffect, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "@/components/ui/skeleton-loader";

const ItinerarySection = ({
  dataItineraries,
}: {
  dataItineraries: Itinerary[];
}) => {
  const router = useRouter();

  const handleClick = () => {
    const params = new URLSearchParams(window.location.search);
    params.set("drawer", "hotel");

    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const [isImageError, setIsImageError] = useState(false);
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
    <Section className="pb-5 pt-0">
      <SectionHeader className="mb-3">
        <SectionTitle className="items-center leading-6 tracking-wide">
          <CalendarCheckIcon className="h-5 w-5 stroke-primary" />
          Jadwal Perjalanan Ibadah Kamu
        </SectionTitle>
      </SectionHeader>
      <SectionContent className="mx-0 flex flex-col gap-2 px-4">
        {dataItineraries.map((itinerary, index) => (
          <div key={index} className="flex flex-col gap-2">
            {/* --- Main Image Swiper */}
            <div className="relative overflow-hidden rounded-[14px]">
              <CustomSwiper
                className="w-full !pb-0"
                maxWidth={416}
                padding={0}
                gap={0}
                bulletVariant="white"
                paginationPosition="right"
                pagination
              >
                {itinerary.images.map((imageItineraries, index) => {
                  return isLoading ? (
                    <Skeleton key={index} className="h-[109px] w-[608px]" />
                  ) : (
                    <div key={index} className="relative h-[109px]">
                      {!isImageError && imageItineraries.src ? (
                        <>
                          <Image
                            width={70}
                            height={60}
                            src={imageItineraries.src}
                            alt={imageItineraries.id}
                            className="h-full w-[608px] object-cover"
                            onError={() => setIsImageError(true)}
                          />
                          <div
                            className="absolute bottom-0 z-10 h-14 w-full"
                            style={{
                              background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
                            }}
                          />
                        </>
                      ) : (
                        <div className="flex h-full w-[608px] items-center justify-center bg-gray-100">
                          <span className="text-sm text-gray-500">
                            Foto tidak tersedia
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </CustomSwiper>

              <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-white">
                <span className="font-extrabold leading-[21px]">
                  {itinerary.city}
                </span>
                <span className="text-xs font-medium leading-4">
                  ({itinerary.days.length - 1} Hari)
                </span>
              </div>
            </div>

            {itinerary.days.map((item, index) =>
              isLoading ? (
                <Skeleton key={index} className="h-10 w-full rounded-[14px]" />
              ) : (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full items-center rounded-[14px] rounded-b-xl border border-subtle bg-white shadow-custom-sm"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      className="flex justify-between py-2 pl-2 pr-4 text-sm font-medium leading-[21px] text-primary-foreground"
                      variant="darkPrimary"
                    >
                      <div className="flex items-center gap-3 text-start">
                        <Badge
                          className="h-fit flex-shrink-0 rounded-[10px] border-none px-2 py-[3px] text-xs leading-[18px] tracking-wide"
                          variant="secondary"
                        >
                          Hari {item.nth}
                        </Badge>
                        {item.title}
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="space-y-3 px-4">
                      {/* --- Section: Description */}
                      <div className="space-y-2">
                        <Separator />
                        <p className="text-xs leading-5 tracking-wide text-neutral-foreground opacity-80">
                          {item.description}
                        </p>
                      </div>

                      {item.widgets.map((widget, index) => {
                        return (
                          <div key={index}>
                            <div className="space-y-3">
                              {/* --- Section: Transportation */}
                              {widget.type === "Transport" && (
                                <div className="space-y-2">
                                  <Separator />

                                  <div className="flex flex-col gap-1.5">
                                    <div className="flex gap-1 opacity-80">
                                      <RouteIcon className="h-4 w-4 stroke-neutral-foreground" />
                                      <span className="text-[11px] leading-4 tracking-wide">
                                        Transportasi
                                      </span>
                                    </div>

                                    <span className="text-sm font-semibold text-neutral-foreground">
                                      Menggunakan {widget.transportWith}
                                    </span>
                                  </div>

                                  <div className="flex gap-2 rounded-[10px] bg-primary-background px-3 py-2">
                                    <div className="flex flex-col items-center py-3">
                                      <CircleIcon className="h-4 w-4 flex-shrink-0 stroke-primary" />
                                      <Separator orientation="vertical" />
                                      <MapPinIcon className="h-4 w-4 flex-shrink-0 stroke-primary" />
                                    </div>

                                    <div className="space-y-3">
                                      <div className="flex flex-col gap-1">
                                        <Badge
                                          variant="default"
                                          size="extra-small"
                                          className="w-fit rounded text-[11px] font-normal text-white"
                                        >
                                          Dari
                                        </Badge>
                                        <span className="text-xs leading-4 tracking-wide">
                                          {widget.from}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <Badge
                                          variant="default"
                                          size="extra-small"
                                          className="w-fit rounded text-[11px] font-normal text-white"
                                        >
                                          Menuju
                                        </Badge>
                                        <span className="text-xs leading-4 tracking-wide">
                                          {widget.to}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* --- Section: Hotel */}
                              {widget.type === "Hotel" && (
                                <div className="space-y-2">
                                  <Separator />

                                  <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-1.5">
                                      <div className="flex items-center gap-1 opacity-80">
                                        <CustomNIghtStaysIcon
                                          className="h-4 w-4"
                                          fill="#232323"
                                        />
                                        <span className="text-[11px] leading-4 tracking-wide">
                                          Penginapan
                                        </span>
                                      </div>
                                      <span className="text-sm font-medium leading-4 tracking-wide">
                                        {widget.hotel_name}
                                      </span>
                                    </div>

                                    <Link
                                      className="h-fit flex-shrink-0 p-0"
                                      onClick={handleClick}
                                      href="#hotel-section"
                                    >
                                      <span className="text-[11px] font-semibold leading-4 tracking-wide text-primary">
                                        Lihat Hotel
                                      </span>
                                    </Link>
                                  </div>

                                  <Separator />
                                </div>
                              )}
                            </div>

                            {/* --- Section Information */}
                            {widget.type === "Information" && (
                              <div className="space-y-2 rounded-[10px] bg-primary-background px-3 py-2">
                                <div className="flex items-start gap-3">
                                  <SparklesIcon
                                    className="h-5 w-5 flex-shrink-0 stroke-primary"
                                    fill="#1B8386"
                                  />
                                  <span className="text-xs font-medium leading-[17px] tracking-wide text-primary">
                                    {widget.description}
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* --- Section: Activity */}
                            {widget.type === "Activity" && (
                              <div className="rounded-[10px] bg-white shadow-custom-sm">
                                <div className="flex flex-col gap-2 rounded-[10px] bg-primary-background p-2">
                                  <div className="flex items-center gap-1.5">
                                    <SparklesIcon
                                      className="h-3 w-3 stroke-primary"
                                      fill="#1B8386"
                                    />
                                    <span className="text-xs font-medium leading-[17px] tracking-wide text-primary">
                                      Aktivitas
                                    </span>
                                  </div>
                                  <CustomSwiper
                                    className="w-full rounded-[14px] !pb-0"
                                    padding={0}
                                    gap={0}
                                    bulletVariant="white-dot"
                                    pagination
                                  >
                                    {widget.images.map((image, index) => {
                                      return (
                                        <div key={index} className="relative">
                                          <Image
                                            width={366}
                                            height={147}
                                            src={image}
                                            alt={`image-${index}`}
                                            className="h-[147px] w-[366px] object-cover"
                                          />

                                          <div
                                            className="absolute bottom-0 h-14 w-full"
                                            style={{
                                              background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
                                            }}
                                          />
                                        </div>
                                      );
                                    })}
                                  </CustomSwiper>
                                </div>

                                <div className="px-3 pb-3 pt-2">
                                  <h6 className="text-sm font-semibold leading-5 tracking-wide">
                                    {widget.title}
                                  </h6>
                                  <span className="text-xs leading-4 tracking-wide text-neutral-foreground/80">
                                    {widget.description}
                                  </span>
                                </div>
                                <div></div>
                              </div>
                            )}

                            {/* --- Section: Recommendation */}
                            {widget.type === "Recommended" && (
                              <div className="bg-shark-50 flex flex-col gap-3 rounded-[10px] pb-3">
                                <div className="flex flex-col gap-1 px-3 pt-3">
                                  <div className="flex items-center gap-1">
                                    <LightbulbIcon className="stroke-status-gold h-4 w-4 flex-shrink-0" />
                                    <span className="text-status-gold text-[10px] font-bold leading-4 tracking-[1.5px]">
                                      REKOMENDASI
                                    </span>
                                    <Separator className="bg-status-gold" />
                                  </div>
                                  <span className="text-xs font-medium leading-4 tracking-wide text-neutral-foreground">
                                    {widget.description}
                                  </span>
                                </div>

                                <CustomSwiper maxWidth={205}>
                                  {widget.images.map((image, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="relative w-[205px] space-y-1.5 overflow-hidden"
                                      >
                                        <Image
                                          width={210}
                                          height={115}
                                          src={image}
                                          alt={`image-${index}`}
                                          className="h-[115px] w-full rounded-[10px] object-cover"
                                        />

                                        <span className="text-xs font-semibold leading-4 tracking-wide text-neutral-foreground">
                                          {/* {image.alt} */}
                                          Test
                                        </span>
                                      </div>
                                    );
                                  })}
                                </CustomSwiper>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ),
            )}
          </div>
        ))}
      </SectionContent>
    </Section>
  );
};

export default ItinerarySection;
