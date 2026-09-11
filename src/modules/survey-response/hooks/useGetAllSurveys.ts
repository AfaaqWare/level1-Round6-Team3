import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getAllSurveysApi } from "../api/getAllSurveysApi";
import type { PaginatedSurveys } from "../types/survey";

export default function useGetAllSurveys(page = 1, pageSize = 10, enabled = true) {
  return useApiQuery<PaginatedSurveys>({
    queryKey: ["surveys", page, pageSize],
    queryFn: () => getAllSurveysApi(page, pageSize),
    options: { enabled },
  });
}
