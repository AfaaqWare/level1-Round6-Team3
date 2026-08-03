"use client";

import React from "react";
import ThemeToggle from "@/shared/components/atoms/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-color-card)] bg-[var(--color-bg-alt)] shadow-sm backdrop-blur-sm transition-colors duration-300">
      <nav className="ds-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight" style={{ color: "var(--color-primary)" }}>
            Survey<span style={{ color: "var(--color-text-primary)" }}>App</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {[
            { label: "Home", href: "/" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
            { label: "FAQs", href: "/faqs" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-[var(--color-primary)]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
