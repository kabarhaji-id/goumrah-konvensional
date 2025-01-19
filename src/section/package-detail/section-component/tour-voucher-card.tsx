"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { priceToLocale } from "@/lib/utils";
import { NavigatorConnection } from "@/types/navigator-connection";
import { useEffect, useState } from "react";

const TourVoucherCard = ({
  title,
  category,
  price,
  places,
  imageUrl,
}: {
  title: string;
  category: string;
  price: number;
  places: string[];
  imageUrl: string;
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
    <>
      {isLoading ? (
        <Skeleton className="h-[177px] w-[314px] rounded-md" />
      ) : (
        <div className="relative h-[177px] w-[314px] overflow-hidden rounded-md shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
          </div>
          <div className="relative z-10 flex h-full flex-col justify-between p-4 text-white">
            <div className="flex justify-between gap-4">
              <div>
                <h3 className="text-[11px] font-normal">{category}</h3>
                <h2 className="text-base font-bold leading-6">{title}</h2>
              </div>
              <span className="flex-shrink-0 text-xl font-bold leading-[26px]">
                {priceToLocale(price)}
              </span>
            </div>

            <div className="flex space-x-2">
              {places.map((place, index) => (
                <Button
                  variant="outline"
                  key={index}
                  className="h-fit rounded-full border border-white bg-transparent px-1 py-0.5 text-[11px] font-medium"
                >
                  {place}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourVoucherCard;
