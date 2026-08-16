import { buildSeo } from "@/core/seo/Seo";
import EditUserRoleScreen from "@/modules/dashboard/components/templates/EditUserRoleScreen";

export const metadata = buildSeo({
  title: "Edit User Role - Afaaq Ware",
  description: "Edit a dashboard user's role",
});

type EditUserRolePageProps = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function EditUserRolePage({ params }: EditUserRolePageProps) {
  const { userId } = await params;

  return <EditUserRoleScreen userId={userId} />;
}
