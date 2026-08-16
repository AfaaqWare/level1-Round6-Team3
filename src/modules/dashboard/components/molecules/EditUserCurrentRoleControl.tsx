import { IconUserScan } from "@tabler/icons-react";

import { ChevronDown } from "@/assets/icons/icons";
import EditUserRoleIconFrame from "@/modules/dashboard/components/molecules/EditUserRoleIconFrame";

type EditUserCurrentRoleControlProps = {
  label: string;
};

export default function EditUserCurrentRoleControl({ label }: EditUserCurrentRoleControlProps) {
  return (
    <div className="flex h-[calc(var(--space-lg)*2)] w-full min-w-0 items-center justify-between rounded-[var(--radius-dashboard-control)] border border-[var(--color-dashboard-control-active-border)] px-[var(--space-sm)] py-[calc(var(--space-xs)+var(--space-xs)/4)]">
      <div className="flex min-w-0 items-center gap-[calc(var(--space-sm)+var(--space-xs)/4)]">
        <EditUserRoleIconFrame variant="selected">
          <IconUserScan size={18} stroke={2} aria-hidden="true" />
        </EditUserRoleIconFrame>
        <span className="truncate leading-[var(--leading-dashboard-control)] font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-primary)] text-[var(--text-sm)]">
          {label}
        </span>
      </div>
      <ChevronDown
        size={18}
        aria-hidden="true"
        className="shrink-0 text-[var(--color-text-secondary)]"
      />
    </div>
  );
}
