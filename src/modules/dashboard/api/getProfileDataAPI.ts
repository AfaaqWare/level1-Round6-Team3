import apiClient from "@/services/ApiClient";

export interface ProfileDataResponse {
  email: string;
  id: string;
  image: string;
  name: string;
  provider: string;
  role: string;
}


export const profileDataApi=()=>{
return apiClient.get<ProfileDataResponse>("/auth/profile")
}