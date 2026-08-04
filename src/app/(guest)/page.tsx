import React from "react";
import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import type { Metadata } from "next";
import PublicLayout from "@/shared/components/Layout/PublicLayout";

import Herosection from "@/shared/components/organisms/Herosection";
import HeroSection1 from "@/shared/components/organisms/HeroSection1";
import ContentHeroection2 from "@/shared/components/molecules/ContentHeroection2";

import PopularTemplates from "@/modules/guest/components/organisms/home/PopularTemplates";

export const metadata: Metadata = getSeoMetadata({
  title: "project for team",
  description: "this project for training students ",
  keywords: ["project ", "team", "smart project"],
});
function page() {
  return (
    <PublicLayout>
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
      <HeroSection1 />

      <PopularTemplates />
    </PublicLayout>
  );
}

export default page;
