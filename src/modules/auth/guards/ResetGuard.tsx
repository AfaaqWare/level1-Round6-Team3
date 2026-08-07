"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function ResetGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const email = sessionStorage.getItem("resetEmail");
    const otpVerified = sessionStorage.getItem("otpVerified");

    if (!email) return router.replace("/forget-password");
    if (!otpVerified) return router.replace("/otp");
  }, [router]);

  return <>{children}</>;
}
