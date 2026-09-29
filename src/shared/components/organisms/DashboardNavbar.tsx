"use client";

import React, { useState } from "react";
import NavLogo from "../atoms/navbar/NavLogo";
import { ThemeToggle } from "../atoms/ThemeButton";
import HeaderList from "../atoms/List";
import { Routes } from "../../utils/routes";
import Icon from "@/shared/components/atoms/Icon";
import { Bell, ListMinus } from "@/assets/icons/icons";
import NavIconButton from "../atoms/navbar/NavIconButton";
import MobileNavHeader from "../atoms/navbar/MobileNavHeader";
import { cn } from "@/lib/cn";

export default function DashboardNavbar() {
  const [open, setOpen] = useState(false);

  const closeNavbar = () => setOpen(false);

  return (
    <>
      <nav className="ds-bg-alt sticky top-0 z-40 shadow-sm">
        <div className="ds-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <NavLogo />

            {/* Desktop */}
            <div className="hidden flex-1 items-center justify-center gap-4 md:flex">
              <HeaderList
                trans="routes"
                routes={Routes}
                className="flex w-2/3 flex-row items-center justify-center gap-3"
              />

              <ThemeToggle />

              <Icon IconComponent={Bell} size="lg" className="ms-[24px] mt-[5px]" />
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <NavIconButton onClick={() => setOpen(true)}>
                <ListMinus size={30} />
              </NavIconButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "ds-bg fixed top-0 right-0 z-40 h-screen w-full transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <MobileNavHeader onClose={closeNavbar} />

        <div className="flex flex-col items-center justify-center gap-3">
          <HeaderList
            trans="routes"
            routes={Routes}
            className="flex w-2/3 flex-col items-center justify-center gap-3"
          />

          <ThemeToggle />

          <Icon IconComponent={Bell} size="lg" />
        </div>
      </div>
    </>
  );
}