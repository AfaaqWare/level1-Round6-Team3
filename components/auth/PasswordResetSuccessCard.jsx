"use client";

import React from "react";
import { CircleCheckBig } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function PasswordResetSuccessCard() {
  const router = useRouter();
  const t = useTranslations("auth");

  const handleReturn = () => {
    // TODO:
    // Integrate navigation to /login here.
    router.push("/sign-in");
  };

  return (
    <Card className="w-full mx-auto flex flex-col items-center justify-center text-center py-12 px-8 md:px-16">
      {/* Success Icon — mint-green circle with darker green check */}
      <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#c4f0e0] dark:bg-[#1a3a2e]">
        <CircleCheckBig
          className="h-9 w-9 text-[#2ecc71] dark:text-[#4ade80]"
          strokeWidth={2.5}
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-extrabold ds-text-primary mb-3 tracking-wide uppercase">
        {t("done.title")}
      </h2>

      {/* Description */}
      <p className="ds-text-secondary ds-text-sm mb-8 max-w-[320px] leading-relaxed">
        {t("done.description")}
      </p>

      {/* Return Button */}
      <Button
        onClick={handleReturn}
        className="px-10 py-3 font-semibold h-[46px] ds-rounded-md text-sm"
      >
        {t("done.submit")}
      </Button>
    </Card>
  );
}
