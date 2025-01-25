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
}

export const NavLink = ({ href, children, onClick, layoutId }: NavLinkProps) => {
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
          'inline-block font-medium transition-colors',
          isActive
            ? 'text-gray-900 dark:text-white'
            : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
        )}
      >
        {children}

        {isActive && !isMobile && (
          <motion.span
            layoutId={layoutId}
            className="absolute right-0 -bottom-2 left-0 h-0.5 bg-gray-700 dark:bg-white"
            initial={false}
            transition={{ duration: 0.3 }}
          />
        )}

        <AnimatePresence>
          {!isActive && !isMobile && isHovered && (
            <motion.span
              key="hover-underline"
              className="absolute right-0 -bottom-2 left-0 h-0.5 bg-gray-300 dark:bg-gray-600"
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
