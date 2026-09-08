import Text from "@/shared/components/atoms/Text";
import QuestionNumber from "@/modules/survey-response/components/atoms/QuestionNumber";
import { cn } from "@/lib/cn";

type RadioQuestionFieldProps = {
  id: string;
  number: number;
  question: string;
  choices: string[];
  value: string;
  required?: boolean;
  onChange: (value: string) => void;
};

export default function RadioQuestionField({
  id,
  number,
  question,
  choices,
  value,
  onChange,
}: RadioQuestionFieldProps) {
  return (
    <fieldset className="border-b border-[var(--border-color-card)] py-5 last:border-b-0">
      <div className="flex gap-4 sm:gap-5">
        <QuestionNumber number={number} />

        <div className="min-w-0 flex-1">
          <legend className="mb-3">
            <Text size="sm">{question}</Text>
          </legend>

          <div className="space-y-2">
            {choices.map(choice => {
              const isSelected = value === choice;

              return (
                <label
                  key={choice}
                  className="ds-text-primary flex cursor-pointer items-center gap-2.5 text-sm font-[var(--font-heading)]"
                >
                  <input
                    id={`${id}-${choice}`}
                    name={id}
                    type="radio"
                    value={choice}
                    checked={isSelected}
                    onChange={() => onChange(choice)}
                    className="sr-only"
                  />

                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-4 items-center justify-center rounded-full border",
                      isSelected ? "border-[var(--color-primary)]" : "border-[var(--border-color)]"
                    )}
                  >
                    {isSelected && (
                      <span className="size-2 rounded-full bg-[var(--color-primary)]" />
                    )}
                  </span>

                  {choice}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </fieldset>
  );
}
