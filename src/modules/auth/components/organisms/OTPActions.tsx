"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { resendOtp, verifyOtp } from "../../api/apiOTP";
import Button from "@/shared/components/atoms/Button";

interface OTPActionsProps {
  otp: string[];
  setOtp: Dispatch<SetStateAction<string[]>>;
  resetTimer: () => void;
  email: string;
  timer: number;
}

export default function OTPActions({ otp, setOtp, resetTimer, email, timer }: OTPActionsProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleVerify = async () => {
    // OTP expired
    if (timer === 0) {
      return;
    }

    const code = otp.join("");

    // OTP must be 6 digits
    if (code.length !== 6) {
      return;
    }

    try {
      setLoading(true);

      const response = await verifyOtp({
        email,
        otp: code,
      });

      console.log("OTP verified:", response);

      router.push("/done");
    } catch (error) {
      console.error("OTP verification failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setResending(true);

      const response = await resendOtp({
        email,
      });

      console.log("OTP resent:", response);

      setOtp(["", "", "", "", "", ""]);
      resetTimer();
    } catch (error) {
      console.error("Resend OTP failed:", error);
    } finally {
      setResending(false);
    }
  };
  return (
    <div className="flex flex-col items-center gap-6">
      <Button
        type="button"
        onClick={handleVerify}
        disabled={loading || timer === 0}
        isFullWidth
        size="lg"
        variant="primary"
        className="h-[40px] w-[480px]"
      >
        {loading ? "Verifying..." : "Verify"}
      </Button>

      <Button
        type="button"
        onClick={handleResend}
        disabled={resending}
        isFullWidth
        size="lg"
        variant="outline"
        className="h-[40px] w-[480px]"
      >
        {resending ? "Sending..." : "Send again"}
      </Button>
    </div>
  );
}
