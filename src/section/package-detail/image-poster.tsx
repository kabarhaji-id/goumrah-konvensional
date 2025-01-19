"use client";

import Image from "next/image";

import GoldAccent from "/public/assets/patterns/gold-accent.svg";
import SilverAccent from "/public/assets/patterns/silver-accent.svg";
import PlatinumAccent from "/public/assets/patterns/platinum-accent.svg";
import LuxuryAccent from "/public/assets/patterns/luxury-accent.svg";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton-loader";

const ImagePoster = ({
  packageImage,
  packageCategory,
}: {
  packageImage: string;
  packageCategory: string;
}) => {
  const [isImageError, setIsImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false);
    setIsImageError(false);
  }, [packageImage]);

  if (!packageImage || isImageError) {
    return (
      <div className="relative w-full">
        <div className="flex h-[380px] w-full items-center justify-center bg-gray-100">
          <span className="text-sm text-gray-500">Foto tidak tersedia</span>
        </div>

        <div className="absolute -bottom-0 z-20 h-fit">
          {packageCategory === "Silver" && <SilverAccent className="w-full" />}
          {packageCategory === "Gold" && <GoldAccent className="w-full" />}
          {packageCategory === "Platinum" && (
            <PlatinumAccent className="w-full" />
          )}
          {packageCategory === "Luxury" && <LuxuryAccent className="w-full" />}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full">
        {!isImageLoaded && (
          <Skeleton className="h-[380px] w-full rounded-none" />
        )}

        <Image
          src={packageImage}
          alt={`image-${packageImage}`}
          width={640}
          height={380}
          className={`w-full object-cover transition-opacity duration-500 ${
            !isImageLoaded ? "h-0" : "h-full max-h-[380px]"
          }`}
          onLoad={() => {
            setIsImageLoaded(true);
          }}
          onError={() => {
            setIsImageError(true);
          }}
        />

        <div className="absolute -bottom-0 z-20 h-fit">
          {packageCategory === "Silver" && <SilverAccent className="w-full" />}
          {packageCategory === "Gold" && <GoldAccent className="w-full" />}
          {packageCategory === "Platinum" && (
            <PlatinumAccent className="w-full" />
          )}
          {packageCategory === "Luxury" && <LuxuryAccent className="w-full" />}
        </div>
      </div>
    </>
  );
};

export default ImagePoster;
