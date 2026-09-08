"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function ButtonLanguageMenu() {
  const locale = useLocale();
  const router = useRouter(); // هنا من next/navigation
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLang = locale === "en" ? "ar" : "en";
    router.push(`/${nextLang}${pathname}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-primary flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white transition hover:opacity-90"
      aria-label="Toggle language"
    >
      {locale === "en" ? "AR" : "EN"}
    </button>
  );
}
