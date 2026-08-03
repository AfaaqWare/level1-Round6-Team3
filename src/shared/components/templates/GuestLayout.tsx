import React from "react";
import Navbar from "@/shared/components/organisms/Navbar";
import Footer from "@/shared/components/organisms/Footer";

interface Props {
  children: React.ReactNode;
}

export default function GuestLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="ds-container flex-1 px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
