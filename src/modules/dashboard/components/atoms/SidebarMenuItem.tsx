import React from "react";
import { cn } from "@/lib/cn";

interface SidebarMenuItemProps {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  danger?: boolean;
  onClick?: () => void;
}

export default function SidebarMenuItem({
  label,
  icon,
  active = false,
  danger = false,
  onClick,
}: SidebarMenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-[var(--space-md)] rounded-[var(--radius-md)] px-[var(--space-md)] py-[var(--space-sm)] transition-all duration-[var(--motion-fast)]",
        active && "ds-bg-primary-200 ds-text-primary",
        !active && !danger && "ds-text-primary hover:ds-bg-primary-300",
        danger && "ds-text-danger"
      )}
    >
      <span className="shrink-0">{icon}</span>

      <span className="ds-text-base font-semibold">{label}</span>
    </button>
  );
}
