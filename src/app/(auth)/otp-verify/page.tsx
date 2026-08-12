import React from "react";
import OTPGuard from "@/modules/auth/guards/OTPGuard";
import FormOTP from "@/modules/auth/components/FormOTP";
function page() {
  return (
    <OTPGuard>
      <FormOTP />
    </OTPGuard>
  );
}

export default page;
