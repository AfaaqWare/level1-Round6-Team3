import React from "react";
import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import type { Metadata } from "next";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
import Text from "@/shared/components/atoms/Text";
import Box from "@/shared/components/molecules/Box";
import Logo from "@/shared/components/atoms/Logo";
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
      <Box />
    </PublicLayout>
  );
}

export default page;
