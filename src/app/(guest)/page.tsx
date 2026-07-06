import React from "react";
import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import type { Metadata } from "next";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
import Text from "@/shared/components/atoms/Text";
import Logo from "@/shared/components/atoms/Logo";

import HeroSection1 from "@/shared/components/organisms/HeroSection1";
import ContentHeroection2 from "@/shared/components/molecules/ContentHeroection2";
import Cardsection from "@/shared/components/organisms/Cardsection";
import HowWorksSection from "@/shared/components/organisms/HowWorksSection";
import Herosection from "@/shared/components/organisms/Herosection";
export const metadata: Metadata = getSeoMetadata({
  title: "project for team",
  description: "this project for training students ",
  keywords: ["project ", "team", "smart project"],
});
function page() {
  return (
    <PublicLayout>
      <Logo />

      <Text variant="alt" size="lg">
        home page
      </Text>
      <Text variant="secondary" size="sm">
        home page
      </Text>
      <Herosection
        content={
          <ContentHeroection2
            title="Turn Questions into Clarity and Transform Responses into Valuable Insights"
            text="Effortlessly build surveys that deliver the answers you need to grow, improve, and connect with your audience."
            btn1="Create Your Survey"
            btn2="See How It Works"
          />
        }
      />
      <HowWorksSection variant="alt" />

      <HeroSection1 />
      <Cardsection />
    </PublicLayout>
  );
}

export default page;
