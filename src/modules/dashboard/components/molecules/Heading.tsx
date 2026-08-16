"use client";

import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { useTranslations } from "next-intl";
import React from "react";

interface HeadingProps {
  name: string;
}

const Heading = ({ name }: HeadingProps) => {
  const t = useTranslations("dashboard.heading");

  return (
    <div className="mb-11 md:mt-6">
      <Title>{t("title")}</Title>

      <Text variant="disabled" size="md">
        {t("welcomeMessage", { name })}
      </Text>
    </div>
  );
};

export default Heading;
