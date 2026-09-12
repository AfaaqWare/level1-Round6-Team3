"use client";

import { useState } from "react";

import SurveysHeader from "../orgamisms/SurveysHeader";
import SurveysToolbar from "../orgamisms/SurveysToolbar";
import SurveysGrid from "../orgamisms/SurveysGrid";

import type { SurveyStatusFilter } from "../molecules/SurveyStatusTabs";
import type { SurveysSortOrder } from "../molecules/SurveySortSelect";


import NoSurvey from "../orgamisms/NoSurvey";
import useGetAllSurveys from "../../hooks/useGetAllSurveys";

export default function SurveysPage() {
  const [status, setStatus] = useState<SurveyStatusFilter>("all");


interface SurveysPageProps {
  initialStatus?: SurveyStatusFilter;


export default function SurveysPage({ initialStatus = "all" }: SurveysPageProps) {
  const [status, setStatus] = useState<SurveyStatusFilter>(initialStatus);

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState<SurveysSortOrder>("newest");

  const { data, isLoading } = useGetAllSurveys();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const surveys = data?.data ?? [];

  const hasSurveys = surveys.length > 0;

  return (
    <div>
      {hasSurveys ? (
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
        <>
          <NoSurvey />
        </>
      )}
    </div>
  );
}
