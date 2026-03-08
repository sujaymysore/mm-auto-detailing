"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { SectionFadeIn } from "./SectionFadeIn";

const galleryItems = [
  { id: 1, aspect: "aspect-square" },
  { id: 2, aspect: "aspect-[4/5]" },
  { id: 3, aspect: "aspect-square" },
  { id: 4, aspect: "aspect-[4/5]" },
  { id: 5, aspect: "aspect-square" },
  { id: 6, aspect: "aspect-square" },
];

export function GalleryPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionFadeIn>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
              Our Work
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-text">
              Gallery
            </h2>
            <p className="text-text-muted mt-6 max-w-2xl mx-auto text-lg">
              Every detail tells a story. Explore our portfolio of transformed vehicles.
            </p>
          </div>
        </SectionFadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <SectionFadeIn key={item.id} delay={index * 80}>
              <Link
                href="/gallery"
                className={`group block ${item.aspect} rounded-xl overflow-hidden bg-surface border border-white/5 hover:border-accent/20 transition-all duration-300`}
              >
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 group-hover:scale-105 transition-transform duration-500 ease-out flex items-center justify-center">
                  <div className="text-text-muted/50 group-hover:text-accent/70 transition-colors duration-300">
                    <svg
                      className="w-12 h-12 md:w-16 md:h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </SectionFadeIn>
          ))}
        </div>

        <SectionFadeIn>
          <div className="text-center mt-16">
            <Button href="/gallery" variant="outline">
              View Full Gallery
            </Button>
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}
