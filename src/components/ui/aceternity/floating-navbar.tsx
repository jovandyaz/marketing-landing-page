'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Button,
  IconLogo,
  MenuButton,
  NavLink,
  SignedUserButton,
  UserProfileButton
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
    highlighted?: boolean;
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

    if (hasScrolled && !isMenuOpen) {
      const previous = scrollY.getPrevious() ?? 0;
      const direction = latest - previous;

      if (latest < 50) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    } else if (isMenuOpen) {
      setVisible(true);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setVisible(true);
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
          'flex min-h-[var(--navbar-height)] w-full items-center justify-between',
          'border-b border-gray-100 dark:border-gray-800/20',
          'bg-white/95 dark:bg-black/95',
          'md:bg-white/70 md:backdrop-blur-md',
          'px-4 py-2 md:px-8',
          'transition-all duration-[var(--transition-base)]',
          className
        )}
      >
        <Link
          href="/"
          className="relative z-[var(--z-header)] focus-visible:ring-2 focus-visible:outline-none"
          onClick={handleNavClick}
        >
          <IconLogo
            src="/sinergia_logo.svg"
            alt="Sinergia"
            width={100}
            height={35}
            className="h-8 w-auto transition-all duration-200 md:h-10"
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map(navItem => (
            <NavLink
              key={`desktop-link-${navItem.name}`}
              href={navItem.link}
              layoutId="desktop-nav"
              highlighted={navItem.highlighted}
            >
              {navItem.name}
            </NavLink>
          ))}

          <UserProfileButton />
          <SignedUserButton />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <SignedUserButton redirectToProfile={true} />
          <MenuButton
            isOpen={isMenuOpen}
            toggle={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          />
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'absolute top-[var(--navbar-height)] right-0 left-0',
                'min-h-[calc(100vh-var(--navbar-height))]',
                'bg-white/95 dark:bg-black/95',
                'backdrop-blur-md backdrop-saturate-150',
                'px-6 py-8',
                'md:hidden'
              )}
              id="mobile-menu"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map(navItem => (
                  <NavLink
                    key={`mobile-link-${navItem.name}`}
                    href={navItem.link}
                    onClick={handleNavClick}
                    layoutId="mobile-nav"
                    highlighted={navItem.highlighted}
                  >
                    {navItem.name}
                  </NavLink>
                ))}

                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant="default"
                      className={cn(
                        'mt-4 w-full font-medium',
                        'bg-primary text-white',
                        'hover:bg-primary/90',
                        'transition-all duration-200'
                      )}
                    >
                      Iniciar sesión
                    </Button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <NavLink href="/profile" onClick={handleNavClick} layoutId="mobile-nav">
                    Mi perfil
                  </NavLink>
                </SignedIn>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
