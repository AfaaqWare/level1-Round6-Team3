"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ChartNoAxesCombined, ClipboardList, Send, Users } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";
import Icon from "@/shared/components/atoms/Icon";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { theme } from "../../utils/data";

type StatsCardVariant = "teal" | "orange" | "green" | "purple" | "blue";

type StatsIcon = "clipboard" | "send" | "chart" | "users";

interface StatsCardProps {
  icon: StatsIcon;
  title: string;
  value?: React.ReactNode;
  description?: React.ReactNode;
  variant?: StatsCardVariant;
  className?: string;
}

const icons = {
  clipboard: ClipboardList,
  send: Send,
  chart: ChartNoAxesCombined,
  users: Users,
};

export default function StatsCard({
  icon,
  title,
  value,
  description,
  variant = "teal",
  className,
}: StatsCardProps) {
  const t = useTranslations("dashboard.home.stats");
  const colors = theme[variant];

  return (
    <article className={cn("ds-bg-card ds-rounded-sm ds-p-lg", "flex w-full flex-col", className)}>
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex h-10 w-9 shrink-0 items-center justify-center",
            "ds-rounded-sm",
            colors.background
          )}
        >
          <Icon IconComponent={icons[icon]} variant={colors.icon} size="sm" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <Title variant="secondary" className="!text-xs !font-semibold sm:text-nowrap">
            {t(title)}
          </Title>

          {value !== undefined && (
            <Text size="md" className="font-semibold !text-[var(--color-text-dash)]">
              {value}
            </Text>
          )}
        </div>
      </div>

      {description && (
        <Text size="xs" variant={colors.description} className="mt-3" isCenter>
          {description}
        </Text>
      )}
    </article>
  );
}
