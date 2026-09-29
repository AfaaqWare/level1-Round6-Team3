import React from "react";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  titleSize?: React.ComponentProps<typeof Title>["size"];
  titleVariant?: React.ComponentProps<typeof Title>["variant"];
  subtitleSize?: React.ComponentProps<typeof Text>["size"];
  subtitleVariant?: React.ComponentProps<typeof Text>["variant"];
  children?: React.ReactNode;
}

const DashboardHeader = ({
  title,
  subtitle,
  titleSize = "md",
  titleVariant,
  subtitleSize = "base",
  subtitleVariant = "secondary",
  children,
}: DashboardHeaderProps) => {
  return (
    <section className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <Title size={titleSize} variant={titleVariant}>
          {title}
        </Title>

        {subtitle && (
          <Text variant={subtitleVariant} size={subtitleSize} className="mt-1">
            {subtitle}
          </Text>
        )}
      </div>

      {children && <div className="flex flex-wrap items-center gap-3">{children}</div>}
    </section>
  );
};

export default DashboardHeader;
