"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authGuardsDisabled } from "./authGuards";
import { TokenService } from "@/services/tokenService";

export default function OTPGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (authGuardsDisabled) return;

    const email = sessionStorage.getItem("resetEmail");
    if (!email) {
      router.replace(TokenService.getToken() ? "/" : "/sign-up");
    }
  }, [router]);

  return <>{children}</>;
}
