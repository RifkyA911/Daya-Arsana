'use client'

import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";
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
import Image from "next/image";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive: boolean;
}

const Navbar = ({ minimal }: { minimal?: boolean }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/', isActive: pathname === '/' }
    ];

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;

      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({
        label,
        href: currentPath,
        isActive: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <>
      <nav className="px-2 bg-background font-sans">
        <div className="max-w-[1600px] mx-auto relative flex items-center">
          {/* LOGO */}
          <NavLink href="/" className="border-none text-black">
            <h2 className="text-3xl md:text-4xl font-semibold">
              <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            </h2>
          </NavLink>

          {/* DESKTOP MENU — BENERAN TENGAH */}
          {!minimal && (
            <div className="hidden lg:flex items-center gap-4 absolute left-1/2 -translate-x-1/2 ">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#features">Service</NavLink>
              <NavLink href="#partnership">About</NavLink>
            </div>
          )}

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
                  {minimal && (
                    <>
                      <SheetClose asChild>
                        <Link onClick={() => setOpen(false)} href="/" className="text-black border-none text-start text-2xl">Home</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link onClick={() => setOpen(false)} href="#features" className="text-black border-none text-start text-2xl">Service</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link onClick={() => setOpen(false)} href="#partnership" className="text-black border-none text-start text-2xl">About</Link>
                      </SheetClose>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* BREADCRUMB — untuk minimal mode */}
      {/* {minimal && (
        <div className="px-4 py-4 bg-background border-b border-gray-200">
          <div className="xmax-w-8xl mx-auto flex items-center gap-2 flex-wrap">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={breadcrumb.href} className="flex items-center gap-2">
                {breadcrumb.isActive ? (
                  <span className="text-orange-500 font-semibold text-sm md:text-base">
                    {breadcrumb.label}
                  </span>
                ) : (
                  <>
                    <Link href={breadcrumb.href} className="text-gray-600 hover:text-gray-900 text-sm md:text-base transition-colors">
                      {breadcrumb.label}
                    </Link>
                    <ChevronRight size={18} className="text-gray-400" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )} */}
    </>
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
        text-base
        font-medium
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