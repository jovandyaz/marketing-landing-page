'use client';

import React from 'react';
import { Card, CardContent } from './card';
import { cn } from '@/lib/utils';

type CuteCardVariant = 'light' | 'dark' | 'primary' | 'secondary' | 'tertiary';

interface CuteCardProps extends React.ComponentProps<typeof Card> {
  variant?: CuteCardVariant;
}

const variantStyles = {
  light:
    'from-slate-50 to-neutral-50 dark:from-gray-900 dark:to-gray-950 via-primary-50/50 dark:via-primary-950/30',
  dark: 'from-gray-800 to-gray-950 dark:from-gray-900 dark:to-black via-primary-900/30 dark:via-primary-950/50',
  primary:
    'from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-950 via-secondary-50/30 dark:via-secondary-900/20',
  secondary:
    'from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-950 via-primary-50/30 dark:via-primary-900/20',
  tertiary:
    'from-tertiary-50 to-tertiary-100 dark:from-tertiary-900 dark:to-tertiary-950 via-primary-50/30 dark:via-primary-900/20'
};

export function CuteCard({ variant = 'light', className, children, ...props }: CuteCardProps) {
  return (
    <Card
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border-0 bg-gradient-to-br shadow-lg backdrop-blur-sm',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

export function CuteCardContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CardContent>) {
  return (
    <CardContent
      className={cn('relative z-10 flex w-full flex-col items-center p-8 md:p-10', className)}
      {...props}
    >
      {children}
    </CardContent>
  );
}
