"use client";

import { useState } from "react";
import { Eye, EyeOff } from "@/assets/icons/icons";

import Input, { InputProps } from "@/shared/components/atoms/Input";
import Button from "@/shared/components/atoms/Button";

type PasswordFieldProps = Omit<InputProps, "type" | "rightAddon">;

export default function PasswordField(props: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      {...props}
      type={showPassword ? "text" : "password"}
      rightAddon={
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="!text-[var(--color-text-disabled)] !shadow-none focus:!shadow-none focus:outline-none focus-visible:!shadow-none"
          onClick={() => setShowPassword(prev => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
        </Button>
      }
    />
  );
}
