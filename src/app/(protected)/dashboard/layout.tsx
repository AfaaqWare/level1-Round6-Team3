"use client";
import ProtectedRoute from "@/shared/guards/ProtectedRoute";
import DashboardLayout from "@/shared/components/templates/DashboardLayout";
import { ENV } from "@/config/env";
export default function DashboardProtectedLayout({ children }: { children: React.ReactNode }) {
  const disableGuard = ENV.DISABLE_DASHBOARD_PROTECTION;
  if (disableGuard) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }
  return (
    <ProtectedRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </ProtectedRoute>
  );
}
