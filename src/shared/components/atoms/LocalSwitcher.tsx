// app/components/LocaleSwitcher.tsx
"use client";
import { useEffect } from "react";
import { Locale, useLocale } from "next-intl";
import { cn } from "@/lib/cn";

type Props = {
  changeLocaleAction: (locale: Locale) => Promise<void>;
};

export default function LocaleSwitcher({ changeLocaleAction }: Props) {
  const locale = useLocale();
  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  const nextLocale = locale === "en" ? "ar" : "en";
  const baseClasses = `
    fixed
    bottom-4
    left-8
    w-14
    h-14
    rounded-full
    ds-bg-primary
    text-white
    flex
    items-center
    justify-center
    text-md
    shadow-xl
    hover:scale-105
    transition
    cursor-pointer
    z-50
  `;
  return (
    <button onClick={() => changeLocaleAction(nextLocale)} className={cn(baseClasses)}>
      {locale === "en" ? "AR" : "EN"}
    </button>
  );
}
