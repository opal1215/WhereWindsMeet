'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

interface NavbarProps {
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  {
    label: 'Codes',
    href: '/codes',
  },
  {
    label: 'Guides',
    href: '/beginner-guide',
    submenu: [
      { label: 'Beginner Guide', href: '/beginner-guide' },
      { label: 'Leveling Guide', href: '/leveling-guide' },
      { label: 'Combat Overview', href: '/combat-overview' },
    ],
  },
  {
    label: 'Builds',
    href: '/builds',
    submenu: [
      { label: 'PVE DPS', href: '/builds/pve-dps' },
      { label: 'PVE Tank', href: '/builds/pve-tank' },
      { label: 'PVP Duelist', href: '/builds/pvp-duelist' },
    ],
  },
  {
    label: 'World',
    href: '/world-map',
    submenu: [
      { label: 'Interactive Map', href: '/world-map' },
      { label: 'Regions', href: '/regions' },
      { label: 'Fast Travel', href: '/fast-travel-and-movement' },
    ],
  },
  {
    label: 'Tools',
    href: '/tools',
    submenu: [
      { label: 'Build Planner', href: '/tools/build-planner' },
      { label: 'XP Calculator', href: '/tools/xp-calculator' },
      { label: 'Drop Table', href: '/tools/drop-table' },
    ],
  },
  {
    label: 'Database',
    href: '/database',
  },
];

export const Navbar: React.FC<NavbarProps> = ({ links = defaultLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-md border-b border-gold-primary/20">
      <div className="max-w-[1400px] mx-auto px-5 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center font-display font-black text-bg-primary text-xl">
              W
            </div>
            <span className="font-display text-xl text-gold-primary font-bold hidden md:block group-hover:text-gold-bright transition-colors">
              Where Winds Meet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="font-ui text-base text-text-secondary hover:text-gold-bright transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Desktop Submenu */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-bg-card border border-gold-dark/30 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="block px-4 py-2 font-ui text-sm text-text-secondary hover:text-gold-bright hover:bg-gold-primary/10 transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-gold-primary hover:text-gold-bright transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-5 pt-5 border-t border-gold-dark/30">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className="font-ui text-base text-text-secondary hover:text-gold-bright transition-colors flex-1"
                      onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.submenu && (
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === link.label ? null : link.label)}
                        className="p-2 text-gold-primary"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSubmenu === link.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {link.submenu && openSubmenu === link.label && (
                    <div className="mt-2 ml-4 pl-4 border-l-2 border-gold-dark/30 flex flex-col gap-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="font-ui text-sm text-text-muted hover:text-gold-bright transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
