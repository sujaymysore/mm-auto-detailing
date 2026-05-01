"use client";

import { useEffect, useRef } from "react";

export default function PrizmSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center prizm-bg">

      <div
        ref={ref}
        className="prizm-fade text-center px-10 py-24"
      >
        <h1 className="text-7xl md:text-8xl prizm-gradient prizm-logo font-heading">
          PRIZM
        </h1>

        <p className="mt-4 prizm-gradient prizm-subtext">
          COATINGS
        </p>
      </div>

    </section>
  );
}
