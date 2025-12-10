'use client'

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-2 px-4 lg:px-12 bg-background font-sans">
      <div className="xmax-w-8xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4 xbg-red-400 w-full">
            <h2 className="text-3xl md:text-4xl font-semibold">
              D-A
            </h2>
            <div className="xbg-amber-100 flex flex-1 flex-row justify-center items-center gap-4">
              <Link href="/" className="text-sm hover:text-white transition-colors px-4 py-3 hover:bg-orange-400 border border-orange-400 text-orange-400">
                Home
              </Link>
              <Link href="#features" className="text-sm hover:text-white transition-colors px-4 py-3 hover:bg-orange-400 border border-orange-400 text-orange-400">
                Service
              </Link>
              <Link href="#partnership" className="text-sm hover:text-white transition-colors px-4 py-3 hover:bg-orange-400 border border-orange-400 text-orange-400">
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
