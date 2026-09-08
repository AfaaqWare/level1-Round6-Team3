import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getUsersApi } from "../api/getUsersAPI";
import type { AdminUser } from "../types/AdminUser";

export function useGetUsers() {
  return useApiQuery<AdminUser[]>({
    queryKey: ["users"],
    queryFn: getUsersApi,
  });
}
