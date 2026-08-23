"use client";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import type { AuthResponse } from "@/modules/auth/types/auth";
import type { SignInFormData } from "@/validator/authValidation";
import { signIn } from "@/modules/auth/api/ApiSignIn";
import { SignInError } from "@/core/errors/SignInError";

export function useSignIn() {
  return useApiMutation<SignInFormData, AuthResponse, SignInError>({
    mutationFn: signIn,
  });
}
