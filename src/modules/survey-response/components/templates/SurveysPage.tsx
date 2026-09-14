"use client";

import { useState } from "react";

import SurveysHeader from "../orgamisms/SurveysHeader";
import SurveysToolbar from "../orgamisms/SurveysToolbar";
import SurveysGrid from "../orgamisms/SurveysGrid";
import NoSurvey from "../orgamisms/NoSurvey";

import type { SurveyStatusFilter } from "../molecules/SurveyStatusTabs";
import type { SurveysSortOrder } from "../molecules/SurveySortSelect";

import useGetAllSurveys from "../../hooks/useGetAllSurveys";

interface SurveysPageProps {
  initialStatus?: SurveyStatusFilter;
}

export default function SurveysPage({ initialStatus = "all" }: SurveysPageProps) {
  const [status, setStatus] = useState<SurveyStatusFilter>(initialStatus);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SurveysSortOrder>("newest");

  const { data, isLoading } = useGetAllSurveys();

  const surveys = data?.data ?? [];
  const hasSurveys = surveys.length > 0;

  return (
    <div>
      {hasSurveys || isLoading ? (
        <>
          <SurveysHeader />

          <SurveysToolbar
            status={status}
            onStatusChange={setStatus}
            search={search}
            onSearchChange={setSearch}
            sort={sort}
            onSortChange={setSort}
          />

          <SurveysGrid status={status} search={search} sort={sort} />
        </>
      ) : (
        <NoSurvey />
      )}
    </div>
  );
}