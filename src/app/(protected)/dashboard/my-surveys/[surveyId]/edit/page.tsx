import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildSeo } from "@/core/seo/Seo";
import EditSurveyPage from "@/modules/dashboard/components/templates/EditSurveyPage";

type EditSurveyRouteProps = {
  params: Promise<{
    surveyId: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("dashboard.surveyEdit.meta");

  return buildSeo({
    title: t("title"),
    description: t("description"),
  });
}

export default async function EditSurveyRoute({ params }: EditSurveyRouteProps) {
  const { surveyId } = await params;

  return <EditSurveyPage surveyId={surveyId} />;
}