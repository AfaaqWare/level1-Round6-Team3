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
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function DashboardMenu() {
  const t = useTranslations("dashboard.dashboard");

  return (
    <nav className="my-6 flex w-full flex-1 flex-col gap-6 text-left">
      {/* Dashboard */}
      <div className="flex w-full items-center gap-3 rounded-xl bg-[var(--color-primary-200)] py-3 pl-6 text-[var(--color-primary)]">
        <Image src={group} alt="Dashboard" width={20} height={20} />

        <h4 className="font-semibold">{t("menu.dashboard")}</h4>
      </div>

      <hr className="border-0 border-t border-[var(--border-color)]" />

      {/* User Management */}
      <SidebarSection
        title={t("menu.userManagement.title")}
        items={[
          {
            label: t("menu.userManagement.allUsers"),
            icon: <Users size={22} />,
            href: "/dashboard/users",
          },
          {
            label: t("menu.userManagement.rolesPermission"),
            icon: <ShieldCheck size={22} />,
            href: "/dashboard/roles",
          },
        ]}
      />

      {/* Survey Management */}
      <SidebarSection
        title={t("menu.surveyManagement.title")}
        items={[
          {
            label: t("menu.surveyManagement.allSurveys"),
            icon: <ClipboardList size={22} />,
            href: "/dashboard/surveys",
          },
          {
            label: t("menu.surveyManagement.draftSurveys"),
            icon: <FilePenLine size={22} />,
            href: "/dashboard/surveys/drafts",
          },
          {
            label: t("menu.surveyManagement.publishedSurveys"),
            icon: <Send size={22} />,
            href: "/dashboard/surveys/published",
          },
          {
            label: t("menu.surveyManagement.closedSurveys"),
            icon: <LockKeyhole size={22} />,
            href: "/dashboard/surveys/closed",
          },
        ]}
      />

      {/* Response Management */}
      <SidebarSection
        title={t("menu.responseManagement.title")}
        items={[
          {
            label: t("menu.responseManagement.responses"),
            icon: <PieChart size={22} />,
            href: "/dashboard/responses",
          },
          {
            label: t("menu.responseManagement.analytics"),
            icon: <ChartNoAxesCombined size={22} />,
            href: "/dashboard/analytics",
          },
        ]}
      />

      {/* Others */}
      <div className="border-t border-[var(--border-color)] pt-6">
        <SidebarSection
          title={t("menu.others.title")}
          items={[
            {
              label: t("menu.others.profile"),
              icon: <User size={22} />,
              href: "/dashboard/profile",
            },
            {
              label: t("menu.others.logout"),
              icon: <LogOut size={22} />,
              href: "#",
              danger: true,
            },
          ]}
        />
      </div>
    </nav>
  );
}
