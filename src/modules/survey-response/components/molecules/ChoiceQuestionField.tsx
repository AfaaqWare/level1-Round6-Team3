import { Check } from "lucide-react";

import Text from "@/shared/components/atoms/Text";
import QuestionNumber from "@/modules/survey-response/components/atoms/QuestionNumber";
import { cn } from "@/lib/cn";

type ChoiceQuestionFieldProps = {
  id: string;
  number: number;
  question: string;
  choices: string[];
  value: string[];
  required?: boolean;
  onChange: (value: string[]) => void;
  readOnly?: boolean;
  mode: "edit" | "view";
};

export default function ChoiceQuestionField({
  id,
  number,
  question,
  choices,
  value,
  onChange,
  readOnly,
  mode = "edit",
}: ChoiceQuestionFieldProps) {
  const toggleChoice = (choice: string) => {
    onChange(value.includes(choice) ? value.filter(item => item !== choice) : [...value, choice]);
  };

  return (
    <fieldset
      className={`${mode === "edit" ? "border-b border-[var(--border-color-card)] last:border-b-0" : "!border-b-0"} py-5`}
    >
      <div className="flex gap-4 sm:gap-5">
        <QuestionNumber number={number} />

        <div className="min-w-0 flex-1">
          <legend className="mb-3">
            <Text size="sm">{question}</Text>
          </legend>

          <div className="space-y-2">
            {choices.map(choice => {
              const isSelected = value.includes(choice);

              return (
                <label
                  key={choice}
                  className="ds-text-primary flex cursor-pointer items-center gap-2.5 text-sm font-[var(--font-heading)]"
                >
                  <input
                    id={`${id}-${choice}`}
                    name={id}
                    value={choice}
                    type="checkbox"
                    checked={isSelected}
                    disabled={readOnly}
                    onChange={readOnly ? undefined : () => toggleChoice(choice)}
                    className="sr-only"
                  />

                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-4 items-center justify-center rounded-[3px] border",
                      isSelected
                        ? "ds-bg-primary border-transparent"
                        : "border-[var(--border-color)] bg-transparent"
                    )}
                  >
                    {isSelected && <Check className="size-3 text-white" />}
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
