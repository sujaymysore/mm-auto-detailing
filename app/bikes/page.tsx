import Image from "next/image";
import { Button } from "../../components/ui/Button";
import { SectionFadeIn } from "../../components/SectionFadeIn";

const bikePackages = [
  {
    title: "Full Detail",
    price: "From $80",
    items: [
      "Pressure wash",
      "Snow foam (pre wash if required)",
      "Wheels hand washed",
      "Body hand washed using two bucket method",
      "Tyres dressed",
      "Ceramic sealant applied",
    ],
  },
];

const bikeGallery = [
  "/images/bikes/gallery_1.png",
  "/images/bikes/gallery_2.png",
  "/images/bikes/gallery_3.png",
  "/images/bikes/gallery_4.png",
];

export const metadata = {
  title: "Bike Detailing | M&M Auto Detailing",
  description:
    "Premium mobile bike detailing packages, add-ons, and protection services.",
};

export default function BikesPage() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/bikes/hero_honda_tank.png"
          alt=""
          fill
          className="object-cover object-[50%_32%]"
          priority
          sizes="100vw"
          quality={92}
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-transparent to-transparent md:from-background/40" aria-hidden />
        <div
          className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/85 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 font-medium tracking-[0.3em] text-accent">
            MOTORCYCLE DETAILING
          </p>
          <h1 className="font-heading text-5xl font-light leading-tight tracking-tight text-text md:text-7xl lg:text-8xl">
            Precision Care for Bikes
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text/70">
            Premium mobile detailing for motorcycles, built for riders who care
            about finish, protection and presentation.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Book Bike Detail
            </Button>
            <Button href="/gallery" variant="secondary">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <SectionFadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-text mb-2 text-center lg:text-left">
              Bike Gallery
            </h2>
            <p className="text-text-muted mb-10 max-w-2xl mx-auto text-center lg:mx-0 lg:text-left">
              Recent bike details and protection finishes from real client jobs.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {bikeGallery.map((src, index) => (
                <SectionFadeIn key={src} delay={index * 60}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15">
                    <Image
                      src={src}
                      alt="Bike detailing result"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={95}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                      aria-hidden
                    />
                  </div>
                </SectionFadeIn>
              ))}
            </div>
          </SectionFadeIn>

          <SectionFadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-text mb-12 text-center lg:text-left">
              Bike Detailing Packages
            </h2>
            <div className="max-w-xl mx-auto lg:mx-0">
              {bikePackages.map((pkg) => (
                <div
                  key={pkg.title}
                  className="p-8 rounded-2xl bg-background/70 border border-white/20 shadow-[0_0_0_1px_rgba(96,165,250,0.14),0_20px_40px_rgba(0,0,0,0.28)]"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <h3 className="font-heading text-2xl text-text">{pkg.title}</h3>
                    <span className="text-accent font-semibold">{pkg.price}</span>
                  </div>
                  <ul className="space-y-2 text-text-muted text-sm text-left">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-accent mt-[2px]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16 text-center">
        <SectionFadeIn>
          <h2 className="font-heading text-2xl md:text-3xl text-text mb-6">
            Ready to book your bike?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Book Now</Button>
            <Button href="/services" variant="outline">
              View Car Services
            </Button>
          </div>
        </SectionFadeIn>
      </section>
    </main>
  );
}
