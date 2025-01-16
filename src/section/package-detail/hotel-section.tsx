import React from "react";
import Image from "next/image";
import moment from "moment";
import "moment/locale/id";

import { CustomSwiper } from "@/components/layout/swiper";
import { calculateDaysAndNights } from "@/lib/utils";
import { HotelIcon, MapPinIcon } from "lucide-react";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { Hotel, HotelDetail, Images } from "@/types/packages";
import {
  CardDetail,
  CardDetailContent,
  CardDetailHeader,
} from "@/components/ui/card/package-detail-card";
import { Rating } from "@/components/ui/helper/getRating";
import { SheetHotelImages } from "./sheet-hotel-images";
import AccordionHotel from "./accordion-hotel";

const HotelSection = ({ dataHotel }: { dataHotel: Hotel }) => {
  moment.locale("id");

  const arrTabLists: string[] = [];

  const arrDataHotel = [
    ...dataHotel.wisata.map((wisataItem, index) => {
      const type = `Wisata-${index + 1}`;
      if (!arrTabLists.includes(type)) {
        arrTabLists.push(type);
      }
      return {
        type,
        data: wisataItem,
      };
    }),
    {
      type: "Makkah",
      data: dataHotel.makkah,
    },
    {
      type: "Madinah",
      data: dataHotel.madinah,
    },
  ];

  ["Makkah", "Madinah"].forEach((type) => {
    if (!arrTabLists.includes(type)) {
      arrTabLists.push(type);
    }
  });

  return (
    <Section className="pb-3 pt-5" id="hotel-section">
      <SectionHeader className="mb-2">
        <div className="flex items-center gap-2">
          <HotelIcon className="h-5 w-5 stroke-primary" />
          <SectionTitle className="text-sm font-semibold leading-6 tracking-wide">
            Hotel
          </SectionTitle>
        </div>
      </SectionHeader>
      <SectionContent className="mx-0 px-0">
        <CustomSwiper>
          {arrDataHotel.length > 0 &&
            arrDataHotel.map((hotel, index) => (
              <HotelCard
                type={hotel.type}
                key={index}
                dataHotel={hotel.data}
                images={hotel.data.images}
              >
                <AccordionHotel dataHotel={hotel.data} id={index.toString()} />
              </HotelCard>
            ))}
        </CustomSwiper>
      </SectionContent>
    </Section>
  );
};

const HotelCard = ({
  images,
  dataHotel,
  children,
  type,
}: {
  images: Images[];
  dataHotel: HotelDetail;
  children: React.ReactNode;
  type: "Makkah" | "Wisata" | string;
}) => {
  return (
    <CardDetail>
      <CardDetailHeader>
        <span className="text-xs font-semibold text-primary">
          {dataHotel.city}
        </span>
      </CardDetailHeader>

      <CardDetailContent className="max-w-[314px] overflow-hidden rounded-[14px] pb-2">
        <CustomSwiper
          className="w-full overflow-hidden !rounded-[14px] !pb-0"
          padding={0}
          gap={0}
          bulletVariant="white-dot"
          pagination
        >
          {images &&
            images.length > 0 &&
            images.map((imageHotel, index: number) => {
              return (
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

        <div className="!mt-0 flex flex-col gap-3 px-4 py-2 text-primary-foreground">
          <div className="flex flex-col gap-1.5">
            <Rating totalStars={dataHotel.star_rating} />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold">
                {dataHotel.hotel_name}
              </span>
              <span className="text-xs">
                {moment(dataHotel.check_in_time).format("DD MMMM YYYY")} ∙{" "}
                {calculateDaysAndNights(
                  dataHotel.check_in_time,
                  dataHotel.check_out_time,
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 flex-shrink-0 stroke-neutral-foreground/80" />
            <span className="line-clamp-1 text-xs leading-[18px] opacity-60">
              {dataHotel.address}
            </span>
          </div>
        </div>

        {children}
      </CardDetailContent>
    </CardDetail>
  );
};

export default HotelSection;
