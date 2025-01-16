"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";

const chevronVariants = cva("h-4 w-4 transition-transform", {
  variants: {
    variant: {
      primary: "stroke-primary",
      darkPrimary: "stroke-primary-foreground",
      dark: "stroke-neutral-foreground",
      white: "stroke-white w-6 h-6",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  variant?: "primary" | "darkPrimary" | "dark" | "white";
  withChevron?: boolean;
}

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(
  (
    { children, withChevron = true, variant = "primary", className, ...props },
    ref,
  ) => {
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            `flex flex-1 items-center py-4 text-sm font-medium transition-all ${withChevron && "[&[data-state=open]>svg]:rotate-180"}`,
            className,
          )}
          {...props}
        >
          {children}
          {withChevron && (
            <ChevronDownIcon
              className={chevronVariants({ variant })}
              stroke="none"
            />
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  },
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
