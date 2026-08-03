import apiClient from "@/services/ApiClient";

// export interface ProfilePayload {
//     accessToken: string;
// }

export interface ProfileResponse {
  id: string;
  email: string;
  name: string;
  role: string;
  provider: string;
  image: string;
}

export const apiProfile = async (): Promise<ProfileResponse> => {
  return await apiClient.get<ProfileResponse>("/auth/profile");
};
