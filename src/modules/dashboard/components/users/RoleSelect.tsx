"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "@/assets/icons/icons";
import { capitalizeRole } from "@/modules/dashboard/utils/formatters";

export const ROLE_OPTIONS = ["ADMIN", "USER"] as const;

interface Props {
  role: string;
  userId: string;
}

export default function RoleSelect({ role, userId }: Props) {
  const t = useTranslations("dashboard.users");
  const [value, setValue] = useState(role);

  const roleLabels: Record<string, string> = {
    ADMIN: t("roles.ADMIN"),
    USER: t("roles.USER"),
  };

  const options = ROLE_OPTIONS.some(option => option === role)
    ? ROLE_OPTIONS
    : [...ROLE_OPTIONS, role];

  const handleChange = (nextRole: string) => {
    setValue(nextRole);
    // TODO: Wire to the update-role endpoint once provided
    // (e.g. PATCH /auth/users/:id/role). For now only log the intended change.
    console.log(`[STUB] role change requested for user ${userId}: ${value} -> ${nextRole}`);
  };

  return (
    <div className="relative inline-flex items-center">
      <select
        value={value}
        onChange={event => handleChange(event.target.value)}
        aria-label={t("columns.role")}
        className="ds-bg-role ds-text-role cursor-pointer appearance-none ds-rounded-md ds-text-sm ds-font-bold ps-3 pe-8 py-1.5 outline-none focus:ds-focus"
      >
        {options.map(option => (
          <option key={option} value={option} className="ds-bg-card ds-text-primary">
            {roleLabels[option] ?? capitalizeRole(option)}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute top-1/2 end-2 -translate-y-1/2 ds-text-role"
      />
    </div>
  );
}
