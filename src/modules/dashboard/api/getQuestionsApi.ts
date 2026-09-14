import apiClient from "@/services/ApiClient";
import type { GetQuestionsResponse } from "../types/question";

export const getQuestionsApi = (
  surveyId: string
): Promise<GetQuestionsResponse> => {
  return apiClient.get<GetQuestionsResponse>(
    `/surveys/${surveyId}/questions`
  );
};
