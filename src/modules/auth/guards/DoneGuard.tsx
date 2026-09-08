"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authGuardsDisabled } from "./authGuards";
import { TokenService } from "@/services/tokenService";

export default function DoneGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (authGuardsDisabled) return;
    const email = sessionStorage.getItem("resetEmail");
    const otpVerified = sessionStorage.getItem("otpVerified");

    if (!email || !otpVerified) {
      router.replace(TokenService.getToken() ? "/" : "/forget-password");
    }
  }, [router]);

  return <>{children}</>;
}
