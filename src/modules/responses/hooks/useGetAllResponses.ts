"use client";

import { getAllResponses } from "../api/getAllResponses";
import { useApiQuery } from "@/shared/hooks/useApiQuery";

export default function useGetAllResponses() {
  return useApiQuery({
    queryKey: ["all-responses"],
    queryFn: getAllResponses,
  });
}
