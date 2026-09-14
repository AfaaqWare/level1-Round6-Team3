"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { RESPONSES_PREVIEW_ROW_LIMIT } from "../utils/data";
import type { SurveyResponse } from "@/modules/responses/type/responses";

interface UseResponsesTableDataParams {
  rows: SurveyResponse[];
  isDesktop: boolean;
}

export default function useResponsesTableData({ rows, isDesktop }: UseResponsesTableDataParams) {
  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(RESPONSES_PREVIEW_ROW_LIMIT);

  const totalPages = Math.max(1, Math.ceil(rows.length / RESPONSES_PREVIEW_ROW_LIMIT));

  useEffect(() => {
    setPage(current => Math.min(current, totalPages));
  }, [totalPages]);

  useEffect(() => {
    setVisibleCount(RESPONSES_PREVIEW_ROW_LIMIT);
  }, [rows.length]);

  const visibleRows = useMemo(
    () =>
      isDesktop
        ? rows.slice((page - 1) * RESPONSES_PREVIEW_ROW_LIMIT, page * RESPONSES_PREVIEW_ROW_LIMIT)
        : rows.slice(0, visibleCount),
    [rows, isDesktop, page, visibleCount]
  );

  const hasMore = !isDesktop && visibleCount < rows.length;

  const loadMore = useCallback(() => {
    setVisibleCount(count => Math.min(count + RESPONSES_PREVIEW_ROW_LIMIT, rows.length));
  }, [rows.length]);

  const start = rows.length === 0 ? 0 : (page - 1) * RESPONSES_PREVIEW_ROW_LIMIT + 1;
  const end = Math.min(page * RESPONSES_PREVIEW_ROW_LIMIT, rows.length);

  return { visibleRows, page, setPage, totalPages, hasMore, loadMore, start, end };
}
