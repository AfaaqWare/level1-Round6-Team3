type EditUserRoleHeaderProps = {
  title: string;
  subtitle: string;
};

export default function EditUserRoleHeader({ title, subtitle }: EditUserRoleHeaderProps) {
  return (
    <header className="flex flex-col gap-[11px]">
      <h1 className="text-[25px] leading-[var(--leading-normal)] font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-primary)]">
        {title}
      </h1>
      <p className="text-[18px] leading-[var(--leading-dashboard-control)] font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-secondary)]">
        {subtitle}
      </p>
    </header>
  );
}
