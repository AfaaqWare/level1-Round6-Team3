import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getResponseByIdApi } from "../api/getResponseByIdApi";
import { GetResponseById } from "../type/responses";

export default function useGetResponseById(responseId: string) {
  return useApiQuery<GetResponseById>({
    queryKey: ["response", responseId],
    queryFn: () => getResponseByIdApi(responseId),
    options: {
      enabled: !!responseId,
    },
  });
}
