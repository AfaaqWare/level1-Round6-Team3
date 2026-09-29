"use client";

import React from "react";

import { useGetProfileData } from "@/modules/dashboard/hooks/useGetProfileData";
import Image from "@/shared/components/atoms/Image";
import Text from "@/shared/components/atoms/Text";
import { IconLayoutSidebarLeftCollapse } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";

interface DashboardProfileDataProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

function DashboardProfileData({ collapsed, onToggleCollapse }: DashboardProfileDataProps) {
  const { data } = useGetProfileData();
  if (!data) return null;

  return (
    <div className="flex w-full items-center gap-3">
      <div className={cn("rounded-full overflow-hidden", collapsed ? "h-10 w-10" : "h-[70px] w-[70px]")}>
        <Image src={data?.image} alt={data?.name} width={70} height={70} className={"rounded-full"} objectFit={"cover"} />
      </div>

      {!collapsed && (
        <div className="ms-[24px] mt-[12px]">
          <Text size="sm" >{data?.name}</Text>
          <Text size="base" variant="alt" className="ds-font-bold">{data?.role}</Text>
        </div>
      )}

      <button
        type="button"
        onClick={onToggleCollapse}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="ml-auto cursor-pointer bg-transparent border-none p-0"
      >
        <IconLayoutSidebarLeftCollapse size={18} className="sidebar-chevron" />
      </button>
    </div>
  );
}

export default DashboardProfileData;
