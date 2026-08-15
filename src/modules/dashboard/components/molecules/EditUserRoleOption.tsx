import { cn } from "@/lib/cn";
import Text from "@/shared/components/atoms/Text";

type EditUserRoleOptionProps = {
  label: string;
  isSelected?: boolean;
  isDisabled?: boolean;
};

export default function EditUserRoleOption({
  label,
  isSelected = false,
  isDisabled = false,
}: EditUserRoleOptionProps) {
  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-pressed={isSelected}
      className={cn(
        "ds-border-card w-full rounded-[var(--radius-md)] px-[var(--space-md)] py-[var(--space-sm)] text-start transition-colors",
        isSelected ? "border-[var(--color-primary)] bg-[var(--color-primary-200)]" : "ds-bg-card",
        isDisabled ? "cursor-not-allowed opacity-[var(--opacity-disabled)]" : ""
      )}
    >
      <Text size="sm" variant={isSelected ? "alt" : "primary"} className="font-semibold">
        {label}
      </Text>
    </button>
  );
}
