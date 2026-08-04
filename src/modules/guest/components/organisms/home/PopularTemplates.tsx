"use client";

import React from "react";
import SurveyTemplates from "./SurveyTemplates";
import MarketResearch from "./MarketResearch";
import Education from "./Education";
import EventFeedbackSection from "./EventFeedback";
import Button from "@/shared/components/atoms/Button";
import Title from "@/shared/components/atoms/Title";
import { useTranslations } from "next-intl";

export default function PopularTemplates() {
  const t = useTranslations("publicPages.home.popularTemplatesSection");

  return (
    <section className="ds-bg w-full">
      <div className="ds-container py-8 md:py-12">
        {/* Main Section Title */}
        <Title size="xl" variant="primary" className="mb-2 font-bold normal-case">
          {t("title")}
          <span className="ds-text-alt"> {t("highlightTitle")}</span>
        </Title>

        {/* Sub-sections */}
        <SurveyTemplates />
        <MarketResearch />
        <Education />
        <EventFeedbackSection />

        {/* View All Templates Button */}
        <div className="mt-10 flex justify-center pb-6">
          <Button variant="primary" size="md" className="w-full max-w-[300px] sm:w-[300px]">
            {t("viewAllBtn")}
          </Button>
        </div>
      </div>
    </section>
  );
}
