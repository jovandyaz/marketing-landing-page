'use client';

import React from 'react';
import { AnalyticsProvider } from './analytics';
import { ClerkAuthProvider } from './clerk';
import { ToastProvider } from './toast';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ClerkAuthProvider>
      <AnalyticsProvider>
        <ToastProvider>{children}</ToastProvider>
      </AnalyticsProvider>
    </ClerkAuthProvider>
  );
}
