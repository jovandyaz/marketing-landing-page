import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components';
import { poppins } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Sinergia',
  description: 'A place to learn and grow',
  icons: {
    icon: '/logo.webp'
  },
  viewport: 'width=device-width, initial-scale=1'
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
        <header className="w-full">
          <Navbar />
        </header>
        <main className="w-full flex-grow pt-16 md:pt-20">{children}</main>
        <Footer />
        <Analytics />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
