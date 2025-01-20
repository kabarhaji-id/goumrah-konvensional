import React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLDivElement>;

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn("space-y-8 py-10", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Section.displayName = "Section";

const SectionHeader = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        className={cn("flex flex-col items-center space-y-2 px-6", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return <h2 className={cn("text-center", className)} ref={ref} {...props} />;
});
SectionTitle.displayName = "SectionTitle";

const SectionSubTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return <p className={cn("text-primary", className)} ref={ref} {...props} />;
});
SectionSubTitle.displayName = "SectionSubTitle";

const SectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div className={cn("px-6", className)} ref={ref} {...props} />;
});
SectionContent.displayName = "SectionContent";

export {
  Section,
  SectionHeader,
  SectionTitle,
  SectionSubTitle,
  SectionContent,
};
