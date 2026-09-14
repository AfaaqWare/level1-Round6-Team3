"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { addQuestionApi } from "../api/addQuestionApi";
import type { AddQuestionPayload, AddQuestionResponse } from "../types/question";

export function useAddQuestion(surveyId: string) {
  const queryClient = useQueryClient();

  return useApiMutation<AddQuestionPayload, AddQuestionResponse>({
    mutationFn: addQuestionApi,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["questions", surveyId] });
      },
    },
  });
}
