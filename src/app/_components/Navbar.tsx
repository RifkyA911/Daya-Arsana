'use client'

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" px-2 bg-background font-sans">
      <div className="xmax-w-8xl mx-auto relative flex items-center">
        {/* LOGO */}
        <NavLink href="/" className="border-none text-black">
          <h2 className="text-3xl md:text-4xl font-semibold">D-A</h2>
        </NavLink>

        {/* DESKTOP MENU — BENERAN TENGAH */}
        <div className="hidden lg:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#features">Service</NavLink>
          <NavLink href="#partnership">About</NavLink>
        </div>

        {/* MOBILE MENU */}
        <div className="ml-auto lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 border border-orange-400 text-orange-400">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]" onCloseAutoFocus={(e) => e.preventDefault()}>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-2 px-4">
                <SheetClose asChild>
                  <Link onClick={() => setOpen(false)} href="/" className="text-black border-none text-start text-2xl">Home</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link onClick={() => setOpen(false)} href="#features" className="text-black border-none text-start text-2xl">Service</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link onClick={() => setOpen(false)} href="#partnership" className="text-black border-none text-start text-2xl">About</Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavLink = ({
  href,
  children,
  onClick,
  className,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      `
        text-sm
        px-4 py-3
        border border-orange-400
        text-orange-400
        hover:bg-orange-400
        hover:text-white
        transition-colors
        text-center
      `,
      className
    )}
  >
    {children}
  </Link>
);