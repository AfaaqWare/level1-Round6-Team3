import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getAllResponsesApi } from "../api/getResponsesApi";
import { GetAllResponses } from "../type/responses";

export default function useGetAllResponses() {
  return useApiQuery<GetAllResponses>({
    queryKey: ["responses"],
    queryFn: getAllResponsesApi,
  });
}
