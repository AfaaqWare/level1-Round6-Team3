"use client";
import React from "react";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import { hero3 } from "@/assets/images/images";
import { useTranslations } from "next-intl";
import HeroSection from "@/shared/components/organisms/Herosection";

interface Props {
  className?: string;
}

export default function TeamleaderSection({ className = "" }: Props) {
  const t = useTranslations("publicPages.about.teamleaderSection");
  return (
    <section className="ds-container py-10 md:my-8 md:py-8">
      <Title variant="primary" size="lg" className="ds-font-sans text-center font-bold">
        {t("heading.title")}
        <span className="ds-text-alt">{t("heading.highlightTitle")}</span>
      </Title>

      <HeroSection className={className} src={hero3}>
        <div className="flex flex-col items-center gap-6">
          <Title variant="alt" size="lg" className="ds-font-sans text-center font-bold">
            {t("title")}
          </Title>
          <Text
            variant="secondary"
            size="md"
            className="ds-font-sans w-full text-center font-normal md:w-2/3 lg:w-full lg:text-start"
          >
            {t("text")}
          </Text>
          <Button
            variant="primary"
            size="md"
            className="ds-font-heading font-semi-bold ds-text-base"
          >
            {" "}
            {t("button")}
          </Button>
        </div>
      </HeroSection>
    </section>
  );
}
