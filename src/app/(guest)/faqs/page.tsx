import React from "react";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
import FAQtemplate from "@/modules/guest/components/templates/FAQ";

function page() {
  return (
    <PublicLayout>
      <FAQtemplate />
    </PublicLayout>
  );
}

export default page;
