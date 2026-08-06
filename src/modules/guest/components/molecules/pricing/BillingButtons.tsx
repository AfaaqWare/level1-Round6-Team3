import { useTranslations } from 'next-intl';
import React from 'react'

function BillingButtons() {
  const t = useTranslations("publicPages.pricingPlans.billing");
  return (
         <div className="flex justify-center px-4">
      <div className="inline-flex items-center rounded-full bg-white mt-[45px]">
        <button
          type="button"
          className="ds-bg-primary rounded-full px-6 py-3 text-sm font-medium text-white transition-all sm:px-8"
        >
          {t("monthly")}
        </button>

        <button
          type="button"
          className="rounded-full px-6 py-3 text-sm font-medium text-gray-500 transition-all hover:text-black sm:px-8"
        >
          {t("yearly")}
        </button>
      </div>
    </div>
  )
}

export default BillingButtons
