import { cn } from "@/lib/cn";
interface Props {
  className?: string;
  children?: React.ReactNode;
}
export default function TextHighlight({ className, children }: Props) {
  return <span className={cn("ds-text-alt font-semibold", className)}>{children}</span>;
}
