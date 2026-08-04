"use client";
import React from "react";
import ImgCard from "@/shared/components/molecules/ImgCard";
import TopBarCards from "@/modules/guest/components/molecules/Home/TobBarCards";
import { marketResearchData } from "@/shared/utils/data";
import { useTranslations } from "next-intl";

export default function MarketResearch() {
  const t = useTranslations("publicPages.home.marketResearchSection");
  const templates = t.raw("templates") as {
    id: number;
    title: string;
    text: string;
  }[];

  return (
    <div className="pt-6 pb-2">
      <div className="mx-auto mb-2">
        <TopBarCards
          number={t("number")}
          title={t("title")}
          highlightText={t("highlightText")}
          isNumber
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {templates.map((template, index) => (
          <ImgCard
            key={template.id}
            src={marketResearchData[index % marketResearchData.length].src}
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
