import type { Metadata } from "next";
import AddQuestionPage from "@/modules/dashboard/components/templates/AddQuestionPage";

export const metadata: Metadata = {
  title: "Add Question | SurveyLand Admin",
  description: "Configure and add new questions to survey",
};

export default function AddQuestionSurveyRoute() {
  return <AddQuestionPage />;
}
