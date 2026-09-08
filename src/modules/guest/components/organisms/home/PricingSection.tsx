"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Heading from "../../molecules/Home/Heading";
import PricingCard from "../../molecules/Home/PricingCard";
import Button from "@/shared/components/atoms/Button";
import { pricingPlans } from "@/modules/guest/utils/data";

export default function PricingSection() {
  const t = useTranslations("publicPages.home.pricing");

  return (
    <section className="ds-container mt-20">
      <Heading title={t("title")} highlightText={t("highlight")} text={t("text")} />

      <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-3">
        {pricingPlans.map(plan => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/pricing" className="inline-flex">
          <Button
            size="lg"
            className="ds-font-sans w-full px-10! py-2! text-white! font-semibold normal-case sm:w-auto"
          >
            {t("link")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
