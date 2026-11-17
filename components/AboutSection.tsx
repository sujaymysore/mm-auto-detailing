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
              Built From a Genuine Love for Cars
            </h2>
            <div className="mt-8 space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                M&amp;M Auto Detailing started from home in 2023, not as some big studio, but from a
                genuine love for cars and the pride that came with looking after my own first car.
              </p>
              <p>
                What began at home has grown through the suburbs of Sydney, one vehicle and one
                customer at a time. No matter what you drive, it receives the same level of care and
                attention we would give a car belonging to our own family.
              </p>
              <p>
                For us, detailing is about doing the job properly, respecting every vehicle and
                making sure the owner is genuinely happy with the result. That approach has stayed
                the same from the very beginning.
              </p>
            </div>
          </SectionFadeIn>
        </div>
      </div>
    </section>
  );
}
