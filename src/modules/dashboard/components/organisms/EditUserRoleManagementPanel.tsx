import EditUserRoleOption from "@/modules/dashboard/components/molecules/EditUserRoleOption";
import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";

type EditUserRoleManagementPanelProps = {
  onCancel: () => void;
};

const ROLE_OPTIONS = [
  { label: "User", isSelected: true, isDisabled: false },
  { label: "Editor", isSelected: false, isDisabled: true },
  { label: "Admin", isSelected: false, isDisabled: true },
] as const;

export default function EditUserRoleManagementPanel({ onCancel }: EditUserRoleManagementPanelProps) {
  return (
    <aside className="ds-bg-card ds-border-card rounded-[var(--radius-lg)] p-[var(--space-xl)] shadow-sm">
      <Text size="md" className="font-semibold">
        Role Management
      </Text>

      <div className="mt-[var(--space-lg)] space-y-[var(--space-sm)]">
        {ROLE_OPTIONS.map(role => (
          <EditUserRoleOption
            key={role.label}
            label={role.label}
            isSelected={role.isSelected}
            isDisabled={role.isDisabled}
          />
        ))}
      </div>

      <div className="mt-[var(--space-xl)] flex flex-col-reverse gap-[var(--space-sm)] sm:flex-row sm:justify-end lg:flex-col-reverse">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="disabled" disabled>
          Save
        </Button>
      </div>
    </aside>
  );
}
