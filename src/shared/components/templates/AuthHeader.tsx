"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Logo from "@/shared/components/atoms/Logo";
import { authSheetRoutes } from "@/shared/utils/routes";

interface Props {
  showCta?: boolean;
}

export default function AuthHeader({ showCta = true }: Props) {
  const pathname = usePathname();
  const t = useTranslations("auth.header");
  const route = authSheetRoutes.find((route) => route.path === pathname);
  const isSignUp = route?.i18nKey === "signUp";
  const ctaHref = isSignUp
    ? authSheetRoutes.find((route) => route.i18nKey === "signIn")?.path
    : authSheetRoutes.find((route) => route.i18nKey === "signUp")?.path;

  return (
    <header className="ds-bg-alt h-20 w-full shrink-0 border-b border-[var(--border-color-card)]">
      <div className="ds-container flex h-full items-center justify-between">
        <Logo />
        {showCta && ctaHref && (
          <p className="ds-text-sm hidden md:block ds-text-secondary">
            {t(isSignUp ? "signUp.prefix" : "signIn.prefix")}{" "}
            <Link href={ctaHref} className="ds-text-alt font-bold">
              {t(isSignUp ? "signUp.apply" : "signIn.apply")}
            </Link>
          </p>
        )}
      </div>
    </header>
  );
}
