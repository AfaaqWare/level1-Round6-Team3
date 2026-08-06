import React from 'react'
import { useTranslations } from "next-intl";


function PricingParagraph() {
    const t = useTranslations("publicPages.pricingPlans");
  
  return (

   <p className='text-center'>{t("text")}</p>
  )
}

export default PricingParagraph
