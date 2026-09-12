"use client";

import DashboardProfileData from "../DashboardProfileData";
import DashboardMenu from "./DashboardMenu";

export default function DashboardSidebar() {
  return (
    <aside className="flex h-full w-72 shrink-0 flex-col px-7 pt-6 pl-9">
      <DashboardProfileData />

      <DashboardMenu />
    </aside>
  );
}
