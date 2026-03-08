"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 font-medium transition-all duration-300 ease-out rounded-sm";

  const variants = {
    primary:
      "bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#E5C158] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_4px_20px_rgba(0,0,0,0.3)]",
    secondary:
      "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-[#EAEAEA] hover:text-[#D4AF37] hover:bg-white/5 transition-colors",
  };

  const combinedClassName = `${baseStyles} ${variants[variant] ?? variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
