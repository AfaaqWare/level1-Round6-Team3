"use client";
import React from "react";
import Link from "next/link";
import Button from "@/shared/components/atoms/Button";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";
import type { PricingPlan } from "@/modules/guest/utils/data";

export type PricingCardProps = PricingPlan;

export default function PricingCard({ name, price, responses, cta, featured, href }: PricingCardProps) {
  const t = useTranslations("publicPages.home.pricing");

  return (
    <div
      className={cn(
        "flex w-full max-w-sm flex-col rounded-md px-6 py-12",
        featured ? "ds-primary-200 dark:bg-(--color-primary-200-dark) ds-shadow-lg" : "ds-bg-card ds-shadow-card",
        featured ? "min-h-86" : "min-h-78"
      )}
    >
      <div className="flex flex-1 flex-col gap-3 text-center">
        <Title
          size="lg"
          variant="primary"
          className={`ds-font-heading font-semibold ${featured && "text-black!"}`}
        >
          {t(name)}
        </Title>

        {price ? (
          <Title
            size="lg"
            variant={featured ? "alt" : "secondary"}
            className={cn("text-black!", !featured && "dark:text-white!")}
          >
            <span className="text-[32px] font-bold pr-1.5">{price}</span>
            <span className={cn("ds-text-base ds-font-regular")}> {t("period")}</span>
          </Title>
        ) : (
          <Title
            size="md"
            variant={featured ? "alt" : "secondary"}
          >
            {t("free")}
          </Title>
        )}

        <Text
          size="base"
          variant={featured ? "secondary" : "disabled"}
          className={`${featured && "text-black!"}`}
        >
          {t(responses)}
        </Text>
      </div>

      <Link href={href} className="mt-auto w-full">
        <Button
          size="lg"
          variant={featured ? "primary" : "primary200"}
          isRounded
          isFullWidth
          className={`${featured ? "text-white!" : "text-black! dark:text-white! dark:bg-(--color-primary)!"} mt-3 font-bold py-1.5!`}
        >
          {t(cta)}
        </Button>
      </Link>
    </div>
  );
}
