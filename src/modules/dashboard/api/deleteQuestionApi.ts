import apiClient from "@/services/ApiClient";
import type {
  DeleteQuestionPayload,
  DeleteQuestionResponse,
} from "../types/question";

export const deleteQuestionApi = ({
  surveyId,
  questionId,
}: DeleteQuestionPayload): Promise<DeleteQuestionResponse> => {
  return apiClient.delete<DeleteQuestionResponse>(
    `/surveys/${surveyId}/questions/${questionId}`
  );
};
