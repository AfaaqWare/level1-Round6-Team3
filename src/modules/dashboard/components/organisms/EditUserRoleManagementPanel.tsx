import { useTranslations } from "next-intl";

import EditUserCurrentRoleControl from "@/modules/dashboard/components/molecules/EditUserCurrentRoleControl";
import EditUserRoleOption from "@/modules/dashboard/components/molecules/EditUserRoleOption";

const ROLE_OPTIONS = [
  { key: "user", icon: "user", isSelected: true, isDisabled: false },
  { key: "editor", icon: "editor", isSelected: false, isDisabled: true },
  { key: "admin", icon: "admin", isSelected: false, isDisabled: true },
] as const;

export default function EditUserRoleManagementPanel() {
  const t = useTranslations("dashboard.editUserRole");

  return (
    <aside className="w-full max-w-full rounded-[var(--radius-xl)] border border-[var(--border-color-alt)] bg-[var(--color-bg-card)] px-[calc(var(--space-2xl)-var(--space-2xs))] pt-[calc(var(--space-sm)+var(--space-xs)-var(--space-2xs))] pb-[var(--space-lg)] text-[var(--color-text-primary)] shadow-[var(--shadow-faq-card)] sm:pb-[calc(var(--space-sm)+var(--space-xs)-var(--space-2xs))] lg:h-[309px]">
      <h2 className="leading-[var(--leading-normal)] font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-primary)] text-[var(--space-lg)]">
        {t("roleManagement.title")}
      </h2>

      <div className="mt-[calc(var(--space-md)-var(--space-xs)/2)] flex flex-col gap-[calc(var(--space-md)-var(--space-xs)/2)]">
        <p className="ds-text-dashboard-label font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-primary)]">
          {t("roleManagement.currentRole")}
        </p>
        <EditUserCurrentRoleControl label={t("roles.user")} />
      </div>

      <div className="mt-[var(--space-dashboard-control-offset)] flex w-[calc(100%-var(--space-md)+var(--space-2xs))] flex-col gap-[var(--space-dashboard-option-gap)] rounded-[var(--radius-dashboard-control)] border border-[var(--border-color-alt)] px-[var(--space-dashboard-control-offset)] py-[var(--space-sm)]">
        {ROLE_OPTIONS.map(role => (
          <EditUserRoleOption
            key={role.key}
            label={t(`roles.${role.key}`)}
            description={t(`roleDescriptions.${role.key}`)}
            icon={role.icon}
            isSelected={role.isSelected}
            isDisabled={role.isDisabled}
          />
        ))}
      </div>
    </aside>
  );
}
