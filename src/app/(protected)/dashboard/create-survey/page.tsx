import React from "react";
import { buildSeo } from "@/core/seo/Seo";
import CreateSurveyPage from "@/modules/dashboard/components/templates/CreateSurveyPage";

export const metadata = buildSeo({
  title: "Create Survey - SurveyLand",
  description: "Create a new survey and start collecting responses.",
});

export default function Page() {
  return <CreateSurveyPage />;
}
