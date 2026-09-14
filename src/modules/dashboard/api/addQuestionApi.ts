import apiClient from "@/services/ApiClient";
import type { AddQuestionPayload, AddQuestionResponse } from "../types/question";

export const addQuestionApi = ({
  surveyId,
  ...payload
}: AddQuestionPayload): Promise<AddQuestionResponse> => {
  return apiClient.post<AddQuestionResponse>(
    `/surveys/${surveyId}/questions`,
    payload
  );
};
