import React from "react";
import { buildSeo } from "@/core/seo/Seo";
import ContainerDashboardPage from "@/modules/dashboard/components/templates/ContainerDashboardPage";
import DashboardSidebar from "@/modules/dashboard/components/organisms/DashboardSidebar";
export const metadata = buildSeo({
  title: "Dashboard - Afaaq Ware",
  description: "User dashboard to manage profile and activities",
});

export default function DashboardPage() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <ContainerDashboardPage />
    </div>
  );
}
