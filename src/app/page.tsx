import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { WhyCapyCo } from "@/components/sections/WhyCapyCo";
import { Stats } from "@/components/sections/Stats";
import { Contact } from "@/components/sections/Contact";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhatYouGet />
      <WhyCapyCo />
      <Stats />
      <Contact />
      <FooterCTA />
    </>
  );
}
