"use client";

import { Dispatch, SetStateAction } from "react";

interface OTPActionsProps {
  otp: string[];
  setOtp: Dispatch<SetStateAction<string[]>>;
  resetTimer: () => void;
}

export default function OTPActions({ otp, setOtp, resetTimer }: OTPActionsProps) {
  const handleVerify = () => {
    const code = otp.join("");

    if (code.length !== 6) {
      return;
    }

    console.log("OTP:", code);
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    resetTimer();

    console.log("Resend OTP");
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleVerify}
        className="mt-8 h-12 w-full rounded-lg bg-[#08b3bd] font-medium text-white transition hover:bg-[#079faa]"
      >
        Verify
      </button>

      <button
        type="button"
        onClick={handleResend}
        className="mt-4 h-12 w-full rounded-lg border border-[#08b3bd] bg-white font-medium text-[#08b3bd] transition hover:bg-[#08b3bd]/5"
      >
        Send again
      </button>
    </div>
  );
}
