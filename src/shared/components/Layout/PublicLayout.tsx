import React from "react";
import Navbar from "@/shared/components/organisms/Navbar";
import Footer from "@/shared/components/organisms/Footer";
interface Props {
  children: React.ReactNode;
}
export default function PublicLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
