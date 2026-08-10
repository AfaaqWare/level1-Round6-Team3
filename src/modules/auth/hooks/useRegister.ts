import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { registerApi, type RegisterPayload, type RegisterResponse } from "../api/registerApi";

export function useRegister() {
  return useApiMutation<RegisterPayload, RegisterResponse>({
    mutationFn: registerApi,
  });
}
