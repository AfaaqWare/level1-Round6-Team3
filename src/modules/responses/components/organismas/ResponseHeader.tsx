"use client";

import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import React from "react";
import useGetAllResponses from "@/modules/responses/hooks/useGetAllResponses";

import ExcelJS from "exceljs";
import { useTranslations } from "next-intl";
import { Eye , Download } from "@/assets/icons/icons";


function ResponseHeader() {
  const t = useTranslations("dashboard.responses");

  const { data } = useGetAllResponses();

  const handleExport = async () => {
  const exportData = (data?.data ?? []).map((response, index) => ({
    ID: index + 1,
    Respondent: response.respondentName,
    Email: response.respondentEmail,
    "Survey ID": response.surveyId,
    Answers: Object.values(response.answers)
      .map((answer) =>
        typeof answer === "object" ? JSON.stringify(answer) : String(answer),
      )
      .join(" | "),
    "Submitted At": response.submittedAt,
  }));

  if (exportData.length === 0) return;

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Responses");

  worksheet.addRow(Object.keys(exportData[0]));

  exportData.forEach((row) => {
    worksheet.addRow(Object.values(row));
  });

  const buffer = await workbook.xlsx.writeBuffer();

  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "responses.xlsx";
  link.click();

  URL.revokeObjectURL(url);
};

  return (
    <main className="flex justify-between">
      <section>
        <Title>{t("title")}</Title>
        <Text>{t("description")}</Text>
      </section>

      <section className="mt-3">
        <Button className="mx-4 "><Eye /> {t("actions.refresh")}</Button>
        <Button onClick={handleExport}><Download />{t("actions.exportExcel")}</Button>
      </section>
    </main>
  );
}

export default ResponseHeader;
