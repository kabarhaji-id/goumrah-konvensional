"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SwiperCore from "swiper";

import { ArrowLeftIcon } from "lucide-react";
import { useImageStore } from "@/store/useInterfaceStore";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Swiper, SwiperSlide } from "swiper/react";
import { HotelDetail, Images } from "@/types/package-details";

interface SheetImagePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "makkah" | "madinah" | "wisata" | string;
  dataHotel: HotelDetail;
  dataImages: GroupedImages[];
  children: React.ReactNode;
}

export interface GroupedImages {
  category: string;
  images: Images[];
}

export const SheetImagePreview = ({
  variant,
  dataHotel,
  dataImages,
  children,
}: SheetImagePreviewProps) => {
  const {
    activeImageIndex,
    activeCategory,
    setActiveImageIndex,
    setActiveCategory,
  } = useImageStore();

  const mainSwiperRef = useRef<SwiperCore | null>(null);
  const thumbnailSwiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    const thumbnailSwiper = thumbnailSwiperRef.current;
    if (thumbnailSwiper && activeImageIndex !== null) {
      thumbnailSwiper.slideTo(activeImageIndex, 0, false);
    }
  }, [activeImageIndex]);

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side="right" className="border-none bg-neutral-foreground">
        <DialogTitle />
        <DialogDescription />
        <div className="flex w-full max-w-screen-sm items-center gap-5 px-4 py-2.5">
          <SheetClose className="z-[999]">
            <ArrowLeftIcon className="h-6 w-6 stroke-white" stroke="none" />
          </SheetClose>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-white">
              {variant === "Makkah"
                ? "Hotel Makkah"
                : variant === "Madinah"
                  ? "Hotel Madinah"
                  : "Hotel Wisata"}{" "}
              - {dataHotel.hotel_name}
            </span>
          </div>
        </div>

        {/* --- Main Swiper */}
        <div className="h-full w-full">
          <Swiper
            className="absolute top-1/3 w-full -translate-y-1/3"
            onSlideChange={(swiper) => {
              const newIndex = swiper.activeIndex;

              const allImages = dataImages.flatMap((group) => group.images);
              const newCategory = allImages[newIndex]?.category || "Lainnya";
              setActiveImageIndex(newIndex);
              setActiveCategory(newCategory);

              const thumbnailSwiper = thumbnailSwiperRef.current;
              if (thumbnailSwiper && thumbnailSwiper.activeIndex !== newIndex) {
                thumbnailSwiper.slideTo(newIndex);
              }
            }}
            onSwiper={(instance) => (mainSwiperRef.current = instance)}
            initialSlide={activeImageIndex}
            updateOnWindowResize
          >
            {dataImages
              .flatMap((group) => group.images)
              .map((image, index) => (
                <SwiperSlide key={index} className="flex">
                  <Image
                    width={640}
                    height={360}
                    src={image.src}
                    alt={`image-${dataHotel.hotel_name}-${index}`}
                    className="aspect-video w-full object-cover"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* --- Thumbnail Swiper */}
        <div className="bg-shark-900 absolute bottom-0 flex w-full max-w-screen-sm flex-col gap-4 rounded-t-2xl py-5">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-base font-semibold text-white">
              {activeCategory || "Lainnya"}
            </h2>
            <span className="text-sm leading-4 text-white">
              {dataImages.flatMap((group) => group.images).length > 0
                ? `${activeImageIndex + 1}/${dataImages.flatMap((group) => group.images).length}`
                : "0/0"}
            </span>
          </div>

          <div className="w-full max-w-screen-sm gap-2">
            <Swiper
              spaceBetween={8}
              breakpoints={{
                0: { slidesPerView: 2 },
                330: { slidesPerView: 3 },
                375: { slidesPerView: 3.5 },
                430: { slidesPerView: 4 },
                500: { slidesPerView: 4.5 },
                580: { slidesPerView: 5 },
                605: { slidesPerView: 5.5 },
                630: { slidesPerView: 6 },
              }}
              onSwiper={(instance) => {
                thumbnailSwiperRef.current = instance;

                if (instance && activeImageIndex !== null) {
                  instance.slideTo(activeImageIndex, 0, false);
                }
              }}
              className="!px-3"
            >
              {dataImages
                .flatMap((group) => group.images)
                .map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex !w-fit justify-center"
                  >
                    <Image
                      width={96}
                      height={96}
                      src={image.src}
                      alt={`image-${dataHotel.hotel_name}-${index}`}
                      className={`aspect-square h-full max-h-24 w-full max-w-24 cursor-pointer rounded-sm object-cover ${
                        activeImageIndex === index
                          ? "border-2 border-primary"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveImageIndex(index);
                        setActiveCategory(image.category || "Lainnya");

                        const mainSwiper = mainSwiperRef.current;
                        const thumbnailSwiper = thumbnailSwiperRef.current;

                        if (mainSwiper && mainSwiper.activeIndex !== index) {
                          mainSwiper.slideTo(index);
                        }

                        if (
                          thumbnailSwiper &&
                          thumbnailSwiper.activeIndex !== index
                        ) {
                          thumbnailSwiper.slideTo(index);
                        }
                      }}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
