"use client";

import { ChevronDown, LogOut, User, LayoutDashboard } from "@/assets/icons/icons";
import { leader7 } from "@/assets/images/images";

import Icon from "../Icon";
import Image from "../Image";
import Text from "../Text";

import Link from "next/link";

import { useLogoutHandler } from "@/modules/auth/hooks/useLogoutHandler";
import useGetProfile from "@/modules/auth/hooks/useGetProfile";

export default function DropdownProfile() {
  const { handleLogout, isPending } = useLogoutHandler();
  const { data, isLoading } = useGetProfile();

  const imag = data?.image || leader7;
  const alt = data?.name || "User";
  return (
    <div className="group relative">
      <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
        <Image src={imag} alt={alt} width={40} height={40} className="rounded-full" />

        <Text className="font-semibold">{isLoading ? "Loading..." : data?.name}</Text>

        <Icon
          IconComponent={ChevronDown}
          size={22}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      </div>

      <div className="ds-bg invisible absolute right-0 z-50 mt-2 w-52 translate-y-2 rounded-xl border border-gray-200 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-gray-700">
        <Link
          href="/edit-profile"
          className="flex w-full gap-2 px-4 py-3 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Icon IconComponent={User} size={20} />
          Profile
        </Link>

        <Link
          href="/dashboard"
          className="flex w-full gap-2 px-4 py-3 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Icon IconComponent={LayoutDashboard} size={20} />
          Dashboard
        </Link>

        <button
          onClick={handleLogout}
          disabled={isPending}
          className="flex w-full gap-2 px-4 py-3 text-left text-red-500 transition-colors hover:bg-red-50 disabled:opacity-50 dark:hover:bg-red-900/30"
        >
          <Icon IconComponent={LogOut} size={20} />
          {isPending ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
}
