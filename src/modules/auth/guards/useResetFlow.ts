"use client";
import { useRouter } from "next/navigation";

export type ResetFlowType = "register" | "reset";

export const useResetFlow = () => {
  const router = useRouter();

  const start = (email: string, flow: ResetFlowType = "reset") => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("resetEmail", email);
      sessionStorage.setItem("resetFlow", flow);
    }
    router.push(`/otp-verify?email=${encodeURIComponent(email)}`);
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
    router.push("/done");
  };

  const cleanup = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("resetEmail");
      sessionStorage.removeItem("otpVerified");
      sessionStorage.removeItem("resetOtp");
      sessionStorage.removeItem("resetFlow");
    }
  };

  const isEmailEntered =
    typeof window !== "undefined" && Boolean(sessionStorage.getItem("resetEmail"));
  const isOtpVerified =
    typeof window !== "undefined" && Boolean(sessionStorage.getItem("otpVerified"));
  const email = typeof window !== "undefined" ? sessionStorage.getItem("resetEmail") || "" : "";
  const otp = typeof window !== "undefined" ? sessionStorage.getItem("resetOtp") || "" : "";
  const flow: ResetFlowType =
    typeof window !== "undefined"
      ? (sessionStorage.getItem("resetFlow") as ResetFlowType) || "reset"
      : "reset";

  return { start, verifyOTP, finish, cleanup, isEmailEntered, isOtpVerified, email, otp, flow };
};