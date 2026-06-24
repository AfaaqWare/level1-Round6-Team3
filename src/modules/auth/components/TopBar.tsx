"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Button from "@/shared/components/atoms/Button";
import { useTranslations } from "next-intl";
export default function TopBar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("topBar");
  const authPages = [`/${locale}/sign-in`, `/${locale}/sign-up`];
  const resetPages = [
    `/${locale}/forget-password`,
    `/${locale}/new-password`,
    `/${locale}/reset-password`,
    `/${locale}/otp`,
    `/${locale}/done`,
  ];

  return (
    <nav
      className={`ds-bg-alt fixed top-0 z-50 h-20 w-full py-5 shadow-md transition-all duration-300 ease-in-out dark:opacity-90`}
    >
      <div className="ds-container flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`}>logo</Link>

        {/* Conditional content */}
        {authPages.includes(pathname) && (
          <div className="flex flex-row items-center justify-between gap-2">
            <Link href={`/${locale}/sign-up`}>
              <p className="text-bg my-1 cursor-pointer">
                {t("item1")}
                <span className="text-bg"> {t("item2")}</span>
              </p>
            </Link>
          </div>
        )}

        {resetPages.includes(pathname) && (
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/sign-up`}>
              {" "}
              <Button variant="primary" size="md">
                {t("register")}
              </Button>
            </Link>
            <Link href={`/${locale}/sign-in`}>
              <Button variant="outline1" size="md">
                {" "}
                {t("login")}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
