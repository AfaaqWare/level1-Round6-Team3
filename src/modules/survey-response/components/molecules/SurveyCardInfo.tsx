import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import StatusBadge from "@/shared/components/atoms/StatusBadge";
import type { Survey } from "../../types/survey";

interface SurveyCardInfoProps {
  survey: Survey;
}

export default function SurveyCardInfo({ survey }: SurveyCardInfoProps) {
  return (
    <>
      <StatusBadge status={survey.status} className="mb-3 self-start" />

      <Title size="sm" className="mb-1 line-clamp-1 font-bold normal-case">
        {survey.title}
      </Title>

      <Text size="sm" variant="secondary" className="line-clamp-1">
        {survey.description}
      </Text>
    </>
  );
}
