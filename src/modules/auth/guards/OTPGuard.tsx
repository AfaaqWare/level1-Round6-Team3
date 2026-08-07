"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authGuardsDisabled } from "./authGuards";
export default function OTPGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (authGuardsDisabled) return;
    const email = sessionStorage.getItem("resetEmail");
    if (!email) router.replace("/forget-password");
  }, [router]);

  return <>{children}</>;
}
