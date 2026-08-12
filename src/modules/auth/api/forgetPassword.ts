import apiClient from "@/services/ApiClient";

export type ForgetPasswordPayload = {
  email: string;
};

export function requestPasswordReset(payload: ForgetPasswordPayload): Promise<unknown> {
  return apiClient.post("/auth/forgot-password", payload);
}
