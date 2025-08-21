import type { Metadata } from 'next';
import './globals.css';
import { ErrorBoundary, Footer, Navbar, StructuredData } from '@/components';
import { poppins } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';
import { AppProviders } from '@/providers';

export const metadata: Metadata = {
  title: {
    default: 'Sinergia - Marketing Digital y Community Management',
    template: '%s | Sinergia'
  },
  description:
    'Transformamos tus ideas en realidades poderosas. Especialistas en marketing digital, community management y talleres de formación. Haz brillar tu marca con Sinergia.',
  keywords: [
    'marketing digital',
    'community management',
    'talleres de formación',
    'social media',
    'consultoría personalizada',
    'Sinergia'
  ],
  authors: [{ name: 'Sinergia Marketing' }],
  creator: 'Sinergia Marketing',
  publisher: 'Sinergia Marketing',
  metadataBase: new URL('https://sinergiastudio.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://sinergiastudio.vercel.app',
    title: 'Sinergia - Marketing Digital y Community Management',
    description:
      'Transformamos tus ideas en realidades poderosas. Especialistas en marketing digital, community management y talleres de formación.',
    siteName: 'Sinergia Marketing',
    images: [
      {
        url: '/images/photo_home.png',
        width: 1200,
        height: 630,
        alt: 'Sinergia - Marketing Digital y Community Management'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sinergia - Marketing Digital y Community Management',
    description:
      'Transformamos tus ideas en realidades poderosas. Especialistas en marketing digital, community management y talleres de formación.',
    images: ['/images/photo_home.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/logo.webp',
    shortcut: '/logo.webp',
    apple: '/logo.webp'
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          poppins.className,
          'flex min-h-screen flex-col antialiased',
          'motion-safe:scroll-smooth'
        )}
        suppressHydrationWarning
      >
        <AppProviders>
          <ErrorBoundary>
            <StructuredData type="organization" />
            <StructuredData type="website" />
            <header className="w-full">
              <Navbar />
            </header>
            <main className="relative w-full flex-grow overflow-hidden">{children}</main>
            <Footer />
          </ErrorBoundary>
        </AppProviders>
      </body>
    </html>
  );
}
