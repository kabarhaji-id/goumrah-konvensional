"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { capitalize } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import { useImageStore } from "@/store/useInterfaceStore";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HotelDetail, Images } from "@/types/package-details";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetImagePreview } from "./sheet-image-preview";

interface SheetHotelImagesProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "makkah" | "madinah" | "wisata" | string;
  dataHotel: HotelDetail;
  children: React.ReactNode;
}

export type GroupedImages = Record<string, Images[]>;

export const SheetHotelImages = ({
  variant,
  dataHotel,
  children,
}: SheetHotelImagesProps) => {
  const groupedImages = Object.entries(
    dataHotel.images.reduce<Record<string, Images[]>>((acc, image) => {
      const { category } = image;

      if (category) {
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(image);
      } else {
        if (!acc["Lainnya"]) {
          acc["Lainnya"] = [];
        }

        acc["Lainnya"].push(image);
      }

      return acc;
    }, {}),
  ).map(([category, images]) => ({
    category,
    images,
  }));

  const { setActiveImageIndex, setActiveCategory } = useImageStore();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      if (isSheetOpen) {
        setIsSheetOpen(false);
        window.history.pushState(null, "", window.location.href);
      }
    };

    if (isSheetOpen) {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isSheetOpen]);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side="right" className="border-none bg-white">
        <SheetDescription />
        <SheetTitle />
        <div className="fixed z-10 flex w-full max-w-screen-sm items-center gap-5 bg-white px-4 py-2.5 shadow">
          <SheetClose>
            <ArrowLeftIcon className="h-6 w-6 stroke-primary" stroke="none" />
          </SheetClose>
          <div className="flex flex-col gap-0.5">
            <span className="text-prstroke-primary font-bold">
              {`Hotel ${variant !== "Makkah" && variant !== "Madinah" ? "Wisata" : capitalize(variant)}`}
            </span>
            <span className="text-sm font-medium text-neutral-foreground/80">
              {dataHotel && dataHotel.hotel_name}
            </span>
          </div>
        </div>

        <ScrollArea className="h-screen w-full border">
          <div className="mt-[62px] flex flex-col gap-3 py-5">
            {groupedImages.map((group) => (
              <div key={group.category} className="px-4">
                <h3 className="mb-2 font-semibold">{group.category}</h3>

                <SheetImagePreview
                  variant={variant}
                  dataImages={groupedImages}
                  dataHotel={dataHotel}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {group.images.map((image, index) => (
                      <Image
                        key={`${image.category}-${dataHotel.hotel_name}-${index}`}
                        width={607}
                        height={350}
                        src={image.src}
                        alt={`image-${dataHotel.hotel_name}-${index}`}
                        className={`rounded-md object-cover ${
                          group.images.length % 2 === 0
                            ? index === 0 || index === group.images.length - 1
                              ? "col-span-2 aspect-video w-[607px]"
                              : "aspect-square"
                            : index === group.images.length - 1
                              ? "col-span-2 aspect-video w-[607px]"
                              : "aspect-square"
                        }`}
                        onClick={() => {
                          const globalIndex = groupedImages
                            .flatMap((g) => g.images)
                            .findIndex((img) => img.id === image.id);
                          setActiveImageIndex(globalIndex);
                          setActiveCategory(image.category!);
                        }}
                      />
                    ))}
                  </div>
                </SheetImagePreview>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
  {
    /* <SwiperHotelImages dataHotelImages={dataHotel.images} /> */
  }
};
