import { useApiMutation } from "@/shared/hooks/useApiMutation";
import apiClient from "@/services/ApiClient";

export interface ResetPasswordPayload {
  email: string;
  otp: string;
  newPassword: string;
}

export const resetPasswordApi = (payload: ResetPasswordPayload) => {
  return apiClient.post<{ message: string }>("/auth/reset-password", payload);
};

export function useResetPassword() {
  return useApiMutation<ResetPasswordPayload, { message: string }>({
    mutationFn: resetPasswordApi,
  });
}
