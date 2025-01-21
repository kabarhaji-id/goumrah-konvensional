"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton-loader";
import { capitalize, getAmountOfDiscount, priceToLocale } from "@/lib/utils";
import { NavigatorConnection } from "@/types/navigator-connection";
import { useEffect, useState } from "react";

interface PricingList {
  title: string;
  price?: number;
  priceFinal?: number;
  description: string;
  note?: string;
}

const PricingCard = ({ pricingList }: { pricingList: PricingList[] }) => {
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
    <div className="mx-4 space-y-2 rounded-[14px] border border-subtle bg-white px-3 py-4 text-primary-foreground shadow-custom-sm transition-all">
      {pricingList
        .filter((p) => p.price)
        .map((data, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex w-full max-w-[150px] items-center justify-between gap-2">
                    <p className="font-bold leading-6 tracking-[0.15px]">
                      {capitalize(data.title)}
                    </p>

                    {data.priceFinal &&
                      data.price !== Number(data.priceFinal) && (
                        <Badge variant="destructive" size="medium">
                          <span className="text-[11px]">
                            {getAmountOfDiscount(
                              data.price!,
                              Number(data.priceFinal),
                            )}
                          </span>
                        </Badge>
                      )}
                  </div>

                  <p className="text-xs leading-4 tracking-wide opacity-60">
                    {data.description} <br />
                    {data.note}
                  </p>
                </div>

                {isLoading ? (
                  <Skeleton className="h-8 w-32" />
                ) : (
                  <div className="flex flex-shrink-0 flex-col">
                    {data.priceFinal &&
                    data.price !== Number(data.priceFinal) ? (
                      <>
                        <span className="text-end text-sm leading-5 tracking-wide line-through opacity-60">
                          {priceToLocale(data.price!)}
                        </span>

                        <span className="text-base font-bold leading-6 tracking-wide">
                          {priceToLocale(Number(data.priceFinal))}
                        </span>
                      </>
                    ) : (
                      <span className="text-base font-bold leading-6 tracking-wide">
                        {priceToLocale(data.price!)}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {index !== pricingList.filter((p) => p.price).length - 1 && (
                <Separator />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default PricingCard;
