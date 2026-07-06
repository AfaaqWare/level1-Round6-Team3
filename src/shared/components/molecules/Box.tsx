import React from "react";
import { cn } from "@/lib/cn";

interface BoxProps {
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export default function Box({ children, size = "lg", className }: BoxProps) {
  const sizes = {
    md: "ds-px-5xl ds-py-2xl max-w-[320px] !shadow-none",
    lg: "ds-px-3xl ds-py-5xl max-w-[366px]",
  };

  return (
    <div className={cn("ds-bg-alt ds-rounded-md ds-shadow-lg", sizes[size], className)}>
      {children}
    </div>
  );
}
