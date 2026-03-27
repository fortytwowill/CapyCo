import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { WhyCapyCo } from "@/components/sections/WhyCapyCo";
import { Stats } from "@/components/sections/Stats";
import { Testimonial } from "@/components/sections/Testimonial";
import { Contact } from "@/components/sections/Contact";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <WhyCapyCo />
      <Stats />
      <Testimonial />
      <Contact />
      <FooterCTA />
    </>
  );
}
