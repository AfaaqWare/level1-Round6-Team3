import { z } from "zod";
import { SURVEY_STATUSES } from "@/modules/survey-response/types/survey";
import { createSurveySchema } from "./createSurveyValidation";

export const editSurveySchema = (t: (key: string) => string) =>
  createSurveySchema(t).extend({
    status: z.enum(SURVEY_STATUSES, { error: t("statusRequired") }),
  });

export type EditSurveyFormData = z.infer<ReturnType<typeof editSurveySchema>>;