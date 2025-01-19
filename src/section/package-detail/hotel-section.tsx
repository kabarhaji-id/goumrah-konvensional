import React from "react";
import AccordionHotel from "./section-component/accordion-hotel";
import moment from "moment";
import "moment/locale/id";

import { CustomSwiper } from "@/components/layout/swiper";
import { HotelIcon } from "lucide-react";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { Hotel } from "@/types/package-details";
import HotelCard from "./section-component/hotel-card";

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
      type: "Madinah",
      data: dataHotel.madinah,
    },
    {
      type: "Makkah",
      data: dataHotel.makkah,
    },
  ];

  ["Madinah", "Makkah"].forEach((type) => {
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

export default HotelSection;
