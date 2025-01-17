import React from "react";

import { cn } from "@/lib/utils";

const CardDetail = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "mb-2 flex w-full flex-col rounded-[14px] bg-primary-background shadow-custom-sm",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));
CardDetail.displayName = "CardDetail";

const CardDetailHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div className={cn("flex gap-2.5 px-3 py-2", className)} ref={ref} {...props}>
    {children}
  </div>
));
CardDetailHeader.displayName = "CardDetailHeader";

const CardDetailContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("relative w-full bg-white", className)}
    ref={ref}
    {...props}
  />
));
CardDetailContent.displayName = "CardDetailContent";

export { CardDetail, CardDetailHeader, CardDetailContent };
