import { StaticImageData } from "next/image";
import { SurveyQuestion } from "./question";

export type Survey = {
  id: string;
  title: string;
  description: string;
  coverImage: string | StaticImageData;
  deadline: string;
  duration: string;
  questions: SurveyQuestion[];
};
export interface SubmitSurveyPayload {
  surveyId: string;
  fullName: string;
  email: string;
  answers: {
    questionId: string;
    answer: string | string[];
  }[];
}
