"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { updateSurveyApi } from "../api/updateSurveyApi";
import type {
  UpdateSurveyMutationArgs,
  UpdateSurveyResponse,
} from "../types/updateSurvey";

export function useUpdateSurvey(surveyId: string) {
  const queryClient = useQueryClient();

  return useApiMutation<UpdateSurveyMutationArgs, UpdateSurveyResponse>({
    mutationFn: ({ surveyId: id, payload }) => updateSurveyApi(id, payload),
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["surveys"] });
        queryClient.invalidateQueries({ queryKey: ["survey", surveyId] });
      },
    },
  });
}