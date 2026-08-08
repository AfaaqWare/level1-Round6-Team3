import apiClient from "@/services/ApiClient";

export interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}

// NOTE: response shape not yet documented — the API wasn't reachable from the
// dev sandbox to confirm. Likely a success message and/or a token+user object.
// Revisit once the endpoint is reachable.
export interface RegisterResponse {
  message?: string;
  token?: string;
  [key: string]: unknown;
}

export const registerApi = (payload: RegisterPayload) => {
  return apiClient.post<RegisterResponse>("/auth/register", payload);
};
