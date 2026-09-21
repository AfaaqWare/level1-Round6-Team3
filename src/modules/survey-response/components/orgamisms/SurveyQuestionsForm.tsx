import { CalendarDays } from "@/assets/icons/icons";
import Title from "@/shared/components/atoms/Title";
import QuestionRenderer from "@/modules//survey-response/components/molecules/QuestionRenderer";
import { SurveyQuestion } from "../../types/question";
import { SurveyAnswers } from "@/modules/responses/type/responses";
import IconText from "../molecules/IconText";
import SurveySubmissionPanel from "../molecules/SurveySubmissionPanel";
import { useTranslations } from "next-intl";

type SurveyQuestionsFormProps = {
  questions: SurveyQuestion[];
  answers: SurveyAnswers;
  onAnswerChange: (questionId: string, value: string | string[]) => void;
  isSubmitDisabled: boolean;
};

export default function SurveyQuestionsForm({
  questions,
  answers,
  onAnswerChange,
  isSubmitDisabled,
}: SurveyQuestionsFormProps) {
  const t = useTranslations("surveyResponse.surveyQuestions");
  const totalQuestions = questions.length;

  const requiredQuestions = questions.filter(question => question.isRequired).length;

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

        {questions.map((question, index) => (
          <QuestionRenderer
            key={question.qid}
            number={index + 1}
            question={question}
            answer={answers[question.qid]}
            onChange={value => onAnswerChange(question.qid, value)}
            mode="edit"
          />
        ))}
      </div>
      <SurveySubmissionPanel
        totalQuestions={totalQuestions}
        requiredQuestions={requiredQuestions}
        isSubmitDisabled={isSubmitDisabled}
      />
    </section>
  );
}
