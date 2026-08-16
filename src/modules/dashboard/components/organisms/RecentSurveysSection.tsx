import { cn } from "@/lib/cn";

import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import StatusBadge from "../atoms/StatusBadge";
import DataTableHeader from "../molecules/DataTableHeader";
import { Table, TableBody, TableCell, TableRow } from "@/shared/components/molecules/Table";
import SectionHeader from "../molecules/SectionHeader";

type SurveyStatus = "published" | "draft" | "closed";

interface RecentSurvey {
  id: string;
  title: string;
  status: SurveyStatus;
  responses: number;
  updatedAt: string;
}

interface RecentSurveysSectionProps {
  surveys: RecentSurvey[];
  className?: string;
}

export default function RecentSurveysSection({ surveys, className }: RecentSurveysSectionProps) {
  return (
    <section className={cn("ds-bg-card ds-rounded-3xl ds-p-lg", "w-full", className)}>
      {/* Header */}

      <SectionHeader title="recentSurveys" buttonLabel="viewAll" href="/surves" />
      {/* Desktop / Tablet */}

      <div className="hidden overflow-x-auto md:block">
        <Table className="min-w-[650px]">
          <DataTableHeader
            namespace="dashboard.home.recentSurveys.table"
            columns={["surveyTitle", "status", "responses", "updatedAt"]}
          />
          <TableBody>
            {surveys.map(survey => (
              <TableRow
                key={survey.id}
                className={cn("!border-b-2 !border-[var(--border-color-card)]", "last:!border-b-0")}
              >
                <TableCell>
                  <Title size="sm" className="font-semibold !text-[var(--color-text-dash)]">
                    {survey.title}
                  </Title>
                </TableCell>

                <TableCell>
                  <StatusBadge status={survey.status} />
                </TableCell>

                <TableCell>
                  <Text size="xs" className="font-semibold !text-[var(--color-text-dash)]">
                    {survey.responses}
                  </Text>
                </TableCell>

                <TableCell>
                  <Text size="xs" className="!font-semibold !text-[var(--color-text-dash)]">
                    {survey.updatedAt}
                  </Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Mobile */}
      <div className="flex flex-col gap-3 md:hidden">
        {surveys.map(survey => (
          <article key={survey.id} className={cn("ds-border-card ds-rounded-md", "border p-4")}>
            {/* Survey Title */}
            <Title size="sm" className="mb-4 font-bold capitalize">
              {survey.title}
            </Title>

            {/* Status */}
            <div className="flex items-center justify-between py-2">
              <Text size="sm" variant="secondary">
                Status
              </Text>

              <StatusBadge status={survey.status} />
            </div>

            {/* Responses */}
            <div className="flex items-center justify-between py-2">
              <Text size="sm" variant="secondary">
                Responses
              </Text>

              <Text size="sm" className="!text-[var(--color-text-dash)]">
                {survey.responses}
              </Text>
            </div>

            {/* Updated At */}
            <div className="flex items-center justify-between py-2">
              <Text size="sm" variant="secondary">
                Updated At
              </Text>

              <Text size="sm" variant="secondary">
                {survey.updatedAt}
              </Text>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
