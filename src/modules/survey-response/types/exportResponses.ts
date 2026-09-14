import type { SurveyResponse } from "@/modules/responses/type/responses";

export interface SurveyResponsesExport {
  surveyId: string;
  surveyTitle: string;
  exportAt: string;
  headers: string[];
  rows: SurveyResponse[];
  count: number;
}

export interface GetSurveyResponsesResult {
  success: boolean;
  message: string;
  data: SurveyResponsesExport;
}
