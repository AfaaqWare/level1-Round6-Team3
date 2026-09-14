import { cn } from "@/lib/cn";
import { TableHead, TableHeader, TableRow } from "@/shared/components/molecules/Table";
import { useTranslations } from "next-intl";

interface DataTableHeaderProps {
  columns: string[];
  namespace: string;
  className?: string;
  isDynamicData?: boolean;
}

const headerStyles = "ds-text-sm ds-text-disabled ds-font-semibold";

export default function DataTableHeader({
  columns,
  namespace,
  className,
  isDynamicData = false,
}: DataTableHeaderProps) {
  const t = useTranslations(namespace);

  return (
    <TableHeader>
      <TableRow className={cn("!border-b-2 !border-[var(--border-color-card)]", className)}>
        {columns.map(column => (
          <TableHead key={column} className={headerStyles}>
            {isDynamicData ? column : t(column)}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
