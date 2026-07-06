import React from "react";
import { useTranslations } from "next-intl";
import BoxsSection from "@/shared/components/organisms/BoxsSection";
import HighLight from "@/shared/components/atoms/HighLight";
import Box from "@/shared/components/molecules/Box";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
const TreadingSection = () => {
  const t = useTranslations("aboutPage");
  return (
    <BoxsSection
      classNameTitle="!text-[24px] !font-[400]"
      isCenter={false}
      title={
        <>
          {t("treadingHeading.title")} <HighLight>{t("treadingHeading.titleHighLight")}</HighLight>
        </>
      }
      content={Array.from({ length: 3 }).map((_, index) => (
        <Box key={index} size="md">
          <Text isCenter={true} className="mb-5 !text-2xl">
            {t("treadingBoxs.value")}
          </Text>
          <Title size="md" isCenter={true}>
            {t("treadingBoxs.text")}
          </Title>
        </Box>
      ))}
    />
  );
};

export default TreadingSection;
