"use client";

import { AuthNav } from "@/components/navbar/AuthNav";
import { Button } from "@/components/ui/Button";
import { MAIN_NAV } from "@/lib/constants/navigation";
import { SITE_CONFIG } from "@/lib/constants/site";
import { useUIStore } from "@/store/useUIStore";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const pathname = usePathname();
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useUIStore();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <nav className="container-custom flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-black text-sm font-bold text-white">
            Z
          </span>
          <span className="hidden font-bold tracking-tight sm:block">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-blue",
                pathname === item.href ? "text-brand-blue" : "text-brand-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
        <AuthNav />
          <Button variant="ghost" href={`tel:${SITE_CONFIG.phone}`}>
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">Call Us</span>
          </Button>
          <Button href="/booking">Book Site Visit</Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="animate-fade-in border-t border-gray-100 bg-white md:hidden">
          <div className="container-custom flex flex-col gap-4 py-4">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
           <AuthNav />
            <Button href="/booking" className="w-full">
              Book Site Visit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
