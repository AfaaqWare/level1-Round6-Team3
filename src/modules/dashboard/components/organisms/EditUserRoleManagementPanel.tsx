import { useTranslations } from "next-intl";

import EditUserRoleOption from "@/modules/dashboard/components/molecules/EditUserRoleOption";
import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";

type EditUserRoleManagementPanelProps = {
  onCancel: () => void;
};

const ROLE_OPTIONS = [
  { key: "user", isSelected: true, isDisabled: false },
  { key: "editor", isSelected: false, isDisabled: true },
  { key: "admin", isSelected: false, isDisabled: true },
] as const;

export default function EditUserRoleManagementPanel({ onCancel }: EditUserRoleManagementPanelProps) {
  const t = useTranslations("dashboard.editUserRole");

  return (
    <aside className="ds-bg-card ds-border-card rounded-[var(--radius-lg)] p-[var(--space-xl)] shadow-sm">
      <Text size="md" className="font-semibold">
        {t("roleManagement.title")}
      </Text>

      <div className="mt-[var(--space-lg)] space-y-[var(--space-sm)]">
        {ROLE_OPTIONS.map(role => (
          <EditUserRoleOption
            key={role.key}
            label={t(`roles.${role.key}`)}
            isSelected={role.isSelected}
            isDisabled={role.isDisabled}
          />
        ))}
      </div>

      <div className="mt-[var(--space-xl)] flex flex-col-reverse gap-[var(--space-sm)] sm:flex-row sm:justify-end lg:flex-col-reverse">
        <Button variant="outline" onClick={onCancel}>
          {t("actions.cancel")}
        </Button>
        <Button variant="disabled" disabled>
          {t("actions.save")}
        </Button>
      </div>
    </aside>
  );
}
