"use client";

import { useTranslations } from "next-intl";
import Text from "@/shared/components/atoms/Text";
import Icon from "@/shared/components/atoms/Icon";
import { User, Mail, CalendarDays } from "@/assets/icons/icons";
import { formatDateTime } from "@/shared/utils/formatDateTime";
import type { SurveyResponse } from "@/modules/responses/type/responses";
import type { SurveyQuestion } from "../../types/question";

interface ResponseCardProps {
  response: SurveyResponse;
  index: number;
  questions: SurveyQuestion[];
}

export default function ResponseCard({ response, index, questions }: ResponseCardProps) {
  const t = useTranslations("dashboard.surveysExport.responsesTable");
  const { date, time } = formatDateTime(response.submittedAt);

  return (
    <article className="ds-bg ds-border-sm ds-rounded-lg flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between gap-2">
        <Text size="sm" variant="secondary">
          {t("columns.id")} #{index}
        </Text>
        <div className="flex items-center gap-1.5">
          <Icon IconComponent={CalendarDays} size="xs" variant="secondary" />
          <Text size="xs" variant="secondary">
            {date} · {time}
          </Text>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Icon IconComponent={User} size="xs" variant="secondary" />
        <Text size="sm" className="font-bold">
          {response.respondentName}
        </Text>
      </div>

      <div className="flex items-center gap-2">
        <Icon IconComponent={Mail} size="xs" variant="secondary" />
        <a href={`mailto:${response.respondentEmail}`} className="min-w-0 truncate">
          <Text size="sm" variant="secondary" className="underline">
            {response.respondentEmail}
          </Text>
        </a>
      </div>

      <div className="ds-border-muted flex flex-col gap-2 border-t pt-3">
        {questions.map((question, index) => (
          <div key={question.qid}>
            <Text size="xs" variant="secondary">
              {index + 1}. {question.questionText}
            </Text>
            <Text size="sm" className="font-medium">
              {response.answers[question.qid] || t("noAnswer")}
            </Text>
          </div>
        ))}
      </div>
    </article>
  );
}
