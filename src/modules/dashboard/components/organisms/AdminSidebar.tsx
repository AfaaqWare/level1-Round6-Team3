"use client";

import DashboardProfileData from "../DashboardProfileData";
import DashboardMenu from "./DashboardMenu";

export default function AdminSidebar() {
  return (
    <div className="flex h-full w-full flex-col px-4">
      <DashboardProfileData />

      <DashboardMenu />
    </div>
  );
}