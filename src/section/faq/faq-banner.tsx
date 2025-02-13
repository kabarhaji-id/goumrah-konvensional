"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton-loader"; // If you're using this, make sure it's correctly imported
import { useState } from "react"; // No need for useEffect if just tracking load/error
import Exclamation from "@/public/icons/exclamation-rounded.svg";

const FAQBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
      <>
        <section className="w-full p-6">
          <div
              className="relative h-[149px] overflow-hidden bg-imagw rounded-[10px] flex items-center justify-center m-1 p-4">
            {imageError && <Skeleton className="w-full h-full absolute inset-0"/>}

            {/* Image wrapper with z-0 to stay in the background */}
            <div className="absolute w-full h-full z-0">
              <Image
                  src="/assets/image/faq-bg.png"
                  alt="FAQ Background"
                  width={640}
                  height={380}
                  className={`object-cover w-full h-full transition-opacity duration-500 absolute inset-0 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  priority
              />
            </div>

            {/* Text container with z-10 to ensure it's above the image */}
            <div className="relative z-10 flex items-center justify-center flex-col mt-5 text-center">
              <p className="font-bold flex items-center text-xs text-[#1B8386] py-1">
                <span className="mr-2"><Exclamation size={24}/></span>
                Informasi Penting
              </p>
              <p className="text-black text-xs text-justify px-[25px] pb-[25px]">
                Website resmi dari Goumrah adalah <strong>www.goumrah.id</strong>, jika ada agen atau personal yang
                meminta pembayaran
                selain melalui Pembayaran Resmi dari goumrah.id, kamu dapat menghubungi
                email <strong>admin@goumrah.id</strong> atau telepon customer service di <strong>0811 157 188</strong>.
              </p>
            </div>
          </div>
        </section>

      </>

  );
};

export default FAQBanner;