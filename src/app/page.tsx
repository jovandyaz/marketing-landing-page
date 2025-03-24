'use client';

import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen w-full">
        <Hero />
      </div>
      <SocialProof />
    </>
  );
}
