import Text from "@/shared/components/atoms/Text";

type EditUserRoleInfoRowProps = {
  label: string;
  value: string;
};

export default function EditUserRoleInfoRow({ label, value }: EditUserRoleInfoRowProps) {
  return (
    <div className="min-w-0">
      <Text size="xs" variant="secondary" className="font-semibold uppercase">
        {label}
      </Text>
      <Text size="sm" className="mt-[var(--space-xs)] truncate font-semibold">
        {value}
      </Text>
    </div>
  );
}
