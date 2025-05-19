'use client';

import { redirect } from 'next/navigation';
import { PUBLIC_ROUTES } from '@/config/routes';
import { useAuth } from '@clerk/nextjs';

export default function WorkshopsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-b-2"></div>
      </div>
    );
  }

  if (isLoaded && !isSignedIn) {
    redirect(PUBLIC_ROUTES.LOG_IN);
  }

  return <>{children}</>;
}
