import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildSeo } from "@/core/seo/Seo";
import SurveysPage from "@/modules/survey-response/components/templates/SurveysPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("dashboard.adminSurveys.meta");

  return buildSeo({
    title: t("title"),
    description: t("description"),
  });
}

export default function PublishedSurveysRoute() {
  return <SurveysPage />;
}
