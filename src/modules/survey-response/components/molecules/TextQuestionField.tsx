import Text from "@/shared/components/atoms/Text";
import TextArea from "@/shared/components/atoms/TextArea";
import QuestionNumber from "../atoms/QuestionNumber";

type TextQuestionFieldProps = {
  id: string;
  number: number;
  question: string;
  value: string;
  maxLength: number;
  required?: boolean;
  onChange: (value: string) => void;
};

export default function TextQuestionField({
  id,
  number,
  question,
  value,
  maxLength,
  required = false,
  onChange,
}: TextQuestionFieldProps) {
  return (
    <section className="border-b border-[var(--border-color-card)] py-5 last:border-b-0">
      <div className="flex gap-4 sm:gap-5">
        <QuestionNumber number={number} />

        <div className="min-w-0 flex-1 space-y-3">
          <label htmlFor={id} className="block">
            <Text size="sm">{question}</Text>
          </label>

          <TextArea
            id={id}
            name={id}
            value={value}
            maxLength={maxLength}
            required={required}
            rows={4}
            onChange={event => onChange(event.target.value)}
            className="ds-border-sm ds-bg-card resize-y font-[var(--font-heading)]"
          />

          <Text
            size="sm"
            variant="disabled"
            aria-live="polite"
            className="text-right text-xs font-[var(--font-heading)]"
          >
            {value.length}/{maxLength}
          </Text>
        </div>
      </div>
    </section>
  );
}
