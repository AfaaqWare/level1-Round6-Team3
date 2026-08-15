"use client";

import { EmptyState, ErrorState, LoadingState } from "@/core/ui-states";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import EditUserRoleActions from "@/modules/dashboard/components/molecules/EditUserRoleActions";
import EditUserRoleManagementPanel from "@/modules/dashboard/components/organisms/EditUserRoleManagementPanel";
import EditUserRoleUserCard from "@/modules/dashboard/components/organisms/EditUserRoleUserCard";
import { useGetUserById } from "@/modules/dashboard/hooks/useGetUserById";

type EditUserRoleScreenProps = {
  userId: string;
};

function EditUserRolePageShell({
  children,
  contentClassName,
}: {
  children: ReactNode;
  contentClassName?: string;
}) {
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

export default function EditUserRoleScreen({ userId }: EditUserRoleScreenProps) {
  const router = useRouter();
  const t = useTranslations("dashboard.editUserRole");
  const statesT = useTranslations("dashboard.editUserRole.states");
  const { data: user, isLoading, isError, refetch } = useGetUserById(userId);

  if (isLoading) {
    return (
      <EditUserRolePageShell>
        <LoadingState message={statesT("loading")} />
      </EditUserRolePageShell>
    );
  }

  if (isError && !user) {
    return (
      <EditUserRolePageShell>
        <ErrorState
          message={statesT("error")}
          retryLabel={statesT("retry")}
          onRetry={() => {
            void refetch();
          }}
        />
      </EditUserRolePageShell>
    );
  }

  if (!user) {
    return (
      <EditUserRolePageShell>
        <EmptyState message={statesT("notFound")} />
      </EditUserRolePageShell>
    );
  }

  return (
    <EditUserRolePageShell contentClassName="flex flex-col">
      <header className="flex flex-col gap-[11px]">
        <h1 className="text-[25px] leading-[var(--leading-normal)] font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-primary)]">
          {t("title")}
        </h1>
        <p className="text-[18px] leading-[var(--leading-dashboard-control)] font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-secondary)]">
          {t("subtitle")}
        </p>
      </header>

      <section className="mt-[calc(var(--space-4xl)+var(--space-xs))] flex w-full min-w-0 flex-col gap-[var(--space-xl)] lg:min-h-[316px] lg:flex-row lg:items-end lg:gap-[36px]">
        <div className="w-full min-w-0 lg:w-[418px] lg:shrink-0 lg:basis-[418px]">
          <EditUserRoleUserCard user={user} />
        </div>
        <div className="w-full min-w-0 lg:w-[438px] lg:shrink-0 lg:basis-[438px]">
          <EditUserRoleManagementPanel />
        </div>
      </section>

      <div className="mt-[var(--space-4xl)]">
        <EditUserRoleActions
          cancelLabel={t("actions.cancel")}
          saveLabel={t("actions.save")}
          onCancel={() => router.back()}
        />
      </div>
    </EditUserRolePageShell>
  );
}
