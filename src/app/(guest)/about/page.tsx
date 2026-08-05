import React from "react";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
import AboutHeroSection from "@/modules/guest/components/organisms/about/AboutHeroSection";
import MissionSection from "@/modules/guest/components/organisms/about/MissionSection";
import TeamleaderSection from "@/modules/guest/components/organisms/about/TeamleaderSection";
import LeaderShipPart1 from "@/modules/guest/components/organisms/about/LeaderShipPart1";

import TreadingAction from "@/modules/guest/components/organisms/about/TreadingAction";
import WorkStepsSection from "@/modules/guest/components/organisms/home/WorkStepsSection";

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col gap-16 py-10">
        <AboutHeroSection />
        <MissionSection />
        <TeamleaderSection />
        <LeaderShipPart1 />
        <WorkStepsSection />
        <TreadingAction />
      </div>
    </PublicLayout>
  );
}
