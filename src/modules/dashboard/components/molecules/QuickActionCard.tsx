"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Plus, Users, PieChart, Download } from "@/assets/icons/icons";

import { cn } from "@/lib/cn";
import Icon from "@/shared/components/atoms/Icon";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { Card } from "@/shared/components/atoms/Card";

type QuickActionVariant = "teal" | "green" | "purple" | "blue";

type QuickActionIcon = "plus" | "users" | "pieChart" | "download";

interface QuickActionCardProps {
  icon: QuickActionIcon;
  name: string;
  href: string;
  variant?: QuickActionVariant;
  className?: string;
}

const icons = {
  plus: Plus,
  users: Users,
  pieChart: PieChart,
  download: Download,
};

const theme = {
  teal: {
    card: "bg-[color-mix(in_srgb,var(--color-stats-teal)_var(--quick-action-bg-opacity),transparent)]",
    icon: "teal",
  },
  green: {
    card: "bg-[color-mix(in_srgb,var(--color-stats-green)_var(--quick-action-bg-opacity),transparent)]",
    icon: "green",
  },
  purple: {
    card: "bg-[color-mix(in_srgb,var(--color-stats-purple)_var(--quick-action-bg-opacity),transparent)]",
    icon: "purple",
  },
  blue: {
    card: "bg-[color-mix(in_srgb,var(--color-stats-blue)_var(--quick-action-bg-opacity),transparent)]",
    icon: "blue",
  },
} satisfies Record<
  QuickActionVariant,
  {
    card: string;
    icon: "teal" | "green" | "purple" | "blue";
  }
>;

export default function QuickActionCard({
  icon,
  name,
  href,
  variant = "teal",
  className,
}: QuickActionCardProps) {
  const t = useTranslations("dashboard.quickActions");
  const colors = theme[variant];

  return (
    <Link href={href} className="block w-full">
      <Card
        className={cn(
          colors.card,
          "!border-0 !shadow-none",
          "flex min-h-[116px] w-full flex-row items-center !gap-5",
          "ds-rounded-2xl p-5",
          "transition-opacity duration-150 hover:opacity-80",
          className
        )}
      >
        <Icon IconComponent={icons[icon]} size="sm" withBackground variant={colors.icon} />

        <div className="flex min-w-0 flex-col gap-2">
          <Title className="!text-base !font-bold !text-[var(--color-text-dash-secondary)] sm:!text-sm">
            {t(`${name}.title`)}
          </Title>

          <Text variant="disabled" className="!text-xs font-semibold sm:!text-[.75rem]">
            {t(`${name}.description`)}
          </Text>
        </div>
      </Card>
    </Link>
  );
}
