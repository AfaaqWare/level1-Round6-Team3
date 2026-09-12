import React from "react";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Image from "@/shared/components/atoms/Image";

import { useGetSurveyById } from "@/modules/survey/hooks/useGetSurveyById";

import CoverPlaceHolder from "@/assets/images/surveyCoverPlaceholder.png";

import { FileText, CalendarDays,  User } from "@/assets/icons/icons";

import IconText from "@/modules/survey-response/components/molecules/IconText";

function SurveyByIdHero() {
  const t = useTranslations("dashboard.mySurveys");

  const params = useParams();

  const { data } = useGetSurveyById(params.id as string);

  const questions = (data?.questions ?? []) as Array<{
    qid: string | number;
    questionText: string;
  }>;

  return (
    <>
      {/* ================= Survey Hero ================= */}
      <section className="mb-10 grid w-full grid-cols-1 gap-8 rounded-[15px] p-[18px] sm:p-6 lg:grid-cols-[361px_minmax(0,1fr)] lg:gap-[60px] lg:p-[18px_45px_19px]">
        {/* Cover */}
        <div className="flex w-full items-center justify-center">
          <Image
            width={361}
            height={241}
            src={data?.cover || CoverPlaceHolder}
            alt={data?.title || "Survey cover"}
            className="w-full max-w-[361px] overflow-hidden rounded-[10px]"
          />
        </div>

        {/* Survey Info */}
        <div className="flex min-w-0 flex-col gap-[10px] self-center">
          {/* Status */}
          <div className="w-fit rounded-sm px-[12px] py-[4px] text-sm text-[#2CA053] bg-[#E6F3E7]">
            {data?.status}
          </div>

          <Title size="sm">{data?.title}</Title>

          <Text size="md" className="max-w-[650px]">
            {data?.description}
          </Text>

          {/* Meta */}
          <div className="mt-1 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            <IconText iconSize="xs" iconVariant="secondary" IconComponent={CalendarDays}>
              {t("survey.deadline")}: {data?.deadline}
            </IconText>

            <IconText iconSize="xs" iconVariant="secondary" IconComponent={FileText}>
              {t("survey.questions")}: {questions.length}
            </IconText>

            <IconText iconSize="xs" iconVariant="secondary" IconComponent={User}>
              {t("survey.createdBy")}: {data?.createdBy}
            </IconText>
          </div>
        </div>
      </section>
    </>
  );
}

export default SurveyByIdHero;
