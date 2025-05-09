"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-8 py-2 flex items-center bg-blue-700 fixed z-40 top-0 w-full h-auto text-lg">
      <nav aria-label="Main navigation" className="flex items-center gap-4">
        <Link href="/" className="hover:text-blue-200">
          Home
        </Link>
        <Link href="/favorites" className="hover:text-blue-200">
          My List
        </Link>
      </nav>
    </div>
  );
};

export default Header;
