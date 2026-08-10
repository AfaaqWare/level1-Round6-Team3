import React from "react";
import { cn } from "@/lib/cn";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import SocialButtons from "./SocialButtons";

interface AuthHeaderProps {
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export default function FormHeader({ title, description, className }: AuthHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-[var(--space-4xl)]", className)}>
      <Title variant="alt" isCenter>
        {title}
      </Title>
      <div>
        <SocialButtons />
      </div>

      <Text variant="secondary" isCenter>
        {description}
      </Text>
    </div>
  );
}
