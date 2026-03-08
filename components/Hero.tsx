import Link from "next/link";
import { Button } from "./ui/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  showCta?: boolean;
  variant?: "home" | "page";
}

export default function Hero({
  title,
  subtitle,
  description,
  showCta = true,
  variant = "home",
}: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      {/* Subtle radial glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {subtitle && (
          <p className="mb-4 font-medium tracking-[0.3em] text-accent">
            {subtitle}
          </p>
        )}
        <h1 className="font-heading text-5xl font-light leading-tight tracking-tight text-text md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text/70">
            {description}
          </p>
        )}
        {showCta && variant === "home" && (
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Book Your Detail
            </Button>
            <Button href="/services" variant="secondary">
              View Services
            </Button>
          </div>
        )}
        {showCta && variant === "page" && (
          <div className="mt-12">
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {variant === "home" && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-px bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      )}
    </section>
  );
}
