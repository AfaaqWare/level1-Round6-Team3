import { IconFileText, IconShieldCheck, IconUserScan } from "@tabler/icons-react";
import { cn } from "@/lib/cn";

import EditUserRoleIconFrame from "@/modules/dashboard/components/molecules/EditUserRoleIconFrame";

type EditUserRoleOptionProps = {
  label: string;
  description: string;
  icon: "user" | "editor" | "admin";
  isSelected?: boolean;
  isDisabled?: boolean;
};

const ROLE_ICONS = {
  user: IconUserScan,
  editor: IconFileText,
  admin: IconShieldCheck,
} as const;

export default function EditUserRoleOption({
  label,
  description,
  icon,
  isSelected = false,
  isDisabled = false,
}: EditUserRoleOptionProps) {
  const Icon = ROLE_ICONS[icon];

  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-pressed={isSelected}
      className={cn(
        "focus:ds-focus flex h-[calc(var(--space-lg)*2)] w-full min-w-0 items-center gap-[calc(var(--space-sm)+var(--space-xs)/4)] rounded-[var(--radius-dashboard-control)] px-[var(--space-sm)] text-start transition-colors",
        isSelected ? "bg-[var(--color-dashboard-role-selected-bg)]" : "bg-[var(--color-bg-card)]",
        isDisabled
          ? "cursor-not-allowed opacity-55"
          : "cursor-default hover:bg-[var(--color-dashboard-role-selected-bg)]"
      )}
    >
      <EditUserRoleIconFrame>
        <Icon size={18} stroke={2} aria-hidden="true" />
      </EditUserRoleIconFrame>
      <span className="min-w-0">
        <span className="ds-text-2xs block truncate font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-primary)]">
          {label}
        </span>
        <span className="ds-text-2xs block truncate font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-secondary)]">
          {description}
        </span>
      </span>
    </button>
  );
}
