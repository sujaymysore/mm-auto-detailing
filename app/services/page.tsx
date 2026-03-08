import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionFadeIn } from "@/components/SectionFadeIn";
import Hero from "@/components/Hero";

const services = [
  {
    title: "Ceramic Coating",
    description:
      "Premium multi-layer ceramic protection that creates an ultra-smooth, hydrophobic surface. Your vehicle deserves the ultimate shield against environmental contaminants.",
    features: ["9H hardness", "5-year warranty", "Hydrophobic finish"],
  },
  {
    title: "Paint Correction",
    description:
      "Precision multi-stage correction to restore your paint to showroom perfection. We eliminate swirls, scratches, and oxidation for a flawless finish.",
    features: ["Multi-stage polish", "Swirl removal", "Mirror-like finish"],
  },
  {
    title: "Interior Detailing",
    description:
      "Luxury interior restoration and protection. From leather conditioning to fabric treatment, we bring your cabin back to pristine condition.",
    features: ["Leather care", "Deep cleaning", "Odor elimination"],
  },
  {
    title: "Paint Protection Film",
    description:
      "Invisible armor for your vehicle. Self-healing PPF protects against rock chips, scratches, and UV damage while maintaining perfect clarity.",
    features: ["Self-healing", "Invisible protection", "UV resistant"],
  },
];

export const metadata = {
  title: "Services | M&M Auto Detailing",
  description:
    "Explore our premium detailing services: ceramic coating, paint correction, interior detailing, and paint protection film.",
};

export default function ServicesPage() {
  return (
    <main>
      <Hero
        title="Our Services"
        subtitle="Premium Care"
        description="Precision care for the vehicles you love. Every service is executed with obsessive attention to detail."
        variant="page"
      />

      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="space-y-24">
          {services.map((service, index) => (
            <SectionFadeIn key={service.title} delay={index * 100}>
              <div
                className={`flex flex-col gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center`}
              >
                <div className="flex-1">
                  <h2 className="font-heading text-3xl md:text-4xl text-accent mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-muted text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-text-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full aspect-video bg-surface rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden group">
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 group-hover:scale-105 transition-transform duration-500 ease-out flex items-center justify-center">
                    <span className="text-text-muted/30 text-sm">
                      Service image
                    </span>
                  </div>
                </div>
              </div>
            </SectionFadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32 text-center">
        <SectionFadeIn>
          <h2 className="font-heading text-2xl md:text-3xl text-text mb-6">
            Ready to elevate your vehicle?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Book a Consultation</Button>
            <Button href="/ceramic" variant="outline">
              Learn About Ceramic Coating
            </Button>
          </div>
        </SectionFadeIn>
      </section>
    </main>
  );
}
