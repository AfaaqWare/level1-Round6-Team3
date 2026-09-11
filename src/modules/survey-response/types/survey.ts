import { SurveyQuestion } from "./question";
export interface Survey {
  id: string;
  userId: string;
  title: string;
  description: string;
  deadline: string;
  cover: string;
  status: "draft" | "published" | "closed";
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
