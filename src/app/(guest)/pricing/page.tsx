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
  price: string;
  period: string;
  featuresTitle: string;
  features: string[];
  button: string;
  highlighted: boolean;
}
export default function Page() {
  const t = useTranslations("publicPages.pricingPlans");
  const cards = t.raw("cards") as PricingCardData[];
  return (
    <PublicLayout>
      <div className="pt-[69px]">
      <PricingHeader />
      <PricingParagraph />

<BillingButtons />
  
      <div className="ds-container mt-40 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <PricingCard2
            key={card.id}
            title={card.title}
            description={card.description}
            price={card.price}
            period={card.period}
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
