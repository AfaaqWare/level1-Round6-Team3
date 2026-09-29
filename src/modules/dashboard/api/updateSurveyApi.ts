import apiClient from "@/services/ApiClient";
import {
  UpdateSurveyPayload,
  UpdateSurveyResponse,
} from "../types/updateSurvey";

export const updateSurveyApi = (
  surveyId: string,
  payload: UpdateSurveyPayload
): Promise<UpdateSurveyResponse> =>
  apiClient.put<UpdateSurveyResponse>(`/survey/${surveyId}`, {
    title: payload.title,
    description: payload.description,
    deadline: payload.deadline,
    status: payload.status,
    ...(payload.cover ? { cover: payload.cover } : {}),
  });