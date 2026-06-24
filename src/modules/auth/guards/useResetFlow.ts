"use client";
import { useRouter } from "next/navigation";

export const useResetFlow = () => {
  const router = useRouter();

  const start = (email: string) => {
    sessionStorage.setItem("resetEmail", email);
    router.push("/otp");
  };

  const verifyOTP = () => {
    sessionStorage.setItem("otpVerified", "true");
    router.push("/reset-password");
  };

  const finish = () => {
    sessionStorage.removeItem("resetEmail");
    sessionStorage.removeItem("otpVerified");
    router.push("/done");
  };

  const isEmailEntered = Boolean(sessionStorage.getItem("resetEmail"));
  const isOtpVerified = Boolean(sessionStorage.getItem("otpVerified"));

  return { start, verifyOTP, finish, isEmailEntered, isOtpVerified };
};
