"use client";

import { SectionFadeIn } from "@/components/SectionFadeIn";

const galleryImages = [
  { id: 1, alt: "Luxury vehicle detail", category: "Ceramic Coating" },
  { id: 2, alt: "Paint correction result", category: "Paint Correction" },
  { id: 3, alt: "Interior restoration", category: "Interior" },
  { id: 4, alt: "Exterior finish", category: "Full Detail" },
  { id: 5, alt: "Before and after", category: "Transformation" },
  { id: 6, alt: "Premium finish", category: "Ceramic Coating" },
  { id: 7, alt: "Detail work", category: "Paint Correction" },
  { id: 8, alt: "Showroom shine", category: "Full Detail" },
  { id: 9, alt: "Leather interior", category: "Interior" },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="min-h-[50vh] flex flex-col justify-center items-center px-6 pt-32 pb-16">
        <SectionFadeIn>
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase block mb-4">
            Our Work
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-center text-text mb-6">
            Gallery
          </h1>
          <p className="text-text-muted text-center max-w-2xl text-lg">
            A glimpse into our work. Every vehicle receives the same obsessive
            attention to detail.
          </p>
        </SectionFadeIn>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <SectionFadeIn key={image.id} delay={index * 50}>
                <div className="group relative aspect-[4/3] bg-surface rounded-2xl border border-white/5 overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10" />
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/0 transition-colors duration-300 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-accent text-sm font-medium">
                      {image.category}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-surface group-hover:scale-110 transition-transform duration-500 ease-out">
                    <div className="w-24 h-24 rounded-full border border-accent/20 flex items-center justify-center">
                      <span className="text-accent/50 text-4xl font-heading">
                        {String(image.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
