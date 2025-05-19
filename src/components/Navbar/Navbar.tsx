'use client';

import { FloatingNav } from '../ui';
import { AUTHENTICATED_NAV_ITEMS, BASE_NAV_ITEMS } from '@/config/routes';
import { useAuth } from '@clerk/nextjs';

export const Navbar = () => {
  const { isSignedIn, isLoaded } = useAuth();

  const navItems = isLoaded && isSignedIn ? AUTHENTICATED_NAV_ITEMS : BASE_NAV_ITEMS;

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 w-full">
      <FloatingNav navItems={navItems} />
    </nav>
  );
};
