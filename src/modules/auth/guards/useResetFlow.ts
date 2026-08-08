"use client";
import { useRouter } from "next/navigation";

export const useResetFlow = () => {
  const router = useRouter();

  const start = (email: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("resetEmail", email);
    }
    router.push("/otp-verify");
  };

  const verifyOTP = (otp?: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("otpVerified", "true");
      if (otp) {
        sessionStorage.setItem("resetOtp", otp);
      }
    }
    router.push("/reset-password");
  };

  const finish = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("resetEmail");
      sessionStorage.removeItem("otpVerified");
      sessionStorage.removeItem("resetOtp");
    }
    router.push("/done");
  };

  const isEmailEntered =
    typeof window !== "undefined" && Boolean(sessionStorage.getItem("resetEmail"));
  const isOtpVerified =
    typeof window !== "undefined" && Boolean(sessionStorage.getItem("otpVerified"));
  const email = typeof window !== "undefined" ? sessionStorage.getItem("resetEmail") || "" : "";
  const otp = typeof window !== "undefined" ? sessionStorage.getItem("resetOtp") || "" : "";

  return { start, verifyOTP, finish, isEmailEntered, isOtpVerified, email, otp };
};