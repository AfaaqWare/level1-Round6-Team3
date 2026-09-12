import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { createSurveyApi } from "../api/createSurveyApi";

export function useCreateSurvey() {
  return useApiMutation({
    mutationFn: createSurveyApi,
  });
}
