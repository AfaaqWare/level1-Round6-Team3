"use client";
import React from "react";
import HeroSection from "@/shared/components/organisms/HeroSection";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Buttons from "@/shared/components/molecules/Buttons";
import Button from "@/shared/components/atoms/Button";
import { Heroimage2 } from "@/assets/images/images";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export default function Herosection2({ className = "" }: Props) {
  const t = useTranslations("publicPages.about.heroSection");
  return (
    <HeroSection className={className} src={Heroimage2} imgHeight={600} imgWidth={600}>
      <div className="flex flex-col gap-5">
        <Title
          variant="primary"
          size="xl"
          className="ds-font-heading text-center font-semibold lg:text-start"
        >
          {t("title.main")}
          <span className="ds-text-alt"> {t("title.highlight")}</span>
        </Title>
        <Text
          size="md"
          variant="secondary"
          className="ds-font-sans mx-auto w-full text-center font-normal md:w-2/3 lg:mx-0 lg:w-full lg:text-start"
        >
          {t("text")}
        </Text>
        <Buttons className="mx-auto flex w-full flex-col gap-4 sm:w-auto md:flex-row lg:mx-0">
          <Button variant="primary" size="md" className="ds-font-sans w-full !px-16 md:w-auto">
            {t("buttontext1")}
          </Button>
          <Button variant="outline1" size="md" className="ds-font-sans w-full !px-16 md:w-auto">
            {t("buttontext2")}
          </Button>
        </Buttons>
      </div>
    </HeroSection>
  );
}
