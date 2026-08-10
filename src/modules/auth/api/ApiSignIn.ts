import { SignInFormData } from "@/validator/authValidation";
import axios from "axios";
import { AuthResponse } from "../types/auth";
import apiClient from "@/services/ApiClient";
import { SignInError } from "@/core/errors/SignInError";

export async function signIn(data: SignInFormData) {
  try {
    const response = await apiClient.post<AuthResponse>("/auth/login", data);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new SignInError("Login failed", error.response?.status, error.response?.data?.message);
    }

    throw error;
  }
}
