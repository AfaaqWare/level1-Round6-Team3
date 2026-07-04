"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";

interface Props {
  size?: "sm" | "base" | "md";
  variant?: "primary" | "secondary";
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isBold?: boolean;
  isNav?: boolean;
}

const LinkAtom = ({
  to,
  children,
  size = "base",
  variant = "primary",
  className = "",
  isBold = false,
  onClick,
  isNav = false,
}: Props) => {
  const pathname = usePathname();

  const sizes = {
    sm: "ds-text-sm",
    base: "ds-text-base",
    md: "ds-text-md",
  };

  const variants = {
    primary: "ds-text-primary",
    secondary: "ds-text-secondary",
  };

  const baseStyles = " capitalize transition-all duration-300 transform hover:opacity-60";

  const navStyles = cn(
    "hover:!text-[#00b7c1] hover:scale-105 hover:-translate-y-1 active:scale-95",
    pathname === to && "!text-[#00b7c1]"
  );
  return (
    <Link
      href={to}
      className={cn(
        sizes[size],
        variants[variant],
        isBold ? "ds-font-bold" : "",
        isNav && navStyles,
        baseStyles,
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default LinkAtom;
