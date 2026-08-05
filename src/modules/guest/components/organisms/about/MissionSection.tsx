"use client";
import React from "react";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { heroImage3 } from "@/assets/images/images";
import Button from "@/shared/components/atoms/Button";
import { useTranslations } from "next-intl";
import HeroSection from "@/shared/components/organisms/HeroSection";
interface Props {
  className?: string;
}
export default function Herosection3({ className = "" }: Props) {
  const t = useTranslations("publicPages.about.missionSection");
  return (
    <div className="ds-container !mx-auto">
      <HeroSection
        imagePosition="left"
        className={className}
        src={heroImage3}
        imgWidth={700}
        imgHeight={700}
      >
        <div className="!my-8 flex flex-col items-center gap-8">
          <Title variant="primary" size="lg">
            {t("title.firstWord")} <span className="ds-text-alt"> {t("title.secondWord")}</span>
          </Title>
          <Text
            size="md"
            variant="disabled"
            className="w-full text-center text-lg text-white md:w-2/3"
          >
            {t("text")}
          </Text>
          <Button variant="primary" size="md">
            {t("btn")}
          </Button>
        </div>
      </HeroSection>
    </div>
  );
}
