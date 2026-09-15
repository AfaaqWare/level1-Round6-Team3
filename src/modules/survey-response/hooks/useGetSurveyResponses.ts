"use client";

import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getSurveyResponsesApi } from "../api/getSurveyResponses";

export function useGetSurveyResponses(surveyId: string) {
  return useApiQuery({
    queryKey: ["survey-responses", surveyId],
    queryFn: () => getSurveyResponsesApi(surveyId),
    options: {
      enabled: !!surveyId,
    },
  });
}
