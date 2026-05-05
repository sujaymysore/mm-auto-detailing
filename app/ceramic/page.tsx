import Image from "next/image";
import { Button } from "../../components/ui/Button";
import { SectionFadeIn } from "../../components/SectionFadeIn";
import { ExpandableServiceCard } from "../../components/ExpandableServiceCard";

/* All PRIZM products in page order: main coatings then extras */
const prizmPhotos = [
  "/images/prizmForgeScroll.png",
  "/images/prizmVantageScroll4k.png",
  "/images/prizmGenesisScroll.jpg",
  "/images/prizmEternityScroll.png",
  "/images/prizmClarityScroll.png",
  "/images/prizmDriftScroll.png",
  "/images/prizmVelarScroll.png",
];

/* ----- Section 2: Surface preparation ----- */
const paintCorrection = [
  {
    title: "One Stage Paint Correction",
    price: "$400",
    description:
      "Removes light swirl marks and minor imperfections while restoring gloss and depth to the paintwork.",
  },
  {
    title: "Two Stage Paint Correction",
    price: "$600",
    description:
      "A more intensive process designed to remove deeper scratches, swirl marks and paint imperfections for a high-gloss finish.",
  },
];

/* ----- Section 3: Main coating ladder (Forge → Vantage → Genesis → Eternity) ----- */
const mainCoatings = [
  {
    name: "Prizm Forge 3-Year Coating",
    price: "$650",
    highlight: "3 years of protection",
    description:
      "Durable ceramic coating providing long-term gloss and hydrophobic protection.",
    benefits: ["Hydrophobic water beading", "UV protection", "Enhanced gloss"],
  },
  {
    name: "Prizm Vantage 5-Year Coating",
    price: "$850",
    highlight: "5 years of protection",
    description:
      "Premium ceramic protection with increased durability and chemical resistance.",
    benefits: [
      "Extreme water repellency",
      "UV protection",
      "Chemical resistance",
      "Deep gloss finish",
    ],
  },
  {
    name: "Prizm Genesis Graphene Coating",
    price: "$1000",
    highlight: "7 years of protection",
    description:
      "Advanced graphene coating delivering superior hydrophobic performance.",
    benefits: [
      "Graphene heat resistance",
      "Extreme hydrophobic effect",
      "Anti-static surface",
      "Superior durability",
    ],
  },
  {
    name: "Prizm Eternity Ceramic Coating",
    price: "$1250",
    highlight: "10+ years of protection",
    premium: true,
    description:
      "Our flagship ceramic coating: maximum gloss, extreme hydrophobicity and chemical resistance.",
    benefits: [
      "Maximum gloss enhancement",
      "Ultimate chemical resistance",
      "Extreme hydrophobic protection",
      "Long-term durability",
    ],
  },
];

/* ----- Section 4: Extras and aftercare ----- */
const extras = [
  {
    name: "Prizm Clarity Glass Coating",
    price: "$120",
    description:
      "Protective coating for glass surfaces: improved water repellency and visibility in wet conditions.",
    benefits: ["Improves wet weather visibility", "Water repellent glass surface"],
  },
  {
    name: "Prizm Drift Seat & Carpet Coating",
    price: "$150",
    description:
      "Protection for fabric seats and carpets against stains, liquids and everyday wear.",
    benefits: ["Stain protection", "Liquid resistance", "Fabric longevity"],
  },
  {
    name: "Prizm Velar Leather Protection",
    price: "$150",
    description:
      "High-end leather protection to maintain softness and prevent cracking and staining.",
    benefits: ["Prevents cracking", "Stain protection", "Maintains leather softness"],
  },
];

const maintenanceDetailItems = [
  "Pressure wash",
  "Snow foam pre-wash",
  "Wheels hand washed",
  "Body hand washed using the two bucket method",
  "Inner door jambs cleaned",
  "Tyres dressed",
  "Door and interior panels wiped down",
  "Full interior vacuum",
  "Air freshener",
];

export const metadata = {
  title: "Ceramic Coating Sydney | PRIZM Ceramic Coatings | M&M Auto Detailing",
  description:
    "PRIZM ceramic coating services in Sydney for long-lasting paint protection, gloss and easier maintenance. Explore coating packages and add-ons.",
};

export default function CeramicPage() {
  return (
    <main className="prizm-page-bg">

      {/* ——— 1. Brand introduction ——— */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
        <SectionFadeIn>
          <h1 className="font-heading text-5xl md:text-7xl prizm-copper-text tracking-[0.18em] mb-6">
            PRIZM CERAMIC COATINGS
          </h1>
          <p className="text-xl md:text-2xl text-text font-light max-w-2xl mx-auto mb-6">
            Premium coating technology built by professional detailers.
          </p>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
            Engineered for gloss, durability, slickness and real-world protection.
            A brand created to deliver the best ceramic coatings—with formulas
            focused on consistent performance and easier application.
          </p>
        </SectionFadeIn>
      </section>

      {/* ——— PRIZM visual strip (infinite scroll) ——— */}
      <section className="px-6 pb-20 md:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          <SectionFadeIn>

            <div className="relative overflow-hidden">

              {/* gradient fades */}
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              <div className="flex prizm-scroll-track gap-6 w-max">

                {[...prizmPhotos, ...prizmPhotos].map((src, index) => (
                  <div
                    key={index}
                    className="relative w-[320px] h-[320px] rounded-2xl overflow-hidden border border-white/10 flex-shrink-0"
                  >
                    <Image
                      src={src}
                      alt="Prizm ceramic coating product"
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  </div>
                ))}

              </div>

            </div>

          </SectionFadeIn>

        </div>
      </section>

      {/* ——— 2. Surface preparation ——— */}
      <section className="px-6 py-20 md:py-28 max-w-4xl mx-auto">
        <SectionFadeIn>
          <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
            Before the Coating Goes On
          </h2>
          <p className="text-text-muted mb-12 max-w-2xl">
            Ceramic coating is only as good as the surface underneath it. Proper
            preparation—surface correction and defect removal—creates the
            foundation for long-lasting results.
          </p>

          <div className="space-y-6">
            {paintCorrection.map((item, index) => (
              <SectionFadeIn key={item.title} delay={index * 80}>
                <div className="p-8 rounded-2xl bg-surface border border-white/10 hover:border-[#C07A57]/40 transition-all duration-300">
                  <div className="flex justify-between mb-3">
                    <h3 className="font-heading text-xl text-text">
                      {item.title}
                    </h3>
                    <span className="text-[#C07A57] font-semibold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-text-muted">{item.description}</p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </SectionFadeIn>
      </section>

      {/* ——— 3. Main coating range ——— */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <SectionFadeIn>
            <h2 className="font-heading text-4xl md:text-5xl prizm-copper-text tracking-[0.18em] mb-4 text-center">
              Choose Your Level of Protection
            </h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-14">
              The PRIZM range: from entry-level durability to flagship
              long-term protection. This is the core coating ladder.
            </p>
          </SectionFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainCoatings.map((coating, index) => (
              <SectionFadeIn key={coating.name} delay={index * 80}>
                <div
                  className={`p-8 rounded-2xl bg-background/60 border border-white/10 transition-all duration-300 h-full flex flex-col ${
                    coating.premium ? "coating-card-premium" : ""
                  }`}
                >
                  <div className="flex flex-col gap-1 mb-3">
                    <h3 className="font-heading text-lg text-text">
                      {coating.name}
                    </h3>
                    <span className="text-[#C07A57] font-semibold">
                      {coating.price}
                    </span>
                  </div>
                  {coating.highlight && (
                    <p className="text-[#D79A7A] text-sm font-medium mb-3">
                      {coating.highlight}
                    </p>
                  )}
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {coating.description}
                  </p>
                  <ul className="mt-4 space-y-1 text-sm text-text-muted">
                    {coating.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2">
                        <span className="text-[#C07A57]">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 4. Extras and ongoing care ——— */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <SectionFadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-text mb-4 text-center">
              Complete the Package
            </h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-14">
              Supporting protection, finishing touches and ongoing care. Glass,
              fabric, leather and maintenance—all in one place.
            </p>
          </SectionFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {extras.map((item, index) => (
              <SectionFadeIn key={item.name} delay={index * 60}>
                <div className="p-8 rounded-2xl bg-background/60 border border-white/10 hover:border-[#C07A57]/40 transition-all duration-300 h-full flex flex-col">
                  <div className="flex justify-between mb-3">
                    <h3 className="font-heading text-lg text-text">
                      {item.name}
                    </h3>
                    <span className="text-[#C07A57] font-semibold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-1 text-sm text-text-muted">
                    {item.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2">
                        <span className="text-[#C07A57]">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionFadeIn>
            ))}
          </div>

          <SectionFadeIn>
            <p className="text-text-muted text-center mb-6 max-w-xl mx-auto">
              Keep your coating performing. Our monthly maintenance detail is
              designed for vehicles that already have ceramic protection.
            </p>
            <div className="max-w-2xl mx-auto">
              <ExpandableServiceCard
                title="Ceramic Coating Maintenance Detail"
                price="$100 (Monthly Plan)"
                items={maintenanceDetailItems}
              />
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 text-center">
        <SectionFadeIn>
          <h2 className="font-heading text-3xl text-text mb-6">
            Get a quote
          </h2>
          <Button href="/contact">Contact Us</Button>
        </SectionFadeIn>
      </section>

    </main>
  );
}
