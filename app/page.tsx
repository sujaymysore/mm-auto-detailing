import Hero from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesPreview } from "@/components/ServicesPreview";
import ReviewsSection from "@/components/ReviewsSection";
import { CeramicHighlight } from "@/components/CeramicHighlight";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero
        title="Mobile Car Detailing in Sydney"
        subtitle="Mobile Automotive Care"
        description="Professional detailing, paint correction and ceramic coating at your home or workplace."
      />
      <AboutSection />
      <ServicesPreview />
      <ReviewsSection />
      <CeramicHighlight />
      <CallToAction />
    </main>
  );
}
