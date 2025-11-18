import React from 'react';
import Link from 'next/link';
import { Twitter, Youtube, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-gold-dark/30 mt-20">
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center font-display font-black text-bg-primary text-xl">
                W
              </div>
              <span className="font-display text-xl text-gold-primary font-bold">
                WWM Guides
              </span>
            </div>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
              Your comprehensive third-party guide for Where Winds Meet.
              Master the Wuxia world with data-driven strategies and interactive tools.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-card border border-gold-dark/30 text-text-secondary hover:text-gold-bright hover:border-gold-primary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-card border border-gold-dark/30 text-text-secondary hover:text-gold-bright hover:border-gold-primary transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-card border border-gold-dark/30 text-text-secondary hover:text-gold-bright hover:border-gold-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@wherewindsmeetgame.org"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-card border border-gold-dark/30 text-text-secondary hover:text-gold-bright hover:border-gold-primary transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Guides */}
          <div>
            <h3 className="font-display text-lg text-gold-primary font-bold mb-6">
              Guides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/guides/is-where-winds-meet-for-you"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  Is WWM for You?
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/first-3-hours-guide"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  First 3 Hours Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/combat-guide-beginner-builds"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  Combat & Builds
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/qinghe-kaifeng-tips"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  Qinghe & Kaifeng Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  All Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-display text-lg text-gold-primary font-bold mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/codes"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  Redemption Codes
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/build-planner"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  Build Planner
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/xp-calculator"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  XP Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/database/weapons"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  Weapon Database
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/drop-table"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  Drop Tables
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Community */}
          <div>
            <h3 className="font-display text-lg text-gold-primary font-bold mb-6">
              Community
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/wherewindsmeet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@wherewindsmeetgame.org"
                  className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <p className="font-ui text-xs text-text-muted leading-relaxed">
              This is a third-party fan site. We are not affiliated with Everstone Games or the official Where Winds Meet game.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold-dark/30">
          <div className="flex flex-col gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              <Link
                href="/privacy-policy"
                className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gold-dark/50">•</span>
              <Link
                href="/terms-of-service"
                className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-gold-dark/50">•</span>
              <Link
                href="/disclaimer"
                className="font-ui text-sm text-text-secondary hover:text-gold-bright transition-colors"
              >
                Disclaimer
              </Link>
            </div>

            {/* Copyright and Attribution */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-ui text-sm text-text-muted">
                © {currentYear} WhereWindsMeetGame.org. All rights reserved.
              </p>
              <p className="font-ui text-sm text-text-muted">
                Built with ❤️ for the Wuxia community
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
