"use client";

import useGetAllResponses from "../../hooks/useGetAllResponses";
import RecentResponsesSection from "../molecules/RecentResponsesSection";

export default function RecentResponsesContainer() {
  const { data, isLoading, isError } = useGetAllResponses();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load responses</div>;
  }

  const responses =
    data?.data?.slice(0, 4).map(response => ({
      id: response.id,
      surveyTitle: response.surveyId,
      respondent: {
        name: response.respondentName,
        avatar: "/images/avatar.png",
      },
      responsePreview: Object.values(response.answers)[0] ?? "",
      submittedAt: response.submittedAt,
    })) ?? [];

  return <RecentResponsesSection responses={responses} />;
}
