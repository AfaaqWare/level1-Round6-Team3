"use client";

import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { apiUpdateProfile } from "../api/apiUpdateProfile";
import { useQueryClient } from "@tanstack/react-query";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useApiMutation<FormData, unknown>({
    mutationFn: apiUpdateProfile,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["profile"] });
        queryClient.invalidateQueries({ queryKey: ["profileData"] });
      },
    },
  });
}
