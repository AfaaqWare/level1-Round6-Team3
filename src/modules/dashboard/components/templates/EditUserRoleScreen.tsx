"use client";

import { useRouter } from "next/navigation";

import EditUserRoleManagementPanel from "@/modules/dashboard/components/organisms/EditUserRoleManagementPanel";
import EditUserRoleUserCard from "@/modules/dashboard/components/organisms/EditUserRoleUserCard";
import { useGetUserById } from "@/modules/dashboard/hooks/useGetUserById";

type EditUserRoleScreenProps = {
  userId: string;
};

export default function EditUserRoleScreen({ userId }: EditUserRoleScreenProps) {
  const router = useRouter();
  const { data: user } = useGetUserById(userId);

  if (!user) return null;

  return (
    <main className="w-full py-[var(--space-2xl)]">
      <div className="ds-container mx-auto grid gap-[var(--space-xl)] lg:grid-cols-[minmax(0,1fr)_360px]">
        <EditUserRoleUserCard user={user} />
        <EditUserRoleManagementPanel onCancel={() => router.back()} />
      </div>
    </main>
  );
}
