"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { SurveyStatusFilter } from "../components/molecules/SurveyStatusTabs";

const VALID_STATUSES: SurveyStatusFilter[] = ["all", "draft", "published", "closed"];

export default function useSurveyStatus() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const statusParam = searchParams.get("status");

  const status: SurveyStatusFilter = VALID_STATUSES.includes(statusParam as SurveyStatusFilter)
    ? (statusParam as SurveyStatusFilter)
    : "all";

  const handleStatusChange = (newStatus: SurveyStatusFilter) => {
    if (newStatus === "all") {
      router.replace("/dashboard/my-surveys");
      return;
    }

    router.replace(`/dashboard/my-surveys?status=${newStatus}`);
  };

  return {
    status,
    handleStatusChange,
  };
}
