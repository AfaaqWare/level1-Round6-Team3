"use client";

import DashboardProfileData from "../DashboardProfileData";
import DashboardMenu from "./DashboardMenu";

export default function DashboardSidebar() {
  return (
    <aside className="flex h-full w-27/100 flex-col px-7 pt-6 pl-9">
      <DashboardProfileData />

      <DashboardMenu />
    </aside>
  );
}
