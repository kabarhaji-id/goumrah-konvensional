"use client";

import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

interface DescriptionCollapsibleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dataDescription?: string;
}

const DescriptionCollapsible = ({
  dataDescription,
}: DescriptionCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);

  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkHeight = () => {
      if (ref.current) {
        setShowReadMoreButton(
          ref.current.scrollHeight !== ref.current.clientHeight,
        );
      }
    };

    checkHeight();
    window.addEventListener("resize", checkHeight);

    return () => window.removeEventListener("resize", checkHeight);
  }, [dataDescription]);

  return (
    <Accordion type="single" collapsible className="items-center bg-white">
      <AccordionItem value="item-1">
        {/* Tampilkan teks dengan line-clamp ketika belum dibuka */}
        <p
          ref={ref}
          className={`text-xs leading-5 text-neutral-foreground opacity-80 ${
            !isOpen && "line-clamp-3"
          }`}
        >
          {!isOpen && dataDescription}
        </p>

        {isOpen && (
          <AccordionContent className="pb-1">
            <p className="text-xs leading-5 text-neutral-foreground opacity-80">
              {dataDescription}
            </p>
          </AccordionContent>
        )}

        {showReadMoreButton && (
          <AccordionTrigger
            variant="primary"
            className="items-center gap-1 py-1 text-start text-xs font-semibold leading-4 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex gap-1">
              {isOpen ? (
                <span>Lihat lebih sedikit</span>
              ) : (
                <span>Lihat lebih banyak</span>
              )}
            </div>
          </AccordionTrigger>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export { DescriptionCollapsible };
