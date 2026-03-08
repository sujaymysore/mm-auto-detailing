import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionFadeIn } from "@/components/SectionFadeIn";
import Hero from "@/components/Hero";

const benefits = [
  "Extreme hydrophobic surface — water beads and rolls off effortlessly",
  "9H hardness rating — resists scratches and minor abrasions",
  "UV protection — prevents oxidation and fading",
  "Chemical resistance — protects against acidic contaminants",
  "Easier maintenance — dirt and grime release with simple rinses",
  "Long-lasting brilliance — maintains that showroom shine for years",
];

const process = [
  {
    step: "01",
    title: "Assessment & Prep",
    description:
      "We evaluate your vehicle's condition and perform a thorough decontamination wash.",
  },
  {
    step: "02",
    title: "Paint Correction",
    description:
      "Multi-stage correction to eliminate imperfections before coating application.",
  },
  {
    step: "03",
    title: "Coating Application",
    description:
      "Precision application of ceramic layers in a controlled environment.",
  },
  {
    step: "04",
    title: "Cure & Final Inspection",
    description:
      "Proper curing time and final quality check before delivery.",
  },
];

export const metadata = {
  title: "Ceramic Coating & Paint Correction | M&M Auto Detailing",
  description:
    "Premium ceramic coating and paint correction services. Protect and perfect your vehicle's finish with our expert application.",
};

export default function CeramicPage() {
  return (
    <main>
      <Hero
        title="Ceramic Coating & Paint Correction"
        subtitle="Premium Protection"
        description="The ultimate combination for perfection. We correct every imperfection, then seal it with industry-leading ceramic protection."
        variant="page"
      />

      <section className="px-6 py-24 bg-surface/50">
        <div className="max-w-4xl mx-auto">
          <SectionFadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-12 text-center">
              Why Ceramic Coating?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-4 p-6 rounded-xl bg-background/50 border border-white/5 hover:border-accent/20 transition-all duration-300"
                >
                  <span className="text-accent font-heading text-xl shrink-0">
                    ◆
                  </span>
                  <p className="text-text-muted">{benefit}</p>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <SectionFadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-16 text-center">
              Our Process
            </h2>
            <div className="space-y-12">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <span className="font-heading text-5xl text-accent/30 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl text-accent mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="px-6 pb-32 text-center">
        <SectionFadeIn>
          <div className="max-w-2xl mx-auto p-12 rounded-2xl bg-surface border border-accent/20">
            <h2 className="font-heading text-2xl md:text-3xl text-text mb-4">
              Investment in Perfection
            </h2>
            <p className="text-text-muted mb-8">
              Ceramic coating is an investment that pays dividends in protection,
              appearance, and resale value. Contact us for a personalized quote.
            </p>
            <Button href="/contact">Get Your Quote</Button>
          </div>
        </SectionFadeIn>
      </section>
    </main>
  );
}
