"use client";
import React from "react";
import Heading from "../../molecules/Home/Heading";
import PricingCard from "../../molecules/Home/PricingCard";
import Button from "@/shared/components/atoms/Button";
import { useTranslations } from "next-intl";
import { homaPlans } from "@/shared/utils/data";

export default function Plans() {
  const t = useTranslations("publicPages.home.plansSection");
  return (
    <div className="ds-container !mx-auto !mt-20 flex flex-col items-center justify-center gap-10">
      <Heading title={t("title")} text={t("text")} highlightText={""} />
      {/* plan cards container  */}
      <div className="!mx-auto flex flex-col items-center justify-center gap-8 md:flex-row">
        {homaPlans.map(plan => (
          <PricingCard key={plan.plan} {...plan} />
        ))}
      </div>
      {/* --------------------- */}
      <Button size="md">{t("btn")}</Button>
    </div>
  );
}
