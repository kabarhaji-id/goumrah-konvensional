import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        dark: "bg-subtle-foreground text-white !px-2 !py-1 rounded-full opacity-75",
        primaryDarker: "bg-primary text-white rounded",
        secondary:
          "border-transparent bg-primary-background text-primary hover:bg-secondary/80",
        secondaryTransparent:
          "border-transparent bg-[#F1FAFA] bg-opacity-75 px-2 py-1 text-secondary-foreground hover:bg-white rounded-full",
        destructive:
          "border-transparent bg-destructive text-white font-normal hover:bg-destructive/80 rounded",
        destructiveSecondary: "border-none bg-[#FEE2E2] text-destructive",
        outline: "text-foreground",
        gray: "border-none bg-[#E5E7EB] text-primary-foreground",
      },
      size: {
        large: "px-2 py-1",
        default: "px-1 py-0.5",
        medium: "h-[20px] px-1.5 py-0.5 leading-4 tracking-wide",
        small: "h-[18px] px-1 text-xs leading-[18px]",
        "extra-small": "h-[16px] px-1 text-[10px] tracking-wide leading-[15px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
