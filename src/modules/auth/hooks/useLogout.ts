import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { TokenService } from "@/services/tokenService";

export const useLogoutApi = () => {
  return useApiMutation<undefined, string>({
    mutationFn: async () => {
      TokenService.removeToken();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      return "Logged out successfully";
    },

    options: {
      onSuccess: () => {
        // success handling is managed by the caller
      },
    },
  });
};
