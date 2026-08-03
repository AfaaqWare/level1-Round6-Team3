"use client";
import { useEffect, useState } from "react";
import { ListMinus } from "@/assets/icons/icons";
import { Routes } from "../../utils/routes";
import { cn } from "../../../lib/cn";
import NavLogo from "../atoms/navbar/NavLogo";
import NavIconButton from "../atoms/navbar/NavIconButton";
import MobileNavHeader from "../atoms/navbar/MobileNavHeader";
import Button from "../atoms/Button";
import { ThemeToggle } from "../atoms/ThemeButton";
import HeaderList from "../atoms/List";
import Link from "../atoms/navbar/Link";
import DropdownProfile from "../atoms/navbar/DropdownProfile";
import { TokenService } from "@/services/tokenService";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLoggedIn(TokenService.hasToken());
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNavbar = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 h-20 w-full transition-all duration-300",
        isScrolled ? "ds-bg shadow-md" : "ds-bg-alt shadow-sm"
      )}
    >
      <div
        className={cn(
          "ds-container mx-auto flex items-center justify-between py-2 sm:px-10 md:px-0 md:py-4"
        )}
      >
        <NavLogo />

        {/* <DesktopNavLinks
          mainRoutes={mainRoutes}
          dropdownRoutes={dropdownRoutes}
          dropdownOpen={dropdownOpen}
          toggleDropdown={() => setDropdownOpen(p => !p)}
          closeNavbar={closeNavbar}
        /> */}

        <div className="hidden w-[90%] items-center justify-end gap-3 md:flex">
          <HeaderList
            trans="routes"
            routes={Routes}
            className="flex w-2/3 flex-row items-center justify-center gap-3"
          />
          <ThemeToggle />

          {mounted && isLoggedIn ? (
            <DropdownProfile />
          ) : (
            <>
              <Link href="/sign-in">
                <Button size="md">login</Button>
              </Link>
              <Link href="/sign-up">
                <Button size="md">register</Button>
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <NavIconButton onClick={() => setOpen(true)}>
            <ListMinus size={30} />
          </NavIconButton>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "ds-bg fixed top-0 right-0 z-40 h-screen w-full transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <MobileNavHeader onClose={closeNavbar} />
        <div className="flex flex-col items-center justify-center gap-3">
          {/* <MobileNavLinks
          mainRoutes={mainRoutes}
          dropdownRoutes={dropdownRoutes}
          dropdownOpen={dropdownOpen}
          toggleDropdown={() => setDropdownOpen(p => !p)}
          closeNavbar={closeNavbar}
        /> */}
          <HeaderList
            trans="routes"
            routes={Routes}
            className="flex w-2/3 flex-col items-center justify-center gap-3"
          />
          <ThemeToggle />
          <Link href="/sign-in">
            <Button size="md">login</Button>
          </Link>
          <Link href="/sign-up">
            <Button size="md">register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
