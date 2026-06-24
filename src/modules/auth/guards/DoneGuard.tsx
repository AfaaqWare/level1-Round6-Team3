"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
export default function DoneGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const Locale = useLocale();
  useEffect(() => {
    const email = sessionStorage.getItem("resetEmail");
    const otpVerified = sessionStorage.getItem("otpVerified");

    if (!email || !otpVerified) {
      router.replace(`/${Locale}/forget-password`);
    }
  }, [router, Locale]);

  return <>{children}</>;
}
