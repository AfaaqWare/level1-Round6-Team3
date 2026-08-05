import React from "react";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { cn } from "@/lib/cn";

interface QuestionBoxProps {
  title?: string;
  text?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export default function QuestionBox({
  title = "title",
  text = "text",
  className = "",
  children,
}: QuestionBoxProps) {
  return (
    <article
      className={cn(
        "ds-bg-card ds-border-sm ds-shadow-md ds-rounded-lg mx-auto my-[var(--space-lg)] flex h-auto w-full min-w-0 flex-col gap-[var(--space-xl)] px-[var(--space-md)] py-[var(--space-xl)] text-start dark:shadow-[0_var(--space-sm)_var(--space-sm)_color-mix(in_srgb,var(--color-text-primary)_6%,transparent)]",
        className
      )}
      style={{ borderColor: "var(--border-color-card)" }}
    >
      <Title variant="alt" size="md" className="font-medium">
        {title}
      </Title>

      <Text size="md" className="ds-text-faqcard font-normal">
        {text}
      </Text>

      {children}
    </article>
  );
}
