export interface SurveyResponse {
  id: string;
  surveyId: string;
  respondentName: string;
  respondentEmail: string;
  answers: Record<string, string>;
  submittedAt: string;
}
export interface GetAllResponses {
  success: boolean;
  message: string;
  data: SurveyResponse[];
}
export interface GetResponseById {
  success: boolean;
  message: string;
  data: SurveyResponse;
}
export interface RecentSurveyResponse extends SurveyResponse {
  surveyTitle: string;
}

export type SurveyAnswers = Record<string, string | string[]>;
export interface SubmitSurveyPayload {
  respondentEmail: string;
  respondentName: string;
  answers: SurveyAnswers;
}
