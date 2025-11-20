import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { Hero } from '@/components/sections/Hero';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, Zap, Gamepad2, Settings, Sword, Map, Calculator, Gift, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />

      {/* Hero Section */}
      <Hero
        title="Carve Your Legend in the Wuxia World"
        subtitle="The ultimate compendium for Where Winds Meet. Master martial arts, discover secrets, and forge your destiny."
        goldSubtitle={true}
        backgroundImage="/images/hero-bg-hd.webp"
        primaryCTA={{
          label: 'Begin Journey',
          href: '/guides/is-where-winds-meet-for-you',
        }}
        secondaryCTA={{
          label: 'Claim Rewards',
          href: '/codes',
        }}
      />

      {/* Redemption Codes CTA Banner - Fixed Top Right */}
      <a
        href="/codes"
        className="fixed top-24 right-10 z-40 group w-52 bg-bg-card/90 backdrop-blur-md border-2 border-gold-primary/40 rounded-lg overflow-hidden hover:border-gold-primary hover:bg-bg-card transition-all duration-300 hidden lg:block shadow-card"
      >
        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Gift className="w-4 h-4 text-gold-primary flex-shrink-0" />
            <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-gold-primary/10 border border-gold-primary/30 rounded-sm">
              <div className="w-1 h-1 rounded-full bg-gold-primary animate-pulse"></div>
              <span className="text-[10px] font-bold text-gold-dark uppercase tracking-wide">
                Latest
              </span>
            </div>
          </div>
          <h3 className="font-display font-bold text-text-primary mb-0.5 text-xs">
            Free Redemption Codes
          </h3>
          <p className="text-[10px] text-text-secondary mb-2 leading-tight font-body">
            Echo Jade, Coins & rewards
          </p>
          <div className="flex items-center gap-1.5 text-gold-dark text-xs font-semibold group-hover:text-gold-primary transition-colors">
            <span>Claim Now</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </a>

      {/* Getting Started Section */}
      <div className="mt-12"></div>
      <SectionContainer
        title="New to the Jianghu?"
        subtitle="Essential knowledge for every wandering swordsman"
        background="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Is Where Winds Meet for You?"
            description="Honest breakdown for Souls players, Genshin fans, and MMO veterans. Learn if this game matches your playstyle."
            href="/guides/is-where-winds-meet-for-you"
            icon={<BookOpen className="w-8 h-8" />}
            image="/images/mystic-preview.jpg"
          />
          <Card
            title="First 3 Hours Guide"
            description="Simple tips for your first session. What to do first, what to ignore, and how to enjoy without feeling overwhelmed."
            href="/guides/first-3-hours-guide"
            icon={<Zap className="w-8 h-8" />}
          />
          <Card
            title="Qinghe & Kaifeng Tips"
            description="15 little things the game never explains. Small tricks, warnings, and quality-of-life advice for early regions."
            href="/guides/qinghe-kaifeng-tips"
            icon={<Map className="w-8 h-8" />}
          />
          <Card
            title="Combat Guide & Simple Builds"
            description="Practical combat overview for beginners: weapons, martial arts, and easy builds that feel good to play."
            href="/guides/combat-guide-beginner-builds"
            icon={<Sword className="w-8 h-8" />}
            image="/images/combat-preview.jpg"
          />
        </div>
      </SectionContainer>

      {/* Popular Builds Section */}
      <SectionContainer
        title="Martial Arts & Builds"
        subtitle="Discover the most effective styles for PVE and PVP"
        background="primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          <div className="aspect-video rounded-lg border-2 border-gold-dark/30 overflow-hidden shadow-card relative group">
            <img
              src="/images/world-preview.jpg"
              alt="World Map Preview"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      </SectionContainer>

      {/* Tools Section */}
      <SectionContainer
        title="Scholar's Tools"
        subtitle="Plan your build, track progress, and optimize your gameplay"
        background="primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Build Planner"
            description="Theory-craft and optimize your character build with our interactive planner."
            href="/tools/build-planner"
            icon={<Calculator className="w-8 h-8" />}
            variant="compact"
            image="/images/character-preview.jpg"
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
