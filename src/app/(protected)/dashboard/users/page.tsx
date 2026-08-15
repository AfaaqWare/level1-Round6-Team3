import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildSeo } from "@/core/seo/Seo";
import UsersPage from "@/modules/dashboard/components/users/UsersPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("users.meta");

  return buildSeo({
    title: t("title"),
    description: t("description"),
  });
}

export default function UsersRoute() {
  return <UsersPage />;
}
