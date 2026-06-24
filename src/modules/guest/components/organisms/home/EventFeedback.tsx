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
    <section className="ds-container py-10">
      <div className="mx-auto mb-2">
        <TopBarCards
          number="4"
          title={t("topBar.title")}
          highlightText={t("topBar.highlightText")}
          isNumber
        />
      </div>

      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4">
        {templates.map((template, index) => (
          <ImgCard
            key={template.id}
            src={EventFeedbackData[index].src}
            title={template.title}
            titleSize="md"
            text={template.text}
            btn={t("button")}
          />
        ))}
      </div>
      {/* <Button size="md">{btn}</Button> */}
    </section>
  );
}
