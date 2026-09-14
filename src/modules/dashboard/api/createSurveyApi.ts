import apiClient from "@/services/ApiClient";
import { CreateSurveyPayload, CreateSurveyResponse } from "../types/createSurvey";

export const createSurveyApi = (payload: CreateSurveyPayload): Promise<CreateSurveyResponse> => {
  const formData = new FormData();
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("deadline", payload.deadline);

  if (payload.cover) {
    formData.append("cover", payload.cover);
  }

  return apiClient.postForm<CreateSurveyResponse>("/surveys", formData);
};
