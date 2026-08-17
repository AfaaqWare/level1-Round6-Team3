"use client";

import DashboardProfileData from "../DashboardProfileData";
import DashboardMenu from "./DashboardMenu";

export default function DashboardSidebar() {
  return (
    <aside className="flex h-full w-full flex-col">
      <DashboardProfileData />

      <DashboardMenu />
    </aside>
  );
}
