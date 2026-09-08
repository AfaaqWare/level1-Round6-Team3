import { z } from "zod";

export const createSurveySchema = (t: (key: string) => string) =>
  z.object({
    title: z
      .string()
      .trim()
      .min(1, { error: t("titleRequired") })
      .max(100, { error: t("titleMax") }),

    description: z
      .string()
      .trim()
      .min(1, { error: t("descriptionRequired") })
      .max(500, { error: t("descriptionMax") }),

    deadline: z
      .string()
      .min(1, { error: t("deadlineRequired") }),
  });

export type CreateSurveyFormData = z.infer<ReturnType<typeof createSurveySchema>>;
