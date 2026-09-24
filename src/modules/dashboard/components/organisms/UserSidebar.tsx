"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  FolderOpen,
  SquarePlus,
  ClipboardList,
  BarChart3,
  User,
  LogOut,
  ChevronDown,
} from "@/assets/icons/icons";
import useGetProfile from "@/modules/auth/hooks/useGetProfile";
import { useLogoutHandler } from "@/modules/auth/hooks/useLogoutHandler";

interface NavItem {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Surveys", href: "/dashboard/my-surveys", icon: FolderOpen },
  { label: "Create Survey", href: "/dashboard/create-survey", icon: SquarePlus },
  { label: "Responses", href: "/dashboard/all-responses", icon: ClipboardList },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
];

const othersItems: NavItem[] = [{ label: "Profile", href: "/edit-profile", icon: User }];

export default function UserSidebar() {
  const pathname = usePathname();
  const { data, isLoading } = useGetProfile();
  const { handleLogout, isPending } = useLogoutHandler();

  const isActive = (href: string) =>
    href === "/dashboard"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  const profileImage = data?.image || "";
  const profileName = isLoading ? "Loading..." : data?.name || "User";
  const profileRole = data?.role || "User";

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      {/* Profile Section */}
      <div className="sidebar-profile-section">
        <div className="sidebar-profile-avatar">
          {profileImage ? (
            <Image
              src={profileImage}
              alt={profileName}
              width={50}
              height={50}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "var(--color-form)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <User size={24} style={{ color: "var(--color-text-disabled)" }} />
            </div>
          )}
        </div>
        <div className="sidebar-profile-info">
          <div className="sidebar-profile-name">{profileName}</div>
          <div className="sidebar-profile-role">{profileRole}</div>
        </div>
        <ChevronDown size={18} className="sidebar-chevron" />
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav">
        {navItems.map(item => {
          const IconComp = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-nav-item ${isActive(item.href) ? "active" : ""}`}
            >
              <IconComp className="sidebar-nav-icon" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-divider mt-auto" />

      {/* Others Section */}
      <div className="sidebar-section-label">Others</div>
      <nav className="sidebar-nav">
        {othersItems.map(item => {
          const IconComp = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-nav-item ${isActive(item.href) ? "active" : ""}`}
            >
              <IconComp className="sidebar-nav-icon" />
              <span>{item.label}</span>
            </Link>
          );
        })}

        <button
          className="sidebar-nav-item sidebar-logout"
          onClick={handleLogout}
          disabled={isPending}
          type="button"
        >
          <LogOut className="sidebar-nav-icon" style={{ color: "#ef4444" }} />
          <span>{isPending ? "Logging out..." : "Log out"}</span>
        </button>
      </nav>
    </div>
  );
}