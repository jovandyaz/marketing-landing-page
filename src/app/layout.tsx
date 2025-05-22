import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components';
import { poppins } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';
import { AppProviders } from '@/providers';

export const metadata: Metadata = {
  title: 'Sinergia',
  description: 'A place to learn and grow',
  icons: {
    icon: '/logo.webp'
  }
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
          <header className="fixed top-0 right-0 left-0 z-[var(--z-header)] w-full">
            <Navbar />
          </header>
          <main
            className={cn(
              'relative w-full flex-grow',
              'pt-[var(--navbar-height)]',
              'safe-top:pt-[calc(var(--navbar-height)+env(safe-area-inset-top))]'
            )}
          >
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
