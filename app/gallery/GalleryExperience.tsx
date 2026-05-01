"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { SectionFadeIn } from "@/components/SectionFadeIn";

function GalleryEnterCarCue() {
  return (
    <div
      className="gallery-car-cue mx-auto mt-6 flex flex-col items-center"
      aria-hidden="true"
    >
      <div className="relative h-[7.5rem] w-14 overflow-hidden">
        <div
          className="gallery-car-lane absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-accent/30"
          aria-hidden
        />
        <div className="gallery-car-runner absolute left-1/2 top-0 w-12 -translate-x-1/2">
          <svg
            viewBox="0 0 48 24"
            className="h-6 w-12 text-accent drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]"
            fill="currentColor"
            aria-hidden
          >
            <path d="M4 16h40v2H4v-2zm2-4.5c0-1 .8-1.8 2.2-2l8-1.2c1.2-.2 2.4-.3 3.6-.3h12c1.2 0 2.4.1 3.5.3l8 1.2c1.4.2 2.3 1 2.3 2V14H6v-2.5z" />
            <circle cx="11" cy="17" r="3.2" className="fill-[#1a1a1a]" />
            <circle cx="11" cy="17" r="1.6" className="fill-text-muted" />
            <circle cx="37" cy="17" r="3.2" className="fill-[#1a1a1a]" />
            <circle cx="37" cy="17" r="1.6" className="fill-text-muted" />
            <path
              d="M14 9.5h20l-1.5-2h-17L14 9.5z"
              className="fill-text/90"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

const GALLERY_ASSET_BASE = "/images/gallery/mywebsiteimages/";

function galleryAsset(filename: string): string {
  return GALLERY_ASSET_BASE + encodeURIComponent(filename);
}

export type GallerySlotData = {
  src?: string;
  video?: boolean;
  width?: number;
  height?: number;
};

/** First block of `mywebsiteimages` (hero + main run); see also overflow + rest below. */
export const GALLERY_SLOTS: GallerySlotData[] = [
  { src: galleryAsset("m2fullfront.jpeg"), width: 2400, height: 1600 },
  { src: galleryAsset("whitewrxexterior.jpeg") },
  { src: galleryAsset("pradohoodshine.jpeg") },
  { src: galleryAsset("pradosnowfoam.jpeg") },
  { src: galleryAsset("cayennesnowfoam.jpeg") },
  { src: galleryAsset("c63snowfoam.jpeg") },
  { src: galleryAsset("whitewrxwheels.jpeg") },
  { src: galleryAsset("WRX_exterior.jpeg") },
  { src: galleryAsset("WRX_fender.jpeg") },
  { src: galleryAsset("4seriesinterior.jpeg") },
  { src: galleryAsset("rangeautiobioginterior.jpeg") },
  { src: galleryAsset("fiestatophood.jpeg") },
  { src: galleryAsset("Gle_exterior.jpeg") },
];

const GALLERY_OVERFLOW: GallerySlotData[] = [
  { src: galleryAsset("mttophood.jpeg") },
  { src: galleryAsset("stifenderandwheel.jpeg") },
  { src: galleryAsset("glshouseside.jpeg") },
  { src: galleryAsset("Gti_paint_shine.jpg") },
];

/** Remaining files from `mywebsiteimages/` (everything in that folder is included). */
const GALLERY_MYWEBSITE_REST: GallerySlotData[] = [
  { src: galleryAsset("10_year_coating.jpeg") },
  { src: galleryAsset("Forester 10_year_coating.jpeg") },
  { src: galleryAsset("IMG_2881.jpeg") },
  { src: galleryAsset("IMG_0508.jpeg") },
  { src: galleryAsset("Gx550_interior.jpeg") },
  { src: galleryAsset("Cayenne_interior.jpeg") },
  { src: galleryAsset("pradosnowfoam2.jpeg") },
  { src: galleryAsset("Gls_interior.jpeg") },
];

const GALLERY_SEQUENCE: GallerySlotData[] = [
  ...GALLERY_SLOTS,
  ...GALLERY_OVERFLOW,
  ...GALLERY_MYWEBSITE_REST,
];

const SIZES_HERO = "(max-width: 768px) 100vw, min(96vw, 1200px)";
const SIZES_RIVER = "(max-width: 768px) 100vw, 42vw";
const SIZES_PLATE = "(max-width: 768px) 100vw, min(96vw, 1400px)";

function GalleryMedia({
  slot,
  sizes,
}: {
  slot: GallerySlotData;
  sizes: string;
}) {
  if (!slot.src) return null;

  if (slot.video) {
    return (
      <video
        src={slot.src}
        className="block h-auto w-full max-w-full bg-black"
        controls
        playsInline
        preload="metadata"
        aria-label=""
      />
    );
  }

  const w = slot.width ?? 2400;
  const h = slot.height ?? 1600;
  return (
    <Image
      src={slot.src}
      alt=""
      width={w}
      height={h}
      className="block h-auto w-full max-w-full align-bottom"
      sizes={sizes}
      quality={92}
    />
  );
}

/** Hairline only — photography leads, no card chrome. */
function EditorialPlate({
  children,
  hasMedia,
  tone = "default",
}: {
  children: ReactNode;
  hasMedia: boolean;
  tone?: "default" | "hero";
}) {
  if (!hasMedia) return null;
  const edge =
    tone === "hero"
      ? "rounded-sm ring-1 ring-white/[0.06]"
      : "rounded-[1px] ring-1 ring-white/[0.05]";
  return (
    <figure className={`m-0 overflow-hidden bg-[#070707] ${edge}`}>
      {children}
    </figure>
  );
}

function splitRivers(items: GallerySlotData[]) {
  const left: GallerySlotData[] = [];
  const right: GallerySlotData[] = [];
  items.forEach((slot, i) => {
    if (i % 2 === 0) left.push(slot);
    else right.push(slot);
  });
  return { left, right };
}

export default function GalleryExperience() {
  const [hero, ...rest] = GALLERY_SEQUENCE;
  const closing = rest.length > 0 ? rest[rest.length - 1] : undefined;
  const middle = closing ? rest.slice(0, -1) : rest;
  const { left, right } = splitRivers(middle);

  return (
    <main className="gallery-page">
      <section
        className="gallery-intro-ambient relative flex min-h-[100dvh] flex-col justify-center px-6 pb-24 pt-28 md:pb-32 md:pt-32"
        aria-labelledby="gallery-intro-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(ellipse_80%_40%_at_80%_60%,rgba(255,255,255,0.03),transparent_45%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="gallery-reveal-line gallery-reveal-delay-0 text-accent text-xs font-medium tracking-[0.35em] uppercase">
            Welcome to the Garage
          </p>
          <h1
            id="gallery-intro-heading"
            className="gallery-reveal-line gallery-reveal-delay-1 mt-8 font-heading text-4xl font-light leading-[1.08] tracking-tight text-text md:text-6xl lg:text-7xl"
          >
            Gallery of Perfection
          </h1>
          <p className="gallery-reveal-line gallery-reveal-delay-2 mt-8 text-lg font-light leading-relaxed text-text-muted md:text-xl">
            Where Every Detail Matters — a quiet floor for work that speaks for
            itself.
          </p>
          <div
            className="gallery-reveal-line gallery-reveal-delay-3 mx-auto mt-16 flex flex-col items-center gap-2"
            aria-hidden="true"
          >
            <span className="text-[10px] font-medium tracking-[0.4em] text-text-muted/80 uppercase">
              Enter the floor
            </span>
            <GalleryEnterCarCue />
          </div>
        </div>
      </section>

      <section
        className="gallery-floor gallery-floor--open relative border-t border-white/[0.06] px-4 pb-16 pt-8 sm:px-5 md:px-6 md:pb-24 md:pt-10"
        aria-label="Work gallery"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,rgba(59,130,246,0.04),transparent_55%)]"
          aria-hidden
        />
        <div className="gallery-floor-content relative mx-auto max-w-[1500px]">
          <div className="mb-4 md:mb-5 md:flex md:items-end md:justify-between md:gap-6">
            <div>
              <p className="text-xs font-medium tracking-[0.35em] text-accent/90 uppercase">
                The showroom floor
              </p>
              <h2 className="mt-1.5 font-heading text-2xl font-light text-text md:text-3xl">
                Craft, light, finish
              </h2>
            </div>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-text-muted md:mt-0 md:text-right">
              Editorial flow — images at their natural proportions, tight rhythm.
            </p>
          </div>

          <h2 className="sr-only">Gallery — photographs and videos</h2>

          {/* Opening hero — dominant, full narrative width */}
          {hero ? (
            <div className="mb-2 md:mb-2.5">
              <SectionFadeIn delay={40} className="mx-auto w-full max-w-6xl">
                <EditorialPlate hasMedia={Boolean(hero.src)} tone="hero">
                  <GalleryMedia slot={hero} sizes={SIZES_HERO} />
                </EditorialPlate>
              </SectionFadeIn>
            </div>
          ) : null}

          {/* Mobile: single column, minimal vertical gaps */}
          <div className="flex flex-col gap-y-1.5 md:hidden">
            {middle.map((slot, i) => (
              <EditorialPlate key={`${slot.src}-m-${i}`} hasMedia={Boolean(slot.src)}>
                <GalleryMedia slot={slot} sizes="100vw" />
              </EditorialPlate>
            ))}
            {closing?.src ? (
              <EditorialPlate key="closing-mobile" hasMedia tone="hero">
                <GalleryMedia slot={closing} sizes="100vw" />
              </EditorialPlate>
            ) : null}
          </div>

          {/* md+: two rivers — no shared row heights, natural stagger */}
          <div className="hidden md:flex md:flex-row md:items-start md:gap-x-2 lg:gap-x-2.5">
            <div className="flex min-w-0 flex-1 flex-col gap-y-1.5 lg:gap-y-2">
              {left.map((slot, i) => (
                <EditorialPlate key={`${slot.src}-L-${i}`} hasMedia={Boolean(slot.src)}>
                  <GalleryMedia slot={slot} sizes={SIZES_RIVER} />
                </EditorialPlate>
              ))}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-y-1.5 lg:gap-y-2">
              {right.map((slot, i) => (
                <EditorialPlate key={`${slot.src}-R-${i}`} hasMedia={Boolean(slot.src)}>
                  <GalleryMedia slot={slot} sizes={SIZES_RIVER} />
                </EditorialPlate>
              ))}
            </div>
          </div>

          {/* Closing plate — bookend, full width */}
          {closing && closing.src ? (
            <div className="mt-2 hidden md:mt-2.5 md:block">
              <EditorialPlate hasMedia={Boolean(closing.src)} tone="hero">
                <GalleryMedia slot={closing} sizes={SIZES_PLATE} />
              </EditorialPlate>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
