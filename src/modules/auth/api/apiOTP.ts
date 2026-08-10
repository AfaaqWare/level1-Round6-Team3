import apiClient from "@/services/ApiClient";

export interface VerifyOtpPayload {
  email: string;
  otp: string;
}

export interface VerifyOtpResponse {
  message: string;
}

export const verifyOtp = async (payload: VerifyOtpPayload): Promise<VerifyOtpResponse> => {
  return await apiClient.post<VerifyOtpResponse>("/auth/register/verify", payload);
};

// =====================
// Resend OTP
// =====================

export interface ResendOtpPayload {
  email: string;
}

export interface ResendOtpResponse {
  message: string;
}

export const resendOtp = async (payload: ResendOtpPayload): Promise<ResendOtpResponse> => {
  return await apiClient.post<ResendOtpResponse>("/auth/otp/resend", payload);
};
