import React from "react";
import { getTranslations } from "next-intl/server";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
import Herosection from "@/shared/components/organisms/Herosection";
import { handshake, Heroimage2, teamSuccess } from "@/assets/images/images";
import Title from "@/shared/components/atoms/Title";

export async function generateMetadata() {
  const t = await getTranslations("publicPages.about.heroSection");
  return {
    title: t("title"),
    description: t("text"),
  };
}

async function page() {
  const t = await getTranslations("publicPages.about.heroSection");
  const t2 = await getTranslations("publicPages.about.missionSection");
  const t3 = await getTranslations("publicPages.about.teamSection");
  
  return (
    <PublicLayout>
      <Herosection
        src={Heroimage2}
        title={t("title")}
        titleHighlight={t("titleHighlight")}
        text={t("text")}
        button1={t("button1")}
        button2={t("button2")}
      />
      <Herosection
        src={handshake}
        textAlign="center"
        imagePosition="left"
        titleHighlight={t2("titleHighlight")}
        title={t2("title")}
        text={t2("text")}
        button1={t2("button")}
      />

      <div className="flex-col-center">
        <Title>{t3("teamTitle")} <span className="ds-text-alt">{t3("teamTitleHighlight")}</span></Title>
        <Herosection
          src={teamSuccess}
          textAlign="center"
          textAlignment="start"
          title={t3("title")}
          titleHighlight={t3("titleHighlight")}
          text={t3("text")}
          button1={t3("button")}
        />
      </div>
    </PublicLayout>
  );
}

export default page;
