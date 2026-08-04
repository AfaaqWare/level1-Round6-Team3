"use client";
import React from "react";
import { useTranslations } from "next-intl";
import QuestionBox from "@/modules/guest/components/molecules/faqs/QuestionBox";
import ArrowSmallBox from "@/shared/components/molecules/ArrowSmallBox";
import Heading from "@/shared/components/molecules/Heading";
import Link from "next/link";
import { FAQData, FormTypesData } from "@/shared/utils/data";
import { cn } from "@/lib/cn";

function FAQItemText({
  item,
  t,
}: {
  item: (typeof FAQData)[number];
  t: ReturnType<typeof useTranslations>;
}) {
  if (item.id === 10) {
    return (
      <>
        <span className="block">{t("items.10.text1")}</span>

        <span className="mt-4 block">
          {t.rich("items.10.text2", {
            tables: () => (
              <Link href="/" className="ds-text-primary font-medium underline">
                {t("items.10.links.tables")}
              </Link>
            ),
            inbox: () => (
              <Link href="/" className="ds-text-primary font-medium underline">
                {t("items.10.links.inbox")}
              </Link>
            ),
            pdfEditor: () => (
              <Link href="/" className="ds-text-primary font-medium underline">
                {t("items.10.links.pdfEditor")}
              </Link>
            ),
            workflows: () => (
              <Link href="/" className="ds-text-primary font-medium underline">
                {t("items.10.links.workflows")}
              </Link>
            ),
            reportBuilder: () => (
              <Link href="/" className="ds-text-primary font-medium underline">
                {t("items.10.links.reportBuilder")}
              </Link>
            ),
          })}
        </span>
      </>
    );
  }

  const text = t(`items.${item.id}.text`);
  const paragraphs = text.split("|||");

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <span key={index} className={cn("block", index > 0 && "mt-4")}>
          {paragraph}
        </span>
      ))}

      {item.hasLink && (
        <>
          {" "}
          <Link
            href={item.linkHref || "/pricing"}
            className="ds-text-primary font-medium underline"
          >
            {t(`items.${item.id}.linkText`)}
          </Link>
        </>
      )}
    </>
  );
}

export default function FAQtemplate() {
  const t = useTranslations("publicPages.faq");

  return (
    <section className="ds-container mt-10 mb-12">
      <Heading
        title={t("heading.title")}
        highlightText={t("heading.titleHighlight")}
        text={t("heading.subtitle")}
        className="mb-16"
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
            {item.hasFormTypes && (
              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {FormTypesData.map(form => (
                  <ArrowSmallBox key={form.id} text={t(`formTypes.${form.id}`)} />
                ))}
              </div>
            )}
          </QuestionBox>
        ))}
      </div>
    </section>
  );
}
