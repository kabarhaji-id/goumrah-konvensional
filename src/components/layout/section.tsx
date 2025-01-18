import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

export interface SectionHomepageProps {
  departureCity: string;
}

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  withVerticalLogo?: boolean;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, ...props }, ref) => (
    <section
      className={cn("relative overflow-hidden py-5", className)}
      ref={ref}
      {...props}
    >
      {children}
    </section>
  ),
);
Section.displayName = "Section";

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "relative z-0 mb-4 flex items-start justify-between gap-x-4 px-4 text-primary-foreground",
      className,
    )}
    ref={ref}
    {...props}
  >
    <div className="w-full space-y-1">{children}</div>
  </div>
));
SectionHeader.displayName = "SectionHeader";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  seeAllHref?: string;
  seeAllHrefColor?: "primary" | "white" | "orange";
}

const SectionTitle = React.forwardRef<HTMLParagraphElement, SectionTitleProps>(
  ({ className, seeAllHref, seeAllHrefColor, ...props }, ref) => (
    <div className="flex justify-between">
      <h2
        className={cn(
          "flex gap-2 text-base font-bold leading-6 tracking-[0.15px]",
          className,
        )}
        ref={ref}
        {...props}
      />
      {seeAllHref && (
        <Link href={seeAllHref} className="flex items-center gap-1">
          <span
            className={`text-xs leading-[18px] ${
              seeAllHrefColor === "primary"
                ? "font-semibold text-primary"
                : seeAllHrefColor === "white"
                  ? "text-white"
                  : "text-[#D69258]"
            }`}
          >
            Lainnya
          </span>
          <ChevronRightIcon
            className={`h-4 w-4 ${
              seeAllHrefColor === "primary"
                ? "stroke-primary"
                : seeAllHrefColor === "white"
                  ? "stroke-white"
                  : "stroke-[#D69258]"
            }`}
          />
        </Link>
      )}
    </div>
  ),
);
SectionTitle.displayName = "SectionTitle";

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p className={cn(className)} ref={ref} {...props} />
));
SectionDescription.displayName = "SectionTitle";

const SectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("w-full", className)} ref={ref} {...props} />
));
SectionContent.displayName = "SectionContent";

export {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
};
