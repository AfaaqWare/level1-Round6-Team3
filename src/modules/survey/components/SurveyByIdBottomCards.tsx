import React from "react";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import { useGetSurveyById } from "@/modules/survey/hooks/useGetSurveyById";

import { Eye, Pencil, Clock3, Link, Trash2 } from "@/assets/icons/icons";

function SurveyByIdBottomCards() {
  const t = useTranslations("dashboard.mySurveys");

  const params = useParams();

  const { data } = useGetSurveyById(params.id as string);
  console.log(data)

  const questions = (data?.questions ?? []) as Array<{
    qid: string | number;
    questionText: string;
  }>;
  return (
   
      <section className="grid w-full grid-cols-1 items-start gap-8 xl:grid-cols-[1fr_1.2fr_0.8fr]">
        {/* ================= Overview ================= */}
        <div className="min-w-0 rounded-[15px] p-[18px] sm:p-[29px_18px_19px]">
          <Title size="md" className="mb-5">
            {t("overview.title")}
          </Title>

          <div className="flex flex-col">
            {/* Survey ID */}
            <div className="flex min-w-0 items-center gap-3 py-3">
              <Clock3 className="shrink-0 text-[#636978]" />

              <span className="shrink-0 text-sm text-[#636978]">{t("overview.surveyId")}</span>

              <span className="min-w-0 truncate text-sm text-[#636978]">{data?.id}</span>
            </div>

            <div className="h-px w-full bg-[#D5D6DA]" />

            {/* Status */}
            <div className="flex items-center gap-3 py-3">
              <Clock3 className="shrink-0 text-[#636978]" />

              <span className="text-sm text-[#636978]">{t("overview.status")}</span>

              <span className="rounded-md bg-[#FEEDDA] px-3 py-1 text-xs text-orange-500">
                {data?.status}
              </span>
            </div>

            <div className="h-px w-full bg-[#D5D6DA]" />

            {/* Created At */}
            <div className="flex flex-wrap items-center gap-3 py-3">
              <Clock3 className="shrink-0 text-[#636978]" />

              <span className="text-sm text-[#636978]">{t("overview.createdAt")}</span>

              <span className="text-sm text-[#636978]">{data?.createdAt}</span>
            </div>

            <div className="h-px w-full bg-[#D5D6DA] " />

            {/* Updated At */}
            <div className="flex flex-wrap items-center gap-3 py-3">
              <Clock3 className="shrink-0 text-[#636978]" />

              <span className="text-sm text-[#636978]">{t("overview.updatedAt")}</span>

              <span className="text-sm text-[#636978]">{data?.updatedAt}</span>
            </div>

            <div className="h-px w-full bg-[#D5D6DA]" />

            {/* Link */}
            <div className="flex min-w-0 items-center gap-3 py-3">
              <Link className="shrink-0 text-[#636978]" />

              <span className="shrink-0 text-sm text-[#636978]">{t("overview.link")}</span>

              <span className="min-w-0 truncate text-sm text-[#636978]">
                {data?.link || t("overview.noPublishedLink")}
              </span>
            </div>
          </div>
        </div>

        {/* ================= Questions ================= */}
        <div className="min-w-0 rounded-[15px] p-[18px] sm:p-[29px]">
          {/* Header */}
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Title size="md">
              {t("questions.title", {
                count: questions.length,
              })}
            </Title>

            <Button size="sm" variant="white">
              {t("actions.viewAllQuestions")}
            </Button>
          </div>

          {/* Question Types */}
          <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-[10px] border border-[#D5D6DA] px-4 py-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#03A8B1] text-[#03A8B1]">
                <span className="h-2 w-2 rounded-full bg-[#03A8B1]" />
              </div>

              <div className="min-w-0">
                <p className="text-sm">{t("questions.multipleChoice")}</p>

                <p className="text-xs">5</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-[10px] border border-[#D5D6DA] px-4 py-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#D2EAD6] text-[#2CA053]">
                ≡
              </div>

              <div className="min-w-0">
                <p className="text-sm">{t("questions.textArea")}</p>

                <p className="text-xs">3</p>
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
                <Text className="min-w-0 flex-1 truncate text-sm">{question.questionText}</Text>

                {/* Type */}
                <span className="hidden shrink-0 rounded-md bg-[#D2EAD6] px-2 py-1 text-xs text-[#2CA053] sm:block">
                  {t("questions.textArea")}
                </span>
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

        {/* ================= Quick Actions ================= */}
        <div className="min-w-0 rounded-[15px] p-[18px] sm:p-[29px]">
          <Title size="md" className="mb-5">
            {t("quickActions.title")}
          </Title>

          <div className="flex flex-col gap-3">
            <Button size="sm" variant="white" className="w-full justify-start">
              <Pencil />
              {t("actions.edit")}
            </Button>

            <Button size="sm" variant="white" className="w-full justify-start">
              <Eye />
              {t("actions.preview")}
            </Button>

            <Button size="sm" variant="white" className="w-full justify-start">
              <Eye />
              {t("actions.viewResponses")}
            </Button>

            <Button size="sm" variant="white" className="w-full justify-start text-red-500">
              <Trash2 />
              {t("actions.delete")}
            </Button>
          </div>
        </div>
      </section>
  
  );
}

export default SurveyByIdBottomCards;
