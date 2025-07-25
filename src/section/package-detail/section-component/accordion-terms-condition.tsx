"use client";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";
import { TermsConditionList } from "@/section/syarat-ketentuan/list-of-content";
import { ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "@/components/ui/skeleton-loader";

const AccordionTermsCondition = () => {
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
        <Skeleton className="mt-2 h-11 w-full rounded-[14px]" />
      ) : (
        <Accordion
          type="single"
          collapsible
          className="mt-2 w-full items-center rounded-[14px] rounded-b-xl border border-subtle bg-white shadow-custom-sm"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger
              className="flex justify-between px-4 py-3 text-sm font-medium leading-[21px] text-primary-foreground"
              variant="primary"
            >
              <span className="text-[15px] font-semibold leading-5">
                Pahami sebelum kamu berangkat
              </span>
            </AccordionTrigger>

            <AccordionContent className="px-4">
              <div className="mt-2 flex flex-col gap-3.5">
                {TermsConditionList.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/syarat-ketentuan${item.link}`}
                      target="_blank"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm leading-4 tracking-wide">
                          {item.title}
                        </span>
                        <ChevronRightIcon className="h-4 w-4 stroke-primary" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
};

export default AccordionTermsCondition;
