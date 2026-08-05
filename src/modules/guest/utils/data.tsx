import { leader5, leader6, leader7, leader8 } from "@/assets/images/images";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPinned } from "lucide-react";
import { Clock } from "lucide-react";
import type { IconProps } from "@/shared/components/atoms/Icon";

export const leadership = [
  { key: "card5", src: leader5 },
  { key: "card6", src: leader6 },
  { key: "card7", src: leader7 },
  { key: "card8", src: leader8 },
];
export const socials: { key: string; icon: IconProps }[] = [
  { key: "email", icon: { IconComponent: Mail, size: 24, color: "alt" } },
  { key: "phone", icon: { IconComponent: Phone, size: 24, color: "alt" } },
  { key: "location", icon: { IconComponent: MapPinned, size: 24, color: "alt" } },
  { key: "hours", icon: { IconComponent: Clock, size: 24, color: "alt" } },
];
// data.ts

export const steps = [
  {
    id: 1,
    titleKey: "StepCard1.title",
    textKey: "StepCard1.description",
  },
  {
    id: 2,
    titleKey: "StepCard2.title",
    textKey: "StepCard2.description",
  },
  {
    id: 3,
    titleKey: "StepCard3.title",
    textKey: "StepCard3.description",
  },
];
