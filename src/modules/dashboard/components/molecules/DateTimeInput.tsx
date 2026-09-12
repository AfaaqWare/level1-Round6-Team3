"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/cn";
import { CalendarDays, X } from "@/assets/icons/icons";

interface DateTimeInputProps {
  id?: string;
  label?: string;
  helper?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  ariaLabel?: string;
  value: string;
  onChange: (value: string) => void;
  locale: string;
  clearLabel?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Normalize any supported date/deadline string into `datetime-local` format (YYYY-MM-DDTHH:mm). */
export const toDateTimeLocalValue = (value: string): string => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}`;
};

/** Format a datetime-local string like `10 May 2025, 11:59 PM` in the active locale. */
export const formatDateTimeLabel = (value: string, locale: string): string => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

type DatetimeLocalElement = HTMLInputElement & { showPicker?: () => void };

const triggerClassName =
  "flex h-[46px] w-full items-center rounded-[10px] border border-[var(--border-color-muted)] bg-[var(--color-form)] ps-10 pe-10 text-sm outline-none transition-all duration-[var(--motion-fast)]";

export default function DateTimeInput({
  id,
  label,
  helper,
  placeholder,
  required = false,
  error,
  ariaLabel,
  value,
  onChange,
  locale,
  clearLabel,
}: DateTimeInputProps) {
  const inputRef = useRef<DatetimeLocalElement>(null);

  const openPicker = () => {
    const input = inputRef.current;
    if (!input) return;
    if (typeof input.showPicker === "function") {
      try {
        input.showPicker();
        return;
      } catch {
        // Some browsers throw if the picker is already open - fall back to focus.
      }
    }
    input.focus({ preventScroll: true });
  };

  const display = formatDateTimeLabel(value, locale);
  const fieldId = id ?? "datetime-input";
  const fieldLabel = label ?? ariaLabel;

  return (
    <div className="flex flex-col gap-[var(--space-xs)]">
      {label && (
        <label
          htmlFor={fieldId}
          className="text-sm font-medium leading-none text-[var(--color-text-primary)]"
        >
          {label}
          {required && (
            <span className="ms-1 text-red-500" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {helper && (
        <p className="text-xs leading-snug text-[var(--color-text-secondary)]">{helper}</p>
      )}

      <div className="relative rounded-[10px] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/20 focus-within:ring-offset-0">
        <span className="pointer-events-none absolute top-1/2 start-3 z-10 flex -translate-y-1/2 items-center text-[var(--color-text-disabled)]">
          <CalendarDays size={18} />
        </span>

        <span
          className={cn(
            triggerClassName,
            error && "border-red-400",
            "text-start leading-none"
          )}
        >
          <span
            className={cn(
              "truncate",
              display ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-disabled)]"
            )}
          >
            {display || placeholder}
          </span>
        </span>

        {value && (
          <button
            type="button"
            aria-label={clearLabel}
            onClick={event => {
              event.stopPropagation();
              onChange("");
            }}
            className="absolute top-1/2 end-3 z-20 flex -translate-y-1/2 cursor-pointer items-center rounded-full p-1 text-[var(--color-text-disabled)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            <X size={15} />
          </button>
        )}

        <input
          ref={inputRef}
          id={fieldId}
          type="datetime-local"
          value={value}
          aria-label={fieldLabel}
          aria-invalid={!!error}
          onChange={event => onChange(event.currentTarget.value)}
          onClick={openPicker}
          onKeyDown={event => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openPicker();
            }
          }}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0 outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
        />
      </div>

      {error && (
        <p role="alert" className="text-xs leading-snug text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}