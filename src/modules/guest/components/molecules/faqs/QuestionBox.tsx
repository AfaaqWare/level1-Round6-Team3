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
    <div
      className={cn(
        "ds-bg-card ds-shadow-card ds-border-card ds-rounded-xl !mx-auto !my-5 flex flex-col gap-2 !px-4 !pt-4 !pb-8",
        className
      )}
    >
      <Title variant="alt" size="md" className="ds-text-heading font-medium">
        {title}
      </Title>

      <Text size="base" className="ds-text-faqcard ds-text-heading font-normal">
        {text}
      </Text>

      {children}
    </div>
  );
}
