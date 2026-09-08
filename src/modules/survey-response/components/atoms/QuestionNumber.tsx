type QuestionNumberProps = {
  number: number;
};

export default function QuestionNumber({ number }: QuestionNumberProps) {
  return (
    <span className="ds-bg-primary ds-rounded-sm ds-font-semibold text- ds-text-base ds-text-white flex size-7 shrink-0 items-center justify-center">
      {number}
    </span>
  );
}
