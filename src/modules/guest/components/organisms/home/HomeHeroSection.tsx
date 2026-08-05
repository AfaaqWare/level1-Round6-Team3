"use client";
// import HeroSection from "@/shared/components/organisms/HeroSection";
// import { homehero } from "@/assets/images/images";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import ButtonGroup from "@/shared/components/molecules/ButtonGroup";
// import Herosection from "@/shared/components/organisms/HeroSection";
// import ContentHeroection2 from "@/shared/components/molecules/ContentHeroection2";
// import TextHighlight from "@/shared/components/atoms/TextHighlight";
import { useTranslations } from "next-intl";
import HeroSection from "@/shared/components/organisms/HeroSection";
import { heroImage } from "@/assets/images/images";

const HomeHeroSection = () => {
  const t = useTranslations("publicPages.home.heroSection");
  return (
    // <Herosection
    //   content={
    //     <ContentHeroection2
    //       title={
    //         <>
    //           {t("title.before")} <TextHighlight>{t("title.highlight1")}</TextHighlight>
    //           {t("title.middle")}
    //           <TextHighlight> {t("title.highlight2")}</TextHighlight> {t("title.after")}
    //         </>
    //       }
    //       text={t("description")}
    //       btn1={t("createSurvey")}
    //       btn2={t("seeHowItWorks")}
    //     />
    //   }
    // />
    <HeroSection src={heroImage} imgHeight={482} imgWidth={488}>
      <div className="flex flex-col gap-6">
        <Title size="xl" className="md:w-[90%]">
          {t.rich("title", {
            alt: chunks => <span className="ds-text-alt">{chunks}</span>,
          })}
        </Title>

        <Text size="md" variant="secondary" className="text-justify md:w-[60%]">
          {t("describtion")}
        </Text>

        <ButtonGroup
          button1={{ variant: "primary", children: t("create-btn"), size: "md" }}
          button2={{ variant: "outline1", children: t("how-work-btn"), size: "md" }}
          gap={6}
        />
      </div>
    </HeroSection>
  );
};

export default HomeHeroSection;
