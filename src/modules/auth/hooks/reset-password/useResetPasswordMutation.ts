import { useApiMutation } from "@/shared/hooks/useApiMutation";
import {
  resetPasswordApi,
  type ResetPasswordPayload,
  type ResetPasswordResponse,
} from "../../api/resetPasswordApi";

export function useResetPasswordMutation() {
  return useApiMutation<ResetPasswordPayload, ResetPasswordResponse>({
    mutationFn: resetPasswordApi,
  });
}
