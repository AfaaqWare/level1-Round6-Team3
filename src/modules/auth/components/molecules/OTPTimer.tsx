import Text from "@/shared/components/atoms/Text";

interface OTPTimerProps {
  timer: number;
}

export default function OTPTimer({ timer }: OTPTimerProps) {
  return (
    <Text size="sm" variant="disabled" isCenter>
      This code will expire in {timer} seconds
    </Text>
  );
}
