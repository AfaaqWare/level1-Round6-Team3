import type { DashboardUser } from "@/modules/dashboard/utils/users";
import EditUserRoleInfoRow from "@/modules/dashboard/components/molecules/EditUserRoleInfoRow";
import AppImage from "@/shared/components/atoms/Image";
import Text from "@/shared/components/atoms/Text";

type EditUserRoleUserCardProps = {
  user: DashboardUser;
};

export default function EditUserRoleUserCard({ user }: EditUserRoleUserCardProps) {
  return (
    <section className="ds-bg-card ds-border-card w-full max-w-[680px] rounded-[var(--radius-lg)] p-[var(--space-xl)] shadow-sm">
      <div className="flex flex-col gap-[var(--space-lg)] sm:flex-row sm:items-center">
        {user.image ? (
          <div className="h-[96px] w-[96px] shrink-0 overflow-hidden rounded-full border border-[var(--border-color)]">
            <AppImage
              src={user.image}
              alt={user.name}
              width={96}
              height={96}
              className="h-full w-full"
              objectFit="cover"
            />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <Text size="lg" className="truncate font-semibold">
            {user.name}
          </Text>

          <div className="mt-[var(--space-lg)] grid gap-[var(--space-md)] sm:grid-cols-2">
            <EditUserRoleInfoRow label="Email" value={user.email} />
            <EditUserRoleInfoRow label="Role" value={user.role} />
          </div>
        </div>
      </div>
    </section>
  );
}
