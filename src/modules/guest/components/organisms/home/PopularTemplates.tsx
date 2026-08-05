"use client";

import React from "react";
import { type StaticImageData } from "next/image";
import Button from "@/shared/components/atoms/Button";
import Title from "@/shared/components/atoms/Title";
import ImgCard from "@/shared/components/molecules/ImgCard";
import TopBarCards from "@/modules/guest/components/molecules/Home/TobBarCards";
import { useTranslations } from "next-intl";

import {
  cardImg1,
  cardImg2,
  cardImg3,
  cardImg4,
} from "@/assets/images/images";

import {
  educationCardData,
  marketResearchData,
  EventFeedbackData,
} from "@/shared/utils/data";

interface SubSectionConfig {
  id: string;
  translationPath: string;
  isCustomData?: boolean;
  customCards?: {
    id: number;
    img: StaticImageData;
    title: string;
    text: string;
  }[];
  images?: StaticImageData[];
  topBar: {
    numberKey: string;
    titleKey: string;
    highlightKey: string;
  };
  buttonKey: string;
}

function TemplateSubSection({ config }: { config: SubSectionConfig }) {
  const t = useTranslations(config.translationPath);

  if (config.isCustomData && config.customCards) {
    return (
      <div className="w-full">
        <TopBarCards
          number={t(config.topBar.numberKey)}
          title={t(config.topBar.titleKey)}
          highlightText={t(config.topBar.highlightKey)}
          isNumber
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.customCards.map((card) => (
            <ImgCard
              key={card.id}
              src={card.img}
              title={t(card.title)}
              titleSize="base"
              text={t(card.text)}
              btn={t(config.buttonKey)}
            />
          ))}
        </div>
      </div>
    );
  }

  const templates = t.raw("templates") as { id: number; title: string; text: string }[];
  const images = config.images || [];

  return (
    <div className="w-full">
      <TopBarCards
        number={t(config.topBar.numberKey)}
        title={t(config.topBar.titleKey)}
        highlightText={t(config.topBar.highlightKey)}
        isNumber
      />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {templates.map((template, index) => (
          <ImgCard
            key={template.id}
            src={images[index % images.length]}
            title={template.title}
            titleSize="base"
            text={template.text}
            btn={t(config.buttonKey)}
          />
        ))}
      </div>
    </div>
  );
}

export default function PopularTemplates() {
  const t = useTranslations("publicPages.home.popularTemplatesSection");

  const sections: SubSectionConfig[] = [
    {
      id: "survey",
      translationPath: "publicPages.home.popularTemplatesSection",
      images: [cardImg1, cardImg2, cardImg3, cardImg4],
      topBar: {
        numberKey: "topBar.number",
        titleKey: "topBar.title",
        highlightKey: "topBar.highlightText",
      },
      buttonKey: "button",
    },
    {
      id: "market",
      translationPath: "publicPages.home.marketResearchSection",
      images: marketResearchData.map((d) => d.src),
      topBar: {
        numberKey: "number",
        titleKey: "title",
        highlightKey: "highlightText",
      },
      buttonKey: "button",
    },
    {
      id: "education",
      translationPath: "publicPages.home.educationSection",
      isCustomData: true,
      customCards: educationCardData,
      topBar: {
        numberKey: "number",
        titleKey: "title",
        highlightKey: "subtitle",
      },
      buttonKey: "cards.btn",
    },
    {
      id: "event",
      translationPath: "publicPages.home.eventSection.EventFeedback",
      images: EventFeedbackData.map((d) => d.src),
      topBar: {
        numberKey: "topBar.number",
        titleKey: "topBar.title",
        highlightKey: "topBar.highlightText",
      },
      buttonKey: "button",
    },
  ];

  return (
    <section className="ds-bg w-full py-12 md:py-20">
      <div className="ds-container">
        {/* Main Section Title */}
        <Title size="xl" variant="primary" className="ds-section-title mb-10 normal-case">
          {t("title")}
          <span className="ds-text-alt"> {t("highlightTitle")}</span>
        </Title>

        {/* Sub-sections Loop with custom section spacing */}
        <div className="flex flex-col gap-16 md:gap-24">
          {sections.map((section) => (
            <TemplateSubSection key={section.id} config={section} />
          ))}
        </div>

        {/* View All Templates Button */}
        <div className="mt-16 flex justify-center">
          <Button variant="primary" size="lg" className="w-full max-w-[320px] sm:w-[320px]">
            {t("viewAllBtn")}
          </Button>
        </div>
      </div>
    </section>
  );
}

