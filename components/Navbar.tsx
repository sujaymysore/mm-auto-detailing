"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  InstagramIcon,
  SOCIAL_LINKS,
  SocialIconLink,
  TiktokIcon,
} from "./SocialIcons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/bikes", label: "Bikes" },
  { href: "/ceramic", label: "Ceramic Coating" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">

          {/* Logo + wordmark */}
          <Link
            href="/"
            className="group relative flex items-center gap-3 rounded-md ring-2 ring-transparent transition-[shadow,transform] duration-200 hover:-translate-y-px hover:shadow-[0_0_22px_rgba(251,191,36,0.35),0_8px_24px_rgba(0,0,0,0.35)] active:translate-y-0 active:shadow-[0_0_28px_rgba(251,191,36,0.5)] focus-visible:outline-none focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
          >
            <Image
              src="/FullLogo.jpg"
              alt="M&M Auto Detailing"
              width={80}
              height={32}
              className="object-contain transition-[filter] duration-200 group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.55)]"
              priority
            />
            <span className="hidden sm:block font-heading text-sm font-light tracking-[0.2em] text-white/80 transition-colors duration-200 group-hover:text-amber-300">
              M&amp;M AUTO DETAILING
            </span>
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
            <div className="flex items-center gap-2">
              <SocialIconLink href={SOCIAL_LINKS.instagram} label="Instagram" size="sm">
                <InstagramIcon />
              </SocialIconLink>
              <SocialIconLink href={SOCIAL_LINKS.tiktok} label="TikTok" size="sm">
                <TiktokIcon />
              </SocialIconLink>
            </div>
            <Link
              href="/contact"
              className="rounded-sm border border-accent/50 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-all duration-200 hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(96,165,250,0.25)]"
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
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-[60] bg-[#0F172A] border-t border-white/10 shadow-2xl md:hidden">
          <div className="flex h-full flex-col gap-8 overflow-y-auto px-8 py-12">
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
            <div className="flex items-center gap-3">
              <SocialIconLink href={SOCIAL_LINKS.instagram} label="Instagram">
                <InstagramIcon />
              </SocialIconLink>
              <SocialIconLink href={SOCIAL_LINKS.tiktok} label="TikTok">
                <TiktokIcon />
              </SocialIconLink>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-block rounded-sm border border-accent px-8 py-4 text-center text-lg font-medium text-accent"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
