import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { submitSurvey } from "../api/submitSurvey";

export function useSubmitSurvey() {
  return useApiMutation({
    mutationFn: submitSurvey,
  });
}
