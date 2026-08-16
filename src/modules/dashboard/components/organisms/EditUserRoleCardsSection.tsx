import EditUserRoleManagementPanel from "@/modules/dashboard/components/organisms/EditUserRoleManagementPanel";
import EditUserRoleUserCard from "@/modules/dashboard/components/organisms/EditUserRoleUserCard";
import type { DashboardUser } from "@/modules/dashboard/utils/users";

type EditUserRoleCardsSectionProps = {
  user: DashboardUser;
};

export default function EditUserRoleCardsSection({ user }: EditUserRoleCardsSectionProps) {
  return (
    <section className="mt-[calc(var(--space-4xl)+var(--space-xs))] flex w-full min-w-0 flex-col gap-[var(--space-xl)] lg:min-h-[316px] lg:flex-row lg:items-end lg:gap-[36px]">
      <div className="w-full min-w-0 lg:w-[418px] lg:shrink-0 lg:basis-[418px]">
        <EditUserRoleUserCard user={user} />
      </div>
      <div className="w-full min-w-0 lg:w-[438px] lg:shrink-0 lg:basis-[438px]">
        <EditUserRoleManagementPanel />
      </div>
    </section>
  );
}
