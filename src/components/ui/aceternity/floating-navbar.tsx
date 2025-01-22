'use client';

import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { Button } from '../button';
import { CompanyLogo } from '../icons';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    if (!hasScrolled && latest > 0) {
      setHasScrolled(true);
    }

    if (hasScrolled) {
      const previous = scrollY.getPrevious() || 0;
      const direction = latest - previous;

      if (latest < 50) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          'flex w-full px-4 py-2 justify-between items-center bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 z-[5000]',
          className
        )}
      >
        <Link href="/" className="relative z-10">
          <CompanyLogo />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((navItem, idx) => (
            <Link
              key={`desktop-link-${idx}`}
              href={navItem.link}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        <Button
          onClick={toggleMenu}
          className="md:hidden relative z-10 p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <RiCloseLine className="h-8 w-8" /> : <RiMenu3Line className="h-8 w-8" />}
        </Button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 right-0 bg-white dark:bg-black min-h-screen px-6 py-20 md:hidden"
              id="mobile-menu"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    className="text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {navItem.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
