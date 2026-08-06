import type { ComponentType, ReactNode, SVGProps } from "react";

import Icon from "@/shared/components/atoms/Icon";

type IconTextProps = {
  children: ReactNode;
  IconComponent: ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;
  className?: string;
  iconVariant?: "primary" | "secondary" | "alt" | "disabled" | "white";
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl" | number;
};

export default function IconText({
  children,
  IconComponent,
  className = "",
  iconVariant = "alt",
  iconSize = "sm",
}: IconTextProps) {
  return (
    <div className={`flex min-w-0 items-center gap-1.5 sm:gap-2 ${className}`}>
      <Icon IconComponent={IconComponent} variant={iconVariant} size={iconSize} />

      <span className="min-w-0 truncate sm:whitespace-normal">{children}</span>
    </div>
  );
}
