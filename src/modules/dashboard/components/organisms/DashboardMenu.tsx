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
  const t = useTranslations("dashboard.menu");

  return (
    <nav className="my-6 flex w-full flex-1 flex-col gap-6 text-left">
      <div className="flex w-full items-center gap-3 rounded-xl bg-[var(--color-primary-200)] py-3 pl-6 text-[var(--color-primary)]">
        <Image src={group} alt="Dashboard" width={20} height={20} />
        <h4 className="font-semibold">{t("dashboard")}</h4>
      </div>

      <hr className="border-0 border-t border-[var(--border-color)]" />

      <SidebarSection
        title={t("userManagement.title")}
        items={[
          {
            label: t("userManagement.allUsers"),
            icon: <Users size={22} />,
            href: "/dashboard/users",
          },
          {
            label: t("userManagement.rolesPermission"),
            icon: <ShieldCheck size={22} />,
            href: "/dashboard/roles",
          },
        ]}
      />

      <SidebarSection
        title={t("surveyManagement.title")}
        items={[
          {
            label: t("surveyManagement.allSurveys"),
            icon: <ClipboardList size={22} />,
            href: "/dashboard/surveys",
          },
          {
            label: t("surveyManagement.draftSurveys"),
            icon: <FilePenLine size={22} />,
            href: "/dashboard/surveys/drafts",
          },
          {
            label: t("surveyManagement.publishedSurveys"),
            icon: <Send size={22} />,
            href: "/dashboard/surveys/published",
          },
          {
            label: t("surveyManagement.closedSurveys"),
            icon: <LockKeyhole size={22} />,
            href: "/dashboard/surveys/closed",
          },
        ]}
      />

      <SidebarSection
        title={t("responseManagement.title")}
        items={[
          {
            label: t("responseManagement.responses"),
            icon: <PieChart size={22} />,
            href: "/dashboard/responses",
          },
          {
            label: t("responseManagement.analytics"),
            icon: <ChartNoAxesCombined size={22} />,
            href: "/dashboard/analytics",
          },
        ]}
      />

      <div className="border-t border-[var(--border-color)] pt-6">
        <SidebarSection
          title={t("others.title")}
          items={[
            {
              label: t("others.profile"),
              icon: <User size={22} />,
              href: "/dashboard/profile",
            },
            {
              label: t("others.logout"),
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
