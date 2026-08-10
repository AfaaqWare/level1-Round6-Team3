import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";

export default function OTPHeader() {
  return (
    <div className="text-center">
      <Title size="xl" isCenter className="text-center md:whitespace-nowrap">
        Verify Your OTP for Register
      </Title>

      <Text size="md" variant="secondary" isCenter className="text-center">
        We’ve sent a 6-digit code to your email, Please enter it below to verify your account
      </Text>
    </div>
  );
}
