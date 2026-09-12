import { Survey } from "../types/survey";
import ApiClient from "@/services/ApiClient";

export async function publishSurveyLinkApi(surveyId: string) {
  const response = await ApiClient.patch<Survey>(`/survey/${surveyId}/link`);

  return response;
}
