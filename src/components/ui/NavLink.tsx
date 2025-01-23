'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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

  return (
    <Link href={href} className="relative" onClick={onClick}>
      <motion.span
        className={cn(
          'text-sm font-medium transition-colors',
          isActive
            ? 'text-gray-900 dark:text-white'
            : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
        )}
      >
        {children}
        {isActive && !isMobile && (
          <motion.span
            layoutId={layoutId}
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-700 dark:bg-white"
            initial={false}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.span>
    </Link>
  );
};
