import apiClient from "@/services/ApiClient";
import { Survey } from "../types/survey";

export const getSurvey = (surveyId: string) => {
  return apiClient.get<Survey>(`/surveys/${surveyId}`);
};
