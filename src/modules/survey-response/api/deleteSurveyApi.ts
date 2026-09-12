import ApiClient from "@/services/ApiClient";

export async function deleteSurveyApi(surveyId: string) {
  const response = await ApiClient.delete<unknown>(`/survey/${surveyId}`);

  return response;
}
