"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import type { AdminUser } from "@/modules/dashboard/types/AdminUser";
import { formatCreatedAt } from "@/modules/dashboard/utils/formatters";
import VerificationBadge from "./VerificationBadge";
import RoleSelect from "./RoleSelect";
import DeleteUserButton from "./DeleteUserButton";

interface Props {
  users: AdminUser[];
  firstRowNumber: number;
}

function getInitials(name: string): string {
  return (
    name
      ?.split(" ")
      .filter(Boolean)
      .map(word => word.charAt(0))
      .slice(0, 2)
      .join("")
      .toUpperCase() || "?"
  );
}

function UserAvatar({ user }: { user: AdminUser }) {
  if (user.image) {
    return (
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ds-bg-form">
        <Image src={user.image} alt={user.name} fill sizes="40px" className="object-cover" />
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full ds-bg-form ds-text-secondary ds-text-sm ds-font-bold">
      {getInitials(user.name)}
    </div>
  );
}

export default function UsersTable({ users, firstRowNumber }: Props) {
  const t = useTranslations("dashboard.users");
  const locale = useLocale();
  const router = useRouter();

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed border-collapse text-start">
        <thead>
          <tr className="bg-[#D0FCFE61] dark:ds-bg-alt ds-text-secondary ds-text-xs uppercase tracking-wide">
            <th className="w-[5%] px-6 py-4 text-start ds-font-bold">{t("columns.id")}</th>
            <th className="w-[28%] px-6 py-4 text-start ds-font-bold">{t("columns.user")}</th>
            <th className="w-[20%] px-6 py-4 text-start ds-font-bold">{t("columns.emailVerification")}</th>
            <th className="w-[14%] px-6 py-4 text-start ds-font-bold">{t("columns.role")}</th>
            <th className="w-[18%] px-6 py-4 text-start ds-font-bold">{t("columns.createdAt")}</th>
            <th className="w-[14%] px-6 py-4 text-end ds-font-bold">{t("columns.actions")}</th>
          </tr>
        </thead>
        <tbody className="divide-y ds-divide-color">
          {users.map((user, index) => (
            <tr
              key={user.id}
              className="ds-hover cursor-pointer"
              onClick={() => router.push(`/dashboard/users/${user.id}/edit-role`)}
            >
              <td className="relative px-6 py-4 ds-text-sm ds-text-secondary">
                {firstRowNumber + index}
                <span
                  aria-hidden
                  className="absolute end-0 top-1/2 h-[55px] w-px -translate-y-1/2 bg-[#EBEBEF]"
                />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <UserAvatar user={user} />
                  <div className="min-w-0">
                    <p className="ds-text-sm ds-text-primary ds-font-bold truncate">{user.name}</p>
                    <p className="ds-text-xs ds-text-secondary truncate">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="pl-6 py-4">
                <VerificationBadge verified={user.isEmailVerified} />
              </td>
              <td className="pl-6 py-4">
                <RoleSelect role={user.role} userId={user.id} />
              </td>
              <td className="pl-6 py-4 ds-text-sm ds-text-secondary whitespace-nowrap">
                {formatCreatedAt(user.createdAt, locale)}
              </td>
              <td className="px-6 py-4 text-end">
                <DeleteUserButton userName={user.name} userEmail={user.email} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
