"use client";
import React from 'react'
import Heading from '../../molecules/Home/Heading'
import PricingCard from '../../molecules/Home/PricingCard'
import Button from '@/shared/components/atoms/Button'
import { useTranslations } from 'next-intl'
import {homaPlans} from '@/shared/utils/data'

export default function Plans() {
  const t =useTranslations("publicPages.home.plansSection")
  return (
    <div className='ds-container !mt-20 !mx-auto flex flex-col gap-10 justify-center items-center'>
        <Heading title={t("title")} text={t("text")} highlightText={""} />
        {/* plan cards container  */}
        <div className='flex flex-col md:flex-row gap-8 justify-center !mx-auto items-center'>
        { homaPlans.map((plan)=><PricingCard key={plan.plan} {...plan} />)}
       </div>
       {/* --------------------- */}
        <Button size="md" >{t('btn')}</Button>

    </div>
  )
}
