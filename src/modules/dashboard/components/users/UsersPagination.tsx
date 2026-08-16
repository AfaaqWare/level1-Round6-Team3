"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";

interface Props {
  page: number;
  totalPages: number;
  start: number;
  end: number;
  total: number;
  onPageChange: (page: number) => void;
}

function getPageItems(page: number, totalPages: number): Array<number | "ellipsis"> {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (page >= totalPages - 3) {
    return ["ellipsis", ...Array.from({ length: 5 }, (_, i) => totalPages - 4 + i)];
  }

  const items: Array<number | "ellipsis"> = Array.from({ length: 4 }, (_, i) => page + i);
  if (page + 3 < totalPages) {
    items.push("ellipsis", totalPages);
  }
  return items;
}

interface PageButtonProps {
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  bordered?: boolean;
  ariaLabel?: string;
  children: ReactNode;
}

function PageButton({ onClick, disabled, active, bordered, ariaLabel, children }: PageButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center ds-rounded-md px-2 ds-text-sm ds-font-bold border-2 transition-colors disabled:cursor-not-allowed disabled:opacity-40 focus:ds-focus",
        active
          ? "ds-border-primary ds-text-alt"
          : bordered
            ? "ds-border-color ds-text-primary hover:ds-primary-200"
            : "border-transparent ds-text-primary hover:ds-primary-200"
      )}
    >
      {children}
    </button>
  );
}

export default function UsersPagination({ page, totalPages, start, end, total, onPageChange }: Props) {
  const t = useTranslations("dashboard.users");
  const items = getPageItems(page, totalPages);

  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="ds-text-sm ds-text-secondary">
        {t("pagination.showing", { start, end, total })}{" "}
        <span className="ds-text-primary ds-font-bold">{t("pagination.users")}</span>
      </p>

      <nav className="flex items-center gap-1.5" aria-label={t("pagination.nav")}>
        <PageButton onClick={() => onPageChange(1)} disabled={page <= 1} bordered ariaLabel={t("pagination.first")}>
          <ChevronsLeft size={16} className="rtl:rotate-180" />
        </PageButton>

        <PageButton onClick={() => onPageChange(page - 1)} disabled={page <= 1} bordered ariaLabel={t("pagination.previous")}>
          <ChevronLeft size={16} className="rtl:rotate-180" />
        </PageButton>

        {items.map((item, index) =>
          item === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              aria-hidden="true"
              className="px-1 ds-text-sm ds-text-secondary"
            >
              ...
            </span>
          ) : (
            <PageButton key={item} active={item === page} onClick={() => onPageChange(item)}>
              {item}
            </PageButton>
          )
        )}

        <PageButton onClick={() => onPageChange(page + 1)} disabled={page >= totalPages} bordered ariaLabel={t("pagination.next")}>
          <ChevronRight size={16} className="rtl:rotate-180" />
        </PageButton>

        <PageButton onClick={() => onPageChange(totalPages)} disabled={page >= totalPages} bordered ariaLabel={t("pagination.last")}>
          <ChevronsRight size={16} className="rtl:rotate-180" />
        </PageButton>
      </nav>
    </div>
  );
}
