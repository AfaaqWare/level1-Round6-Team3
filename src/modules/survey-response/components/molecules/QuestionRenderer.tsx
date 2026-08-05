import ChoiceQuestionField from "./ChoiceQuestionField";
import TextQuestionField from "./TextQuestionField";

import { SurveyQuestion } from "../../types/question";
import RadioQuestionField from "./RadioQuestionField";

type QuestionRendererProps = {
  question: SurveyQuestion;
  answer: string | string[];
  onChange: (value: string | string[]) => void;
};

export default function QuestionRenderer({ question, answer, onChange }: QuestionRendererProps) {
  switch (question.type) {
    case "text":
      return (
        <TextQuestionField
          id={question.id}
          number={question.number}
          question={question.question}
          required={question.required}
          maxLength={question.maxLength}
          value={typeof answer === "string" ? answer : ""}
          onChange={value => onChange(value)}
        />
      );

    case "checkbox":
      return (
        <ChoiceQuestionField
          id={question.id}
          number={question.number}
          question={question.question}
          required={question.required}
          choices={question.choices}
          value={Array.isArray(answer) ? answer : []}
          onChange={value => onChange(value)}
        />
      );
    case "radio":
      return (
        <RadioQuestionField
          id={question.id}
          number={question.number}
          question={question.question}
          required={question.required}
          choices={question.choices}
          value={typeof answer === "string" ? answer : ""}
          onChange={value => onChange(value)}
        />
      );

    default:
      return null;
  }
}
