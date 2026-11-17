import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "../../components/ui/Button";
import { SectionFadeIn } from "../../components/SectionFadeIn";
import { ExpandableServiceCard } from "../../components/ExpandableServiceCard";

const PHONE_HREF = "tel:+61493737792";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D79A7A] focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/* All PRIZM products shown in the scrolling strip */
const prizmPhotos = [
  "/images/prizmForgeScroll.png",
  "/images/prizmVantageScroll4k.png",
  "/images/prizmGenesisScroll.jpg",
  "/images/prizmEternityScroll.png",
  "/images/prizmClarityScroll.png",
  "/images/prizmDriftScroll.png",
  "/images/prizmVelarScroll.png",
];

const SHIELD_ICON =
  "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z";

const includedInEveryPackage = [
  {
    label: "Complete exterior wash and paint decontamination",
    icon: "M12 3.75s-6 6.4-6 10.5a6 6 0 0012 0c0-4.1-6-10.5-6-10.5z",
  },
  {
    label: "Clay bar treatment where required",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  },
  {
    label: "Minimum one-step paint correction",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
  {
    label: "Complete interior protection for leather, plastics, dashboard, carpets and fabrics",
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    label: "Water-repellant glass coating on all exterior glass and wheel faces",
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
  },
  {
    label: "Paint inspection before work begins and final finish inspection",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
];

type CoatingPackage = {
  badge: string;
  name: string;
  title: string;
  price: string;
  bestFor: string;
  description: string;
  includesBase?: boolean;
  benefits: string[];
  cta: string;
  image: string;
  featured?: boolean;
};

/* Order is the desktop layout: Vantage sits in the middle, but stacks first on mobile */
const packages: CoatingPackage[] = [
  {
    badge: "Built for Outdoor Life",
    name: "Prizm Genesis",
    title: "7-Year Graphene Coating",
    price: "$1699",
    bestFor: "Daily drivers that are regularly parked outside",
    description:
      "Built for daily-driven vehicles that spend much of their life outside. Genesis adds greater durability against constant sun exposure, heat, road grime and environmental contamination.",
    includesBase: true,
    benefits: [
      "7-year Prizm graphene coating",
      "Increased UV, heat and chemical resistance",
      "Anti-static surface properties",
      "Stronger hydrophobic performance",
      "Added durability for outdoor daily drivers",
      "Enhanced gloss and colour depth",
    ],
    cta: "Choose 7-Year Protection",
    image: "/images/prizmGenesisScroll.jpg",
  },
  {
    badge: "Most Popular",
    name: "Prizm Vantage",
    title: "5-Year Ceramic Coating",
    price: "$1299",
    bestFor: "Most owners wanting complete gloss, protection and interior care",
    description:
      "The complete protection package and the best all-round choice for most owners. It combines careful paint preparation, long-term ceramic protection and full interior protection in one package.",
    benefits: [
      "Complete exterior wash and decontamination",
      "Minimum one-step paint correction",
      "5-year Prizm ceramic coating",
      "Complete interior protection for leather, plastics, dashboard, carpets and fabrics",
      "Deep gloss and enhanced colour",
      "Strong water repellency",
      "UV and chemical resistance",
      "Easier regular maintenance",
    ],
    cta: "Choose 5-Year Protection",
    image: "/images/prizmVantageScroll4k.png",
    featured: true,
  },
  {
    badge: "Maximum Long-Term Protection",
    name: "Prizm Eternity",
    title: "10+ Year Ceramic Coating",
    price: "$2099",
    bestFor: "Owners planning to keep their vehicle long term",
    description:
      "The highest level of long-term protection in the range. Eternity is designed for owners planning to keep their vehicle and wanting maximum durability, chemical resistance and lasting gloss.",
    includesBase: true,
    benefits: [
      "10+ year Prizm ceramic coating",
      "Maximum long-term durability",
      "Highest chemical resistance in the range",
      "Extreme hydrophobic performance",
      "Maximum gloss enhancement",
      "Long-term protection for committed ownership",
    ],
    cta: "Choose 10+ Year Protection",
    image: "/images/prizmEternityScroll.png",
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

const faqs = [
  {
    question: "Does ceramic coating stop scratches?",
    answer:
      "Ceramic coating improves resistance to light contamination and minor wash-related marks, but it does not make paint scratch-proof. It does not replace paint protection film for stone chips or deeper impacts.",
  },
  {
    question: "Is paint correction included?",
    answer:
      "Yes. Every package includes a minimum one-step paint correction. If the vehicle needs a two-step correction or further paint work, that is explained after inspection and only goes ahead once you approve any additional pricing.",
  },
  {
    question: "Will the coating need maintenance?",
    answer:
      "Yes. Proper washing and periodic maintenance help preserve gloss, water repellency and long-term performance.",
  },
  {
    question: "Can a car parked outside be ceramic coated?",
    answer:
      "Yes. The seven-year Genesis package is the recommended option for daily-driven vehicles regularly exposed to sun, heat, road grime and outdoor contamination.",
  },
  {
    question: "How long does the appointment take?",
    answer:
      "Time depends on the vehicle size, paint condition and preparation required. The final timeframe is confirmed after the vehicle has been assessed.",
  },
];

export const metadata: Metadata = {
  title: "Ceramic Coating Sydney | PRIZM Ceramic & Graphene Coatings | M&M Auto Detailing",
  description:
    "Certified PRIZM installer in Sydney. Choose 5-year ceramic, 7-year graphene or 10+ year ceramic coating with paint correction, interior protection and glass coating included.",
  alternates: {
    canonical: "/ceramic",
  },
};

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 flex-shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PackageCard({ pkg }: { pkg: CoatingPackage }) {
  const featured = pkg.featured;

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-background/70 transition-all duration-300 ${
        featured
          ? "border-[#C07A57]/70 shadow-[0_0_0_1px_rgba(192,122,87,0.3),0_0_50px_rgba(215,154,122,0.18)] lg:-translate-y-4"
          : "border-white/10 hover:border-[#C07A57]/40"
      }`}
    >
      <div className="relative h-44 bg-black md:h-56">
        <Image
          src={pkg.image}
          alt={`${pkg.name} coating bottle`}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 576px, 100vw"
          className="object-contain"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
            featured
              ? "bg-[#C07A57] text-[#0B0B0B] shadow-[0_0_20px_rgba(192,122,87,0.45)]"
              : "border border-[#C07A57]/45 bg-black/70 text-[#E2B79A] backdrop-blur-sm"
          }`}
        >
          {pkg.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#D79A7A]">
          {pkg.name}
        </p>
        <h3 className="mt-2 font-heading text-2xl text-text">{pkg.title}</h3>
        <p className="mt-3 font-heading text-4xl font-semibold text-[#C07A57]">{pkg.price}</p>

        <p
          className={`mt-5 rounded-lg border px-4 py-3 text-sm leading-relaxed text-text ${
            featured
              ? "border-[#C07A57]/50 bg-[#C07A57]/15"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#E2B79A]">
            Best for
          </span>
          {pkg.bestFor}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-text-muted">{pkg.description}</p>

        {pkg.includesBase && (
          <p className="mt-6 text-sm font-semibold text-[#E2B79A]">
            Everything in the 5-Year Ceramic Package, plus:
          </p>
        )}

        <ul className={`flex-1 space-y-2.5 text-sm text-text ${pkg.includesBase ? "mt-3" : "mt-6"}`}>
          {pkg.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-3">
              <CheckIcon className="mt-0.5 text-[#C07A57]" />
              {benefit}
            </li>
          ))}
        </ul>

        <Button
          href="/contact"
          variant={featured ? "primary" : "outline"}
          className={`mt-8 w-full ${focusRing}`}
        >
          {pkg.cta}
        </Button>
      </div>
    </article>
  );
}

export default function CeramicPage() {
  return (
    <div className="prizm-page-bg overflow-x-hidden">
      {/* Brand introduction over the PRIZM scrolling strip */}
      <section className="relative isolate flex min-h-[640px] items-center overflow-hidden px-6 pb-16 pt-28 text-center md:min-h-[760px] md:pb-20 md:pt-32">
        <div className="absolute inset-0 -z-20 flex items-center" aria-hidden="true">
          <div className="prizm-scroll-track flex w-max gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
            {[...prizmPhotos, ...prizmPhotos].map((src, index) => (
              <div
                key={index}
                className="relative h-[480px] w-[300px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-[540px] md:w-[360px]"
              >
                <Image src={src} alt="" fill sizes="(min-width: 768px) 360px, 300px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(11,11,11,0.82)_0%,rgba(11,11,11,0.62)_55%,rgba(11,11,11,0.45)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
          aria-hidden="true"
        />

        <SectionFadeIn className="mx-auto w-full max-w-4xl">
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C07A57]/60 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E2B79A] backdrop-blur-sm">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={SHIELD_ICON} />
            </svg>
            Certified PRIZM Installer
          </p>
          <h1 className="mb-6 font-heading text-5xl tracking-[0.18em] prizm-copper-text md:text-7xl">
            PRIZM CERAMIC COATINGS
          </h1>
          <p className="mx-auto mb-5 max-w-2xl text-xl font-light text-text md:text-2xl">
            Premium coating technology built by professional detailers.
          </p>
          <p className="mx-auto max-w-2xl leading-relaxed text-text/80">
            Engineered for gloss, durability, slickness and real-world protection. A brand
            created to deliver the best ceramic coatings, with formulas focused on
            consistent performance and easier application.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href="#packages" className={focusRing}>
              View Coating Packages
            </Button>
            <Button href={PHONE_HREF} variant="secondary" className={`bg-black/40 backdrop-blur-sm ${focusRing}`}>
              Call or Text
            </Button>
          </div>
        </SectionFadeIn>
      </section>

      {/* Coating packages */}
      <section id="packages" className="scroll-mt-24 px-6 pb-20 pt-8 md:pb-24 md:pt-12">
        <div className="mx-auto max-w-6xl">
          <SectionFadeIn className="mx-auto mb-10 max-w-4xl text-center md:mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#D79A7A]">
              Choose Your Protection
            </p>
            <h2 className="font-heading text-3xl tracking-wide prizm-copper-text md:text-5xl">
              Three levels. One careful process.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-text-muted">
              Every option includes paint preparation, ceramic protection and full interior
              care. The right package depends on how the vehicle is used, where it is stored
              and how long you plan to keep it.
            </p>
          </SectionFadeIn>

          <SectionFadeIn className="mx-auto mb-10 max-w-3xl rounded-2xl border border-[#C07A57]/35 bg-[#C07A57]/10 p-6 text-left md:mb-14 md:p-8">
            <h3 className="font-heading text-xl text-text md:text-2xl">Paint correction included</h3>
            <p className="mt-3 leading-relaxed text-text-muted">
              Every ceramic coating package includes a minimum one-step paint correction to
              improve gloss, remove light swirl marks and properly prepare the paint before
              coating.
            </p>
            <p className="mt-3 leading-relaxed text-text-muted">
              If the vehicle requires a two-step correction or further paint work, this will
              be explained after inspection. Any additional work and pricing must be approved
              before it begins.
            </p>
          </SectionFadeIn>

          <div className="mx-auto grid max-w-xl gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-6">
            {packages.map((pkg, index) => (
              <SectionFadeIn
                key={pkg.name}
                delay={index * 80}
                className={`h-full ${pkg.featured ? "order-first lg:order-none" : ""}`}
              >
                <PackageCard pkg={pkg} />
              </SectionFadeIn>
            ))}
          </div>

          <SectionFadeIn className="mt-14 rounded-2xl border border-[#C07A57]/30 bg-gradient-to-br from-[#C07A57]/15 via-background/70 to-background/70 p-6 md:mt-20 md:p-8">
            <h3 className="font-heading text-xl text-text md:text-2xl">Every package includes</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {includedInEveryPackage.map((item) => (
                <li
                  key={item.label}
                  className="flex gap-3 rounded-xl border border-white/10 bg-black/30 p-4"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#E2B79A] via-[#C07A57] to-[#9C5C3C] text-[#0B0B0B]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                    </svg>
                  </span>
                  <span className="text-sm leading-snug text-text">{item.label}</span>
                </li>
              ))}
            </ul>
          </SectionFadeIn>
        </div>
      </section>

      {/* Maintenance detail */}
      <section className="px-6 pb-20 md:pb-28">
        <SectionFadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl text-text md:text-3xl">
            Keep your coating performing
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-xl text-text-muted">
            Our monthly maintenance detail is designed for vehicles that already have
            ceramic protection.
          </p>
          <div className="text-left">
            <ExpandableServiceCard
              title="Ceramic Coating Maintenance Detail"
              price="$100 (Monthly Plan)"
              items={maintenanceDetailItems}
            />
          </div>
        </SectionFadeIn>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <SectionFadeIn className="mb-10 text-center">
            <h2 className="font-heading text-3xl tracking-[0.18em] prizm-copper-text md:text-4xl">
              FAQ
            </h2>
          </SectionFadeIn>
          <SectionFadeIn className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/10 bg-background/70 open:border-[#C07A57]/50"
              >
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-6 py-5 font-heading text-lg text-text [&::-webkit-details-marker]:hidden ${focusRing}`}
                >
                  {faq.question}
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#C07A57]/50 text-[#D79A7A] transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-text-muted">{faq.answer}</p>
              </details>
            ))}
          </SectionFadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-28">
        <SectionFadeIn className="mx-auto max-w-4xl rounded-3xl border border-[#C07A57]/40 bg-background/70 px-6 py-14 text-center shadow-[0_0_60px_rgba(192,122,87,0.15)] md:px-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D79A7A]">
            Certified PRIZM Installer
          </p>
          <h2 className="font-heading text-3xl text-text md:text-4xl">
            Find the right PRIZM coating for your car
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-text-muted">
            Tell us what you drive, where it is usually parked and how long you plan to
            keep it. We will recommend Vantage, Genesis or Eternity based on how you
            actually use the car. Every package already includes a minimum one-step paint
            correction, and anything beyond that is only added after inspection and your
            approval.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" className={focusRing}>
              Get a Coating Quote
            </Button>
            <Button href={PHONE_HREF} variant="secondary" className={focusRing}>
              Call or Text
            </Button>
          </div>
        </SectionFadeIn>
      </section>
    </div>
  );
}
