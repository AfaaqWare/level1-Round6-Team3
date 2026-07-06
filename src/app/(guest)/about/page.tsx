import React from "react";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
// import TreadingSection from "@/shared/components/organisms/TreadingSection";
import HowWorksSection from "@/shared/components/organisms/HowWorksSection";
import TreadingSection from "@/modules/guest/components/organisms/about/TreadingSection";
export default function page() {
  return (
    <PublicLayout>
      <TreadingSection />
      <HowWorksSection variant="primary" />
    </PublicLayout>
  );
}
