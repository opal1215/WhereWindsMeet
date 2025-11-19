import { Metadata } from 'next';
import { getAllBuilds } from '@/lib/content';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { Sword, Shield, Zap, Crosshair } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Where Winds Meet Builds | PVE & PVP Tier List',
  description: 'Browse the best Where Winds Meet builds for every playstyle. Top-tier PVE DPS, Tank, and PVP Duelist builds updated for the latest patch.',
};

export default function BuildsPage() {
  const builds = getAllBuilds();

  // Group builds by category (simple logic for now, can be enhanced)
  const pveBuilds = builds.filter(b => !b.metadata.title.toLowerCase().includes('pvp'));
  const pvpBuilds = builds.filter(b => b.metadata.title.toLowerCase().includes('pvp'));

  return (
    <div className="min-h-screen bg-bg-primary pt-14 pb-20">
      <div className="max-w-[1400px] mx-auto px-5">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Builds' },
          ]}
        />

        {/* Header */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl text-gold-primary font-bold mb-6">
            Master Your Martial Arts
          </h1>
          <p className="font-body text-xl text-text-secondary leading-relaxed">
            Discover community-tested builds for every sect and weapon. 
            Whether you prefer crushing PVE bosses or dominating the PVP arena, 
            find your perfect playstyle here.
          </p>
        </header>

        {/* PVE Section */}
        <SectionContainer
          title="PVE Builds"
          subtitle="Optimize your damage and survivability for dungeons and raids"
          background="transparent"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pveBuilds.map((build) => (
              <Card
                key={build.slug}
                title={build.metadata.title}
                description={build.metadata.description}
                href={`/builds/${build.slug}`}
                icon={<Sword className="w-6 h-6" />}
                image={build.metadata.image}
              >
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-bg-secondary rounded text-xs text-gold-bright border border-gold-dark/30">
                    {build.metadata.playstyle}
                  </span>
                  <span className={`px-2 py-1 bg-bg-secondary rounded text-xs border border-gold-dark/30 ${
                    build.metadata.difficulty === 'Easy' ? 'text-green-400' : 
                    build.metadata.difficulty === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {build.metadata.difficulty}
                  </span>
                </div>
              </Card>
            ))}
            
            {/* Placeholder for Coming Soon PVE Tank */}
             <Card
                title="PVE Tank (Coming Soon)"
                description="The ultimate fortress build for high-level raids. Survives everything."
                href="/builds/pve-tank"
                icon={<Shield className="w-6 h-6" />}
                variant="compact"
              >
                 <div className="mt-4">
                  <span className="px-2 py-1 bg-bg-secondary rounded text-xs text-text-muted border border-white/10">
                    Coming Dec 2025
                  </span>
                </div>
              </Card>
          </div>
        </SectionContainer>

        {/* PVP Section */}
        <SectionContainer
          title="PVP Builds"
          subtitle="Dominate the arena with these duel-focused setups"
          background="secondary"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pvpBuilds.length > 0 ? (
              pvpBuilds.map((build) => (
                <Card
                  key={build.slug}
                  title={build.metadata.title}
                  description={build.metadata.description}
                  href={`/builds/${build.slug}`}
                  icon={<Crosshair className="w-6 h-6" />}
                  image={build.metadata.image}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-bg-card/50 rounded-lg border border-dashed border-gold-dark/30">
                <Crosshair className="w-12 h-12 text-text-muted mx-auto mb-4" />
                <h3 className="text-xl text-text-primary font-display mb-2">PVP Meta Developing</h3>
                <p className="text-text-secondary">
                  We are currently testing the best PVP builds for the current patch. 
                  Check back soon for the Duelist and Arena guides.
                </p>
              </div>
            )}
             {/* Placeholder for Coming Soon PVP Duelist */}
             <Card
                title="Swift Shadow (Coming Soon)"
                description="High mobility assassin build for 1v1 dominance."
                href="/builds/pvp-duelist"
                icon={<Zap className="w-6 h-6" />}
                variant="compact"
              >
                 <div className="mt-4">
                  <span className="px-2 py-1 bg-bg-secondary rounded text-xs text-text-muted border border-white/10">
                    Coming Dec 2025
                  </span>
                </div>
              </Card>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
