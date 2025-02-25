'use client';

import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { IconLogo, MenuButton, NavLink } from '@/components/ui';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';

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
      const previous = scrollY.getPrevious() ?? 0;
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

  const handleNavClick = () => {
    setIsMenuOpen(false);
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
          'z-5000 flex w-full items-center justify-between border-b border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-black',
          className
        )}
      >
        <Link href="/" className="relative z-10" onClick={handleNavClick}>
          <IconLogo src="/logo-plain.svg" alt="Sinergia" width={120} height={40} />
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {navItems.map(navItem => (
            <NavLink
              key={`desktop-link-${navItem.name}`}
              href={navItem.link}
              layoutId="desktop-nav"
            >
              {navItem.name}
            </NavLink>
          ))}
        </div>

        <MenuButton isOpen={isMenuOpen} toggle={toggleMenu} />

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 right-0 left-0 min-h-screen bg-white px-6 py-20 md:hidden"
              id="mobile-menu"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map(navItem => (
                  <NavLink
                    key={`mobile-link-${navItem.name}`}
                    href={navItem.link}
                    onClick={handleNavClick}
                    layoutId="mobile-nav"
                  >
                    {navItem.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
