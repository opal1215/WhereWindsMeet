import { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { Card } from '@/components/ui/Card';
import { Calculator, Table, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interactive Tools & Calculators | Where Winds Meet',
  description: 'Plan your builds, calculate XP, and browse drop tables with our interactive tools for Where Winds Meet.',
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-14 pb-20">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* Hero Section */}
        <div className="py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-gold mb-6">
            <Wrench className="w-10 h-10 text-bg-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold mb-4">
            Interactive Tools
          </h1>
          <p className="font-body text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Plan your build, track progress, and optimize your gameplay with our interactive tools.
          </p>
        </div>

        {/* Tools Grid */}
        <SectionContainer
          title="Available Tools"
          subtitle="Choose a tool to get started"
          background="secondary"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Build Planner"
              description="Theory-craft and optimize your character build with our interactive planner. Plan your skills, attributes, and equipment."
              href="/tools/build-planner"
              icon={<Calculator className="w-8 h-8" />}
            />
            <Card
              title="XP Calculator"
              description="Calculate optimal leveling paths and estimate time to max level. Plan your progression efficiently."
              href="/tools/xp-calculator"
              icon={<Calculator className="w-8 h-8" />}
            />
            <Card
              title="Drop Table Browser"
              description="Search comprehensive loot tables for bosses, dungeons, and activities. Find where to farm your gear."
              href="/tools/drop-table"
              icon={<Table className="w-8 h-8" />}
            />
          </div>
        </SectionContainer>

        {/* Coming Soon */}
        <div className="mt-16 p-8 bg-bg-card border border-gold-dark/30 rounded-lg text-center">
          <h2 className="font-display text-2xl text-gold-primary font-semibold mb-4">
            More Tools Coming Soon
          </h2>
          <p className="font-ui text-text-secondary mb-6">
            We're working on additional tools including a damage calculator, team builder, and more!
          </p>
          <div className="inline-block px-6 py-2 bg-gold-primary/20 border border-gold-primary/40 rounded-full text-gold-bright font-ui text-sm font-semibold">
            Stay Tuned
          </div>
        </div>
      </div>
    </div>
  );
}
