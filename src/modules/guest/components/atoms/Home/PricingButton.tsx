import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "primary200" | "white";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  center?: boolean;
}
const PricingButton = ({
  children,
  variant = "primary",
  size = "lg",
  fullWidth = false,
  type = "button",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-all duration-200 hover:scale-[1.04] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed px-1.25 py-0.75 rounded-full";

  const variants = {
    primary: "ds-bg-primary text-white focus:ring-blue-500 cursor-pointer hover:opacity-95 ",
    primary200:
      "ds-primary-200 ds-text-alt hover:opacity-95 focus:ring-secondary-600 cursor-pointer",
    white: "ds-bg-alt ds-text-alt border-2 border-white  focus:ds-border-sm  cursor-pointer",
  };

  const sizes = {
    sm: "!px-3 !py-2 text-sm",
    md: "!px-5 !py-2.5 text-base",
    lg: "!px-6 !py-4 text-md",
  };

  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
      )}
    >
      {children}
    </button>
  );
};

export default PricingButton;
