import type { Metadata } from 'next';
import { MainNav } from '@/components';
import { fira } from '@/components/ui/fonts';
import '@/styles/globals.css';
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
    <html lang="en">
      <body className={fira.className}>
        <MainNav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
