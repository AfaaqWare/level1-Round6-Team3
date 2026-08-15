import { useGetUsers } from "./useGetUsers";

export function useGetUserById(userId: string) {
  const usersQuery = useGetUsers();
  const user = usersQuery.data?.find(currentUser => currentUser.id === userId);

  return {
    ...usersQuery,
    data: user,
  };
}
