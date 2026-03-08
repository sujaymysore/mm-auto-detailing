"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionFadeIn } from "@/components/SectionFadeIn";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main>
      <section className="min-h-[50vh] flex flex-col justify-center items-center px-6 pt-32 pb-16">
        <SectionFadeIn>
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase block mb-4">
            Get in Touch
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-center text-text mb-6">
            Contact & Booking
          </h1>
          <p className="text-text-muted text-center max-w-2xl text-lg">
            Ready to give your vehicle the care it deserves? Reach out for a
            consultation or book your appointment.
          </p>
        </SectionFadeIn>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <SectionFadeIn>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 md:p-12 rounded-2xl bg-surface border border-white/5"
            >
              <h2 className="font-heading text-2xl text-accent mb-8">
                Book Your Appointment
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-text-muted mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-200"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-text-muted mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="vehicle"
                    className="block text-sm text-text-muted mb-2"
                  >
                    Vehicle
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    value={formState.vehicle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-200"
                    placeholder="2024 Porsche 911"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm text-text-muted mb-2"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-text focus:outline-none focus:border-accent/50 transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="paint-correction">Paint Correction</option>
                  <option value="interior">Interior Detailing</option>
                  <option value="ppf">Paint Protection Film</option>
                  <option value="full">Full Detail Package</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your vehicle and what you're looking for..."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  Request Consultation
                </Button>
                <a
                  href="tel:+15551234567"
                  className="flex-1 inline-flex items-center justify-center px-8 py-3 font-medium transition-all duration-300 ease-out rounded-sm border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:-translate-y-0.5"
                >
                  Call Now
                </a>
              </div>
            </form>
          </SectionFadeIn>

          <SectionFadeIn delay={100}>
            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-2xl text-accent mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface border border-white/5 flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-1">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-text hover:text-accent transition-colors duration-200"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface border border-white/5 flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-1">Email</p>
                      <a
                        href="mailto:hello@luxedetail.com"
                        className="text-text hover:text-accent transition-colors duration-200"
                      >
                        hello@luxedetail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface border border-white/5 flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-1">Location</p>
                      <p className="text-text">
                        123 Premium Drive
                        <br />
                        Beverly Hills, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-surface border border-white/5">
                <h3 className="font-heading text-xl text-text mb-4">
                  Studio Hours
                </h3>
                <div className="space-y-2 text-text-muted">
                  <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 9:00 AM – 4:00 PM</p>
                  <p>Sunday: By appointment only</p>
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>
    </main>
  );
}
