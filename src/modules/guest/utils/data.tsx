import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPinned } from "lucide-react";
import { Clock } from "lucide-react";
import type { IconProps } from "@/shared/components/atoms/Icon";
import { aboutcard5, aboutcard6, aboutcard7, aboutcard8 } from "@/assets/images/images";

export const socials: { key: string; icon: IconProps }[] = [
  { key: "email", icon: { IconComponent: Mail, size: 24, color: "alt" } },
  { key: "phone", icon: { IconComponent: Phone, size: 24, color: "alt" } },
  { key: "location", icon: { IconComponent: MapPinned, size: 24, color: "alt" } },
  { key: "hours", icon: { IconComponent: Clock, size: 24, color: "alt" } },
];

export const steps = [
  {
    id: 1,
    titleKey: "StepCard1.title",
    descriptionKey: "StepCard1.description",
  },
  {
    id: 2,
    titleKey: "StepCard2.title",
    descriptionKey: "StepCard2.description",
  },
  {
    id: 3,
    titleKey: "StepCard3.title",
    descriptionKey: "StepCard3.description",
  }
]

export const leadership = [
  { key: "card5", src: aboutcard5 },
  { key: "card6", src: aboutcard6 },
  { key: "card7", src: aboutcard7 },
  { key: "card8", src: aboutcard8 },
];

export interface PricingPlan {
  id: string;
  name: string;
  price: string | null;
  responses: string;
  cta: string;
  featured: boolean;
  href: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "plans.basic.name",
    price: null,
    responses: "plans.basic.responses",
    cta: "plans.basic.cta",
    featured: false,
    href: "/pricing",
  },
  {
    id: "plus",
    name: "plans.plus.name",
    price: "$50",
    responses: "plans.plus.responses",
    cta: "plans.plus.cta",
    featured: true,
    href: "/pricing",
  },
  {
    id: "business",
    name: "plans.business.name",
    price: "$83",
    responses: "plans.business.responses",
    cta: "plans.business.cta",
    featured: false,
    href: "/pricing",
  },
];
