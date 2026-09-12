"use client";

import { useLocale, useTranslations } from "next-intl";
import Text from "@/shared/components/atoms/Text";
import IconText from "./IconText";
import { surveyCardMetaFields } from "../../utils/data";
import type { Survey } from "../../types/survey";

interface SurveyCardMetaProps {
  survey: Survey;
}

export default function SurveyCardMeta({ survey }: SurveyCardMetaProps) {
  const t = useTranslations("dashboard.surveys.card");
  const locale = useLocale();

  return (
    <div className="mb-4 grid grid-cols-2 items-center gap-x-4 gap-y-2">
      {surveyCardMetaFields.map(field => (
        <IconText key={field.id} IconComponent={field.icon} iconVariant="secondary" iconSize="xs">
          <Text size="xs" variant="secondary">
            {t(field.labelKey, field.getValues(survey, locale))}
          </Text>
        </IconText>
      ))}
    </div>
  );
}
