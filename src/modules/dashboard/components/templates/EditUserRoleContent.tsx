import EditUserRoleActions from "@/modules/dashboard/components/molecules/EditUserRoleActions";
import EditUserRoleHeader from "@/modules/dashboard/components/molecules/EditUserRoleHeader";
import EditUserRoleCardsSection from "@/modules/dashboard/components/organisms/EditUserRoleCardsSection";
import type { DashboardUser } from "@/modules/dashboard/utils/users";

type EditUserRoleContentProps = {
  user: DashboardUser;
  title: string;
  subtitle: string;
  cancelLabel: string;
  saveLabel: string;
  onCancel: () => void;
};

export default function EditUserRoleContent({
  user,
  title,
  subtitle,
  cancelLabel,
  saveLabel,
  onCancel,
}: EditUserRoleContentProps) {
  return (
    <>
      <EditUserRoleHeader title={title} subtitle={subtitle} />

      <EditUserRoleCardsSection user={user} />

      <div className="mt-[var(--space-4xl)]">
        <EditUserRoleActions cancelLabel={cancelLabel} saveLabel={saveLabel} onCancel={onCancel} />
      </div>
    </>
  );
}
