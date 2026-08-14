import React from "react";
import { buildSeo } from "@/core/seo/Seo";
import DashboardProfileData from "@/modules/dashboard/components/DashboardProfileData";

export const metadata = buildSeo({
  title: "Dashboard - Afaaq Ware",
  description: "User dashboard to manage profile and activities",
});

export default function DashboardPage() {
  return (
    <div>
      <DashboardProfileData />
    </div>
  );
}
