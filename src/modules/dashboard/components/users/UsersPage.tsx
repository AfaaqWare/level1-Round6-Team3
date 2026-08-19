"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { User } from "@/assets/icons/icons";
import { useGetUsers } from "@/modules/dashboard/hooks/useGetUsers";
import UsersTable from "./UsersTable";
import UsersPagination from "./UsersPagination";

const PAGE_SIZE = 5;

function TableSkeleton() {
  const rows = Array.from({ length: PAGE_SIZE });

  return (
    <div className="space-y-5 p-6" role="status" aria-label="Loading users">
      {rows.map((_, i) => (
        <div key={i} className="flex animate-pulse items-center gap-4">
          <div className="h-10 w-10 rounded-full ds-bg-form" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-1/3 rounded ds-bg-form" />
            <div className="h-3 w-1/4 rounded ds-bg-form" />
          </div>
          <div className="h-6 w-24 rounded-full ds-bg-form" />
          <div className="h-6 w-20 rounded-md ds-bg-form" />
          <div className="h-6 w-24 rounded ds-bg-form" />
          <div className="h-8 w-8 rounded-md ds-bg-form" />
        </div>
      ))}
    </div>
  );
}

export default function UsersPage() {
  const t = useTranslations("dashboard.users");
  const { data, isLoading, isError, refetch } = useGetUsers();
  const [page, setPage] = useState(1);

  const total = data?.length ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = total === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const end = Math.min(safePage * PAGE_SIZE, total);
  const pageUsers = data?.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE) ?? [];

  const handlePageChange = (nextPage: number) => {
    setPage(Math.max(1, Math.min(nextPage, totalPages)));
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="ds-title-md ds-font-heading ds-text-primary">{t("title")}</h1>
        <p className="mt-1 ds-text-sm ds-text-secondary">{t("subtitle")}</p>
      </div>

      <section className="overflow-hidden ds-bg-card ds-border-sm ds-rounded-2xl ds-shadow-card">
        {isLoading ? (
          <TableSkeleton />
        ) : isError ? (
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
            <User size={40} className="ds-text-disabled" />
            <div>
              <p className="ds-text-md ds-text-primary ds-font-bold">{t("error.title")}</p>
              <p className="mt-1 ds-text-sm ds-text-secondary">{t("error.text")}</p>
            </div>
            <button
              type="button"
              onClick={() => void refetch()}
              className="ds-bg-primary ds-text-white cursor-pointer ds-rounded-md ds-text-sm ds-font-bold px-5 py-2 transition-opacity hover:opacity-90 focus:ds-focus"
            >
              {t("error.retry")}
            </button>
          </div>
        ) : total === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
            <User size={40} className="ds-text-disabled" />
            <div>
              <p className="ds-text-md ds-text-primary ds-font-bold">{t("empty.title")}</p>
              <p className="mt-1 ds-text-sm ds-text-secondary">{t("empty.text")}</p>
            </div>
          </div>
        ) : (
          <UsersTable users={pageUsers} firstRowNumber={start} />
        )}
      </section>

      {!isLoading && !isError && total > 0 && (
        <UsersPagination
          page={safePage}
          totalPages={totalPages}
          start={start}
          end={end}
          total={total}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
