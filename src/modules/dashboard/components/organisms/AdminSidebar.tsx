"use client";

import DashboardProfileData from "../DashboardProfileData";
import DashboardMenu from "./DashboardMenu";
import { cn } from "@/lib/cn";

interface AdminSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function AdminSidebar({ collapsed, onToggleCollapse }: AdminSidebarProps) {
  return (
    <div className={cn("flex h-full w-full flex-col", collapsed ? "items-center px-2" : "px-4")}>
      <DashboardProfileData collapsed={collapsed} onToggleCollapse={onToggleCollapse} />

      <DashboardMenu collapsed={collapsed} />
    </div>
  );
}