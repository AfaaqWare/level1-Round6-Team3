import { Suspense } from "react";
import type { Metadata } from "next";
import AddQuestionPage from "@/modules/dashboard/components/templates/AddQuestionPage";

export const metadata: Metadata = {
  title: "Add Question | SurveyLand Admin",
  description: "Configure and add new questions to surveys",
};

export default function AddQuestionRoute() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-gray-400">Loading survey builder...</div>}>
      <AddQuestionPage />
    </Suspense>
  );
}
