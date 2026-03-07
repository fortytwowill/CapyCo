import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyCapyCo } from "@/components/sections/WhyCapyCo";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ServicesOverview />
      <WhyCapyCo />
      <StatsBar />
      <Testimonials />
      <ContactSection />
      <CTABanner />
    </>
  );
}
