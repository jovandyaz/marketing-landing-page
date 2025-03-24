'use client';

import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';

export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <Hero />
      </div>
      <SocialProof />
    </>
  );
}
