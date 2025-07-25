"use client";

import Image from "next/image";
import AccordionHotel from "./accordion-hotel";
import moment from "moment";
import "moment/locale/id";

import CustomMapPinnedIcon from "@/public/icons/lucide_map-pinned.svg";

import { CustomSwiper } from "@/components/layout/swiper";
import {
  CardDetail,
  CardDetailContent,
  CardDetailHeader,
} from "@/components/ui/card/package-detail-card";
import { HotelDetail, Images } from "@/types/package-details";
import { SheetHotelImages } from "./sheet-hotel-images";
import { Rating } from "@/components/ui/helper/getRating";
import { calculateDaysAndNights, convertDistance } from "@/lib/utils";
import { useEffect, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { Badge } from "@/components/ui/badge";

const HotelCard = ({
  id,
  images,
  dataHotel,
  type,
}: {
  id: string;
  images: Images[];
  dataHotel: HotelDetail;
  type: "Makkah" | "Wisata" | string;
}) => {
  moment.locale("id");

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
    <CardDetail>
      <CardDetailHeader className="flex items-center gap-1 justify-between">
        <span className="text-sm font-semibold text-neutral-foreground">
          {dataHotel.city}
        </span>
        <Rating totalStars={dataHotel.star_rating} />
        {/* <span className="text-sm font-semibold text-neutral-foreground">
          :
        </span>
        <span className="text-sm font-semibold text-neutral-foreground">
          {dataHotel.hotel_name}
        </span> */}
        {/* <span className="font-bold text-sm text-primary leading-[18px] tracking-wide">
          {dataHotel.hotel_name} Hotel
        </span> */}
      </CardDetailHeader>

      <CardDetailContent className="max-w-[314px] overflow-hidden rounded-[14px]">
        <div className="relative overflow-hidden">
          <CustomSwiper
            className="h-[236px] w-full rounded-[14px]"
            slidesClass="h-full"
            padding={0}
            gap={0}
            bulletVariant="white-dot"
            pagination
          >
            {images &&
              images.length > 0 &&
              images.map((imageHotel, index: number) => {
                return isLoading ? (
                  <Skeleton
                    key={index}
                    className="z-[999] h-[236px] w-[314px] bg-gray-200"
                  />
                ) : (
                  <SheetHotelImages
                    key={index}
                    variant={type}
                    dataHotel={dataHotel}
                  >
                    <div key={index} className="relative">
                      <Image
                        width={314}
                        height={236}
                        src={imageHotel.src}
                        alt={`image-${dataHotel.hotel_name}-${index}`}
                        className="h-[236px] object-cover"
                      />

                      <div
                        className="absolute bottom-0 h-14 w-full"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
                        }}
                      />
                    </div>
                  </SheetHotelImages>
                );
              })}
          </CustomSwiper>
          <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm shadow-sm rounded-sm px-3 py-1 z-10">
            <span className="text-[13px] font-semibold text-primary leading-none">
              {dataHotel.hotel_name} Hotel
            </span>
          </div>
        </div>

        {isLoading ? (
          <Skeleton className="-mt-4 h-[106px] w-[314px] rounded-none" />
        ) : (
          <div className="!mt-0 flex flex-col gap-3 px-4 py-2 text-primary-foreground">
            <div className="flex flex-col gap-1.5">
              {/* <span className="text-base font-semibold text-primary">
                {dataHotel.hotel_name} Hotel
              </span> */}
              {/* <Rating totalStars={dataHotel.star_rating} /> */}
              {/* <div className="flex flex-col gap-1">
                <div className="flex gap-0.5">
                  {dataHotel.check_in_time && dataHotel.check_out_time && (
                    <span className="text-xs">
                      {moment(dataHotel.check_in_time).format("DD MMMM YYYY")} ∙
                    </span>
                  )}
                  {dataHotel.duration && (
                    <span className="text-xs">
                      {" "}
                      {dataHotel.check_in_time && dataHotel.check_out_time
                        ? calculateDaysAndNights(
                          dataHotel.check_in_time,
                          dataHotel.check_out_time,
                        )
                        : `${dataHotel.duration} hari ${dataHotel.duration} malam`}
                    </span>
                  )}
                </div>
              </div> */}
            </div>
            <div className="flex items-center gap-2">
              <CustomMapPinnedIcon className="h-4 w-4 flex-shrink-0" />
              {dataHotel.city === "Makkah" && (
                <span className="line-clamp-1 text-xs leading-[18px] opacity-60">
                  {dataHotel.distance_to_landmark > 1000
                    ? "Shuttle Bus 24jam ke Masjidil Haram"
                    : `${convertDistance(dataHotel.distance_to_landmark)} ke ${dataHotel.landmark}`}
                </span>
              )}

              {dataHotel.city === "Madinah" && (
                <span className="line-clamp-1 text-xs leading-[18px] opacity-60">
                  {dataHotel.distance_to_landmark > 1000
                    ? "Shuttle Bus 24jam ke Masjidil Haram"
                    : `${convertDistance(dataHotel.distance_to_landmark)} ke ${dataHotel.landmark}`}
                </span>
              )}

              {dataHotel.city !== "Madinah" && dataHotel.city !== "Makkah" && (
                <span className="line-clamp-1 text-xs leading-[18px] opacity-60">
                  {dataHotel.address}
                </span>
              )}
            </div>
          </div>
        )}

        {isLoading ? (
          <Skeleton className="h-8 w-full" />
        ) : (
          <AccordionHotel dataHotel={dataHotel} id={id} />
        )}
      </CardDetailContent>
    </CardDetail>
  );
};

export default HotelCard;
