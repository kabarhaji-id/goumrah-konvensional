"use client";
import Image from "next/image";

import { CustomSwiper } from "@/components/layout/swiper";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/layout/section";
import { useEffect, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { priceToLocale } from "@/lib/utils";

const additionalServicesList = [
  {
    category: "Layanan Pembuatan/Perpanjang",
    title: "Paspor",
    price: 850000,
    imageUrl: "/assets/image/additional-services/passport.png",
  },
  {
    category: "Layanan Bantuan",
    title: "Vaksinasi Meningitis",
    price: 400000,
    imageUrl: "/assets/image/additional-services/vaccine.png",
  },
];

const AdditionalServices = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [networkSpeed, setNetworkSpeed] = useState("good");

  useEffect(() => {
    if ("connection" in navigator) {
      const connection = (navigator as NavigatorConnection).connection;
      if (connection) {
        const speed = connection.effectiveType;
        setNetworkSpeed(speed);
      }
    }
  }, []);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (networkSpeed === "4g" || networkSpeed === "wifi") {
      clearTimeout(loadingTimeout);
      setIsLoading(false);
    }

    return () => clearTimeout(loadingTimeout);
  }, [networkSpeed]);

  return (
    <Section className="pb-1 pt-0">
      <SectionHeader className="mb-3 px-4">
        <SectionTitle className="flex items-center text-primary">
          Layanan Tambahan
        </SectionTitle>

        <SectionDescription className="text-sm font-normal leading-5 tracking-wide">
          Goumrah sediakan layanan administrasi untuk mempermudah proses ibadah
          kamu. Kamu bisa tambahkan layanan ini saat pemesanan nanti.
        </SectionDescription>
      </SectionHeader>

      <SectionContent>
        <CustomSwiper maxWidth={314} slidesClass="pb-3">
          {additionalServicesList.map((item, index) => {
            return (
              <div
                key={index}
                className="flex overflow-hidden rounded-[14px] shadow-custom-md"
              >
                <div className="relative w-[215px] overflow-hidden bg-primary px-4 py-4">
                  <div className="z-10 flex flex-col gap-4 tracking-wide text-white">
                    <div>
                      <span className="w-full text-[11px]">
                        {item.category}
                      </span>
                      <h6 className="font-bold leading-[22px]">{item.title}</h6>
                    </div>

                    <span className="text-xs leading-4">
                      + {priceToLocale(item.price)}
                    </span>
                  </div>

                  <Image
                    width={79}
                    height={42}
                    src="/assets/patterns/goumrah-bottom-right.svg"
                    alt="pattern-b"
                    className="absolute bottom-0 right-0"
                  />
                </div>

                {isLoading ? (
                  <Skeleton className="h-[110px] w-[99px]" />
                ) : (
                  <div className="w-[99px] flex-shrink-0 overflow-hidden">
                    <Image
                      width={99}
                      height={110}
                      src={item.imageUrl}
                      alt={item.title.toLowerCase()}
                      className="h-full w-[99px]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </CustomSwiper>
      </SectionContent>
    </Section>
  );
};

export default AdditionalServices;
