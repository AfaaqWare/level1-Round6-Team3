import { cn } from "@/lib/cn";

export type StatusBadgeVariant = "draft" | "published" | "closed";

interface StatusBadgeProps {
  status: StatusBadgeVariant;
  className?: string;
}
const statusStyles: Record<StatusBadgeVariant, string> = {
  draft: " ds-bg-orange-soft ds-px-md ds-text-orange",
  published: "ds-text-green ds-bg-green-soft",
  closed: "ds-text-gray ds-bg-gray-soft",
};

const statusLabels: Record<StatusBadgeVariant, string> = {
  published: "Published",
  draft: "Draft",
  closed: "Closed",
};
export default function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center justify-center",
        "ds-rounded-xl px-3 py-1",
        "ds-text-xs ds-font-bold",
        statusStyles[status],
        className
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
