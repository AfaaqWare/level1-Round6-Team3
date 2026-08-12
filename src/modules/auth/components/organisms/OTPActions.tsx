"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Swal from "sweetalert2";

import { resendOtp, verifyOtp } from "../../api/apiOTP";
import Button from "@/shared/components/atoms/Button";
import { useResetFlow } from "../../guards/useResetFlow";

interface OTPActionsProps {
  otp: string[];
  setOtp: Dispatch<SetStateAction<string[]>>;
  resetTimer: () => void;
  email: string;
  timer: number;
}

export default function OTPActions({ otp, setOtp, resetTimer, email, timer }: OTPActionsProps) {
  const { flow, verifyOTP, finish } = useResetFlow();

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

    // Reset flow: OTP is validated when submitting the new password
    if (flow === "reset") {
      verifyOTP(code);
      return;
    }

    try {
      setLoading(true);

      const response = await verifyOtp({
        email,
        otp: code,
      });

      console.log("OTP verified:", response);

      if (typeof window !== "undefined") {
        sessionStorage.setItem("otpVerified", "true");
      }
      finish();
    } catch (error) {
      console.error("OTP verification failed:", error);
      const msg =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        "Verification failed. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Verification failed",
        text: msg,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    // Reset OTP inputs and timer immediately
    setOtp(["", "", "", "", "", ""]);
    resetTimer();

    try {
      setResending(true);

      const response = await resendOtp({
        email,
      });

      console.log("OTP resent:", response);
    } catch (error) {
      console.error("Resend OTP failed:", error);
    } finally {
      setResending(false);
    }
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleVerify}
        disabled={loading || timer === 0}
        size="form"
        variant="primary"
      >
        {loading ? "Verifying..." : "Verify"}
      </Button>

      <Button
        type="button"
        onClick={handleResend}
        disabled={resending}
        size="form"
        variant="outline"
        className="mt-4"
      >
        {resending ? "Sending..." : "Send again"}
      </Button>
    </div>
  );
}
