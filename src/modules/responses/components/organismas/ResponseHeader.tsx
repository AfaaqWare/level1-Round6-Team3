"use client";

import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import React from "react";
import useGetAllResponses from "@/modules/responses/hooks/useGetAllResponses";
import * as XLSX from "xlsx";
import { useTranslations } from "next-intl";

function ResponseHeader() {
  const t = useTranslations("dashboard.responses");

  const { data } = useGetAllResponses();

  const handleExport = () => {
    const exportData = (data?.data ?? []).map((response, index) => ({
      ID: index + 1,
      Respondent: response.respondentName,
      Email: response.respondentEmail,
      "Survey ID": response.surveyId,
      Answers: Object.keys(response.answers).length,
      "Submitted At": response.submittedAt,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Responses");

    XLSX.writeFile(workbook, "responses.xlsx");
  };
  return (
    <main className="flex justify-between">
      <section>
        <Title>{t("title")}</Title>
        <Text>{t("description")}</Text>
      </section>

      <section>
        <Button>{t("actions.refresh")}</Button>
        <Button onClick={handleExport}>{t("actions.exportExcel")}</Button>
      </section>
    </main>
  );
}

export default ResponseHeader;
