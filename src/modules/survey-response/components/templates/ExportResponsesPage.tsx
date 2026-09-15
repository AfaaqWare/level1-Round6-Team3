"use client";

import { EmptyState, ErrorState, LoadingState } from "@/core/ui-states";
import { useSurvey } from "../../hooks/useSurvey";
import { useGetSurveyResponses } from "../../hooks/useGetSurveyResponses";
import ExportResponsesHeader from "../orgamisms/ExportResponsesHeader";
import ResponsesPreviewSummary from "../orgamisms/ResponsesPreviewSummary";
import ResponsesTable from "../orgamisms/ResponsesTable";
import ExportSettingsPanel from "../orgamisms/ExportSettingsPanel";

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
    <div>
      <ExportResponsesHeader survey={survey} />

      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="ds-bg-card lg:min-w-0 lg:flex-1">
          <ResponsesPreviewSummary survey={survey} responsesCount={rows.length} />

          <ResponsesTable rows={rows} questions={survey.questions} />
        </div>

        <div className="lg:w-[340px] lg:shrink-0">
          <ExportSettingsPanel
            defaultFileName={survey.title}
            rows={rows}
            questions={survey.questions}
          />
        </div>
      </div>
    </div>
  );
}
