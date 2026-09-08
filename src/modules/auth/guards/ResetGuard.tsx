"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authGuardsDisabled } from "./authGuards";
import { TokenService } from "@/services/tokenService";

export default function ResetGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (authGuardsDisabled) return;
    const email = sessionStorage.getItem("resetEmail");
    const otpVerified = sessionStorage.getItem("otpVerified");

    if (!email) return router.replace(TokenService.getToken() ? "/" : "/forget-password");
    if (!otpVerified) return router.replace("/otp-verify");
  }, [router]);

  return <>{children}</>;
}
