import React from "react";
import { cn } from "@/lib/cn";

export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={cn(
        "ds-bg-card border border-[var(--border-color-card)] ds-rounded-xl ds-shadow-card p-8 md:p-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
