'use client';

import { FloatingNav } from '../ui';
import { AUTHENTICATED_NAV_ITEMS, BASE_NAV_ITEMS } from '@/config/routes';
import { useAuth } from '@clerk/nextjs';

export const Navbar = () => {
  const { isSignedIn, isLoaded } = useAuth();

  const navItems = isLoaded && isSignedIn ? AUTHENTICATED_NAV_ITEMS : BASE_NAV_ITEMS;

  return (
    <nav role="navigation" aria-label="Main navigation">
      <FloatingNav navItems={navItems} />
    </nav>
  );
};
