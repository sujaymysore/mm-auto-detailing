"use client";

import { Button } from "./ui/Button";
import { SectionFadeIn } from "./SectionFadeIn";

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export function CallToAction({
  title = "Ready to Transform Your Vehicle?",
  subtitle = "Experience the difference of premium automotive detailing. Book your consultation today.",
  primaryCta = "Book Now",
  secondaryCta = "View Services",
}: CallToActionProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      <div className="container mx-auto px-6 md:px-12 relative">
        <SectionFadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text leading-tight">
              {title}
            </h2>
            <p className="text-text-muted mt-6 text-lg">{subtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact">{primaryCta}</Button>
              <Button href="/services" variant="outline">
                {secondaryCta}
              </Button>
            </div>
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}
