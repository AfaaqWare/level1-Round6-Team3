"use client";

import { useRef } from "react";

interface OTPInputProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function OTPInput({ otp, setOtp }: OTPInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="mt-9 flex justify-center gap-3">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={element => {
            inputsRef.current[index] = element;
          }}
          value={digit}
          onChange={e => handleChange(e.target.value, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          maxLength={1}
          inputMode="numeric"
          className="h-14 w-14 rounded-lg border border-gray-200 bg-white text-center text-3xl text-gray-800 shadow-sm transition outline-none focus:border-[#08b3bd] focus:ring-2 focus:ring-[#08b3bd]/20"
        />
      ))}
    </div>
  );
}
