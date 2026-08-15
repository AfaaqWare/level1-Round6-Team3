"use client";

import { EmptyState, ErrorState, LoadingState } from "@/core/ui-states";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import EditUserRoleManagementPanel from "@/modules/dashboard/components/organisms/EditUserRoleManagementPanel";
import EditUserRoleUserCard from "@/modules/dashboard/components/organisms/EditUserRoleUserCard";
import { useGetUserById } from "@/modules/dashboard/hooks/useGetUserById";

type EditUserRoleScreenProps = {
  userId: string;
};

export default function EditUserRoleScreen({ userId }: EditUserRoleScreenProps) {
  const router = useRouter();
  const t = useTranslations("dashboard.editUserRole.states");
  const { data: user, isLoading, isError, refetch } = useGetUserById(userId);

  if (isLoading) {
    return <LoadingState message={t("loading")} />;
  }

  if (isError && !user) {
    return (
      <ErrorState
        message={t("error")}
        retryLabel={t("retry")}
        onRetry={() => {
          void refetch();
        }}
      />
    );
  }

  if (!user) {
    return <EmptyState message={t("notFound")} />;
  }

  return (
    <main className="w-full py-[var(--space-2xl)]">
      <div className="ds-container mx-auto grid gap-[var(--space-xl)] lg:grid-cols-[minmax(0,1fr)_360px]">
        <EditUserRoleUserCard user={user} />
        <EditUserRoleManagementPanel onCancel={() => router.back()} />
      </div>
    </main>
  );
}
