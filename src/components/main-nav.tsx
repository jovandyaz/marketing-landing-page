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
    <div className="w-full sticky top-0 inset-x-0 bg-white z-50 shadow-sm h-16 flex items-center justify-around">
      <CompanyLogo />
      <NavigationMenu className="w-full flex px-40">
        <NavigationMenuList>
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
  );
};
