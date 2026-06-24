import React from "react";
import PricingButton from "../../../components/atoms/Home/PricingButton";
import { cn } from "@/lib/cn";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { useTranslations } from "next-intl";
export interface PricingCardProps {
  plan?: string;
  price?: string;
  responses?: string;
  btn?: string;
}
const PricingCard = ({
  plan = "basic",
  price = "0",
  responses = "100",
  btn = "click",
}: PricingCardProps) => {
  const t = useTranslations("publicPages.home.plansSection.cards");
  // git each card data from translations according to their keys
  const Plan = t(plan) as "Basic" | "Plus" | "Business" | "الأساسية" | "بلس" | "الأعمال";
  const Price = t(price);
  const Responses = t(responses);
  const Btn = t(btn);
  // --------------------------//
  const baseClasses =
    "flex flex-col items-center justify-center gap-3 !p-3   ds-shadow-lg w-[224px]";
  const Cardvariants = {
    Basic: "ds-bg-card h-[310px] rounded-md",
    الأساسية: "ds-bg-card h-[310px] rounded-md ",
    Plus: "ds-primary-200 h-[350px] rounded-md ",
    بلس: "ds-primary-200 h-[350px] rounded-md",
    Business: "ds-bg-card h-[310px] rounded-md ",
    الأعمال: "ds-bg-card  h-[310px] rounded-md ",
  };

  const buttonVariants = {
    Basic: { variant: "primary200", size: "sm", },
    الأساسية: { variant: "primary200", size: "sm" },

    Plus: { variant: "primary", size: "sm" },
    بلس: { variant: "primary", size: "sm" },

    Business: { variant: "primary200", size: "sm" },
    الأعمال: { variant: "primary200", size: "sm" },
  } as const;

  return (
    <div className={cn(baseClasses, Cardvariants[Plan], "ds-shadow-card !p-6")}>
      <Title
        className="mb-3"
        variant={Plan === "Plus" || Plan === "بلس" ? "dark" : "primary"}
        size="lg"
      >
        {Plan}
      </Title>
      
        <Title size={Plan === "Basic" || Plan === "الأساسية" ? "md":"lg"} variant={Plan === "Plus" || Plan === "بلس" ? "disabled" : "secondary"}>
          {Price}  
        </Title>
        {Price === "50" || Price === "83" ?<Text variant={Plan === "Plus" || Plan === "بلس" ? "se" : "secondary"}>$ /month</Text> : ""}
      

      <Text variant={Plan === "Plus" || Plan === "بلس" ? "dark" : "secondary"}>
        {Responses} responses
      </Text>
      <PricingButton {...buttonVariants[Plan]} className="!mt-4">
        {Btn}
      </PricingButton>
    </div>
  );
};

export default PricingCard;
