import apiClient from "@/services/ApiClient";

export interface ResetPasswordPayload {
  email: string;
  otp: string;
  newPassword: string;
}

export interface ResetPasswordResponse {
  message?: string;
  [key: string]: unknown;
}

export const resetPasswordApi = (payload: ResetPasswordPayload) => {
  return apiClient.post<ResetPasswordResponse>("/auth/reset-password", payload);
};
