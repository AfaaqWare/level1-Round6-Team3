"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/cn";

import Title from "@/shared/components/atoms/Title";
import Button from "@/shared/components/atoms/Button";

interface SectionHeaderProps {
  title: string;
  buttonLabel: string;
  href: string;
  className?: string;
}

export default function SectionHeader({ title, buttonLabel, href, className }: SectionHeaderProps) {
  const t = useTranslations("dashboard.home.sections");

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <Title size="sm" className="font-bold !text-[var(--color-text-dash-secondary)]">
        {t(title)}
      </Title>

      <Link href={href}>
        <Button
          variant="outline"
          className="ds-hover !border-[var(--border-color-card)] !text-[12px] font-semibold !text-[var(--color-text-dash)]"
        >
          {t(buttonLabel)}
        </Button>
      </Link>
    </div>
  );
}
