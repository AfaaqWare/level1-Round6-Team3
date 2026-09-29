import { Info, FileText, CalendarDays, User } from "@/assets/icons/icons";

export const responseInfoFields = [
  {
    key: "responseId",
    valueKey: "id",
    source: "response",
    IconComponent: Info,
  },
  {
    key: "surveyName",
    valueKey: "title",
    source: "survey",
    IconComponent: FileText,
  },
  {
    key: "submittedAt",
    valueKey: "submittedAt",
    source: "response",
    IconComponent: CalendarDays,
  },
  {
    key: "respondentName",
    valueKey: "respondentName",
    source: "response",
    IconComponent: User,
  },
] as const;
