import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-primary-500 to-primary-600 text-primary-foreground shadow-xs hover:from-primary-600 hover:to-primary-700',
        destructive:
          'bg-gradient-to-r from-destructive-500 to-destructive-600 text-white shadow-xs hover:from-destructive-600 hover:to-destructive-700 focus-visible:ring-destructive-300 dark:focus-visible:ring-destructive-800 dark:from-destructive-600 dark:to-destructive-700',
        outline:
          'border bg-gradient-to-r from-background to-background/95 shadow-xs hover:from-accent-100 hover:to-accent-200 hover:text-accent-foreground dark:from-gray-700 dark:to-gray-800 dark:border-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-700',
        secondary:
          'bg-gradient-to-r from-secondary-500 to-secondary-600 text-secondary-foreground shadow-xs hover:from-secondary-600 hover:to-secondary-700',
        ghost:
          'bg-gradient-to-r from-transparent to-transparent hover:from-accent-100 hover:to-accent-200 hover:text-accent-foreground dark:hover:from-gray-700 dark:hover:to-gray-800',
        link: 'bg-gradient-to-r from-transparent to-transparent text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
