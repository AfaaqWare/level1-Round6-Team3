import type { StaticImageData } from "next/image";

export interface AllResponses {
  id: string;
  surveyId: string;
  respondentName: string;
  respondentEmail: string;
  answers: Record<string, string>;
  submittedAt: string;
}

export interface AllResponsesResponse {
  data: AllResponses[];
}

export interface ResponseCardProps2 {
  iconCard: StaticImageData;
  text1: string;
  text2: string;
  text3: string;
  bg:string;
}
