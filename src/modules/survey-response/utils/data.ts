import { Survey } from "../types/survey";
import { responseHeroImage } from "@/assets/images/images";
import {
  Eye,
  Pencil,
  Send,
  Link2,
  Trash2,
  PanelLeftOpen,
  ClipboardList,
  PieChart,
  Clock3,
  CalendarDays,
} from "@/assets/icons/icons";
import { formatDate } from "@/shared/utils/formatDate";
import { formatRelativeTime } from "@/shared/utils/formatRelativeTime";
import type { BadgeTone } from "@/shared/components/atoms/Badge";
export const mockSurvey: Survey = {
  id: "survey-1",

  title: "Frontend Training Survey",

  description: "Help us improve the training experience.",

  coverImage: responseHeroImage,

  deadline: "10 May 2026",

  duration: "5 - 7 minutes",

  questions: [
    {
      id: "q1",
      number: 1,
      type: "radio",
      question: "What's your favorite language?",
      required: true,
      choices: ["JavaScript", "Python", "Go"],
    },

    {
      id: "q2",
      number: 2,
      type: "text",
      question: "ما اسمك ؟",
      required: true,
      maxLength: 500,
    },

    {
      id: "q3",
      number: 3,
      type: "text",
      question: "ما رأيك في التدريب ؟",
      required: true,
      maxLength: 500,
    },
  ],
};

interface SurveyCardAction {
  id: string;
  labelKey: string;
  icon: typeof Eye;
  hrefSuffix?: string;
  muted: boolean;
  variant: "outline" | "primary";
}

export const surveyCardActions: SurveyCardAction[] = [
  {
    id: "preview",
    labelKey: "preview",
    icon: Eye,
    hrefSuffix: "/preview",
    muted: true,
    variant: "outline",
  },
  {
    id: "edit",
    labelKey: "edit",
    icon: Pencil,
    hrefSuffix: "/edit",
    muted: false,
    variant: "outline",
  },
  {
    id: "details",
    labelKey: "details",
    icon: PanelLeftOpen,
    hrefSuffix: "",
    muted: false,
    variant: "primary",
  },
];

interface SurveyCardMenuItem {
  id: "preview" | "edit" | "publish" | "copyLink" | "delete";
  labelKey: string;
  icon: typeof Eye;
  kind: "link" | "action";
  hrefSuffix?: string;
  danger?: boolean;
}

export const surveyCardMenuItems: SurveyCardMenuItem[] = [
  { id: "preview", labelKey: "preview", icon: Eye, kind: "link", hrefSuffix: "/preview" },
  { id: "edit", labelKey: "edit", icon: Pencil, kind: "link", hrefSuffix: "/edit" },
  { id: "publish", labelKey: "publish", icon: Send, kind: "action" },
  { id: "copyLink", labelKey: "copyLink", icon: Link2, kind: "action" },
  { id: "delete", labelKey: "delete", icon: Trash2, kind: "action", danger: true },
];

export const surveyCardMetaFields = [
  {
    id: "questions",
    icon: ClipboardList,
    labelKey: "questionsCount",
    getValues: (survey: Survey) => ({ count: survey.questions?.length ?? 0 }),
  },
  {
    id: "responses",
    icon: PieChart,
    labelKey: "responses",
    getValues: (survey: Survey) => ({ count: survey.responsesCount ?? 0 }),
  },
  {
    id: "deadline",
    icon: CalendarDays,
    labelKey: "deadline",
    getValues: (survey: Survey, locale: string) => ({
      date: formatDate(survey.deadline, locale),
    }),
  },
  {
    id: "updated",
    icon: Clock3,
    labelKey: "updated",
    getValues: (survey: Survey, locale: string) => ({
      time: formatRelativeTime(survey.updatedAt, locale),
    }),
  },
] as const;

export const RESPONSES_PREVIEW_ROW_LIMIT = 5;

interface ResponsesPreviewContext {
  survey: Survey;
  responsesCount: number;
}

interface ResponsesPreviewBadge {
  id: "showingRows" | "questions" | "responses";
  tone: BadgeTone;
  labelKey: string;
  getValues: (ctx: ResponsesPreviewContext) => Record<string, number>;
}

export const responsesPreviewBadges: ResponsesPreviewBadge[] = [
  {
    id: "showingRows",
    tone: "gray",
    labelKey: "showingFirstRows",
    getValues: () => ({ count: RESPONSES_PREVIEW_ROW_LIMIT }),
  },
  {
    id: "questions",
    tone: "green",
    labelKey: "questionsCount",
    getValues: ({ survey }) => ({ count: survey.questions?.length ?? 0 }),
  },
  {
    id: "responses",
    tone: "orange",
    labelKey: "responsesCount",
    getValues: ({ responsesCount }) => ({ count: responsesCount }),
  },
];

export interface ExportSettingOption {
  id: "respondentName" | "respondentEmail" | "submissionData" | "answers";
  labelKey: string;
}

export const exportSettingsOptions: ExportSettingOption[] = [
  { id: "respondentName", labelKey: "respondentName" },
  { id: "respondentEmail", labelKey: "respondentEmail" },
  { id: "submissionData", labelKey: "submissionData" },
  { id: "answers", labelKey: "answers" },
];
