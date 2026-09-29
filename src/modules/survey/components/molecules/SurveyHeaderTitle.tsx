import React from 'react'
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { useTranslations } from "next-intl";

function SurveyHeaderTitle() {
      const t = useTranslations("dashboard.mySurveys");
    

  return (
     <div className="min-w-0">
              <Title size="md">{t("heading.title")}</Title>
    
              <Text variant="secondary" size="sm">
                {t("heading.subtitle")}
              </Text>
            </div>
  )
}

export default SurveyHeaderTitle
