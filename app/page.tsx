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
        title="Precision in Every Detail"
        subtitle="Premium Automotive Care"
        description="Where luxury meets craftsmanship. Experience the finest ceramic coating, paint correction, and detailing services for your vehicle."
      />
      <AboutSection />
      <ServicesPreview />
      <ReviewsSection />
      <CeramicHighlight />
      <CallToAction />
    </main>
  );
}
