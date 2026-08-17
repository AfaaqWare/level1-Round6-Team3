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

export default function DashboardMenu() {
  return (
    <nav className="my-6 flex flex-1 flex-col gap-6 px-4">
      <h4 className="text-lg font-semibold"> Dashboard </h4>
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
            href: "/dashboard/surveys",
          },
          {
            label: "Draft Surveys",
            icon: <FilePenLine size={22} />,
            href: "/dashboard/surveys/drafts",
          },
          {
            label: "Published Surveys",
            icon: <Send size={22} />,
            href: "/dashboard/surveys/published",
          },
          {
            label: "Closed Surveys",
            icon: <LockKeyhole size={22} />,
            href: "/dashboard/surveys/closed",
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

      <div className="border-t border-[var(--border-color)] pt-6">
        <SidebarSection
          title="Others"
          items={[
            {
              label: "Profile",
              icon: <User size={22} />,
              href: "/dashboard/profile",
            },
            {
              label: "Log out",
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
