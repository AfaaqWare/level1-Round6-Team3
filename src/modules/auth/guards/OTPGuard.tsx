"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
export default function OTPGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const Locale = useLocale();
  useEffect(() => {
    const email = sessionStorage.getItem("resetEmail");
    if (!email) router.replace(`/${Locale}/forget-password`);
  }, [router, Locale]);

  return <>{children}</>;
}
