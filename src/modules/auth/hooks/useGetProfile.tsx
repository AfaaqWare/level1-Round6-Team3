import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { apiProfile } from "../api/apiProfile";

export default function useGetProfile() {
  return useApiQuery({
    queryKey: ["profile"],
    queryFn: apiProfile,
  });
}
