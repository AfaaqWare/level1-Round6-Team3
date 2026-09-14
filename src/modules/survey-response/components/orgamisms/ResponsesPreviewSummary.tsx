"use client";

import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Badge from "@/shared/components/atoms/Badge";
import Icon from "@/shared/components/atoms/Icon";
import { Info } from "@/assets/icons/icons";
import { responsesPreviewBadges } from "../../utils/data";
import type { Survey } from "../../types/survey";

interface ResponsesPreviewSummaryProps {
  survey: Survey;
  responsesCount: number;
}

export default function ResponsesPreviewSummary({
  survey,
  responsesCount,
}: ResponsesPreviewSummaryProps) {
  const t = useTranslations("dashboard.surveysExport.responsesPreview");

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

      <div className="ds-rounded-md mt-4 flex items-center gap-2 bg-[color:var(--color-stats-gray-bg)]/90 px-4 py-4">
        <Icon IconComponent={Info} size="sm" variant="teal" className="shrink-0" />
        <Text size="xs" variant="secondary">
          {t("infoBanner")}
        </Text>
      </div>
    </section>
  );
}
