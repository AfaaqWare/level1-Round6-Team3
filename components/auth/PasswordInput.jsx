"use client";

import React from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/cn";

export default function PasswordInput({
  register,
  name,
  placeholder,
  error,
  disabled = false,
  leftIcon,
  showPassword = false,
  togglePassword,
  className = "",
  ...props
}) {
  const registeredProps = register ? register(name) : {};

  return (
    <div className={cn("flex flex-col gap-1 w-full", className)}>
      <div className="relative flex items-center">
        {/* Left Icon (Lock or custom leftIcon) */}
        <span className="absolute start-3.5 text-[var(--color-text-disabled)] pointer-events-none flex items-center justify-center">
          {leftIcon || <Lock className="w-5 h-5" />}
        </span>

        {/* Input Field */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={placeholder}
          aria-invalid={!!error}
          className={cn(
            "w-full rounded-lg border bg-[var(--color-bg-form)] font-[var(--font-sans)]",
            "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)]",
            "outline-none transition-all duration-[var(--motion-fast)]",
            "h-[50px] ps-11 pe-11 text-base", // Direction-safe padding
            error
              ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500/20"
              : "border-[var(--border-color-card)] dark:border-[var(--border-color-card-dark)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20",
            disabled ? "opacity-50 cursor-not-allowed" : ""
          )}
          {...registeredProps}
          {...props}
        />

        {/* Right Toggle Password Visibility Button */}
        {togglePassword && (
          <button
            type="button"
            onClick={togglePassword}
            disabled={disabled}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute end-3.5 flex items-center justify-center text-[var(--color-text-disabled)] hover:text-[var(--color-text-secondary)] focus:outline-none transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {/* Validation/Error Message */}
      {error && (
        <span className="text-xs text-red-500 mt-1 ps-1" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
