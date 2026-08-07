"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authGuardsDisabled } from "./authGuards";
export default function DoneGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (authGuardsDisabled) return;
    const email = sessionStorage.getItem("resetEmail");
    const otpVerified = sessionStorage.getItem("otpVerified");

    if (!email || !otpVerified) {
      router.replace("/forget-password");
    }
  }, [router]);

  return <>{children}</>;
}
