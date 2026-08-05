import type { Metadata } from "next";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
import Herosection from "@/shared/components/organisms/HeroSection";
import HeroSection1 from "@/shared/components/organisms/HeroSection1";
import ContentHeroection2 from "@/shared/components/molecules/ContentHeroection2";
import PopularTemplates from "@/modules/guest/components/organisms/home/PopularTemplates";
import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import React from "react";
import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
import Logo from "@/shared/components/atoms/Logo";

import Herosection from "@/shared/components/organisms/Herosection";
import Cardsection from "@/shared/components/organisms/Cardsection";
import PricingSection from "@/modules/guest/components/organisms/home/PricingSection";
export const metadata: Metadata = getSeoMetadata({
  title: "project for team",
  description: "this project for training students ",
  keywords: ["project ", "team", "smart project"],
});
async function page() {
  const t = await getTranslations("publicPages.home.heroSection");
  return (
    <PublicLayout>
      <Logo />

      <Herosection
        title={t("title")}
        titleHighlight={t("titleHighlight")}
        text={t("text")}
        button1={t("button1")}
        button2={t("button2")}
      />
      <Cardsection />
      <PricingSection />
    </PublicLayout>
  );
}

export default page;
