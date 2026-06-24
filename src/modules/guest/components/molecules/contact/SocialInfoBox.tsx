import React from "react";
import type { IconProps } from "@/shared/components/atoms/Icon";
import Icon from "@/shared/components/atoms/Icon";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { Send } from "lucide-react";

interface SocialInfoBoxProps {
  icon?: IconProps;
  title?: string;
  text?: string;
}
/**
 * Renders an icon inside a circular badge next to a title/text.
 *
 * The `icon` prop is forwarded to the <Icon /> atom via spread, so pass an
 * object matching one of Icon's two modes (you can also set `size`/`color`):
 *
 *   // Iconify, by string name — see https://icon-sets.iconify.design
 *   <SocialInfoBox icon={{ name: "mdi:email", color: "white" }} title="Email" text="hi@x.com" />
 *
 *   // Component icon (lucide-react / tabler) — pass the imported component
 *   import { Phone } from "lucide-react";
 *   <SocialInfoBox icon={{ IconComponent: Phone, size: 20 }} title="Phone" text="+966 ..." />
 *
 * Note: pass `name` OR `IconComponent`, never both (TypeScript enforces this).
 */
const SocialInfoBox = ({
  icon = { IconComponent: Send, color: "primary" },
  title = "title",
  text = "text",
}: SocialInfoBoxProps) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="ds-bg-alt flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
        <Icon {...icon} />
      </div>

      <div className="flex flex-col gap-1">
        <Title variant="primary" size="sm">
          {title}
        </Title>
        <Text variant="primary" size="sm">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default SocialInfoBox;
