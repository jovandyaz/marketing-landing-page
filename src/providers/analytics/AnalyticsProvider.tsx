'use client';

import React from 'react';
import { Analytics } from '@vercel/analytics/next';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
