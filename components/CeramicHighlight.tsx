"use client";

import Image from "next/image";
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
              Prizm Ceramic Coating & Paint Correction
            </h2>
            <p className="text-text-muted mt-6 text-lg leading-relaxed">
              Our flagship service combines precision paint correction with industry-leading ceramic
              coating technology. Transform your vehicle with a mirror-like finish and protection
              that lasts for years.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Advanced ceramic & graphene protection technology",
                "High hydrophobic surface that repels water and dirt",
                "Deep high-gloss mirror finish for a showroom-like appearance",
                "UV, chemical and environmental damage resistance for long-term protection",
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
              <Image
                src="/images/gti75%25home_hero.jpeg"
                alt="Volkswagen Golf GTI with showroom ceramic coating finish"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-text-muted text-sm">Premium protection</p>
                <p className="text-accent font-heading text-2xl mt-1">Showroom Finish</p>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </div>
    </section>
  );
}
