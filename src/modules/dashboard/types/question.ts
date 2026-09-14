export type QuestionType = "mcq" | "textarea";

// ─── Add Question ─────────────────────────────────────────────────────────────

export interface AddQuestionPayload {
  surveyId: string;
  title: string;
  type: QuestionType;
  required: boolean;
  /** Only present for MCQ questions */
  choices?: string[];
}

export interface AddQuestionResponse {
  id: string;
  surveyId: string;
  title: string;
  type: QuestionType;
  required: boolean;
  choices?: string[];
  order: number;
  createdAt: string;
}

// ─── Delete Question ──────────────────────────────────────────────────────────

export interface DeleteQuestionPayload {
  surveyId: string;
  questionId: string;
}

export interface DeleteQuestionResponse {
  message: string;
}

// ─── Get Questions ────────────────────────────────────────────────────────────

export type GetQuestionsResponse = AddQuestionResponse[];
