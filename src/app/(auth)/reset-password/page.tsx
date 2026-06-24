import React from "react";
import ResetGuard from "@/modules/auth/guards/ResetGuard";
import FormResetPassword from "@/modules/auth/components/FormResetPassword";
function page() {
  return (
    <ResetGuard>
      <FormResetPassword />
    </ResetGuard>
  );
}

export default page;
