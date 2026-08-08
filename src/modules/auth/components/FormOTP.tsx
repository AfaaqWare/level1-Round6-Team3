"use client";

import { useState } from "react";

import OTPHeader from "./molecules/OTPHeader";
import OTPInput from "./Atoms/OTPInput";
import OTPTimer from "./molecules/OTPTimer";
import OTPActions from "./organisms/OTPActions";

import useOTPTimer from "../hooks/useOTPTimer";

export default function FormOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const { timer, resetTimer } = useOTPTimer();

  return (
    <div className="flex flex-col items-center">
      <OTPHeader />

      <OTPInput otp={otp} setOtp={setOtp} />

      <OTPTimer timer={timer} />

      <OTPActions otp={otp} setOtp={setOtp} resetTimer={resetTimer} />
    </div>
  );
}
