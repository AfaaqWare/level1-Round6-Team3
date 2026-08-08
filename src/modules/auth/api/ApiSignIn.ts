import apiClient from "@/services/ApiClient";
import { SignInFormData } from "@/validator/authValidation";
import { AuthResponse } from "@/modules/auth/types/auth";
export const signIn = (data: SignInFormData) => apiClient.post<AuthResponse>("/auth/login", data);
