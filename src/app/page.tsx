'use client';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { LogoCarousel } from '@/components/LogoCarousel';

export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <Hero />
      </div>
      <About />
      <LogoCarousel />
      <Contact />
    </>
  );
}
