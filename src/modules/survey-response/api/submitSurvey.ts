import apiClient from "@/services/ApiClient";
import { SubmitSurveyPayload } from "../types/survey";
export const submitSurvey = (payload: SubmitSurveyPayload) => {
  return apiClient.post("/surveys/submit", payload);
};
