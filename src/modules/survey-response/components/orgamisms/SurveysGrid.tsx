"use client";

import { useMemo } from "react";
import { useLocale } from "next-intl";
import SurveyCard from "./SurveyCard";
import SurveysGridSkeleton from "./SurveysGridSkeleton";
import SurveysGridFooter from "./SurveysGridFooter";
import useSurveysGridData from "../../hooks/useSurveysGridData";
import useSurveysGridReveal from "@/animations/SurveysGridReveal";
import useInfiniteScrollSentinel from "@/shared/hooks/useInfiniteScrollSentinel";
import useIsDesktop from "@/shared/hooks/useIsDesktop";
import useDebouncedValue from "@/shared/hooks/useDebouncedValue";
import { EmptyState, ErrorState } from "@/core/ui-states";
import type { SurveyStatusFilter } from "../molecules/SurveyStatusTabs";
import type { SurveysSortOrder } from "../molecules/SurveySortSelect";

interface SurveysGridProps {
  status: SurveyStatusFilter;
  search: string;
  sort: SurveysSortOrder;
}

const GRID_CLASSNAME = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";
const SEARCH_DEBOUNCE_MS = 300;

export default function SurveysGrid({ status, search, sort }: SurveysGridProps) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const isDesktop = useIsDesktop();

  const debouncedSearch = useDebouncedValue(search, SEARCH_DEBOUNCE_MS);

  const {
    isLoading,
    isError,
    refetch,
    filteredSurveys,
    visibleSurveys,
    page,
    setPage,
    totalPages,
    hasMore,
    loadMore,
    start,
    end,
  } = useSurveysGridData({ status, search: debouncedSearch, sort, isDesktop });

  const sentinelRef = useInfiniteScrollSentinel({ enabled: !isDesktop, onIntersect: loadMore });

  const resetKey = useMemo(
    () =>
      isDesktop
        ? `${status}|${debouncedSearch}|${sort}|${page}`
        : `${status}|${debouncedSearch}|${sort}`,
    [isDesktop, status, debouncedSearch, sort, page]
  );

  const gridRef = useSurveysGridReveal({
    resetKey,
    itemsCount: visibleSurveys.length,
    isRtl,
  });

  if (isLoading) return <SurveysGridSkeleton />;
  if (isError) return <ErrorState onRetry={() => void refetch()} />;
  if (filteredSurveys.length === 0) return <EmptyState />;

  return (
    <div>
      <div ref={gridRef} className={GRID_CLASSNAME}>
        {visibleSurveys.map(survey => (
          <SurveyCard key={survey.id} survey={survey} />
        ))}
      </div>

      <SurveysGridFooter
        isDesktop={isDesktop}
        hasMore={hasMore}
        sentinelRef={sentinelRef}
        page={page}
        totalPages={totalPages}
        start={start}
        end={end}
        total={filteredSurveys.length}
        onPageChange={setPage}
      />
    </div>
  );
}
