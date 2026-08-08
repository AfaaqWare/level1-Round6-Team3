import React from "react";
import { cn } from "@/lib/cn";

export default function Button({
  variant = "primary",
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
  children,
  onClick,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium cursor-pointer transition-all duration-[var(--motion-fast)] ease-out focus:outline-none focus:shadow-[0_0_0_var(--focus-ring-width)_var(--focus-ring-color)]";

  const variants = {
    primary:
      "ds-bg-primary ds-text-white hover:opacity-90 active:opacity-80 ds-shadow-sm font-bold text-center",
    secondary:
      "ds-bg-secondary ds-text-white hover:opacity-90 active:opacity-80 ds-shadow-sm text-center",
    outline:
      "bg-transparent border border-[var(--color-primary)] ds-text-primary hover:ds-bg-primary hover:ds-text-white active:opacity-80 text-center",
    ghost:
      "bg-transparent ds-text-primary font-semibold hover:opacity-70 active:opacity-50 text-center",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={cn(
        base,
        "ds-rounded-md",
        "px-[var(--space-xl)] py-[var(--space-sm)] ds-text-base",
        variants[variant] || variants.primary,
        fullWidth ? "w-full" : "",
        isDisabled ? "ds-disabled opacity-50 cursor-not-allowed" : "",
        className
      )}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin -ml-1 mr-2 h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
