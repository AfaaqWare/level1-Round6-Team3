import React from "react";
import BoxsSection from "./BoxsSection";
import HighLight from "../atoms/HighLight";
import { useTranslations } from "next-intl";
import List from "../atoms/List";
import { DataBoxs } from "@/shared/utils/data";
import Box from "../molecules/Box";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

interface Props {
  variant?: "primary" | "disabled" | "secondary" | "alt";
}
const HowWorksSection = ({ variant }: Props) => {
  const t = useTranslations("homePage");
  return (
    <BoxsSection
      title={
        <>
          {t("headingBoxs.titleHeading")} <HighLight>{t("headingBoxs.titleHighLight")}</HighLight>
        </>
      }
      text={t("headingBoxs.textHeading")}
      content={
        <List array={DataBoxs}>
          {box => (
            <Box>
              <Title variant={variant} isCenter={true} className="mb-2 !text-2xl">
                {t(box.title)}
              </Title>
              <Text variant="disabled" size="md" isCenter={true} className="max-w-[292px]">
                {t(box.text)}
              </Text>
            </Box>
          )}
        </List>
      }
    />
  );
};

export default HowWorksSection;
