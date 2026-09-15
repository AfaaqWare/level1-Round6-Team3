import ApiClient from "@/services/ApiClient";
import type { GetSurveyResponsesResult } from "../types/exportResponses";

export function getSurveyResponsesApi(surveyId: string) {
  return ApiClient.get<GetSurveyResponsesResult>(`/responses/survey/${surveyId}`);
}
