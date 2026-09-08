"use client";
import React from "react";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
import PricingCard2 from "@/modules/guest/components/molecules/pricing/PricingCard2";
import PricingHeader from "@/modules/guest/components/molecules/pricing/PricingHeader";
import PricingParagraph from "@/modules/guest/components/molecules/pricing/PricingParagraph";
import { useTranslations } from "next-intl";
import BillingButtons from "@/modules/guest/components/molecules/pricing/BillingButtons";

interface PricingCardData {
  id: string;
  title: string;
  description: string;
  monthly: PricingPeriod;
  yearly: PricingPeriod;
  featuresTitle: string;
  features: string[];
  button: string;
  highlighted: boolean;
}

interface PricingPeriod {
  price: string;
  period: string;
}

export default function Page() {
  const t = useTranslations("publicPages.pricingPlans");
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("monthly");
  const cards = t.raw("cards") as PricingCardData[];
  return (
    <PublicLayout>
      <div className="pt-[69px]">
        <PricingHeader />
        <PricingParagraph />

        <BillingButtons billingCycle={billingCycle} onBillingChange={setBillingCycle} />

        <div className="ds-container mt-40 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(card => (
            <PricingCard2
              key={card.id}
              title={card.title}
              description={card.description}
              price={card[billingCycle].price}
              period={card[billingCycle].period}
              featuresTitle={card.featuresTitle}
              features={card.features}
              buttonText={card.button}
              highlighted={card.highlighted}
            />
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
