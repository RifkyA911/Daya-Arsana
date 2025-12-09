'use client'

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-2 px-4 lg:px-12 bg-background font-sans">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4 xbg-red-400 w-full">
            <h2 className="text-3xl md:text-4xl font-semibold">
              D-A
            </h2>
            <div className="xbg-amber-100 flex flex-1 flex-row justify-center items-center gap-4">
              <Link href="/" className="text-sm hover:text-foreground transition-colors p-4 border border-amber-400 text-amber-400">
                Home
              </Link>
              <Link href="#features" className="text-sm hover:text-foreground transition-colors p-4 border  border-amber-400 text-amber-400">
                Service
              </Link>
              <Link href="#partnership" className="text-sm hover:text-foreground transition-colors p-4 border  border-amber-400 text-amber-400">
                About
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
