"use client";

import { useState } from "react";

interface ExpandableServiceCardProps {
  title: string;
  price: string;
  items: string[];
  /** Optional label shown above the title row (e.g. “Most popular”). */
  badge?: string;
}

export function ExpandableServiceCard({
  title,
  price,
  items,
  badge,
}: ExpandableServiceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl bg-surface border overflow-hidden transition-all duration-300 hover:border-accent/30 ${
        badge ? "border-accent/25 shadow-[0_0_0_1px_rgba(59,130,246,0.12)]" : "border-white/10"
      }`}
    >
      {badge && (
        <div className="px-6 pt-4">
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {badge}
          </span>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex flex-wrap items-center justify-between gap-4 px-6 text-left ${badge ? "pb-5 pt-2" : "py-5"}`}
      >
        <span className="font-heading text-xl md:text-2xl text-text">
          {title}
        </span>
        <span className="text-accent font-semibold text-lg whitespace-nowrap">
          {price}
        </span>
        <span className="w-full sm:w-auto sm:ml-auto text-sm font-medium text-accent flex items-center gap-2">
          {open ? "Hide what's included" : "View what's included"}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="px-6 pb-6 pt-0 space-y-2 border-t border-white/10">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-text-muted text-sm md:text-base"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
