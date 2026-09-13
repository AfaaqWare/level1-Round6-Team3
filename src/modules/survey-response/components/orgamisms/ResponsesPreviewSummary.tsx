"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Badge from "@/shared/components/atoms/Badge";
import Icon from "@/shared/components/atoms/Icon";
import { Info } from "@/assets/icons/icons";
import useGetAllResponses from "@/modules/responses/hooks/useGetAllResponses";
import { responsesPreviewBadges } from "../../utils/data";
import type { Survey } from "../../types/survey";

interface ResponsesPreviewSummaryProps {
  survey: Survey;
}

export default function ResponsesPreviewSummary({ survey }: ResponsesPreviewSummaryProps) {
  const t = useTranslations("dashboard.surveysExport.responsesPreview");
  const { data: responsesResult } = useGetAllResponses();

  const responsesCount = useMemo(
    () => (responsesResult?.data ?? []).filter(response => response.surveyId === survey.id).length,
    [responsesResult, survey.id]
  );

  return (
    <section className="ds-bg-card ds-rounded-lg p-4 sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Title size="md">{t("title")}</Title>

        <div className="flex flex-wrap items-center gap-3">
          {responsesPreviewBadges.map(badge => (
            <Badge key={badge.id} tone={badge.tone}>
              {t(badge.labelKey, badge.getValues({ survey, responsesCount }))}
            </Badge>
          ))}
        </div>
      </div>

      <div className="ds-bg-gray-soft ds-rounded-md mt-4 flex items-center gap-2 px-4 py-4">
        <Icon IconComponent={Info} size="sm" variant="teal" className="shrink-0" />
        <Text size="xs" variant="secondary">
          {t("infoBanner")}
        </Text>
      </div>
    </section>
  );
}
