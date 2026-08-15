import apiClient from "@/services/ApiClient";
import type { AdminUser } from "../types/user";

interface AdminUserRaw extends Omit<AdminUser, "image"> {
  password: string;
  image?: string | null;
}

export const getUsersApi = async (): Promise<AdminUser[]> => {
  const users = await apiClient.get<AdminUserRaw[]>("/auth/users");

  // Strip the `password` hash before it ever reaches component state.
  return users.map(user => {
    const { password, ...safeUser } = user;
    void password;
    return { ...safeUser, image: safeUser.image ?? null };
  });
};
