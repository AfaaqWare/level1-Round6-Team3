"use client";

import { useState } from "react";

import OTPHeader from "./molecules/OTPHeader";
import OTPInput from "./Atoms/OTPInput";
import OTPTimer from "./molecules/OTPTimer";
import OTPActions from "./organisms/OTPActions";

import useOTPTimer from "../hooks/useOTPTimer";
interface FormOTPProps {
  email: string;
}
export default function FormOTP({ email }: FormOTPProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const { timer, resetTimer } = useOTPTimer();

  return (
    <div className="flex flex-col items-center justify-between gap-6">
      <OTPHeader />

      <OTPInput otp={otp} setOtp={setOtp} />

      <OTPTimer timer={timer} />

      <OTPActions email={email} otp={otp} setOtp={setOtp} resetTimer={resetTimer} timer={timer} />
    </div>
  );
}
