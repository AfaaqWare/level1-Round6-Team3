import type { ReactNode } from "react";

type EditUserRolePageShellProps = {
  children: ReactNode;
  contentClassName?: string;
};

export default function EditUserRolePageShell({
  children,
  contentClassName,
}: EditUserRolePageShellProps) {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full overflow-x-hidden bg-[var(--color-bg)] py-[var(--space-xl)] sm:py-[var(--space-2xl)]">
      <div
        className={[
          "w-full max-w-[893px] px-[var(--space-md)] sm:px-[var(--space-lg)] lg:px-0",
          contentClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </main>
  );
}
