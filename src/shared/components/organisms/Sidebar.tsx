"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";
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
import { useLogoutApi } from "@/modules/auth/hooks/useLogout";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Surveys", href: "/my-surveys", icon: FolderOpen },
  { label: "Create Survey", href: "/create-survey", icon: SquarePlus },
  { label: "Responses", href: "/responses", icon: ClipboardList },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
];

const othersItems = [
  { label: "Profile", href: "/edit-profile", icon: User },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { data, isLoading } = useGetProfile();
  const { mutate: logout, isPending } = useLogoutApi();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: (message) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: message,
          confirmButtonColor: "#3085d6",
        }).then(() => {
          router.replace("/sign-in");
        });
      },
      onError: () => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: "Something went wrong.",
        });
      },
    });
  };

  const profileImage = data?.image || "";
  const profileName = isLoading ? "Loading..." : data?.name || "User";
  const profileRole = data?.role || "User";

  const sidebarClasses = [
    "profile-sidebar",
    isOpen ? "mobile-open" : "",
  ].filter(Boolean).join(" ");

  return (
    <aside className={sidebarClasses}>
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
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const IconComp = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-nav-item ${isActive ? "active" : ""}`}
              onClick={onClose}
            >
              <IconComp className="sidebar-nav-icon" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-divider" />

      {/* Others Section */}
      <div className="sidebar-section-label">Others</div>
      <nav className="sidebar-nav">
        {othersItems.map((item) => {
          const isActive = pathname === item.href;
          const IconComp = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-nav-item ${isActive ? "active" : ""}`}
              onClick={onClose}
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
    </aside>
  );
}
