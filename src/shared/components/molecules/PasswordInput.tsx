"use client";

import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import IconInput, { type IconInputProps } from "./IconInput";
import { Eye, EyeOff } from "@/assets/icons/icons";

export interface PasswordInputProps
  extends Omit<IconInputProps, "type" | "trailingAction"> {
  icon?: ReactNode;
}

export default function PasswordInput({ icon, ...rest }: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const t = useTranslations("auth.password");

  return (
    <IconInput
      icon={icon}
      type={show ? "text" : "password"}
      trailingAction={
        <button
          type="button"
          onClick={() => setShow((current) => !current)}
          aria-label={show ? t("hide") : t("show")}
          aria-pressed={show}
          className="flex items-center justify-center p-1 ds-text-disabled transition-colors duration-[var(--motion-fast)] hover:text-[var(--color-text-secondary)]"
        >
          {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      }
      {...rest}
    />
  );
}
