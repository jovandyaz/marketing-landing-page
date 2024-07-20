'use client';

import React, { useState } from 'react';
import { CompanyLogo } from '../ui/icons';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';
import { FiMenu } from 'react-icons/fi';

export function NavMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={cn('fixed top-10 inset-x-0 max-w-xs sm:max-w-2xl mx-auto z-50', className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between w-full h-8 sm:h-12">
          <div className="flex-shrink-0">
            <CompanyLogo />
          </div>
          <div className="hidden md:flex space-x-4">
            <HoveredLink href="/">Inicio</HoveredLink>
            <MenuItem setActive={setActive} active={active} item="Servicios">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/branding">Branding</HoveredLink>
                <HoveredLink href="/seo">SEO</HoveredLink>
              </div>
            </MenuItem>
            <HoveredLink href="/contac-us">Contacto</HoveredLink>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </Menu>
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white dark:bg-black p-4 rounded-lg shadow-lg">WIP</div>
      )}
    </div>
  );
}
