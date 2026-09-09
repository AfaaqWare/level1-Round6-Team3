"use client";

import type { RefObject } from "react";
import { useTranslations } from "next-intl";
import Text from "@/shared/components/atoms/Text";
import Pagination from "@/shared/components/molecules/Pagination";

interface SurveysGridFooterProps {
  isDesktop: boolean;
  hasMore: boolean;
  sentinelRef: RefObject<HTMLDivElement | null>;
  page: number;
  totalPages: number;
  start: number;
  end: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function SurveysGridFooter({
  isDesktop,
  hasMore,
  sentinelRef,
  page,
  totalPages,
  start,
  end,
  total,
  onPageChange,
}: SurveysGridFooterProps) {
  const t = useTranslations("dashboard.surveys.pagination");

  if (!isDesktop) {
    return hasMore ? (
      <div ref={sentinelRef} className="h-1 w-full" aria-hidden="true" />
    ) : (
      <Text size="sm" variant="secondary" isCenter className="mt-6">
        {t("endReached")}
      </Text>
    );
  }

  if (totalPages <= 1) return null;

  return (
    <Pagination
      page={page}
      totalPages={totalPages}
      start={start}
      end={end}
      total={total}
      onPageChange={onPageChange}
      translationNamespace="dashboard.surveys.pagination"
      itemsLabelKey="surveys"
    />
  );
}
