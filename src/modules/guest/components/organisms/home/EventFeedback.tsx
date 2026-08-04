"use client";
import React from "react";
// import Title from "@/shared/components/atoms/Title";
import ImgCard from "@/shared/components/molecules/ImgCard";
import TopBarCards from "@/modules/guest/components/molecules/Home/TobBarCards";
import { EventFeedbackData } from "@/shared/utils/data";
import { useTranslations } from "next-intl";

export default function EventFeedbackSection() {
  const t = useTranslations("publicPages.home.eventSection.EventFeedback");
  const templates = t.raw("templates") as {
    id: number;
    title: string;
    text: string;
  }[];

  return (
    <div className="pt-6 pb-2">
      <div className="mx-auto mb-2">
        <TopBarCards
          number="4"
          title={t("topBar.title")}
          highlightText={t("topBar.highlightText")}
          isNumber
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {templates.map((template, index) => (
          <ImgCard
            key={template.id}
            src={EventFeedbackData[index].src}
            title={template.title}
            titleSize="base"
            text={template.text}
            btn={t("button")}
          />
        ))}
      </div>
    </div>
  );
}
