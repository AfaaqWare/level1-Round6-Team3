import apiClient from "@/services/ApiClient";

export const apiUpdateProfile = async (data: FormData) => {
  return await apiClient.patch("/auth/profile", data);
};
