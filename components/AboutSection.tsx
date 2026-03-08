"use client";

import { SectionFadeIn } from "./SectionFadeIn";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionFadeIn>
            <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
              Our Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 text-text leading-tight">
              Where Precision Meets Passion
            </h2>
            <div className="mt-8 space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                We believe every vehicle deserves to look its absolute best. Founded on a commitment
                to excellence, our studio brings together cutting-edge techniques with an obsessive
                attention to detail.
              </p>
              <p>
                From exotic supercars to cherished classics, we treat each vehicle as a masterpiece
                worthy of museum-quality care. Our team of certified specialists uses only the
                finest products and most advanced methods in the industry.
              </p>
              <p>
                The result? A finish that turns heads and protection that stands the test of time.
                This isn&apos;t just detailing—it&apos;s automotive artistry.
              </p>
            </div>
          </SectionFadeIn>
        </div>
      </div>
    </section>
  );
}
