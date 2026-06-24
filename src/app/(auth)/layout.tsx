"use client";

import AuthLayout from "@/shared/components/templates/AuthLayout";

export default function AuthGroupLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
