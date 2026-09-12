"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Check, ChevronDown } from "@/assets/icons/icons";
import {
  SURVEY_STATUSES,
  type SurveyStatus,
} from "@/modules/survey-response/types/survey";

export const SURVEY_STATUS_COLORS: Record<SurveyStatus, string> = {
  draft: "var(--color-status-draft)",
  published: "var(--color-status-published)",
  closed: "var(--color-status-closed)",
};

interface SurveyStatusFieldProps {
  id?: string;
  label: string;
  helper?: string;
  value: SurveyStatus;
  onChange: (value: SurveyStatus) => void;
  labels: Record<SurveyStatus, string>;
  error?: string;
}

export default function SurveyStatusField({
  id,
  label,
  helper,
  value,
  onChange,
  labels,
  error,
}: SurveyStatusFieldProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="flex flex-col gap-[var(--space-xs)]">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none text-[var(--color-text-primary)]"
      >
        {label}
      </label>

      {helper && (
        <p className="text-xs leading-snug text-[var(--color-text-secondary)]">{helper}</p>
      )}

      <div ref={containerRef} className="relative">
        <button
          type="button"
          id={id}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen(openState => !openState)}
          className={cn(
            "flex h-[46px] w-full cursor-pointer items-center gap-2.5 rounded-[10px] border bg-[var(--color-form)] px-4 text-sm outline-none transition-all duration-[var(--motion-fast)]",
            "border-[var(--border-color-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20",
            error && "border-red-400"
          )}
        >
          <span
            aria-hidden="true"
            className="size-2.5 shrink-0 rounded-full"
            style={{ backgroundColor: SURVEY_STATUS_COLORS[value] }}
          />
          <span className="flex-1 truncate text-start text-[var(--color-text-primary)]">
            {labels[value]}
          </span>
          <ChevronDown
            size={16}
            className={cn(
              "shrink-0 text-[var(--color-text-disabled)] transition-transform",
              open && "rotate-180"
            )}
          />
        </button>

        {open && (
          <ul
            role="listbox"
            aria-label={label}
            className="ds-border-card ds-shadow-md absolute z-30 mt-2 w-full overflow-hidden rounded-xl border bg-[var(--color-bg-card)] py-1"
          >
            {SURVEY_STATUSES.map(status => {
              const selected = status === value;

              return (
                <li key={status} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(status);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-2.5 px-4 py-2.5 text-start ds-text-sm transition-colors",
                      selected ? "ds-primary-200" : "hover:ds-primary-200"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="size-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: SURVEY_STATUS_COLORS[status] }}
                    />
                    <span
                      className={cn(
                        "flex-1 truncate",
                        selected
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-text-primary)]"
                      )}
                    >
                      {labels[status]}
                    </span>
                    {selected && (
                      <Check size={16} className="shrink-0 text-[var(--color-primary)]" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {error && (
        <p role="alert" className="text-xs leading-snug text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}