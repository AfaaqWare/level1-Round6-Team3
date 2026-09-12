import apiClient from "@/services/ApiClient";
import {
  UpdateSurveyPayload,
  UpdateSurveyResponse,
} from "../types/updateSurvey";

export const updateSurveyApi = (
  surveyId: string,
  payload: UpdateSurveyPayload
): Promise<UpdateSurveyResponse> => {
  const formData = new FormData();
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("deadline", payload.deadline);
  formData.append("status", payload.status);

  if (payload.cover) {
    formData.append("cover", payload.cover);
  }

  return apiClient.put<UpdateSurveyResponse>(`/survey/${surveyId}`, formData);
};