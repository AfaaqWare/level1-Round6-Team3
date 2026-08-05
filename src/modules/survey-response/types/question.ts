export type BaseQuestion = {
  id: string;
  number: number;
  question: string;
  required: boolean;
};

export type TextQuestion = BaseQuestion & {
  type: "text";
  maxLength: number;
};

export type CheckboxQuestion = BaseQuestion & {
  type: "checkbox";
  choices: string[];
};

export type RadioQuestion = BaseQuestion & {
  type: "radio";
  choices: string[];
};

export type SurveyQuestion = TextQuestion | CheckboxQuestion | RadioQuestion;

export type SurveyAnswers = Record<string, string | string[]>;
