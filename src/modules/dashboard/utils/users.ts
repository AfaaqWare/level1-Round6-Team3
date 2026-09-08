export interface DashboardUser {
  id: string;
  name: string;
  email: string;
  role: string;
  image: string | null;
}

export const dashboardUsersQueryKey = ["users", "all"] as const;

export function mapDashboardUser(user: DashboardUser): DashboardUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    image: user.image,
  };
}
