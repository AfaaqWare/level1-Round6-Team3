import * as XLSX from "xlsx";
import { formatDateTime } from "@/shared/utils/formatDateTime";
import type { SurveyResponse } from "@/modules/responses/type/responses";
import type { SurveyQuestion } from "../types/question";

interface ExportResponsesToExcelParams {
  rows: SurveyResponse[];
  questions: SurveyQuestion[];
  selectedOptions: Record<string, boolean>;
  fileName: string;
}

export function exportResponsesToExcel({
  rows,
  questions,
  selectedOptions,
  fileName,
}: ExportResponsesToExcelParams) {
  if (rows.length === 0) return;

  const usedHeaders = new Map<string, number>();
  const questionHeaders = questions.map(question => {
    const base = question.questionText;
    const occurrence = usedHeaders.get(base) ?? 0;
    usedHeaders.set(base, occurrence + 1);
    return occurrence > 0 ? `${base} (${occurrence + 1})` : base;
  });

  const data = rows.map((response, index) => {
    const row: Record<string, string | number> = { ID: index + 1 };

    if (selectedOptions.respondentName) {
      row["Respondent Name"] = response.respondentName;
    }

    if (selectedOptions.respondentEmail) {
      row["Respondent Email"] = response.respondentEmail;
    }

    if (selectedOptions.submissionData) {
      const { date, time } = formatDateTime(response.submittedAt);
      row["Submitted At"] = `${date} ${time}`;
    }

    if (selectedOptions.answers) {
      questions.forEach((question, questionIndex) => {
        row[questionHeaders[questionIndex]] = response.answers[question.qid] || "-";
      });
    }

    return row;
  });

  const worksheet = XLSX.utils.json_to_sheet(data);

  const headers = Object.keys(data[0]);
  worksheet["!cols"] = headers.map(header => {
    const widestValueLength = data.reduce((max, row) => {
      const value = row[header];
      const length = value === undefined || value === null ? 0 : String(value).length;
      return Math.max(max, length);
    }, header.length);

    return { wch: Math.min(Math.max(widestValueLength + 2, 10), 60) };
  });

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Responses");

  const safeFileName = fileName.trim() || "responses";
  XLSX.writeFile(workbook, `${safeFileName}.xlsx`);
}
