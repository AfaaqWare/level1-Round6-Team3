import type { LucideIcon } from "lucide-react";
import Icon from "@/shared/components/atoms/Icon";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { cn } from "@/lib/cn";

type StatisticVariant = "primary" | "secondary";

type SurveyStatisticCardProps = {
  title: string;
  value: number;
  icon: LucideIcon;
  variant?: StatisticVariant;
  className?: string;
};

const variantClasses: Record<StatisticVariant, string> = {
  primary: "ds-text-alt",
  secondary: "!text-[#D28913]",
};

export default function SurveyStatisticCard({
  title,
  value,
  icon,
  variant = "primary",
  className,
}: SurveyStatisticCardProps) {
  return (
    <article
      className={cn(
        "ds-bg-card ds-rounded-xl flex items-center gap-2 px-1 py-2 md:gap-6 md:px-3 md:py-4",
        className
      )}
    >
      <Icon IconComponent={icon} size="sm" variant="alt" className={variantClasses[variant]} />

      <div className="space-y-2">
        <Title size="sm" className="">
          {title}
        </Title>

        <Text size="xs" className={cn(variantClasses[variant])}>
          {value}
        </Text>
      </div>
    </article>
  );
}
