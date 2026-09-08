import { CalendarDays } from "@/assets/icons/icons";
import Title from "@/shared/components/atoms/Title";
import QuestionRenderer from "../molecules/QuestionRenderer";
import { SurveyAnswers, SurveyQuestion } from "../../types/question";
import IconText from "../molecules/IconText";
import SurveySubmissionPanel from "../molecules/SurveySubmissionPanel";
import { useTranslations } from "next-intl";

type SurveyQuestionsFormProps = {
  questions: SurveyQuestion[];
  answers: SurveyAnswers;
  onAnswerChange: (questionId: string, value: string | string[]) => void;
};

export default function SurveyQuestionsForm({
  questions,
  answers,
  onAnswerChange,
}: SurveyQuestionsFormProps) {
  const t = useTranslations("surveyResponse.surveyQuestions");
  const totalQuestions = questions.length;

  const requiredQuestions = questions.filter(question => question.required).length;

  return (
    <section aria-labelledby="survey-questions" className="ds-rounded-xl overflow-hidden">
      <div className="ds-bg-card px-4 py-5 sm:px-5">
        <header className="mb-6">
          <IconText IconComponent={CalendarDays} iconSize="md">
            <Title size="md" className="!font-regular normal-case">
              {t("title")}
            </Title>
          </IconText>
        </header>

        {questions.map(question => (
          <QuestionRenderer
            key={question.id}
            question={question}
            answer={answers[question.id]}
            onChange={value => onAnswerChange(question.id, value)}
          />
        ))}
      </div>
      <SurveySubmissionPanel
        totalQuestions={totalQuestions}
        requiredQuestions={requiredQuestions}
      />
    </section>
  );
}
