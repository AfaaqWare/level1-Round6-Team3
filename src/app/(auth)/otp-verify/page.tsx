import React from "react";
import OTPGuard from "@/modules/auth/guards/OTPGuard";
import FormOTP from "@/modules/auth/components/FormOTP";
function page({ searchParams }: { searchParams: { email: string } }) {
  const { email } = searchParams;

  return (
    <OTPGuard>
      <FormOTP email={email} />
    </OTPGuard>
  );
}

export default page;
