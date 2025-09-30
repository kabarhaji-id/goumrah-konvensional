"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { XIcon } from "lucide-react";

const ImagePoster = ({
  packageImage,
}: {
  packageImage: string;
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
        <div className="fixed left-1/2 -translate-x-1/2 top-12 z-[99999999999999]">
          <div className="flex flex-col items-center relative border border-opacity-70 rounded-full aspect-square bg-white/10">
            <Image
              src="/assets/image/isma-pointing.png"
              alt="Isma Pointing"
              width={300}
              height={300}
              priority
              className="w-auto h-40"
            />
            <button className="absolute right-2 top-4" onClick={() => setIsPopupShowed(false)}>
              <XIcon className="size-7" />
            </button>
            {/* <p className="-mt-12 text-xl font-bold text-white">Halo</p> */}
            <div className="flex justify-center items-center bg-white/70 rounded-full px-3 pt-1 pb-2 w-64 flex-col border-2 shadow">
              <p className="text-center font-medium tracking-normal text-sm">Ini paket Umrah terbaik kita loh!
                jangan lupa di checkout yaaaa.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePoster;
