"use client";

import { useState } from "react";
import SurveysHeader from "../orgamisms/SurveysHeader";
import SurveysToolbar from "../orgamisms/SurveysToolbar";
import SurveysGrid from "../orgamisms/SurveysGrid";
import type { SurveyStatusFilter } from "../molecules/SurveyStatusTabs";
import type { SurveysSortOrder } from "../molecules/SurveySortSelect";

export default function SurveysPage() {
  const [status, setStatus] = useState<SurveyStatusFilter>("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SurveysSortOrder>("newest");

  return (
    <div>
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
    </div>
  );
}
