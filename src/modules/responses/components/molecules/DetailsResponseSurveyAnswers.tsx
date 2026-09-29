import { Survey } from "@/modules/survey-response/types/survey";
import React from "react";
import { SurveyResponse } from "../../type/responses";
import QuestionRenderer from "@/modules/survey-response/components/molecules/QuestionRenderer";
import IconText from "@/modules/survey-response/components/molecules/IconText";
import Title from "@/shared/components/atoms/Title";
import { cn } from "@/lib/cn";
import { Info } from "@/assets/icons/icons";
import { useTranslations } from "next-intl";
const DetailsResponseSurveyAnswers = ({
  survey,
  response,
}: {
  survey: Survey;
  response: SurveyResponse;
}) => {
  const t = useTranslations("dashboard.responses.detailsResponse.surveyAnswers");

  return (
    <div className="ds-rounded-md ds-bg-card p-6 lg:min-w-0 lg:flex-1">
      <IconText iconSize="xs" iconVariant="alt" IconComponent={Info}>
        <Title size="base" className={cn("!font-medium !text-[var(--color-text-dash-secondary)]")}>
          {t("title")}
        </Title>
      </IconText>
      <div className="mt-3 flex flex-col gap-4">
        {survey.questions.map((question, index) => {
          const answer = response.answers[question.qid];

          return (
            <QuestionRenderer
              number={index + 1}
              key={question.qid}
              question={question}
              answer={answer ?? ""}
              mode="view"
            />
          );
        })}
      </div>
    </div>
  );
};

export default DetailsResponseSurveyAnswers;
