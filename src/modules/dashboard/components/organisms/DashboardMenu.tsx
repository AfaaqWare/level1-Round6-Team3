"use client";

import SidebarSection from "../molecules/SidebarSection";
import {
  Users,
  ShieldCheck,
  ClipboardList,
  FilePenLine,
  Send,
  LockKeyhole,
  PieChart,
  ChartNoAxesCombined,
  User,
  LogOut,
} from "lucide-react";
import { group } from "@/assets/images/images";
import Image from "next/image";
import Link from "next/link";
import { useLogoutHandler } from "@/modules/auth/hooks/useLogoutHandler";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";
import useSurveyStatus from "@/modules/survey-response/hooks/useSurveyStatus";

export default function DashboardMenu() {
  const { handleLogout, isPending } = useLogoutHandler();
  const pathname = usePathname();

  const isDashboardActive = pathname === "/dashboard";

  const { status, handleStatusChange } = useSurveyStatus();

  const isSurveyPage = pathname.startsWith("/dashboard/my-surveys");

  return (
    <nav className="my-6 flex h-full w-full flex-1 flex-col gap-6 text-left">
      <Link
        href="/dashboard"
        className={cn(
          "flex w-full items-center gap-3 rounded-xl py-3 pl-6 transition-colors",
          isDashboardActive
            ? "bg-[var(--color-primary-200)] text-[var(--color-primary)] dark:bg-[color-mix(in_srgb,var(--color-primary-200)_40%,transparent)]"
            : "ds-text-primary hover:bg-[var(--color-primary-200)] hover:text-[var(--color-primary)] dark:hover:bg-[color-mix(in_srgb,var(--color-primary-200)_25%,transparent)]"
        )}
      >
        <Image src={group} alt="Dashboard" width={20} height={20} />
        <h4 className="font-semibold">Dashboard</h4>
      </Link>
      <hr className="border-0 border-t border-[var(--border-color)]" />
      <SidebarSection
        title="User Management"
        items={[
          {
            label: "All Users",
            icon: <Users size={22} />,
            href: "/dashboard/users",
          },
          {
            label: "Roles & Permission",
            icon: <ShieldCheck size={22} />,
            href: "/dashboard/roles",
          },
        ]}
      />

      <SidebarSection
        title="Survey Management"
        items={[
          {
            label: "All Surveys",
            icon: <ClipboardList size={22} />,
            isActive: isSurveyPage && status === "all",
            onClick: () => handleStatusChange("all"),
          },
          {
            label: "Draft Surveys",
            icon: <FilePenLine size={22} />,
            isActive: isSurveyPage && status === "draft",
            onClick: () => handleStatusChange("draft"),
          },
          {
            label: "Published Surveys",
            icon: <Send size={22} />,
            isActive: isSurveyPage && status === "published",
            onClick: () => handleStatusChange("published"),
          },
          {
            label: "Closed Surveys",
            icon: <LockKeyhole size={22} />,
            isActive: isSurveyPage && status === "closed",
            onClick: () => handleStatusChange("closed"),
          },
        ]}
      />
      <SidebarSection
        title="Response Management"
        items={[
          {
            label: "Responses",
            icon: <PieChart size={22} />,
            href: "/dashboard/responses",
          },
          {
            label: "Analytics",
            icon: <ChartNoAxesCombined size={22} />,
            href: "/dashboard/analytics",
          },
        ]}
      />
      <div className="mt-auto border-t border-[var(--border-color)] pt-6">
        <SidebarSection
          title="Others"
          items={[
            {
              label: "Profile",
              icon: <User size={22} />,
              href: "/edit-profile",
            },
            {
              label: isPending ? "Logging out..." : "Log out",
              icon: <LogOut size={22} />,
              danger: true,
              onClick: handleLogout,
            },
          ]}
        />
      </div>
    </nav>
  );
}
