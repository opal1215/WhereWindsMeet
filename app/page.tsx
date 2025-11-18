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
        title="Find Your Way<br/>Through the Wuxia Winds"
        subtitle="Beginner tips, builds, maps and resources for PS5 & PC players."
        goldSubtitle={true}
        backgroundImage="/images/hero-bg.webp"
        primaryCTA={{
          label: 'Start Here',
          href: '/guides/is-where-winds-meet-for-you',
        }}
        secondaryCTA={{
          label: 'Free Codes',
          href: '/codes',
        }}
      />

      {/* Redemption Codes CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 py-12">
          <a
            href="/codes"
            className="group block relative bg-gradient-to-r from-gold-dark/20 via-gold-primary/30 to-gold-dark/20 border-2 border-gold-primary/40 rounded-2xl overflow-hidden hover:border-gold-primary/60 transition-all duration-300"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10">
              {/* Left side - Icon and Text */}
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gold-primary/20 rounded-xl flex items-center justify-center border border-gold-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-8 h-8 md:w-10 md:h-10 text-gold-primary" />
                </div>
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/20 border border-gold-primary/40 rounded-full mb-3">
                    <div className="w-2 h-2 rounded-full bg-gold-primary animate-pulse"></div>
                    <span className="text-xs font-bold text-gold-primary uppercase tracking-wider">
                      Latest Codes
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                    Free Redemption Codes Available
                  </h2>
                  <p className="text-base md:text-lg text-text-secondary">
                    Get free Echo Jade, Coins, and exclusive rewards. Updated daily for November 2025.
                  </p>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="flex-shrink-0">
                <div className="flex items-center gap-3 px-6 py-3 bg-gold-primary text-bg-primary font-bold rounded-lg group-hover:bg-gold-bright transition-colors duration-200">
                  <span>Claim Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-50"></div>
          </a>
        </div>
      </section>

      {/* Getting Started Section */}
      <SectionContainer
        title="New to Where Winds Meet?"
        subtitle="Start your journey with these essential guides"
        background="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Is Where Winds Meet for You?"
            description="Honest breakdown for Souls players, Genshin fans, and MMO veterans. Learn if this game matches your playstyle."
            href="/guides/is-where-winds-meet-for-you"
            icon={<BookOpen className="w-8 h-8" />}
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
