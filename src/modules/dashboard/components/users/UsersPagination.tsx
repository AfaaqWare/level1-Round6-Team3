"use client";

import Pagination from "@/shared/components/molecules/Pagination";

interface UsersPaginationProps {
  page: number;
  totalPages: number;
  start: number;
  end: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function UsersPagination(props: UsersPaginationProps) {
  return (
    <Pagination
      {...props}
      translationNamespace="dashboard.users.pagination"
      itemsLabelKey="users"
    />
  );
}
