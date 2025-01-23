"use client";

import Image from "next/image";

import CustomSeatReclineIcon from "@/public/icons/material-symbols_airline-seat-recline-extra-rounded.svg";

import { CustomSwiper } from "@/components/layout/swiper";
import { useEffect, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { BusDetail, PackageCategory } from "@/types/package-details";
import {
  CardDetail,
  CardDetailContent,
  CardDetailHeader,
} from "@/components/ui/card/package-detail-card";
import { Skeleton } from "@/components/ui/skeleton-loader";

const TransportationCard = ({
  data,
  category,
}: {
  data: BusDetail;
  category: PackageCategory;
}) => {
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
    <CardDetail
      style={{
        background:
          "linear-gradient(180deg, rgba(241,250,250,1) 0%, rgba(255,255,255,1) 60%)",
      }}
    >
      <CardDetailHeader>
        <span className="text-xs font-semibold text-neutral-foreground">
          Bus
        </span>
      </CardDetailHeader>
      <div className="px-3">
        {isLoading ? (
          <Skeleton className="h-[141px] w-full rounded-[14px]" />
        ) : (
          <CustomSwiper
            className="w-full rounded-[14px] !pb-0"
            maxWidth={608}
            padding={0}
            gap={0}
            bulletVariant="white-dot"
            pagination
          >
            {data.images.map((imageTransportation, index) => {
              return (
                <div key={index} className="relative h-[141px]">
                  <Image
                    src={imageTransportation.src}
                    alt={`image-${index}`}
                    width={942}
                    height={708}
                    className="w-[608px] bg-white object-cover"
                  />

                  <div
                    className="absolute bottom-0 h-14 w-full"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
                    }}
                  />
                </div>
              );
            })}
          </CustomSwiper>
        )}
      </div>

      <CardDetailContent className="overflow-hidden rounded-[14px] px-4 py-2">
        <div className="!mt-0 flex flex-col gap-2 text-primary-foreground">
          <div className="flex items-center justify-between">
            {isLoading ? (
              <Skeleton className="h-5 w-[50px]" />
            ) : (
              <span className="text-sm font-semibold">{data.provider}</span>
            )}

            {isLoading ? (
              <Skeleton className="h-4 w-24" />
            ) : (
              <span className="text-xs">
                {category === "Silver" || category === "Gold"
                  ? "Economy-Class"
                  : "VVIP-Class"}
              </span>
            )}
          </div>

          {isLoading ? (
            <Skeleton className="h-[18px] w-20" />
          ) : (
            <div className="flex items-center gap-2">
              <CustomSeatReclineIcon />
              <span className="text-xs leading-[18px] opacity-60">
                {data.seat_amount} Kursi
              </span>
            </div>
          )}
        </div>
      </CardDetailContent>
    </CardDetail>
  );
};

export default TransportationCard;
