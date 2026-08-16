"use client";

import { EmptyState, ErrorState, LoadingState } from "@/core/ui-states";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import EditUserRoleContent from "@/modules/dashboard/components/templates/EditUserRoleContent";
import EditUserRolePageShell from "@/modules/dashboard/components/templates/EditUserRolePageShell";
import { useGetUserById } from "@/modules/dashboard/hooks/useGetUserById";

type EditUserRoleScreenProps = {
  userId: string;
};

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
      <EditUserRoleContent
        user={user}
        title={t("title")}
        subtitle={t("subtitle")}
        cancelLabel={t("actions.cancel")}
        saveLabel={t("actions.save")}
        onCancel={() => router.back()}
      />
    </EditUserRolePageShell>
  );
}
