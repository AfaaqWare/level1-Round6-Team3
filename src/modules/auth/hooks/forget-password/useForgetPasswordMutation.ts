"use client";

import { requestPasswordReset } from "@/modules/auth/api/forgetPassword";
import { useApiMutation } from "@/shared/hooks/useApiMutation";

export function useForgetPasswordMutation() {
  return useApiMutation({
    mutationFn: requestPasswordReset,
    options: {
      retry: false,
    },
  });
}
