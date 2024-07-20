'use client';

import React from 'react';
import Link from 'next/link';
import { CompanyLogo } from './ui/icons';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { navbarMainLinks } from '@/config/links';

export const MainNav = () => {
  return (
    <nav className="w-full sticky top-0 inset-x-0 z-50 shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <CompanyLogo />
          <NavigationMenu>
            <NavigationMenuList className="hidden sm:flex">
              {navbarMainLinks.map(link => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};
