import ApiClient from "@/services/ApiClient";
interface SurveyResponse {
  id: string;
  surveyId: string;
  respondentName: string;
  respondentEmail: string;
  answers: Record<string, string>;
  submittedAt: string;
}
interface GetAllResponsesResponse {
  success: boolean;
  message: string;
  data: SurveyResponse[];
}
export function getAllResponses() {
  return ApiClient.get<GetAllResponsesResponse>("/responses");
}
