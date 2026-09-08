"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Check } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";
import { useResetFlow } from "../guards/useResetFlow";

export default function FormDone() {
  const t = useTranslations("auth.done");
  const { cleanup } = useResetFlow();

  useEffect(() => {
    return () => {
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="ds-bg-card ds-shadow-card ds-rounded-xl flex flex-col items-center px-8 py-14 w-full max-w-2xl">
        {/* Success checkmark circle */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d1f5e0] mb-5">
          <Check className="h-8 w-8 text-[#22c55e]" strokeWidth={3} />
        </div>

        <h1 className="ds-title-md ds-text-primary font-bold text-center mb-3 uppercase tracking-wide">
          {t("title")}
        </h1>

        <p className="ds-text-sm ds-text-secondary text-center mb-8 max-w-sm">
          {t("description")}
        </p>

        <Link href="/sign-in">
          <Button variant="primary" size="md">
            {t("submit")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

