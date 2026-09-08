import { useApiMutation } from "@/shared/hooks/useApiMutation";

import { resendOtp, type ResendOtpPayload, type ResendOtpResponse } from "../api/apiOTP";

export function useResendOtp() {
  return useApiMutation<ResendOtpPayload, ResendOtpResponse>({
    mutationFn: resendOtp,
  });
}
