import React from "react";
import { buildSeo } from "@/core/seo/Seo";

export const metadata = buildSeo({
  title: "Dashboard - Afaaq Ware",
  description: "User dashboard to manage profile and activities",
});

export default function DashboardPage() {
  return (
    <div>
      <p>dashboard</p>
    </div>
  );
}
