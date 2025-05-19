'use client';

import { About, CompactServices, Contact, Hero, LogoCarousel, ScrollReveal } from '@/components';

export default function Home() {
  return (
    <>
      <Hero />

      <ScrollReveal variant="fade-up" delay={0.3} duration={0.9}>
        <About />
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={0.4} duration={0.9}>
        <CompactServices />
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={0.5} duration={0.9}>
        <LogoCarousel />
      </ScrollReveal>

      <ScrollReveal variant="zoom-in" delay={0.5} duration={0.9}>
        <Contact />
      </ScrollReveal>
    </>
  );
}
