"use client";

import { EmptyState, ErrorState, LoadingState } from "@/core/ui-states";
import { useSurvey } from "../../hooks/useSurvey";
import { useGetSurveyResponses } from "../../hooks/useGetSurveyResponses";
import ExportResponsesHeader from "../orgamisms/ExportResponsesHeader";
import ResponsesPreviewSummary from "../orgamisms/ResponsesPreviewSummary";
import ResponsesTable from "../orgamisms/ResponsesTable";

interface ExportResponsesPageProps {
  surveyId: string;
}

export default function ExportResponsesPage({ surveyId }: ExportResponsesPageProps) {
  const {
    data: survey,
    isLoading: isSurveyLoading,
    isError: isSurveyError,
    refetch: refetchSurvey,
  } = useSurvey(surveyId);

  const {
    data: responsesResult,
    isLoading: isResponsesLoading,
    isError: isResponsesError,
    refetch: refetchResponses,
  } = useGetSurveyResponses(surveyId);

  if (isSurveyLoading || isResponsesLoading) {
    return <LoadingState />;
  }

  if ((isSurveyError && !survey) || (isResponsesError && !responsesResult)) {
    return (
      <ErrorState
        onRetry={() => {
          void refetchSurvey();
          void refetchResponses();
        }}
      />
    );
  }

  if (!survey) {
    return <EmptyState />;
  }

  const rows = responsesResult?.data.rows ?? [];

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-[30px]">
      <ExportResponsesHeader survey={survey} />
      <div className="ds-bg-card">
        <ResponsesPreviewSummary survey={survey} responsesCount={rows.length} />

        <ResponsesTable rows={rows} questions={survey.questions} />
      </div>
    </div>
  );
}
