"use client";

import Image from "next/image";

import { useEffect, useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { PackageCategory } from "@/types/package-details";
import { XIcon } from "lucide-react";

const ImagePoster = ({
  packageImage,
  packageCategory,
  isTurki,
  isDubai,
}: {
  packageImage: string;
  packageCategory: PackageCategory;
  isTurki?: boolean;
  isDubai?: boolean;
}) => {
  const [isImageError, setIsImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isPopupShowed, setIsPopupShowed] = useState(true);

  useEffect(() => {
    setIsImageLoaded(false);
    setIsImageError(false);
  }, [packageImage]);

  if (!packageImage || isImageError) {
    return (
      <div className="relative w-full">
        <div className="flex aspect-[4/3] max-h-[380px] w-full items-center justify-center bg-gray-100">
          <span className="text-sm text-gray-500">Foto tidak tersedia</span>
        </div>
      </div>
    );
  }

  const popupImage = useMemo(() => {
    let src: string;
    let width: number;
    let height: number;

    if (isTurki) {
      src = "/assets/image/popup/turkey.png";
      width = 2502;
      height = 2475;
    } else if (isDubai) {
      src = "/assets/image/popup/dubai.png";
      width = 2637;
      height = 2422;
    } else switch (packageCategory) {
      case "Silver":
        src = "/assets/image/popup/silver.png";
        width = 2637;
        height = 2422;
        break;
      case "Gold":
        src = "/assets/image/popup/gold.png";
        width = 2637;
        height = 2502;
        break;
      case "Platinum":
        src = "/assets/image/popup/platinum.png";
        width = 2502;
        height = 2460;
        break;
      default:
        throw new Error("Invalid package category");
    }

    return { src, width, height };
  }, [packageCategory]);

  return (
    <>
      <div className="relative w-full">
        {!isImageLoaded && (
          <Skeleton className="aspect-[4/3] max-h-[380px] w-full rounded-none" />
        )}

        <Image
          priority quality={70}
          src={packageImage}
          alt={`image-${packageImage}`}
          width={640}
          height={380}
          className={`w-full object-cover transition-opacity duration-500 ${!isImageLoaded ? "h-0" : "h-full max-h-[380px]"
            }`}
          onLoad={() => {
            setIsImageLoaded(true);
          }}
          onError={() => {
            setIsImageError(true);
          }}
        />
      </div>

      {isPopupShowed && (
        <div className="flex items-center justify-center fixed left-1/2 -translate-x-1/2 top-12 z-[999]">
          <div className="relative size-72">
            <Image
              src={popupImage.src}
              alt="Popup Image"
              fill
              priority
              className="object-contain"
            />
            <button className="absolute top-2 right-2 cursor-pointer z-[1000]" onClick={() => setIsPopupShowed(false)}>
              <XIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePoster;
