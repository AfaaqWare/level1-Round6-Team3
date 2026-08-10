"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import AuthLayout from "@/shared/components/templates/AuthLayout";
import { authSheetRoutes } from "@/shared/utils/routes";

export default function AuthGroupLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // Put the translations for your task's strings in src/messages/en.json and src/messages/ar.json.
  const t = useTranslations("auth.sheets");
  const route = authSheetRoutes.find((route) => route.path === pathname);
  const sheet =
    route?.i18nKey && route?.ctaPath
      ? {
          title: t(`${route.i18nKey}.title`),
          subtitle: t(`${route.i18nKey}.subtitle`),
          ctaLabel: t(`${route.i18nKey}.cta`),
          ctaHref: route.ctaPath,
        }
      : undefined;

  return (
    <AuthLayout
      sheetFirst={route?.sheetFirst}
      sheet={sheet}
      showHeaderCta={Boolean(route?.i18nKey)}
    >
      {children}
    </AuthLayout>
  );
}
