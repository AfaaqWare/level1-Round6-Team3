import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getAllSurveysApi } from "../api/getAllSurveysApi";

export default function useGetAllSurveys() {
  return useApiQuery({
    queryKey: ["surveys"],
    queryFn: getAllSurveysApi,
  });
}
