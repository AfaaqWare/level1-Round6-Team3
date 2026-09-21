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
              <TableRow className="text-[#838493] ">
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
                <TableRow key={response.id} >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="flex">
                    <span  className="rounded-full bg-blue-100 p-3">
                    <User className="h-3 w-3 ds-text-alt" />

                    </span>
                   <span className="ms-3 mt-2">{response.respondentName}</span> 
                  </TableCell>
                  <TableCell>{response.respondentEmail}</TableCell>
                  <TableCell><span className="ds-text-alt border-2 border-sky-500 p-1 bg-blue-100">{response.surveyId}</span> </TableCell>
                  <TableCell><span className="ds-text-alt border-2 border-sky-500 p-1 bg-blue-100">Answers {Object.keys(response.answers).length}</span></TableCell>
                  <TableCell>{new Date(response.submittedAt).toLocaleString()} </TableCell>
                  <TableCell className="flex ">
                    <Eye className="border-1  border-gray-200 p-1 text-[#838493]" /> <MoreVertical className="border-1 border-gray-200 p-1 ms-2" />{" "}
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
