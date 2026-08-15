export const surveyStats = [
  {
    id: "total",
    title: "totalSurveys",
    variant: "teal" as const,
    icon: "clipboard" as const,
  },
  {
    id: "draft",
    title: "draftSurveys",
    variant: "orange" as const,
    icon: "clipboard" as const,
  },
  {
    id: "published",
    title: "publishedSurveys",
    variant: "green" as const,
    icon: "send" as const,
  },
  {
    id: "responses",
    title: "responsesSurveys",
    variant: "purple" as const,
    icon: "chart" as const,
  },
  {
    id: "users",
    title: "totalUsers",
    variant: "blue" as const,
    icon: "users" as const,
  },
];
export const quickActions = [
  {
    id: "create-survey",
    name: "createSurvey",
    href: "/surveys/create",
    variant: "teal" as const,
    icon: "plus" as const,
  },
  {
    id: "manage-users",
    name: "manageUsers",
    href: "/users",
    variant: "green" as const,
    icon: "users" as const,
  },
  {
    id: "view-responses",
    name: "viewResponses",
    href: "/responses",
    variant: "purple" as const,
    icon: "pieChart" as const,
  },
  {
    id: "export-reports",
    name: "exportReports",
    href: "/reports",
    variant: "blue" as const,
    icon: "download" as const,
  },
];
