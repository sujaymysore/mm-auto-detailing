const trustItems = [
  "Mobile service across Sydney",
  "Packages from $120",
  "5.0 rating from 18 Google reviews",
  "Paint correction & ceramic coating",
] as const;

export function TrustStrip() {
  return (
    <section
      aria-label="Key facts"
      className="relative z-10 border-t border-white/10 bg-[#0B0B0B]/75 backdrop-blur-md"
    >
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
        {trustItems.map((item) => (
          <li
            key={item}
            className="flex items-center justify-center bg-[#0B0B0B]/80 px-3 py-3 text-center sm:px-4 sm:py-3.5"
          >
            <p className="text-xs leading-snug text-text/90 sm:text-sm">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
