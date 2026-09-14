"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { deleteQuestionApi } from "../api/deleteQuestionApi";
import type {
  DeleteQuestionPayload,
  DeleteQuestionResponse,
} from "../types/question";

export function useDeleteQuestion(surveyId: string) {
  const queryClient = useQueryClient();

  return useApiMutation<DeleteQuestionPayload, DeleteQuestionResponse>({
    mutationFn: deleteQuestionApi,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["questions", surveyId] });
      },
    },
  });
}
