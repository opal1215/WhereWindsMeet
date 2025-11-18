import { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { Card } from '@/components/ui/Card';
import { Sword, Shield, BookOpen, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Game Database | Where Winds Meet',
  description: 'Browse comprehensive databases for weapons, armor, skills, and more in Where Winds Meet.',
};

export default function DatabasePage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-14 pb-20">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* Hero Section */}
        <div className="py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-gold mb-6">
            <BookOpen className="w-10 h-10 text-bg-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold mb-4">
            Game Database
          </h1>
          <p className="font-body text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Explore comprehensive information about all items, skills, and content in Where Winds Meet.
          </p>
        </div>

        {/* Database Categories */}
        <SectionContainer
          title="Browse Categories"
          subtitle="Select a database to explore"
          background="secondary"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title="Weapons Database"
              description="Browse all weapons with detailed stats, drop locations, and upgrade paths. Find your perfect weapon."
              href="/database/weapons"
              icon={<Sword className="w-8 h-8" />}
            />
            <div className="p-8 bg-bg-card border border-gold-dark/30 rounded-lg opacity-60">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-bg-secondary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-text-muted" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-text-muted font-semibold">
                    Armor Database
                  </h3>
                  <span className="text-xs text-gold-bright bg-gold-primary/20 px-2 py-1 rounded">
                    Coming Soon
                  </span>
                </div>
              </div>
              <p className="font-ui text-sm text-text-muted">
                Complete armor database with stats and set bonuses
              </p>
            </div>
            <div className="p-8 bg-bg-card border border-gold-dark/30 rounded-lg opacity-60">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-bg-secondary flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-text-muted" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-text-muted font-semibold">
                    Skills Database
                  </h3>
                  <span className="text-xs text-gold-bright bg-gold-primary/20 px-2 py-1 rounded">
                    Coming Soon
                  </span>
                </div>
              </div>
              <p className="font-ui text-sm text-text-muted">
                All martial arts and mystic skills with detailed descriptions
              </p>
            </div>
            <div className="p-8 bg-bg-card border border-gold-dark/30 rounded-lg opacity-60">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-bg-secondary flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-text-muted" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-text-muted font-semibold">
                    Items Database
                  </h3>
                  <span className="text-xs text-gold-bright bg-gold-primary/20 px-2 py-1 rounded">
                    Coming Soon
                  </span>
                </div>
              </div>
              <p className="font-ui text-sm text-text-muted">
                Consumables, materials, and quest items
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* Help Section */}
        <div className="mt-16 p-8 bg-bg-card border border-gold-dark/30 rounded-lg">
          <h2 className="font-display text-2xl text-gold-primary font-semibold mb-4 text-center">
            Can't Find What You're Looking For?
          </h2>
          <p className="font-ui text-text-secondary text-center mb-6">
            We're constantly expanding our databases. Check back soon for more content!
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/guides"
              className="px-6 py-3 bg-gradient-gold text-bg-primary font-ui font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Browse Guides
            </Link>
            <Link
              href="/tools"
              className="px-6 py-3 border-2 border-gold-primary/40 text-gold-bright font-ui font-semibold rounded-lg hover:bg-gold-primary/10 transition-colors"
            >
              Use Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
