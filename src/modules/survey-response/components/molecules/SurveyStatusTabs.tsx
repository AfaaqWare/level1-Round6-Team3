"use client";

import { cn } from "@/lib/cn";
import SeperatorLink from "@/shared/components/atoms/SeperatorLink";
import { useTranslations } from "next-intl";

export type SurveyStatusFilter = "all" | "draft" | "published" | "closed";

interface SurveyStatusTabsProps {
  value: SurveyStatusFilter;
  onChange: (value: SurveyStatusFilter) => void;
  className?: string;
}

const TABS: SurveyStatusFilter[] = ["all", "draft", "published", "closed"];

export default function SurveyStatusTabs({ value, onChange, className }: SurveyStatusTabsProps) {
  const t = useTranslations("dashboard.surveys.filters.tabs");

  return (
    <div
      className={cn(
        "ds-bg-card ds-border-card ds-rounded-md inline-flex w-fit items-center",
        className
      )}
    >
      {TABS.map((tab, index) => {
        const isActive = tab === value;

        return (
          <div key={tab} className="flex items-center">
            {index > 0 && (
              <SeperatorLink
                orientation="vertical"
                aria-hidden
                className="mx-1 h-5 !w-px !bg-[var(--border-color)]"
              />
            )}

            <button
              type="button"
              onClick={() => onChange(tab)}
              aria-pressed={isActive}
              className={cn(
                "ds-rounded-md ds-text-sm cursor-pointer px-5 py-2 font-semibold whitespace-nowrap transition-colors",
                isActive
                  ? "!ds-border-focus ds-bg-teal-soft ds-text-teal dark:!bg-[var(--color-stats-teal)] dark:!text-white"
                  : "ds-text-disabled hover:!text-[var(--color-primary)]"
              )}
            >
              {t(tab)}
            </button>
          </div>
        );
      })}
    </div>
  );
}
