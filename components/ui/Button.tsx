"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 font-medium transition-all duration-300 ease-out rounded-sm";

  const variants = {
    primary:
      "bg-[#60A5FA] text-[#0F172A] hover:bg-[#93C5FD] hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] hover:-translate-y-0.5 active:translate-y-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_4px_20px_rgba(96,165,250,0.3)]",
    secondary:
      "border border-[#60A5FA] text-[#60A5FA] hover:bg-[#60A5FA]/15 hover:shadow-[0_0_20px_rgba(96,165,250,0.2)] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-[#60A5FA]/50 text-[#60A5FA] hover:bg-[#60A5FA]/15 hover:border-[#60A5FA] hover:shadow-[0_0_20px_rgba(96,165,250,0.2)] hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-[#FFFFFF] hover:text-[#60A5FA] hover:bg-white/10 transition-colors",
  };

  const combinedClassName = `${baseStyles} ${variants[variant] ?? variants.primary} ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`;

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
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
