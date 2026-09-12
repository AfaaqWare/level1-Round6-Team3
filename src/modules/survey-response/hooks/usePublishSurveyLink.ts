"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { publishSurveyLinkApi } from "../api/publishSurveyLinkApi";
import type { Survey } from "../types/survey";

export default function usePublishSurveyLink() {
  const queryClient = useQueryClient();

  return useApiMutation<string, Survey>({
    mutationFn: (surveyId: string) => publishSurveyLinkApi(surveyId),
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["surveys"] });
      },
    },
  });
}
