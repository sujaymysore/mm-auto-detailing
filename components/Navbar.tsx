"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/ceramic", label: "Ceramic Coating" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-xl font-medium tracking-wide text-text transition-colors duration-200 hover:text-accent"
        >
          M&M AUTO DETAILING
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wider transition-all duration-200 hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-text/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm border border-accent/50 bg-accent/5 px-5 py-2.5 text-sm font-medium text-accent transition-all duration-250 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 text-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-300`}
      >
        <div className="flex flex-col gap-8 px-8 py-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-medium transition-colors duration-200 hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 inline-block rounded-sm border border-accent px-8 py-4 text-center text-lg font-medium text-accent"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
