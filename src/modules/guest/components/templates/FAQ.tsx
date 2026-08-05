"use client";
import React from "react";
import { useTranslations } from "next-intl";
import QuestionBox from "@/modules/guest/components/molecules/faqs/QuestionBox";
import FAQItemText from "@/modules/guest/components/molecules/faqs/FAQItemText";
import FAQFormTypes from "@/modules/guest/components/molecules/faqs/FAQFormTypes";
import Heading from "@/shared/components/molecules/Heading";
import { FAQData } from "@/shared/utils/data";

export default function FAQtemplate() {
  const t = useTranslations("publicPages.faq");

  return (
    <section className="ds-bg ds-container pt-[calc(var(--space-4xl)*4)] pb-[var(--space-4xl)]">
      <Heading
        title={t("heading.title")}
        highlightText={t("heading.titleHighlight")}
        text={t("heading.subtitle")}
        className="mb-[calc(var(--space-4xl)*2)]"
        titleClassName="font-normal"
        textClassName="font-normal"
      />
      <div>
        {FAQData.map(item => (
          <QuestionBox
            key={item.id}
            title={t(`items.${item.id}.title`)}
            text={<FAQItemText item={item} t={t} />}
          >
            {item.hasFormTypes && <FAQFormTypes t={t} />}
          </QuestionBox>
        ))}
      </div>
    </section>
  );
}
