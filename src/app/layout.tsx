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
        className={cn(poppins.className, 'flex min-h-screen flex-col antialiased')}
        suppressHydrationWarning
      >
        <AppProviders>
          <header className="w-full">
            <Navbar />
          </header>
          <main className="relative w-full flex-grow overflow-hidden pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
