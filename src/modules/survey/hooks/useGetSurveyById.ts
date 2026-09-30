import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getSurveyByIdAPI } from "../api/getSurveyByIdAPI";

export const useGetSurveyById = (id: string) => {
  return useApiQuery({
    queryKey: ["surveyById", id],
    queryFn: () => getSurveyByIdAPI(id),
  });
};
