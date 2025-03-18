'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  layoutId: string;
  className?: string;
  highlighted?: boolean;
}

export const NavLink = ({
  href,
  children,
  onClick,
  layoutId,
  className,
  highlighted
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isMobile = layoutId === 'mobile-nav';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className={cn(
          'inline-block text-lg font-bold transition-colors',
          !isMobile && highlighted
            ? [
                'border-primary-600 rounded-md border-3 px-3 py-2',
                isActive || isHovered
                  ? 'text-primary-600 dark:text-primary-500'
                  : 'text-gray-600 dark:text-gray-300'
              ]
            : [
                isActive
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              ],
          className
        )}
      >
        {children}

        {isActive && !isMobile && (!highlighted || isMobile) && (
          <motion.span
            layoutId={layoutId}
            className="absolute right-0 -bottom-2 left-0 h-0.5 bg-yellow-400 dark:bg-white"
            initial={false}
            transition={{ duration: 0.3 }}
          />
        )}

        <AnimatePresence>
          {!isActive && !isMobile && isHovered && !highlighted && (
            <motion.span
              key="hover-underline"
              className="absolute right-0 -bottom-2 left-0 h-0.5 bg-yellow-300 dark:bg-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </motion.span>
    </Link>
  );
};
