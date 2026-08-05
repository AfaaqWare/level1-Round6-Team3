import PublicLayout from "@/shared/components/Layout/PublicLayout";

import Herosection from "@/shared/components/organisms/HeroSection";
import HeroSection1 from "@/shared/components/organisms/HeroSection1";
import ContentHeroection2 from "@/shared/components/molecules/ContentHeroection2";

import PopularTemplates from "@/modules/guest/components/organisms/home/PopularTemplates";
import { Metadata } from "next";
import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import TextHighlight from "@/shared/components/atoms/TextHighlight";
import HomeHeroSection from "@/modules/guest/components/organisms/home/HomeHeroSection";
import AboutHeroSection from "@/modules/guest/components/organisms/about/AboutHeroSection";

export const metadata: Metadata = getSeoMetadata({
  title: "project for team",
  description: "this project for training students ",
  keywords: ["project ", "team", "smart project"],
});
function page() {
  return (
    <PublicLayout>
      <HomeHeroSection />

      {/* <PopularTemplates /> */}
    </PublicLayout>
  );
}

export default page;
