"use client";

import { EmptyState, ErrorState, LoadingState } from "@/core/ui-states";
import { useSurvey } from "../../hooks/useSurvey";
import ExportResponsesHeader from "../orgamisms/ExportResponsesHeader";
import ResponsesPreviewSummary from "../orgamisms/ResponsesPreviewSummary";

interface ExportResponsesPageProps {
  surveyId: string;
}

export default function ExportResponsesPage({ surveyId }: ExportResponsesPageProps) {
  const { data: survey, isLoading, isError, refetch } = useSurvey(surveyId);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError && !survey) {
    return <ErrorState onRetry={() => void refetch()} />;
  }

  if (!survey) {
    return <EmptyState />;
  }

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-[30px]">
      <ExportResponsesHeader survey={survey} />

      <ResponsesPreviewSummary survey={survey} />
    </div>
  );
}
