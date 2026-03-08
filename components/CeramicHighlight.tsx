"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { SectionFadeIn } from "./SectionFadeIn";

export function CeramicHighlight() {
  return (
    <section className="py-24 md:py-32 bg-surface/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <SectionFadeIn>
            <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
              Signature Service
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-text leading-tight">
              Ceramic Coating & Paint Correction
            </h2>
            <p className="text-text-muted mt-6 text-lg leading-relaxed">
              Our flagship service combines precision paint correction with industry-leading ceramic
              coating technology. Transform your vehicle with a mirror-like finish and protection
              that lasts for years.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "9H hardness nano-ceramic protection",
                "Multi-stage paint correction",
                "5+ year durability guarantee",
                "Hydrophobic self-cleaning surface",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-text">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/ceramic">Explore Ceramic Coating</Button>
              <Button href="/contact" variant="outline">
                Book Consultation
              </Button>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={200}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full border-2 border-accent/30 flex items-center justify-center mb-4">
                    <svg
                      className="w-12 h-12 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <p className="text-text-muted text-sm">Premium protection</p>
                  <p className="text-accent font-heading text-2xl mt-1">Showroom Finish</p>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </div>
    </section>
  );
}
