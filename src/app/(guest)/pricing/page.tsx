import React from "react";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
import PricingCard2 from "@/modules/guest/components/molecules/pricing/PricingCard2";

export default function page() {
  return (
    <PublicLayout>
      <div className="ds-container mt-40 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PricingCard2
          title="Basic"
          description="Create interactive forms that connect to your workflow"
          price={25}
          features={["100 responses", "1 user", "Unlimited surveyland", "Unlimited questions"]}
        ></PricingCard2>

        <PricingCard2
          title="Plus"
          description="Make your forms more beautiful and on-brand"
          price={50}
          features={["1,000 responses", "3 user", "Everything in Basic", "Drop-off rates"]}
        ></PricingCard2>

        <PricingCard2
          title="Business"
          description="Analyze performance and do more with your data"
          price={83}
          features={["10,000 responses", "5 user", "Everything in Plus", "Conversion tracking"]}
        ></PricingCard2>
      </div>
    </PublicLayout>
  );
}
