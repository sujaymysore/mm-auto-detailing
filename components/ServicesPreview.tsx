"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { SectionFadeIn } from "./SectionFadeIn";

const services = [
  {
    title: "Ceramic Coating",
    description: "Premium nano-ceramic protection that delivers unmatched gloss and durability for years.",
    href: "/ceramic",
  },
  {
    title: "Paint Correction",
    description: "Precision correction to restore your vehicle's factory finish to showroom perfection.",
    href: "/ceramic",
  },
  {
    title: "Interior Detailing",
    description: "Luxury interior restoration with premium leather care and deep cleaning.",
    href: "/services",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionFadeIn>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
              What We Offer
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-text">
              Premium Services
            </h2>
            <p className="text-text-muted mt-6 max-w-2xl mx-auto text-lg">
              Every vehicle deserves the finest care. Our expert techniques and premium products
              deliver results that exceed expectations.
            </p>
          </div>
        </SectionFadeIn>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <SectionFadeIn key={service.title} delay={index * 100}>
              <Link
                href={service.href}
                className="group block p-8 md:p-10 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.15)]"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <span className="text-accent text-xl font-heading font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl text-text mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </SectionFadeIn>
          ))}
        </div>

        <SectionFadeIn>
          <div className="text-center mt-16">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}
