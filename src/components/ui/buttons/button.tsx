import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  children: ReactNode;
  icon?: ReactNode; // Icon support
  iconPosition?: "start" | "end"; // Icon position
}

export const Button = ({
                         variant = "primary",
                         size = "default",
                         className,
                         children,
                         icon,
                         iconPosition = "end", // Default icon at the end
                         ...props
                       }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 w-full md:w-auto",
        {
          "bg-primary text-white hover:bg-primary-dark": variant === "primary",
          "border border-primary text-primary hover:bg-primary-light": variant === "outline",
          "px-4 py-2 text-sm": size === "default",
          "px-3 py-1.5 text-xs": size === "sm",
          "px-5 py-3 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {icon && iconPosition === "start" && <span className="text-lg">{icon}</span>}
      {children}
      {icon && iconPosition === "end" && <span className="text-lg">{icon}</span>}
    </button>
  );
};
