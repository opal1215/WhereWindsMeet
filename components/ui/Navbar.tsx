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
    href: '/guides/is-where-winds-meet-for-you',
    submenu: [
      { label: 'Is WWM for You?', href: '/guides/is-where-winds-meet-for-you' },
      { label: 'First 3 Hours', href: '/guides/first-3-hours-guide' },
      { label: 'Qinghe & Kaifeng Tips', href: '/guides/qinghe-kaifeng-tips' },
      { label: 'Combat & Builds', href: '/guides/combat-guide-beginner-builds' },
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
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(0, 20, 40, 0.85)',
        backdropFilter: 'blur(10px)',
        height: '60px',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center font-display font-black text-bg-primary text-xl shadow-lg">
              W
            </div>
            <span className="font-display text-xl font-bold hidden md:block group-hover:text-gold-bright transition-colors" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Where Winds Meet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="font-ui text-base hover:text-gold-bright transition-colors flex items-center gap-1"
                  style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
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
            className="lg:hidden w-11 h-11 flex items-center justify-center hover:text-gold-bright transition-colors"
            aria-label="Toggle menu"
            style={{ color: 'rgba(255, 255, 255, 0.9)', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))' }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-0 pt-5 border-t border-gold-dark/30 bg-bg-primary/95 backdrop-blur-md p-4">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className="font-ui text-base hover:text-gold-bright transition-colors flex-1"
                      style={{ color: 'rgba(255, 255, 255, 0.9)' }}
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
                          className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
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
