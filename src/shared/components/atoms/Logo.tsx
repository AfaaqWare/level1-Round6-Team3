import React from 'react'
import Link from 'next/link'
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const Logo = () => {
  return (
     <Link
      href="/"
      className={`${nunito.className} ds-text-alt text-2xl ds-font-bold select-none`}
    >
      Survey<span className="ds-text-primary ">Land</span>
    </Link>
  )
}

export default Logo
