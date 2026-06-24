"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
export default function ResetGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const Locale = useLocale();
  useEffect(() => {
    const email = sessionStorage.getItem("resetEmail");
    const otpVerified = sessionStorage.getItem("otpVerified");

    if (!email) return router.replace(`/${Locale}/forget-password`);
    if (!otpVerified) return router.replace(`/${Locale}/otp`);
  }, [router, Locale]);

  return <>{children}</>;
}
