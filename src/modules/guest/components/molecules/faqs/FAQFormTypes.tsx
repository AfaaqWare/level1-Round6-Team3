"use client";

import { useTranslations } from "next-intl";
import ArrowSmallBox from "@/shared/components/molecules/ArrowSmallBox";
import { FormTypesData } from "@/shared/utils/data";

interface FAQFormTypesProps {
  t: ReturnType<typeof useTranslations>;
}

export default function FAQFormTypes({ t }: FAQFormTypesProps) {
  return (
    <div className="mt-[var(--space-md)] grid w-full min-w-0 grid-cols-1 gap-[var(--space-md)] md:grid-cols-2 lg:grid-cols-3">
      {FormTypesData.map(form => (
        <ArrowSmallBox key={form.id} text={t(`formTypes.${form.id}`)} />
      ))}
    </div>
  );
}
