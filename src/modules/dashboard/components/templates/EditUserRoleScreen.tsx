type EditUserRoleScreenProps = {
  userId: string;
};

export default function EditUserRoleScreen({ userId }: EditUserRoleScreenProps) {
  return (
    <main className="w-full">
      <div className="ds-container mx-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400">Edit user role route is ready.</p>
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">User ID: {userId}</p>
      </div>
    </main>
  );
}
