import type { Metadata } from 'next';
import { NavMenu } from '@/components';
import { fira } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';
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
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          fira.className,
          'bg-white text-black dark:bg-black dark:text-white dark:bg-opacity-90 dark:text-opacity-90'
        )}
      >
        <NavMenu />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
