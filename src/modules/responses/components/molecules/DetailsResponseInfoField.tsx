import type { ComponentType, SVGProps } from "react";
import React from "react";
import Text from "@/shared/components/atoms/Text";
import IconText from "@/modules/survey-response/components/molecules/IconText";
import Title from "@/shared/components/atoms/Title";

interface DetailsResponseInfoFieldProps {
  label: string;
  value: string;
  IconComponent: ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;
}

const DetailsResponseInfoField = ({
  label,
  value,
  IconComponent,
}: DetailsResponseInfoFieldProps) => {
  return (
    <div>
      <Title
        size="sm"
        className="!font-medium !text-[#7E8297] dark:!text-[var(--color-text-dash-secondary)]"
      >
        {label}
      </Title>

      <div className="ds-border-color mt-3 flex w-full items-center gap-2 rounded-md border px-3 py-2">
        <IconText iconSize="xs" iconVariant="disabled" IconComponent={IconComponent}>
          <Text variant="disabled" size="xs">
            {value}
          </Text>
        </IconText>
      </div>
    </div>
  );
};

export default DetailsResponseInfoField;
