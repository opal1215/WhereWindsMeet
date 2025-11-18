import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { Hero } from '@/components/sections/Hero';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, Zap, Gamepad2, Settings, Sword, Map, Calculator } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />

      {/* Hero Section */}
      <Hero
        title="WHERE WINDS MEET"
        subtitle="Your Wuxia Adventure Begins Here"
        primaryCTA={{
          label: 'Beginner Guide',
          href: '/beginner-guide',
        }}
        secondaryCTA={{
          label: 'Top Builds',
          href: '/builds',
        }}
      />

      {/* Getting Started Section */}
      <SectionContainer
        title="New to Where Winds Meet?"
        subtitle="Start your journey with these essential guides"
        background="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Beginner Guide"
            description="Learn the basics of Where Winds Meet. Master combat, progression, and essential systems."
            href="/beginner-guide"
            icon={<BookOpen className="w-8 h-8" />}
          />
          <Card
            title="Leveling Guide"
            description="Fast-track your character progression with optimized leveling strategies and routes."
            href="/leveling-guide"
            icon={<Zap className="w-8 h-8" />}
          />
          <Card
            title="Game Modes"
            description="Understand RPG vs MMO modes and choose the playstyle that fits you best."
            href="/game-modes-overview"
            icon={<Gamepad2 className="w-8 h-8" />}
          />
          <Card
            title="Settings Optimization"
            description="Optimize your graphics and controls for the best performance and experience."
            href="/settings-optimization"
            icon={<Settings className="w-8 h-8" />}
          />
        </div>
      </SectionContainer>

      {/* Popular Builds Section */}
      <SectionContainer
        title="Popular Builds"
        subtitle="Discover the most effective character builds for PVE and PVP"
        background="primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card
            title="PVE DPS Build"
            description="Maximum damage output for boss fights and dungeons."
            href="/builds/pve-dps"
            icon={<Sword className="w-8 h-8" />}
            variant="compact"
          />
          <Card
            title="PVE Tank Build"
            description="Survive the toughest encounters with this defensive build."
            href="/builds/pve-tank"
            icon={<Sword className="w-8 h-8" />}
            variant="compact"
          />
          <Card
            title="PVP Duelist"
            description="Dominate 1v1 battles with this balanced PVP build."
            href="/builds/pvp-duelist"
            icon={<Sword className="w-8 h-8" />}
            variant="compact"
          />
        </div>
        <div className="text-center">
          <Button href="/builds" variant="primary">
            View All Builds
          </Button>
        </div>
      </SectionContainer>

      {/* World & Maps Section */}
      <SectionContainer
        title="Explore the Wuxia World"
        subtitle="Navigate vast regions with our interactive maps and guides"
        background="secondary"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card
              title="Interactive World Map"
              description="Discover fast travel points, resource locations, boss spawn areas, and hidden secrets across all regions."
              href="/world-map"
              icon={<Map className="w-8 h-8" />}
            >
              <div className="mt-4">
                <Button href="/world-map" variant="outline" size="sm">
                  Open Map
                </Button>
              </div>
            </Card>
          </div>
          <div className="aspect-video bg-bg-primary/50 rounded-lg border border-gold-dark/30 flex items-center justify-center">
            <p className="font-ui text-text-muted">Map Preview (Coming Soon)</p>
          </div>
        </div>
      </SectionContainer>

      {/* Tools Section */}
      <SectionContainer
        title="Interactive Tools"
        subtitle="Plan your build, track progress, and optimize your gameplay"
        background="primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Build Planner"
            description="Theory-craft and optimize your character build with our interactive planner."
            href="/tools/build-planner"
            icon={<Calculator className="w-8 h-8" />}
            variant="compact"
          />
          <Card
            title="XP Calculator"
            description="Calculate optimal leveling paths and time to max level."
            href="/tools/xp-calculator"
            icon={<Calculator className="w-8 h-8" />}
            variant="compact"
          />
          <Card
            title="Drop Table Browser"
            description="Search comprehensive loot tables for bosses, dungeons, and activities."
            href="/tools/drop-table"
            icon={<Calculator className="w-8 h-8" />}
            variant="compact"
          />
        </div>
      </SectionContainer>

      {/* EEAT Trust Section */}
      <SectionContainer
        title="About WhereWindsMeetgame.org"
        subtitle="Your trusted third-party guide for Where Winds Meet"
        background="secondary"
        containerWidth="md"
      >
        <div className="font-body text-text-secondary leading-relaxed space-y-4">
          <p>
            <strong className="text-text-primary">Third-Party Fan Site:</strong>{' '}
            We are a community-driven guide site, not affiliated with Everstone Games or the official Where Winds Meet game.
          </p>
          <p>
            <strong className="text-text-primary">Version Tracking:</strong>{' '}
            All guides are updated within 24 hours of game patches to ensure accuracy.
            Each page displays the last updated date and game version.
          </p>
          <p>
            <strong className="text-text-primary">Data-Driven Strategies:</strong>{' '}
            Our builds and guides are tested and refined by experienced players,
            backed by community feedback and game mechanics analysis.
          </p>
          <p className="text-center pt-4">
            <Button href="/disclaimer" variant="outline" size="sm">
              Read Full Disclaimer
            </Button>
          </p>
        </div>
      </SectionContainer>
    </>
  );
}
