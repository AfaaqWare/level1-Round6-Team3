"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { deleteSurveyApi } from "../api/deleteSurveyApi";

export default function useDeleteSurvey() {
  const queryClient = useQueryClient();

  return useApiMutation({
    mutationFn: (surveyId: string) => deleteSurveyApi(surveyId),
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["surveys"] });
      },
    },
  });
}
