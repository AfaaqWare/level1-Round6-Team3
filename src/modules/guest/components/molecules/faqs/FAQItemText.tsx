"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";
import { FAQData } from "@/shared/utils/data";

const FAQ_LINK_CLASS =
  "ds-text-primary rounded-[var(--radius-sm)] font-medium underline focus-visible:outline-none focus-visible:shadow-[0_0_0_var(--focus-ring-width)_var(--focus-ring-color)]";

interface FAQItemTextProps {
  item: (typeof FAQData)[number];
  t: ReturnType<typeof useTranslations>;
}

export default function FAQItemText({ item, t }: FAQItemTextProps) {
  if (item.id === 10) {
    return (
      <>
        <span className="block">{t("items.10.text1")}</span>

        <span className="mt-4 block">
          {t.rich("items.10.text2", {
            tables: () => (
              <Link href="https://www.jotform.com/products/tables/" className={FAQ_LINK_CLASS}>
                {t("items.10.links.tables")}
              </Link>
            ),
            inbox: () => (
              <Link href="https://www.jotform.com/features/inbox/" className={FAQ_LINK_CLASS}>
                {t("items.10.links.inbox")}
              </Link>
            ),
            pdfEditor: () => (
              <Link href="https://www.jotform.com/products/pdf-editor/" className={FAQ_LINK_CLASS}>
                {t("items.10.links.pdfEditor")}
              </Link>
            ),
            workflows: () => (
              <Link href="https://www.jotform.com/products/workflows/" className={FAQ_LINK_CLASS}>
                {t("items.10.links.workflows")}
              </Link>
            ),
            reportBuilder: () => (
              <Link
                href="https://www.jotform.com/products/report-builder/"
                className={FAQ_LINK_CLASS}
              >
                {t("items.10.links.reportBuilder")}
              </Link>
            ),
            sign: () => (
              <Link href="https://www.jotform.com/products/sign/" className={FAQ_LINK_CLASS}>
                {t("items.10.links.sign")}
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
          <Link href={item.linkHref || "/pricing"} className={FAQ_LINK_CLASS}>
            {t(`items.${item.id}.linkText`)}
          </Link>
        </>
      )}
    </>
  );
}
