import Image from "next/image";
import { Button } from "../../components/ui/Button";
import { SectionFadeIn } from "../../components/SectionFadeIn";
import { ExpandableServiceCard } from "../../components/ExpandableServiceCard";
import Hero from "../../components/Hero";

const valueProps = [
  {
    title: "Tiered for every need",
    body: "From a thorough wash and vacuum to full interior extraction and pre-sale presentation.",
  },
  {
    title: "Transparent pricing",
    body: "Know the price before we start. Expand any package to see exactly what is included.",
  },
  {
    title: "Protection add-ons",
    body: "Clay bar, sealant, leather care and more—stack extras or book them on their own.",
  },
];

const tierSummary = [
  {
    name: "Level 1",
    blurb: "Wash, wheels, jambs, interior wipe-down and vacuum.",
  },
  {
    name: "Level 2",
    blurb: "Everything in Level 1 plus ceramic sealant on exterior and wheels.",
  },
  {
    name: "Level 3",
    blurb: "Level 2 plus steam cleaning and carpet shampoo & extraction.",
  },
  {
    name: "Pre-Sale",
    blurb: "Sale-ready: Level 3 scope plus engine bay, checks and listing photos.",
  },
];

const processSteps = [
  { step: "01", title: "Reach out", detail: "Tell us your vehicle and which package you want." },
  { step: "02", title: "We detail", detail: "Careful prep, consistent methods, no shortcuts." },
  { step: "03", title: "Inspect & enjoy", detail: "Walk through the finish and head off with confidence." },
];

const mainPackages = [
  {
    title: "Level 1 Detail",
    price: "$120",
    items: [
      "Pressure wash",
      "Snow foam (pre-wash if required)",
      "Wheels hand washed",
      "Body hand washed using the two bucket method",
      "Inner door jambs cleaned",
      "Tyres dressed",
      "Door and interior panels wiped down",
      "Full interior vacuum",
      "Air freshener",
    ],
  },
  {
    title: "Level 2 Detail",
    price: "$170",
    items: [
      "Pressure wash",
      "Snow foam (pre-wash if required)",
      "Iron fallout removal on wheels",
      "Wheels hand washed",
      "Body hand washed using the two bucket method",
      "Inner door jambs cleaned",
      "Ceramic sealant applied to exterior and wheels",
      "Tyres dressed",
      "Door and interior panels wiped down",
      "Full interior vacuum",
      "Interior panel protection",
      "Air freshener",
    ],
  },
  {
    title: "Level 3 Detail",
    price: "$350",
    items: [
      "Pressure wash",
      "Snow foam (pre-wash if required)",
      "Iron fallout removal on wheels",
      "Wheels hand washed",
      "Body hand washed using the two bucket method",
      "Inner door jambs cleaned",
      "Ceramic sealant applied to exterior and wheels",
      "Tyres dressed",
      "Door and interior panels wiped down",
      "Full interior vacuum",
      "Interior panel protection",
      "Air freshener",
      "Full interior steam cleaning",
      "Carpet shampoo and extraction",
    ],
  },
  {
    title: "Pre-Sale Detail",
    price: "$550",
    items: [
      "Pressure wash",
      "Snow foam (pre-wash if required)",
      "Iron fallout removal on wheels",
      "Wheels hand washed",
      "Body hand washed using the two bucket method",
      "Inner door jambs cleaned",
      "Ceramic sealant applied to exterior and wheels",
      "Tyres dressed",
      "Door and interior panels wiped down",
      "Full interior vacuum",
      "Interior panel protection",
      "Air freshener",
      "Full interior steam cleaning and carpet extraction",
      "Engine bay detail",
      "Windscreen washer fluid top-up",
      "Tyres checked and pumped",
      "Professional photos taken for sale listings",
    ],
  },
];

const additionalServices = [
  {
    title: "Clay Bar & Ceramic Sealant",
    price: "$150",
    description:
      "Removes embedded contaminants and applies a protective ceramic sealant to enhance gloss and protection.",
  },
  {
    title: "Headlight Restoration",
    price: "$130",
    description:
      "Restores faded or oxidised headlights, improving clarity and night visibility.",
  },
  {
    title: "Leather Deep Clean & Protection",
    price: "$60",
    description:
      "Deep cleaning treatment followed by protective coating to maintain leather condition.",
  },
  {
    title: "Engine Bay Detail",
    price: "$80",
    description:
      "Careful cleaning and dressing of engine bay components to restore a clean factory look.",
  },
];

export const metadata = {
  title: "Services | M&M Auto Detailing",
  description:
    "Mobile car detailing packages: Level 1–3 details, Pre-Sale detail, clay bar, headlight restoration, leather care and more.",
};

export default function ServicesPage() {
  return (
    <main>
      <Hero
        title="Our Services"
        subtitle="Detailing Packages"
        description="Choose the level of care that suits your vehicle. All packages are delivered with the same attention to detail."
        variant="page"
        compact
      />

      {/* Full-bleed visual — breaks up vertical rhythm and uses horizontal space */}
      <section className="relative mx-6 md:mx-10 lg:mx-16 mt-4 mb-4 md:mb-0 rounded-3xl overflow-hidden border border-white/10 min-h-[220px] md:min-h-[320px] lg:min-h-[380px]">
        <Image
          src="/images/glsfoam_contact.jpeg"
          alt="Snow foam pre-wash on vehicle"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent md:via-background/50" />
        <div className="relative z-10 flex min-h-[220px] md:min-h-[320px] lg:min-h-[380px] items-center px-8 md:px-14 py-10 md:py-14">
          <SectionFadeIn className="max-w-xl">
            <p className="text-accent font-medium tracking-[0.25em] text-sm mb-3">
              MOBILE DETAILING
            </p>
            <p className="font-heading text-2xl md:text-4xl text-text leading-tight">
              Same meticulous process on every tier—only the depth of work changes.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20 max-w-6xl mx-auto">
        <SectionFadeIn>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="relative pl-5 border-l-2 border-accent/40"
              >
                <h2 className="font-heading text-lg md:text-xl text-text mb-2">
                  {item.title}
                </h2>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </SectionFadeIn>
      </section>

      <section className="px-6 py-12 md:py-16 bg-surface/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionFadeIn>
            <h2 className="font-heading text-center text-xl md:text-2xl text-text mb-10 md:mb-12">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {processSteps.map((s) => (
                <div key={s.step} className="text-center md:text-left">
                  <span className="text-accent/90 font-heading text-4xl md:text-5xl font-light">
                    {s.step}
                  </span>
                  <h3 className="font-heading text-lg text-text mt-2 mb-2">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <SectionFadeIn>
          <div className="flex flex-col xl:grid xl:grid-cols-12 xl:gap-12 xl:items-start">
            <div className="xl:col-span-7 space-y-4 order-2 xl:order-1">
              <h2 className="font-heading text-2xl md:text-3xl text-text mb-2">
                Main Detailing Packages
              </h2>
              <p className="text-text-muted mb-8 xl:mb-10 max-w-2xl">
                Click &quot;View what&apos;s included&quot; on each card to see the full list of services.
              </p>
              <div className="space-y-4">
                {mainPackages.map((pkg, index) => (
                  <SectionFadeIn key={pkg.title} delay={index * 80}>
                    <ExpandableServiceCard
                      title={pkg.title}
                      price={pkg.price}
                      items={pkg.items}
                      badge={
                        pkg.title === "Level 3 Detail"
                          ? "Most popular"
                          : pkg.title === "Pre-Sale Detail"
                            ? "Sale-ready"
                            : undefined
                      }
                    />
                  </SectionFadeIn>
                ))}
              </div>
            </div>
            <aside className="xl:col-span-5 order-1 xl:order-2 mb-12 xl:mb-0 xl:sticky xl:top-28">
              <SectionFadeIn delay={100}>
                <div className="rounded-2xl border border-white/10 bg-background/80 backdrop-blur-sm p-6 md:p-8">
                  <h3 className="font-heading text-lg text-text mb-1">
                    At a glance
                  </h3>
                  <p className="text-text-muted text-sm mb-6">
                    Quick guide to how the main packages stack. Open a card for the full checklist.
                  </p>
                  <ul className="space-y-5">
                    {tierSummary.map((row) => (
                      <li key={row.name} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                        <span className="font-heading text-accent text-sm">{row.name}</span>
                        <p className="text-text-muted text-sm mt-1 leading-relaxed">
                          {row.blurb}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-text-muted text-sm mb-4">
                      Want long-term paint protection? Explore our ceramic coating range.
                    </p>
                    <Button href="/ceramic" variant="outline" className="w-full sm:w-auto">
                      Prizm ceramic coatings
                    </Button>
                  </div>
                </div>
              </SectionFadeIn>
            </aside>
          </div>
        </SectionFadeIn>
      </section>

      <section className="px-6 py-16 md:py-24 bg-surface/40">
        <div className="max-w-5xl mx-auto">
          <SectionFadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-text mb-2 text-center">
              Additional Services
            </h2>
            <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
              Add-ons and standalone services to keep your car in top condition.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <SectionFadeIn key={service.title} delay={index * 60}>
                  <div className="p-6 rounded-2xl bg-background/60 border border-white/10 hover:border-accent/20 transition-all duration-300 h-full flex flex-col">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <h3 className="font-heading text-lg md:text-xl text-text">
                        {service.title}
                      </h3>
                      <span className="text-accent font-semibold whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </SectionFadeIn>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 text-center">
        <SectionFadeIn>
          <h2 className="font-heading text-2xl md:text-3xl text-text mb-6">
            Ready to book?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Book Now</Button>
            <Button href="/ceramic" variant="outline">
              View Ceramic Coatings
            </Button>
          </div>
        </SectionFadeIn>
      </section>
    </main>
  );
}
