import { SurveyQuestion } from "./question";

export const SURVEY_STATUSES = ["draft", "published", "closed"] as const;
export type SurveyStatus = (typeof SURVEY_STATUSES)[number];

export interface Survey {
  id: string;
  userId: string;
  title: string;
  description: string;
  deadline: string;
  cover: string;
  status: SurveyStatus;
  link: string | null;
  createdAt: string;
  updatedAt: string;
  lastMilestone: number;
  questions: SurveyQuestion[];
  responsesCount?: number;
}
export interface SubmitSurveyPayload {
  surveyId: string;
  fullName: string;
  email: string;
  answers: {
    questionId: string;
    answer: string | string[];
  }[];
}
export type GetAllSurveys = Survey[];
export interface PaginatedSurveys {
  data: Survey[];
  total: number;
  page: number;
  pageSize: number;
}
