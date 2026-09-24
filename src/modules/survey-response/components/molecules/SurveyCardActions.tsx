"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";
import { cn } from "@/lib/cn";
import { surveyCardActions } from "../../utils/data";

interface SurveyCardActionsProps {
  surveyId: string;
}

export default function SurveyCardActions({ surveyId }: SurveyCardActionsProps) {
  const t = useTranslations("dashboard.surveys.card");

  return (
    <div className="mt-2 flex w-full flex-wrap items-center gap-3 md:grid md:grid-cols-3">
      {surveyCardActions.map(action => {
        const isPrimary = action.variant === "primary";

        const iconProps = isPrimary ? { color: "#ffffff" } : { variant: "secondary" as const };

        const buttonClassName = cn(
          "w-full",
          action.muted && "!border-[var(--border-color)] !text-[var(--color-text-dash)]",
          isPrimary && "!text-white"
        );

        const buttonContent = (
          <>
            <Icon IconComponent={action.icon} size="xs" {...iconProps} className="!text-inherit shrink-0" />
            {t(action.labelKey)}
          </>
        );

        if (!action.href && action.hrefSuffix === undefined) {
          return (
            <Button
              key={action.id}
              variant={action.variant}
              size="sm"
              className={cn(buttonClassName, "flex-1")}
            >
              {buttonContent}
            </Button>
          );
        }

        const href = action.href
          ? action.href(surveyId)
          : `/dashboard/survey/${surveyId}${action.hrefSuffix}`;

        return (
          <Link key={action.id} href={href} className="flex-1">
            <Button variant={action.variant} size="sm" className={buttonClassName}>
              {buttonContent}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
