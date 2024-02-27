"use client";

import Link from "next/link";
import { navLinks } from "../lib/data";

const HeadNav = () => {
  return (
    <nav className="flex justify-around border border-red-400 h-1/6 items-center">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          {link.nav}
        </Link>
      ))}
    </nav>
  );
};

export default HeadNav;
