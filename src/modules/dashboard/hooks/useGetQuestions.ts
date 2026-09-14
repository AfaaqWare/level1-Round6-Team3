"use client";

import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getQuestionsApi } from "../api/getQuestionsApi";
import type { GetQuestionsResponse } from "../types/question";

export function useGetQuestions(surveyId: string) {
  return useApiQuery<GetQuestionsResponse>({
    queryKey: ["questions", surveyId],
    queryFn: () => getQuestionsApi(surveyId),
    options: {
      enabled: !!surveyId,
    },
  });
}
