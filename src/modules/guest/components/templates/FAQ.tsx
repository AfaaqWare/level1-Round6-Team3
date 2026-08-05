"use client";
import { useTranslations } from "next-intl";
import QuestionBox from "@/modules/guest/components/molecules/faqs/QuestionBox";
import FAQItemText from "@/modules/guest/components/molecules/faqs/FAQItemText";
import FAQFormTypes from "@/modules/guest/components/molecules/faqs/FAQFormTypes";
import { FAQData } from "@/shared/utils/data";

export default function FAQtemplate() {
  const t = useTranslations("publicPages.faq");

  return (
    <section className="ds-bg pt-[calc(var(--space-4xl)*4)] pb-[var(--space-4xl)]">
      <div className="ds-container">
        <div className="mb-[calc(var(--space-4xl)*2)] flex flex-col gap-0.5 text-center">
          <h1 className="ds-text-primary ds-text-lg font-normal">
            {t("heading.title")} <span className="ds-text-alt">{t("heading.titleHighlight")}</span>
          </h1>
          <p className="ds-text-disabled ds-text-md font-normal">{t("heading.subtitle")}</p>
        </div>
        <div className="mx-auto w-full md:w-[90%] lg:w-3/4">
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
      </div>
    </section>
  );
}
