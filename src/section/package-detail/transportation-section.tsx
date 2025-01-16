import React from "react";
import Image from "next/image";

import CustomBusIcon from "/src/assets/icons/bx_bus.svg";
import CustomSeatReclineIcon from "/src/assets/icons/material-symbols_airline-seat-recline-extra-rounded.svg";

import { CustomSwiper } from "@/components/layout/swiper";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { BusDetail, PackageCategory } from "@/types/packages";
import {
  CardDetail,
  CardDetailContent,
  CardDetailHeader,
} from "@/components/ui/card/package-detail-card";

const TransportationSection = ({
  dataTransportation,
  category,
}: {
  dataTransportation: BusDetail;
  category: PackageCategory;
}) => {
  return (
    <Section className="pb-5 pt-0">
      <SectionHeader className="mb-2">
        <div className="flex items-center gap-2">
          <CustomBusIcon />
          <SectionTitle className="text-sm font-semibold leading-6 tracking-wide">
            Transportasi
          </SectionTitle>
        </div>
      </SectionHeader>

      <SectionContent className="mx-0 space-y-2 px-4">
        <TransportationCard data={dataTransportation} category={category} />
      </SectionContent>
    </Section>
  );
};

const TransportationCard = ({
  data,
  category,
}: {
  data: BusDetail;
  category: PackageCategory;
}) => {
  return (
    <CardDetail
      style={{
        background:
          "linear-gradient(180deg, rgba(241,250,250,1) 0%, rgba(255,255,255,1) 60%)",
      }}
    >
      <CardDetailHeader>
        <span className="text-xs font-semibold text-primary">Bus</span>
      </CardDetailHeader>
      <div className="px-3">
        <CustomSwiper
          className="w-full rounded-[14px] !pb-0"
          maxWidth={608}
          padding={0}
          gap={0}
          bulletVariant="white-dot"
          pagination
        >
          {data.images.map((imageTransportation, index) => {
            return (
              <div key={index} className="relative h-[141px]">
                <Image
                  src={imageTransportation.src}
                  alt={`image-${index}`}
                  width={942}
                  height={708}
                  className="w-[608px] bg-white object-cover"
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

      <CardDetailContent className="overflow-hidden rounded-[14px] px-4 py-2">
        <div className="!mt-0 flex flex-col gap-2 text-primary-foreground">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">{data.provider}</span>
            <span className="text-xs">
              {category === "Silver" || category === "Gold"
                ? "Economy-Class"
                : "VVIP-Class"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CustomSeatReclineIcon />
            <span className="text-xs leading-[18px] opacity-60">
              {data.seat_amount} Kursi
            </span>
          </div>
        </div>
      </CardDetailContent>
    </CardDetail>
  );
};

export default TransportationSection;
