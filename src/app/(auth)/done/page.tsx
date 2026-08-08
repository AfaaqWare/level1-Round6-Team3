import React from "react";
import DoneGuard from "@/modules/auth/guards/DoneGuard";
import FormDone from "@/modules/auth/api/components/FormDone";
 
function page() {
  return (
    <DoneGuard>
      <FormDone />
    </DoneGuard>
  );
}

export default page;
