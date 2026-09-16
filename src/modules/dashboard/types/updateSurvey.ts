import type { SurveyStatus } from "@/modules/survey-response/types/survey";

export interface UpdateSurveyPayload {
  title: string;
  description: string;
  deadline: string;
  status: SurveyStatus;
  cover?: string;
}

export interface UpdateSurveyMutationArgs {
  surveyId: string;
  payload: UpdateSurveyPayload;
}

export interface UpdateSurveyResponse {
  id: string;
  title: string;
  description: string;
  deadline: string;
  cover: string;
  status: SurveyStatus;
  updatedAt: string;
}