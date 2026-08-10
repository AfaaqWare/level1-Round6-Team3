"use client";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import type { AuthResponse } from "@/modules/auth/types/auth";
import type { SignInFormData } from "@/validator/authValidation";
import { useRouter } from "next/navigation";
import { TokenService } from "@/services/tokenService";
import { signIn } from "@/modules/auth/api/ApiSignIn";

export function useSignIn() {
  const router = useRouter();

  return useApiMutation<SignInFormData, AuthResponse>({
    mutationFn: signIn,

    options: {
      onSuccess: data => {
        TokenService.setToken(data.accessToken);
        router.push("/");
      },
    },
  });
}
