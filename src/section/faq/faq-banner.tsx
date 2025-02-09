"use client";

import Image from "next/legacy/image";
import { Skeleton } from "@/components/ui/skeleton-loader"; // If you're using this, make sure it's correctly imported
import { useState } from "react"; // No need for useEffect if just tracking load/error
import Exclamation from "@/public/icons/exclamation-rounded.svg";

const FAQBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <section className="w-full">
        <div
          className="relative h-[149px] overflow-hidden bg-imagw rounded-[10px] flex items-center justify-center m-1 p-4">
          {imageError && (
            <Skeleton className="w-full h-full absolute inset-0" />
          )}
          <div className="relative w-full h-full">
            <Image
              src="/assets/image/faq-bg.png"
              alt="FAQ Background"
              width={640}
              height={380}
              className={`object-contain object-center transition-opacity duration-500 absolute inset-0 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              priority
            />
          </div>

          <div
            className="absolute top-0 left-0 flex items-center justify-center flex-col mt-5"> {/* Text container */}
            <p className="font-bold flex items-center text-xs text-[#1B8386] py-1"> {/* Add flex and items-center */}
              <span className="mr-2"><Exclamation size={24} /></span>
              Informasi Penting
            </p>
            <p className="text-black text-xs text-justify px-[25px] pb-[25px]">
              Website resmi dari Goumroh adalah www.goumroh.id, jika ada agent atau personal yang meminta pembayaran
              selain melalui Pembayaran Resmi dari goumroh.id, kamu dapat menghubungi
              email <strong>admin@goumroh.id</strong> atau telepon customer service di <strong>0811 157 188</strong>
            </p>
          </div>
        </div>


      </section>
    </>

  );
};

export default FAQBanner;