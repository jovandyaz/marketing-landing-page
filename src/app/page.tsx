'use client';

import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';

export default function Home() {
  return (
    <>
      <div className="flex h-[calc(100vh-64px)] w-full md:h-[calc(100vh-80px)]">
        <Hero />
      </div>
      <SocialProof />
    </>
  );
}
