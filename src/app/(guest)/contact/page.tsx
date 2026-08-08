import ContactSection from "@/modules/guest/components/organisms/contact/ContactSection";

import PublicLayout from "@/shared/components/Layout/PublicLayout";

function page() {
  return <PublicLayout>
    <div className="ds-container mt-[75px]">
      <ContactSection />
    </div>

  </PublicLayout>;
}

export default page;
