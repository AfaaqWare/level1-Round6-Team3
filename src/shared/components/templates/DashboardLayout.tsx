import React from "react";
import { ThemeToggle } from "../atoms/ThemeButton";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <span className="text-lg font-bold">Dashboard</span> <ThemeToggle />
          </div>
        </div>
      </nav>
      <main className="ds-bg mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
