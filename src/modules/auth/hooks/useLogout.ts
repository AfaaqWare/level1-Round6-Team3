import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { TokenService } from "@/services/tokenService";
import { apiProfile } from "../api/apiProfile";

export const useLogoutApi = () => {
  return useApiMutation({
    mutationFn: apiProfile,

    options: {
      onSuccess: () => {
        TokenService.removeToken();

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
      },
    },
  });
};
