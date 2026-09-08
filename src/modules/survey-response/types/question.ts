export interface SurveyQuestion {
  qid: string;
  questionText: string;
  type: "mcq" | "textarea";
  choices: string[] | null;
  isRequired: boolean;
}
