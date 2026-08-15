import React from "react";
import { buildSeo } from "@/core/seo/Seo";
import SurveyStatsSection from "@/modules/dashboard/components/organisms/SurveyStatsSection";
import SurveyStatusSection from "@/modules/dashboard/components/molecules/SurveyStatusSection";
import RecentSurveysSection from "@/modules/dashboard/components/organisms/RecentSurveysSection";
import RecentResponsesSection from "@/modules/dashboard/components/molecules/RecentResponsesSection";
import QuickActionsSection from "@/modules/dashboard/components/organisms/QuickActionsSection";
import { surveyStats } from "@/modules/dashboard/utils/data";
import Heading from "@/modules/dashboard/components/molecules/Heading";
import { decodeJwt } from "jose";
import { TokenService } from "@/services/tokenService";
export const metadata = buildSeo({
  title: "Dashboard - Afaaq Ware",
  description: "User dashboard to manage profile and activities",
});
const recentSurveys = [
  {
    id: "1",
    title: "Customer Satisfaction Survey",
    status: "published" as const,
    responses: 34,
    updatedAt: "May 31, 2026",
  },
  {
    id: "2",
    title: "Product Feedback Form",
    status: "draft" as const,
    responses: 3,
    updatedAt: "May 31, 2026",
  },
  {
    id: "3",
    title: "Event Survey 2025",
    status: "closed" as const,
    responses: 14,
    updatedAt: "May 31, 2026",
  },
  {
    id: "4",
    title: "Website Feedback",
    status: "published" as const,
    responses: 65,
    updatedAt: "May 31, 2026",
  },
];

const surveyStatus = [
  {
    id: "draft",
    label: "Draft",
    value: 24,
    color: "var(--color-status-draft)",
  },
  {
    id: "published",
    label: "Published",
    value: 89,
    color: "var(--color-status-published)",
  },
  {
    id: "closed",
    label: "Closed",
    value: 15,
    color: "var(--color-status-closed)",
  },
];
const recentResponses = [
  {
    id: "1",
    surveyTitle: "Customer Satisfaction Survey",
    respondent: {
      name: "Ahmed Mohamed",
      avatar: "/images/avatar.png",
    },
    responsePreview: "very satisfied with the service!",
    submittedAt: "Today 10:40 PM",
  },
  {
    id: "2",
    surveyTitle: "Product Feedback Form",
    respondent: {
      name: "Ahmed Mohamed",
      avatar: "/images/avatar.png",
    },
    responsePreview: "very satisfied with the service!",
    submittedAt: "Today 10:40 PM",
  },
  {
    id: "3",
    surveyTitle: "Event Survey 2025",
    respondent: {
      name: "Ahmed Mohamed",
      avatar: "/images/avatar.png",
    },
    responsePreview: "very satisfied with the service!",
    submittedAt: "Today 10:40 PM",
  },
  {
    id: "4",
    surveyTitle: "Website Feedback",
    respondent: {
      name: "Ahmed Mohamed",
      avatar: "/images/avatar.png",
    },
    responsePreview: "very satisfied with the service!",
    submittedAt: "Today 10:40 PM",
  },
];

const token = TokenService.getToken();

const payload = token ? decodeJwt(token) : null;

const name = payload?.name;
export default function DashboardPage() {
  return (
    <main>
      <Heading name={String(name ?? "")} />

      <SurveyStatsSection stats={surveyStats} />
      <div className="my-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)]">
        <SurveyStatusSection data={surveyStatus} />
        <RecentSurveysSection surveys={recentSurveys} />
      </div>
      <div className="my-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <RecentResponsesSection responses={recentResponses} />
        <SurveyStatusSection data={surveyStatus} isIcon />
      </div>
      <QuickActionsSection />
    </main>
  );
}
