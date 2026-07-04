"use client";

import React from "react";
import SurveyTemplates from "./SurveyTemplates";
import MarketResearch from "./MarketResearch";
import Education from "./Education";
import EventFeedbackSection from "./EventFeedback";
import Button from "@/shared/components/atoms/Button";
import { useTranslations } from "next-intl";

export default function PopularTemplates() {
  const t = useTranslations("publicPages.home.popularTemplatesSection");

  return (
    <div className="ds-container ds-bg-alt mt-12 py-4">

      <SurveyTemplates />


      <MarketResearch />


      <Education />


      <EventFeedbackSection />


      <div className="ds-container mt-8 flex justify-center pb-10">
        <Button variant="primary" size="md" className="w-[300px]">
          {t("viewAllBtn")}
        </Button>
      </div>
    </div>
  );
}
