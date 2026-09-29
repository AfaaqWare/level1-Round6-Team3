import TextQuestionField from "./TextQuestionField";
import { SurveyQuestion } from "../../types/question";
import RadioQuestionField from "./RadioQuestionField";

type QuestionRendererProps = {
  question: SurveyQuestion;
  answer?: string | string[];
  onChange?: (value: string | string[]) => void;
  number: number;
  mode: "view" | "edit";
};

export default function QuestionRenderer({
  question,
  answer,
  onChange,
  mode = "edit",
  number,
}: QuestionRendererProps) {
  const isViewMode = mode === "view";

  switch (question.type) {
    case "textarea":
      return (
        <TextQuestionField
          id={question.qid}
          number={number}
          question={question.questionText}
          required={question.isRequired}
          maxLength={500}
          value={typeof answer === "string" ? answer : ""}
          onChange={value => onChange?.(value)}
          readOnly={isViewMode}
          mode="view"
        />
      );

    case "mcq":
      return (
        <RadioQuestionField
          id={question.qid}
          number={number}
          question={question.questionText}
          required={question.isRequired}
          choices={question.choices ?? []}
          value={typeof answer === "string" ? answer : ""}
          onChange={value => onChange?.(value)}
          readOnly={isViewMode}
          mode="view"
        />
      );

    default:
      return null;
  }
}
