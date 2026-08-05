import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getSurvey } from "../api/getSurvey";

export function useSurvey(surveyId: string) {
  return useApiQuery({
    queryKey: ["survey", surveyId],
    queryFn: () => getSurvey(surveyId),
    options: {
      enabled: !!surveyId,
    },
  });
}
