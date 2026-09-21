import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getQuestionsByPublicLinkApi } from "../api/getQuestionsByPubliclink";

export function useGetQuestionsByLink(surveyLink: string) {
  return useApiQuery({
    queryKey: ["public-survey", surveyLink],
    queryFn: () => getQuestionsByPublicLinkApi(surveyLink),
    options: {
      enabled: !!surveyLink,
    },
  });
}
