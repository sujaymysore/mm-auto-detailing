"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionFadeIn } from "@/components/SectionFadeIn";
import {
  InstagramIcon,
  SOCIAL_LINKS,
  SocialIconLink,
  TiktokIcon,
} from "@/components/SocialIcons";

function Spinner() {
  return (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}

// ---------- Main Component ----------
export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Helper to check if a field is valid (very basic)
  const isValid = (field: string, value: string): boolean => {
    if (field === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (field === "phone") return value === "" || /^[0-9+\-\s()]{8,}$/.test(value); // optional, but if entered should be plausible
    if (field === "name") return value.length >= 2;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setFormState({ name: "", email: "", phone: "", vehicle: "", service: "", message: "" });
      setTouched({});
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setFocused(null);
  };

  const handleFocus = (field: string) => {
    setFocused(field);
  };

  const labelFloated = (field: string, value: string) => value.length > 0 || focused === field;

  return (
    <main className="relative">
      {/* Subtle carbon-fiber background effect */}
      <div className="absolute inset-0 bg-background opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.03) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Header Section */}
      <section className="relative px-6 pt-28 pb-8 lg:pb-12">
        <SectionFadeIn className="text-center max-w-3xl mx-auto">
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase block mb-3">
            Experience the Difference
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text mb-4">
            Book Your <span className="text-accent">Premium Detail</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Mobile detailing at your doorstep – ceramic coatings, paint correction, and expert care.
          </p>
        </SectionFadeIn>
      </section>

      {/* Main Content */}
      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* ---------- Booking Form ---------- */}
          <SectionFadeIn>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 md:p-8 rounded-3xl bg-surface border border-white/5 shadow-2xl shadow-black/20 backdrop-blur-sm"
            >
              <h2 className="font-heading text-xl text-accent flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                Request Your Appointment
              </h2>

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={() => handleBlur("name")}
                    required
                    className={`
                      w-full px-4 py-3 bg-background border rounded-lg text-text 
                      focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all
                      ${touched.name && !isValid("name", formState.name) ? "border-red-400" : "border-white/10"}
                    `}
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all pointer-events-none ${labelFloated("name", formState.name) ? "text-xs -top-2 bg-surface px-1 text-accent" : "top-3 text-text-muted"}`}
                  >
                    Full Name <span className="text-accent">*</span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    required
                    className={`
                      w-full px-4 py-3 bg-background border rounded-lg text-text 
                      focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all
                      ${touched.email && !isValid("email", formState.email) ? "border-red-400" : "border-white/10"}
                    `}
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all pointer-events-none ${labelFloated("email", formState.email) ? "text-xs -top-2 bg-surface px-1 text-accent" : "top-3 text-text-muted"}`}
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                </div>
              </div>

              {/* Phone & Vehicle */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus("phone")}
                    onBlur={() => handleBlur("phone")}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-4 transition-all pointer-events-none ${labelFloated("phone", formState.phone) ? "text-xs -top-2 bg-surface px-1 text-accent" : "top-3 text-text-muted"}`}
                  >
                    Phone (optional)
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    value={formState.vehicle}
                    onFocus={() => handleFocus("vehicle")}
                    onBlur={() => handleBlur("vehicle")}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder=" "
                  />
                  <label
                    htmlFor="vehicle"
                    className={`absolute left-4 transition-all pointer-events-none ${labelFloated("vehicle", formState.vehicle) ? "text-xs -top-2 bg-surface px-1 text-accent" : "top-3 text-text-muted"}`}
                  >
                    Vehicle (e.g., Toyota Hilux)
                  </label>
                </div>
              </div>

              {/* Service Interest */}
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none"
                  style={{ color: formState.service ? "white" : "#6b7280" }}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="level1">Level 1 Detail </option>
                  <option value="level2">Level 2 Detail </option>
                  <option value="level3">Level 3 Detail </option>
                  <option value="presale">Pre‑Sale Detail – Showroom Ready</option>
                  <option value="bike">Bike Full Detail</option>
                  <option value="ceramic">Prizm Ceramic Coating</option>
                </select>
                <div className="absolute right-4 top-3 pointer-events-none text-accent">▼</div>
                <label
                  htmlFor="service"
                  className="absolute left-4 -top-2 bg-surface px-1 text-xs text-accent"
                >
                  Service Interest
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all pointer-events-none ${labelFloated("message", formState.message) ? "text-xs -top-2 bg-surface px-1 text-accent" : "top-3 text-text-muted"}`}
                >
                  Additional details (optional)
                </label>
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-accent font-medium bg-accent/10 p-3 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thanks! We&apos;ll be in touch within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errorMessage}
                </div>
              )}

              {/* Form footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Typically replies within 1 hour
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure form
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex-1 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <Spinner /> Sending...
                      </>
                    ) : (
                      "Request Booking"
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                <a
                  href="tel:+61493737792"
                  className="flex-1 inline-flex items-center justify-center px-8 py-3 font-medium transition-all duration-300 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </form>
          </SectionFadeIn>

          {/* ---------- Right Column ---------- */}
          <SectionFadeIn delay={100} className="space-y-8">
            {/* Contact Info */}
            <div className="p-6 rounded-2xl bg-surface/50 border border-white/5 backdrop-blur-sm">
              <h2 className="font-heading text-xl text-accent mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                Connect With Us
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm mb-0.5">Call or text</p>
                    <a href="tel:+61493737792" className="text-text hover:text-accent transition-colors text-lg font-medium">
                      +61 493 737 792
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm mb-0.5">Email</p>
                    <a href="mailto:mmcardetailing07@gmail.com" className="text-text hover:text-accent transition-colors break-all">
                      mmcardetailing07@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social links */}
                <div className="pt-2 border-t border-white/5">
                  <p className="text-text-muted text-sm mb-3">Follow us</p>
                  <div className="flex gap-3">
                    <SocialIconLink href={SOCIAL_LINKS.instagram} label="Instagram">
                      <InstagramIcon />
                    </SocialIconLink>
                    <SocialIconLink href={SOCIAL_LINKS.tiktok} label="TikTok">
                      <TiktokIcon />
                    </SocialIconLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand logo */}
            <div className="flex justify-center">
              <div
                className="relative max-w-[200px] rounded-2xl overflow-hidden p-2"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                <Image
                  src="/images/mm-detailing-logo.png"
                  alt="M&M Detailing"
                  width={200}
                  height={80}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </SectionFadeIn>

        </div>
      </section>
    </main>
  );
}