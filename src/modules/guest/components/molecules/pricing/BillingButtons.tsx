import { useTranslations } from "next-intl";
import React from "react";

interface BillingButtonsProps {
  billingCycle: "monthly" | "yearly";
  onBillingChange: (cycle: "monthly" | "yearly") => void;
}
function BillingButtons({
  billingCycle,
  onBillingChange,
}: BillingButtonsProps) {
  const t = useTranslations("publicPages.pricingPlans.billing");
  return (
    <div className="flex justify-center px-4">
      <div className="mt-[45px] inline-flex items-center rounded-full bg-white">
        <button
        onClick={() => onBillingChange("monthly")}
          type="button"
className={`rounded-full px-6 py-3 text-sm font-medium transition-all sm:px-8 ${
  billingCycle === "monthly"
    ? "ds-bg-primary text-white"
    : "text-gray-500 hover:text-black"
}`}        >
          {t("monthly")}
        </button>

        <button
        onClick={() => onBillingChange("yearly")}
          type="button"
className={`rounded-full px-6 py-3 text-sm font-medium transition-all sm:px-8 ${
  billingCycle === "yearly"
    ? "ds-bg-primary text-white"
    : "text-gray-500 hover:text-black"
}`}        >
          {t("yearly")}
        </button>
      </div>
    </div>
  );
}

export default BillingButtons;
