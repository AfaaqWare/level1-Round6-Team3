"use client";

import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
} from "@/shared/components/molecules/Table";
import useGetAllResponses from "@/modules/responses/hooks/useGetAllResponses";

import React, { useState } from "react";
import Pagination from "@/shared/components/molecules/Pagination";

import { useTranslations } from "next-intl";
import { Eye, User, MoreVertical } from "@/assets/icons/icons";

const PAGE_SIZE = 10;
function ResponseTable({ searchTerm }: { searchTerm: string }) {
  const [page, setPage] = useState(1);
  const t = useTranslations("dashboard.responses");

  const { data, isLoading, error } = useGetAllResponses();

  const filteredResponses =
    data?.data.filter(response =>
      JSON.stringify(response).toLowerCase().includes(searchTerm.toLowerCase())
    ) ?? [];

  const total = filteredResponses.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = total === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const end = Math.min(safePage * PAGE_SIZE, total);

  const pageResponses =
    filteredResponses?.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE) ?? [];

  const handlePageChange = (nextPage: number) => {
    setPage(Math.max(1, Math.min(nextPage, totalPages)));
  };

  return (
    <>
      {isLoading ? (
        <p>Loading ..</p>
      ) : (
        <>
          <Table className="mt-7">
            <TableHeader>
              <TableRow>
                <TableCell>{t("table.id")}</TableCell>
                <TableCell>{t("table.respondent")}</TableCell>
                <TableCell>{t("table.email")}</TableCell>
                <TableCell>{t("table.surveyId")}</TableCell>
                <TableCell>{t("table.answers")}</TableCell>
                <TableCell>{t("table.submittedAt")} </TableCell>
                <TableCell>{t("table.actions")}</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="ds-bg-card">
              {pageResponses.map((response, index) => (
                <TableRow key={response.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <User />
                    {response.respondentName}
                  </TableCell>
                  <TableCell>{response.respondentEmail}</TableCell>
                  <TableCell>{response.surveyId}</TableCell>
                  <TableCell>Answers {Object.keys(response.answers).length}</TableCell>
                  <TableCell>{response.submittedAt} </TableCell>
                  <TableCell>
                    {" "}
                    <Eye /> <MoreVertical />{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            page={safePage}
            totalPages={totalPages}
            start={start}
            end={end}
            total={total}
            onPageChange={handlePageChange}
            translationNamespace="dashboard.surveysExport.pagination"
            itemsLabelKey="responses"
          />
        </>
      )}
    </>
  );
}

export default ResponseTable;
