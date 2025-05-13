'use client';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { LogoCarousel } from '@/components/LogoCarousel';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal variant="zoom-out" duration={0.8}>
        <Hero />
      </ScrollReveal>

      <ScrollReveal variant="zoom-in" delay={0.3} duration={0.9}>
        <About />
      </ScrollReveal>

      <ScrollReveal variant="fade-down" delay={0.5} duration={0.9}>
        <LogoCarousel />
      </ScrollReveal>

      <ScrollReveal variant="zoom-in" delay={0.5} duration={0.9}>
        <Contact />
      </ScrollReveal>
    </>
  );
}
