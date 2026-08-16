"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Swal from "sweetalert2";
import { trashIcon } from "@/assets/images/images";

interface Props {
  userName: string;
  userEmail: string;
}

export default function DeleteUserButton({ userName, userEmail }: Props) {
  const t = useTranslations("dashboard.users");

  const handleDelete = () => {
    void Swal.fire({
      title: t("delete.confirmTitle"),
      text: t("delete.confirmText", { name: userName, email: userEmail }),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t("delete.confirm"),
      cancelButtonText: t("delete.cancel"),
      confirmButtonColor: "var(--color-error)",
      cancelButtonColor: "var(--color-text-secondary)",
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        console.log(`DELETED ${userName} (${userEmail})`);
      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      aria-label={t("delete.aria")}
      title={t("delete.aria")}
      className="inline-flex h-9 cursor-pointer items-center gap-2 whitespace-nowrap ds-rounded-md ds-border-danger px-3 ds-text-danger ds-text-sm transition-colors hover:ds-bg-danger-soft focus:ds-focus"
    >
      <Image src={trashIcon} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
      <span>{t("delete.label")}</span>
    </button>
  );
}
