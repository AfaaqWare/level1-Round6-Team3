import React from "react";
import ResetGuard from "@/modules/auth/guards/ResetGuard";
import CompResetPassword from "@/modules/auth/api/components/CompResetPassword";
function page() {
  return (
    <ResetGuard>
      <CompResetPassword />
    </ResetGuard>
  );
}

export default page;
