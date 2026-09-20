"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

interface SidebarMenuItemProps {
  label: string;
  icon: React.ReactNode;
  href?: string;
  active?: boolean;
  danger?: boolean;
  onClick?: () => void;
}

export default function SidebarMenuItem({
  label,
  icon,
  href,
  active = false,
  danger = false,
  onClick,
}: SidebarMenuItemProps) {
  const pathname = usePathname();
  const isActive =
    active ||
    Boolean(href && href !== "#" && (pathname === href || pathname.startsWith(`${href}/`)));

  const classes = cn(
    "flex w-full items-center gap-[var(--space-md)] rounded-[var(--radius-md)] px-[var(--space-md)] py-[var(--space-sm)] transition-all duration-[var(--motion-fast)]",
    isActive &&
      "bg-[var(--color-primary-200)] text-[var(--color-primary)] dark:bg-[color-mix(in_srgb,var(--color-primary-200)_40%,transparent)]",
    !isActive &&
      !danger &&
      "ds-text-primary hover:bg-[var(--color-primary-200)] hover:text-[var(--color-primary)] dark:hover:bg-[color-mix(in_srgb,var(--color-primary-200)_25%,transparent)]",
    danger && "ds-text-danger"
  );

  if (href && href !== "#") {
    return (
      <Link href={href} className={classes}>
        <span className="shrink-0">{icon}</span>
        <span className="ds-text-base font-semibold whitespace-nowrap">{label}</span>
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      <span className="shrink-0">{icon}</span>
      <span className="ds-text-base font-semibold whitespace-nowrap">{label}</span>
    </button>
  );
}
