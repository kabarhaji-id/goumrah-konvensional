"use client";

import Image from "next/image";
import Link from "next/link";

import { Section, SectionContent } from "@/components/layout/section";
import { CustomSwiper } from "@/components/layout/swiper";
import { PromoDetail } from "@/types/package-details";
import { useEffect, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "@/components/ui/skeleton-loader";

const PromoSection = ({ dataPromos }: { dataPromos: PromoDetail[] }) => {
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

  if (dataPromos && dataPromos.length > 0) {
    return (
      <Section className={`pb-4 pt-0 ${dataPromos.length === 1 ? "px-4" : ""}`}>
        {/* <SectionTitle
          className={`mb-2 flex items-center ${dataPromos.length > 1 ? "px-4" : ""}`}
        >
          Jangan Lewatkan Promo Lainnya
        </SectionTitle> */}

        <SectionContent>
          {dataPromos.length > 1 ? (
            isLoading ? (
              <Skeleton className="h-[132px] w-[314px] rounded-[14px]" />
            ) : (
              <CustomSwiper>
                {dataPromos.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <Image
                      width={361}
                      height={138}
                      src={item.imageUrl}
                      alt={`image-promo-${index}`}
                      className="h-[132px] w-[314px] rounded-[14px] object-cover"
                      priority
                    />
                  </Link>
                ))}
              </CustomSwiper>
            )
          ) : isLoading ? (
            <Skeleton className="aspect-[24/9] w-full rounded-[14px]" />
          ) : (
            <Link href={dataPromos[0].link}>
              <Image
                width={608}
                height={228}
                src={dataPromos[0].imageUrl}
                alt="image-promo"
                className="aspect-[24/9] w-full rounded-[14px] object-cover"
                priority
              />
            </Link>
          )}
        </SectionContent>
      </Section>
    );
  }
};

export default PromoSection;
