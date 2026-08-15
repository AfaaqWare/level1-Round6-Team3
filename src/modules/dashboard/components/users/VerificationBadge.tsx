"use client";

import { useTranslations } from "next-intl";
import { Check, X } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";

interface Props {
  verified: boolean;
}

export default function VerificationBadge({ verified }: Props) {
  const t = useTranslations("users");

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 ds-rounded-md px-2 py-1 ds-text-xs ds-font-bold",
        verified ? "ds-bg-success ds-text-success" : "ds-bg-danger-soft ds-text-danger"
      )}
    >
      {verified ? <Check size={14} /> : <X size={14} />}
      {verified ? t("verified") : t("notVerified")}
    </span>
  );
}
