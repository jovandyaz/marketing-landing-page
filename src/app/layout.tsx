import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components';
import { fira } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Sinergia',
  description: 'A place to learn and grow',
  icons: {
    icon: '/sinergia-logo.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn(fira.className, 'antialiased')}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
