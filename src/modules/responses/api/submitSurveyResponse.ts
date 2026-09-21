import apiClient from "@/services/ApiClient";
import { SubmitSurveyPayload } from "@/modules/responses/type/responses";

export const submitSurveyResponseByLink = (surveyLink: string, payload: SubmitSurveyPayload) => {
  return apiClient.post(`/survey/survey/${surveyLink}/response`, payload);
};
