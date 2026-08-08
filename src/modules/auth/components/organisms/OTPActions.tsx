"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { resendOtp, verifyOtp } from "../../api/apiOTP";

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

      // Clear old OTP
      setOtp(["", "", "", "", "", ""]);

      // Restart timer
      resetTimer();
    } catch (error) {
      console.error("Resend OTP failed:", error);
    } finally {
      setResending(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleVerify}
        disabled={loading || timer === 0}
        className="h-12 w-full rounded-lg bg-[#08b3bd] font-medium text-white transition hover:bg-[#08b3bd]/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Verifying..." : "Verify"}
      </button>

      <button
        type="button"
        onClick={handleResend}
        disabled={resending}
        className="mt-4 h-12 w-full rounded-lg border border-[#08b3bd] bg-white font-medium text-[#08b3bd] transition hover:bg-[#08b3bd]/5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {resending ? "Sending..." : "Send again"}
      </button>
    </div>
  );
}
