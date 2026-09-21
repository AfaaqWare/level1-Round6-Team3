import { Survey } from "@/modules/survey-response/types/survey";
import ApiClient from "@/services/ApiClient";

export async function getQuestionsByPublicLinkApi(surveyLink: string) {
  const response = await ApiClient.get<Survey>(`/survey/survey/${surveyLink}`);

  return response;
}
