import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components';
import { fira } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';

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
      <body className={cn(fira.className, 'antialiased')} suppressHydrationWarning>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
