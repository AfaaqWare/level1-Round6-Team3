import { cn } from "@/lib/cn";

type QuestionNumberProps = {
  number: number;
  className?: string;
};

export default function QuestionNumber({ number, className }: QuestionNumberProps) {
  return (
    <span
      className={cn(
        "ds-bg-primary ds-rounded-sm ds-font-semibold ds-text-base ds-text-white flex size-7 shrink-0 items-center justify-center",
        className
      )}
    >
      {number}
    </span>
  );
}
