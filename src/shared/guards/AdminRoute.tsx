"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ENV } from "@/config/env";
import useGetProfile from "@/modules/auth/hooks/useGetProfile";

const ADMIN_ROLE = "ADMIN";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data, isLoading, isError } = useGetProfile();

  const isAdmin = data?.role === ADMIN_ROLE;

  useEffect(() => {
    if (ENV.DISABLE_DASHBOARD_PROTECTION) return;
    if (isLoading) return;

    if (isError) {
      // Profile failed to load (e.g. expired/invalid token) - back to sign-in.
      router.replace("/sign-in");
      return;
    }

    if (!isAdmin) {
      // Logged in but not an admin - send to the regular dashboard, not home.
      router.replace("/dashboard");
    }
  }, [isLoading, isError, isAdmin, router]);

  if (isLoading || isError || !isAdmin) return null;

  return <>{children}</>;
}
