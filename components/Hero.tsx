import Image from "next/image";
import { Button } from "./ui/Button";
import { TrustStrip } from "./TrustStrip";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  showCta?: boolean;
  variant?: "home" | "page";
  /** Shorter inner-page hero so content starts sooner (ignored for home). */
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  showCta = true,
  variant = "home",
  compact = false,
}: HeroProps) {
  const isHome = variant === "home";
  const pageHeightClass = compact
    ? "min-h-[clamp(22rem,52vh,38rem)] py-24 md:py-28"
    : "min-h-screen";

  return (
    <section
      className={`relative flex overflow-hidden ${
        isHome
          ? "min-h-screen flex-col"
          : `items-center justify-center ${pageHeightClass}`
      }`}
    >
      {/* Background image (homepage only) */}
      {isHome && (
        <>
          <Image
            src="/images/gallery/mywebsiteimages/m2fullfront.jpeg"
            alt=""
            fill
            className="object-cover object-[46%_center] sm:object-[48%_42%] md:object-[50%_40%]"
            priority
            sizes="100vw"
            quality={90}
          />
          {/* Gradient overlay: keep the BMW readable, darken the lower third for type */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/15" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/25"
            aria-hidden
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0B0B0B] to-transparent"
            aria-hidden
          />
        </>
      )}

      {/* Gradient overlay (page variant only) */}
      {!isHome && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
        </>
      )}

      {/* Content — above image and overlays. Home copy sits over the driveway so the BMW stays visible. */}
      <div
        className={`relative z-10 mx-auto max-w-7xl px-6 text-center ${
          isHome
            ? "flex flex-1 flex-col justify-end pb-8 pt-28 md:pb-10 md:pt-32"
            : ""
        }`}
      >
        {subtitle && (
          <p className="mb-4 font-medium tracking-[0.3em] text-accent">
            {subtitle}
          </p>
        )}
        <h1
          className={`font-heading font-light leading-tight tracking-tight text-text ${
            isHome
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              : "text-5xl md:text-7xl lg:text-8xl"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mx-auto max-w-2xl leading-relaxed ${
              isHome
                ? "mt-6 text-base text-text/80 md:mt-8 md:text-lg"
                : "mt-8 text-lg text-text/70"
            }`}
          >
            {description}
          </p>
        )}
        {showCta && isHome && (
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">
            <Button href="/contact" variant="primary">
              Request a Booking
            </Button>
            <Button href="/services" variant="secondary">
              View Services
            </Button>
          </div>
        )}
        {showCta && !isHome && (
          <div className="mt-12">
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        )}
      </div>

      {isHome && <TrustStrip />}
    </section>
  );
}
