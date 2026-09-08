type EditUserRoleInfoRowProps = {
  label: string;
  value: string;
};

export default function EditUserRoleInfoRow({ label, value }: EditUserRoleInfoRowProps) {
  return (
    <div className="flex min-w-0 items-start">
      <p
        className={[
          "shrink-0 leading-[var(--leading-normal)] font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-primary)] text-[var(--text-sm)]",
          "w-[calc(var(--space-2xl)*4)]",
        ].join(" ")}
      >
        {label}
      </p>
      <p
        className={[
          "min-w-0 flex-1 leading-[var(--leading-normal)] font-[var(--font-heading)] font-[var(--font-medium)] break-words text-[var(--color-text-primary)] text-[var(--text-sm)]",
        ].join(" ")}
      >
        {value}
      </p>
    </div>
  );
}
