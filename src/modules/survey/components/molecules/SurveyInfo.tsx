import React from 'react'
import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import IconText from "@/modules/survey-response/components/molecules/IconText";
import { FileText, CalendarDays, User } from "@/assets/icons/icons";
import { useParams } from "next/navigation";
import { useGetSurveyById } from "@/modules/survey/hooks/useGetSurveyById";
import { useGetUserById } from "@/modules/dashboard/hooks/useGetUserById";


function SurveyInfo() {

      const t = useTranslations("dashboard.mySurveys");

      const params = useParams();

  const { data } = useGetSurveyById(params.id as string);

  const { data: userData } = useGetUserById(data?.userId ?? "");

  const questions = (data?.questions ?? []) as Array<{
    qid: string | number;
    questionText: string;
  }>;

  return (
    <div className="flex min-w-0 flex-col gap-[10px] self-center">
          {/* Status */}
          <div className="w-fit rounded-sm bg-[#E6F3E7] px-[12px] py-[4px] text-sm text-[#2CA053]">
            {data?.status}
          </div>

          <Title size="base">{data?.title}</Title>

          <Text size="sm" className="max-w-[650px]">
            <span className="text-[#636978]">{data?.description}</span>
          </Text>

          {/* Meta */}
          <div className="mt-1 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            <IconText iconSize="xs" iconVariant="secondary" IconComponent={CalendarDays}>
              <span className="text-[10px] text-[#636978]">
                {" "}
                {t("survey.deadline")}: {data?.deadline}{" "}
              </span>
            </IconText>

            <IconText iconSize="xs" iconVariant="secondary" IconComponent={FileText}>
              <span className="text-[10px] text-[#636978]">
                {t("survey.questions")}: {questions.length}
              </span>
            </IconText>

            <IconText iconSize="xs" iconVariant="secondary" IconComponent={User}>
              <span className="text-[10px] text-[#636978]">
                {t("survey.createdBy")}: {data?.createdBy} {userData?.name}
              </span>
            </IconText>
          </div>
        </div>
  )
}

export default SurveyInfo
