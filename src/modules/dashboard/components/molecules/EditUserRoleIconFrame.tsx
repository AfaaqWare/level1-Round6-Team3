import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type EditUserRoleIconFrameProps = {
  children: ReactNode;
  variant?: "default" | "selected";
};

export default function EditUserRoleIconFrame({
  children,
  variant = "default",
}: EditUserRoleIconFrameProps) {
  return (
    <span
      className={cn(
        "flex h-[calc(var(--space-2xl)+var(--space-xs)/2)] w-[calc(var(--space-4xl)+var(--space-xs)/2)] shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-primary)]",
        variant === "selected"
          ? "bg-[var(--color-dashboard-role-selected-bg)]"
          : "bg-[var(--color-dashboard-role-icon-bg)]"
      )}
    >
      {children}
    </span>
  );
}
