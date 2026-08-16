import { useTranslations } from "next-intl";

import type { DashboardUser } from "@/modules/dashboard/utils/users";
import EditUserRoleInfoRow from "@/modules/dashboard/components/molecules/EditUserRoleInfoRow";
import AppImage from "@/shared/components/atoms/Image";

type EditUserRoleUserCardProps = {
  user: DashboardUser;
};

export default function EditUserRoleUserCard({ user }: EditUserRoleUserCardProps) {
  const t = useTranslations("dashboard.editUserRole");

  return (
    <section className="w-full max-w-full rounded-[var(--radius-xl)] border border-[var(--border-color-alt)] bg-[var(--color-bg-card)] px-[calc(var(--space-lg)+var(--space-xs)-var(--space-xs)/4)] py-[calc(var(--space-lg)+var(--space-xs)/4)] text-[var(--color-text-primary)] shadow-[var(--shadow-faq-card)] lg:h-[314px]">
      <h2 className="leading-[var(--leading-normal)] font-[var(--font-heading)] font-[var(--font-medium)] text-[var(--color-text-primary)] text-[var(--space-lg)]">
        {t("userInformation")}
      </h2>

      <div className="mt-[calc(var(--space-2xl)-var(--space-xs)/2)] flex flex-col gap-[calc(var(--space-xl)+var(--space-xs)/4)] sm:flex-row sm:items-start">
        {user.image ? (
          <div className="size-[calc(var(--space-lg)*4)] shrink-0 overflow-hidden rounded-full">
            <AppImage
              src={user.image}
              alt={user.name}
              width={80}
              height={80}
              className="h-full w-full"
              objectFit="cover"
            />
          </div>
        ) : null}

        <div className="flex min-w-0 flex-1 flex-col gap-[calc(var(--space-md)-var(--space-xs)/2)]">
          <EditUserRoleInfoRow label={t("fields.fullName")} value={user.name} />
          <EditUserRoleInfoRow label={t("fields.email")} value={user.email} />
          <EditUserRoleInfoRow label={t("fields.role")} value={user.role} />
          <EditUserRoleInfoRow label={t("fields.id")} value={user.id} />
        </div>
      </div>
    </section>
  );
}
