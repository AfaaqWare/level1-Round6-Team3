"use client";

import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import TopBarCards from "../../molecules/Home/TobBarCards";
import ImgCard from "@/shared/components/molecules/ImgCard";
import { card1, card2, card3, card4 } from "@/assets/images/images";

interface Template {
  id: number;
  title: string;
  text: string;
}

export default function SurveyTemplates() {
  const t = useTranslations("publicPages.home.popularTemplatesSection");

  const templates = t.raw("templates") as Template[];

  const images = [card1, card2, card3, card4];

  return (
    <section className="ds-container py-10">
      <Title size="xl" className="mt-5 font-semibold">
        {t("title")}
        <span className="ds-text-alt"> {t("highlightTitle")}</span>
      </Title>

      <TopBarCards
        number={t("topBar.number")}
        title={t("topBar.title")}
        highlightText={t("topBar.highlightText")}
        isNumber
      />

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {templates.map((template, index) => (
          <ImgCard
            key={template.id}
            src={images[index % images.length]}
            title={template.title}
            titleSize="base"
            text={template.text}
            btn={t("button")}
          />
        ))}
      </div>
    </section>
  );
}
