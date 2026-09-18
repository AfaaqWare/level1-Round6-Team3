import IconText from "@/modules/survey-response/components/molecules/IconText";
import React from "react";
import { Info } from "@/assets/icons/icons";
import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import DetailsResponseInfoField from "./DetailsResponseInfoField";
import { responseInfoFields } from "../../utils/data";
import { SurveyResponse } from "../../type/responses";
import type { Survey } from "@/modules/survey-response/types/survey";
import { cn } from "@/lib/cn";
import { formatDateTime } from "@/shared/utils/formatDateTime";

interface DetailsResponeInformationProps {
  response: SurveyResponse;
  survey: Survey;
}

const DetailsResponeInformation = ({ response, survey }: DetailsResponeInformationProps) => {
  const t = useTranslations("dashboard.responses.detailsResponse.responseInformation");
  return (
    <section className="ds-bg-card ds-rounded-md flex w-full flex-col gap-5 p-6 lg:w-[340px] lg:shrink-0">
      <IconText iconSize="xs" iconVariant="alt" IconComponent={Info}>
        <Title size="base" className={cn("!font-medium !text-[var(--color-text-dash-secondary)]")}>
          {t("title")}
        </Title>
      </IconText>
      <div className="flex flex-col gap-7">
        {responseInfoFields.map(field => {
          const value =
            field.source === "survey" ? survey[field.valueKey] : response[field.valueKey];
          const { date, time } = formatDateTime(response.submittedAt);

          return (
            <DetailsResponseInfoField
              key={field.key}
              label={t(`fields.${field.key}`)}
              value={field.key === "submittedAt" ? `${date} - ${time}` : (value ?? "-")}
              IconComponent={field.IconComponent}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DetailsResponeInformation;
