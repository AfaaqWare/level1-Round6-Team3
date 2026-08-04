"use client";

import { useTranslations } from "next-intl";
import TopBarCards from "../../molecules/Home/TobBarCards";
import ImgCard from "@/shared/components/molecules/ImgCard";
import { cardImg1, cardImg2, cardImg3, cardImg4 } from "@/assets/images/images";

interface Template {
  id: number;
  title: string;
  text: string;
}

export default function SurveyTemplates() {
  const t = useTranslations("publicPages.home.popularTemplatesSection");

  const templates = t.raw("templates") as Template[];

  const images = [cardImg1, cardImg2, cardImg3, cardImg4];

  return (
    <div className="pt-6 pb-2">
      <TopBarCards
        number={t("topBar.number")}
        title={t("topBar.title")}
        highlightText={t("topBar.highlightText")}
        isNumber
      />

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
    </div>
  );
}
