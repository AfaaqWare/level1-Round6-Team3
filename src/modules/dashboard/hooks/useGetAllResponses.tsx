import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getAllResponses } from "../api/getResponses";

export default function useGetAllResponses() {
  return useApiQuery({
    queryKey: ["responses"],
    queryFn: getAllResponses,
  });
}
