import React from "react";
import GuestTemplate from "@/shared/components/templates/GuestLayout";
import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import type { Metadata } from "next";
import HomeHeroSection from "@/modules/guest/components/organisms/home/HomeHeroSection";
import Education from "@/modules/guest/components/organisms/home/Education";
import EventFeedbackSection from "@/modules/guest/components/organisms/home/EventFeedback";
import WorkStepsSection from "@/modules/guest/components/organisms/home/WorkStepsSection";
import SurveyTemplates from "@/modules/guest/components/organisms/home/SurveyTemplates";
export const metadata: Metadata = getSeoMetadata({
  title: "project for team",
  description: "this project for training students ",
  keywords: ["project ", "team", "smart project"],
});
function page() {
  return (
    <GuestTemplate>
      <HomeHeroSection />
      <WorkStepsSection />

      <SurveyTemplates />
      <Education />
      <EventFeedbackSection />
    </GuestTemplate>
  );
}

export default page;
