"use client";

import { useState } from "react";

import OTPHeader from "./molecules/OTPHeader";
import OTPInput from "./Atoms/OTPInput";
import OTPTimer from "./molecules/OTPTimer";
import OTPActions from "./organisms/OTPActions";

import useOTPTimer from "../hooks/useOTPTimer";
import useOtpEmail from "../hooks/otp-verify/useOtpEmail";
export default function FormOTP() {
  const { email } = useOtpEmail();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const emailFallback =
    typeof window !== "undefined" ? sessionStorage.getItem("resetEmail") || "" : "";
  const email = emailProp || emailFallback;

  const { timer, resetTimer } = useOTPTimer();

  return (
    <div className="ds-container flex flex-col items-center justify-between gap-6">
      <OTPHeader />

      <OTPInput otp={otp} setOtp={setOtp} />

      <OTPTimer timer={timer} />

      <OTPActions email={email} otp={otp} setOtp={setOtp} resetTimer={resetTimer} timer={timer} />
    </div>
  );
}
