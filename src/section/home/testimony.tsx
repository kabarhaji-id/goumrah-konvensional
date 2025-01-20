"use client";

import { testimonies } from "@/data/testimonies";
import { type Testimony } from "@/types/testimonies";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const TestimonyCard = ({ testimony }: { testimony: Testimony }) => {
  return (
    <div className="relative h-[182px] w-[299px] space-y-3 overflow-hidden rounded-[14px] border border-subtle bg-white p-4 shadow-custom-sm">
      <div className="space-y-1">
        <p className="line-clamp-4 text-xs leading-[18px] tracking-wide text-neutral-foreground">
          {testimony.review}
        </p>
      </div>

      <div className="space-y-0.5">
        <span className="text-sm font-semibold leading-5 tracking-wide text-primary-foreground">
          {testimony.reviewer}
        </span>
        <div className="flex items-center gap-0.5">
          <StarIcon className="h-3 w-3" fill="#D19E45" stroke="none" />
          <span className="text-sm font-bold text-accent-gold">
            {testimony.rating}
          </span>
        </div>
      </div>

      <Image
        src="/assets/image/testimony-logo.png"
        alt="Testimony Logo"
        width={121}
        height={72}
        className="absolute bottom-0 right-0"
      />
    </div>
  );
};

const TestimonySection = () => {
  return (
    <section id="testimony" className="flex flex-col gap-3 px-4 py-5">
      <div className="flex items-center gap-1 text-primary">
        <StarIcon className="size-5 fill-current" />
        <h2 className="text-base font-semibold leading-[150%] tracking-wide">
          Testimoni
        </h2>
      </div>

      <Swiper spaceBetween={16} slidesPerView="auto" className="w-full">
        {testimonies.map((testimony) => (
          <SwiperSlide key={testimony.id} className="!w-[299px]">
            <TestimonyCard testimony={testimony} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonySection;
