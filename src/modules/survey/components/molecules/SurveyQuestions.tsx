import React from "react";
import Title from "@/shared/components/atoms/Title";
import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useGetSurveyById } from "@/modules/survey/hooks/useGetSurveyById";

function SurveyQuestions() {
  const t = useTranslations("dashboard.mySurveys");

  const params = useParams();

  const { data } = useGetSurveyById(params.id as string);
  console.log(data);

  const questions = (data?.questions ?? []) as Array<{
    qid: string | number;
    questionText: string;
    type: string;
  }>;

  const countOfMcqQuestions = questions.filter(question => question.type === "mcq").length;
  const countOfTextAreaQuestions = questions.filter(
    question => question.type === "textarea"
  ).length;

  return (
    <div className="ds-bg-card min-w-0 rounded-[15px] p-[18px] sm:p-[29px]">
      {/* Header */}
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Title size="md">
          {t("questions.title", {
            count: questions.length,
          })}
        </Title>

        <Button size="sm">{t("actions.viewAllQuestions")}</Button>
      </div>

      {/* Question Types */}
      <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-[10px] border border-[#D5D6DA] px-4 py-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#03A8B1] text-[#03A8B1]">
            <span className="h-2 w-2 rounded-full bg-[#03A8B1]" />
          </div>

          <div className="min-w-0">
            <p className="text-sm">{t("questions.multipleChoice")}</p>

            <p className="text-xs">{countOfMcqQuestions}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-[10px] border border-[#D5D6DA] px-4 py-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#D2EAD6] text-[#2CA053]">
            ≡
          </div>

          <div className="min-w-0">
            <p className="text-sm">{t("questions.textArea")}</p>

            <p className="text-xs">{countOfTextAreaQuestions}</p>
          </div>
        </div>
      </div>

      {/* Recent */}
      <Text className="mb-3 font-medium">{t("questions.recent")}</Text>

      <div className="flex flex-col gap-2">
        {questions.slice(0, 3).map((question, index) => (
          <div
            key={question.qid}
            className="flex min-w-0 items-center gap-3 rounded-[6px] border border-[#D5D6DA] px-2 py-2"
          >
            {/* Number */}
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] bg-[#03A8B1] text-xs text-white">
              {index + 1}
            </div>

            {/* Question */}
            <Text className="min-w-0 flex-1 truncate" size="xs">
              {question.questionText}
            </Text>

            {/* Type */}

            {question.type === "mcq" && (
              <span className="hidden shrink-0 rounded-md bg-[#D2EAD6] px-2 py-1 text-xs text-[#2CA053] sm:block">
                {question.type}
              </span>
            )}

            {question.type === "textarea" && (
              <span className="hidden shrink-0 rounded-md bg-[#EEEBFD] px-2 py-1 text-xs text-[#281B99] sm:block">
                {question.type}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="mt-5 flex justify-center">
        <button type="button" className="text-sm text-[#03A8B1] transition hover:underline">
          {t("questions.viewAll")} →
        </button>
      </div>
    </div>
  );
}

export default SurveyQuestions;
