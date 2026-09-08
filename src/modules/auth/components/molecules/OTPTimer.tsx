import Text from "@/shared/components/atoms/Text";

interface OTPTimerProps {
  timer: number;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export default function OTPTimer({ timer }: OTPTimerProps) {
  return (
    <Text size="sm" variant="disabled" isCenter>
      This code will expire in {formatTime(timer)}
    </Text>
  );
}
