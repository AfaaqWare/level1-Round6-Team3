import React from "react";
import { cn } from "@/lib/cn";
import { Icon as IconifyIcon } from "@iconify/react";

export interface BaseIconProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  variant?: "primary" | "secondary" | "alt" | "disabled" | "white";
  color?: "primary" | "secondary" | "alt" | "disabled" | "white" | string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export interface StringIconProps extends BaseIconProps {
  name: string;
  IconComponent?: never;
}

export interface ComponentIconProps extends BaseIconProps {
  name?: never;
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string }>;
}

export type IconProps = StringIconProps | ComponentIconProps;

const sizeMap: Record<string, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};

const variants: Record<string, string> = {
  primary: "ds-text-primary",
  secondary: "ds-text-secondary",
  alt: "ds-text-alt",
  disabled: "ds-text-disabled",
  white: "ds-text-white",
};

export default function Icon({
  name,
  IconComponent,
  size = "md",
  variant,
  color,
  className = "",
  onClick,
  style,
}: IconProps) {
  if (process.env.NODE_ENV !== "production" && color && variant) {
    console.warn(
      "[Icon] Both `color` and `variant` were supplied. `color` takes priority; `variant` is ignored."
    );
  }

  const resolvedSize = typeof size === "number" ? size : (sizeMap[size] ?? 24);

  const resolvedColor = color || variant || "primary";
  const isVariantKey = resolvedColor in variants;
  const variantClass = isVariantKey ? variants[resolvedColor] : "";
  const customColorStyle = !isVariantKey && resolvedColor ? { color: resolvedColor } : {};

  const combinedStyle: React.CSSProperties = {
    ...customColorStyle,
    ...style,
  };

  const commonProps = {
    className: cn(variantClass, onClick ? "ds-hover cursor-pointer" : "", className),
    onClick,
    style: combinedStyle,
  };

  if (IconComponent) {
    return <IconComponent width={resolvedSize} height={resolvedSize} {...commonProps} />;
  }

  return (
    <IconifyIcon icon={name || ""} width={resolvedSize} height={resolvedSize} {...commonProps} />
  );
}
