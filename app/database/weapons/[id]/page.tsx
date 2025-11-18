import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { RelatedContent, RelatedLink } from '@/components/ui/RelatedContent';
import { Button } from '@/components/ui/Button';
import { Sword, Shield, Zap, Target, MapPin, Sparkles, TrendingUp, Users } from 'lucide-react';

interface WeaponDetailData {
  id: string;
  name: string;
  type: 'Sword' | 'Dual Blades' | 'Polearm' | 'Bow' | 'Fist';
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  damage: number;
  attackSpeed: number;
  criticalChance: number;
  level: number;
  description: string;
  lore: string;
  location: string;
  dropRate: string;
  specialAbility: {
    name: string;
    description: string;
    cooldown?: string;
  };
  stats: {
    baseAttack: number;
    scaling: string;
    durability: number;
    weight: string;
  };
  upgradeInfo: {
    maxLevel: number;
    materialsNeeded: string[];
    upgradeLocation: string;
  };
  bestBuilds: RelatedLink[];
  alternativeWeapons: RelatedLink[];
  farmingGuide: string[];
}

const weaponsDetailData: Record<string, WeaponDetailData> = {
  'infernal-twinblades': {
    id: 'infernal-twinblades',
    name: 'Infernal Twinblades',
    type: 'Dual Blades',
    rarity: 'Legendary',
    damage: 450,
    attackSpeed: 1.8,
    criticalChance: 25,
    level: 50,
    description: 'Legendary dual blades forged in the depths of the Infernal Volcano. Each strike leaves a trail of flames that burns enemies over time.',
    lore: 'Forged by the ancient Flame Sect master, these twin blades were quenched in dragon fire and blessed by the Fire Phoenix. Legend says they can only be wielded by those who have mastered the Blazing Dance technique.',
    location: 'Northern Frontier - Infernal Volcano',
    dropRate: '5% from Volcano Lord (World Boss)',
    specialAbility: {
      name: 'Flame Trail',
      description: 'Each attack leaves a burning trail that deals 50% weapon damage as fire damage over 5 seconds. Stacks up to 3 times.',
      cooldown: 'Passive (No Cooldown)',
    },
    stats: {
      baseAttack: 450,
      scaling: 'Agility (A+) / Strength (B)',
      durability: 100,
      weight: 'Medium',
    },
    upgradeInfo: {
      maxLevel: 10,
      materialsNeeded: [
        'Dragon Scale x5',
        'Infernal Ore x10',
        'Phoenix Feather x3',
        '50,000 Silver',
      ],
      upgradeLocation: 'Any Master Blacksmith',
    },
    bestBuilds: [
      {
        title: 'PVE DPS Build - Infernal Twinblades',
        url: '/builds/pve-dps',
        description: 'Maximum damage output build for endgame PVE content',
      },
      {
        title: 'Hybrid DPS Build',
        url: '/builds/hybrid-dps',
        description: 'Balanced build for both PVE and PVP',
      },
    ],
    alternativeWeapons: [
      {
        title: 'Celestial Daggers',
        url: '/database/weapons/celestial-daggers',
        description: 'Epic dual blades with shadow abilities',
      },
      {
        title: 'Storm Blades',
        url: '/database/weapons/storm-blades',
        description: 'Lightning-infused dual blades',
      },
    ],
    farmingGuide: [
      'Reach level 50 and complete the "Flame Sect Alliance" quest line',
      'Unlock access to Northern Frontier region',
      'Locate the Infernal Volcano dungeon (Northwest of Northern Frontier)',
      'Clear the dungeon and defeat Volcano Lord (final boss)',
      'Boss has a 5% drop rate - expect 20+ runs for guaranteed drop',
      'Recommended: Farm with a party for faster clear times',
      'Alternative: Complete weekly "Inferno Challenge" for higher drop rate (15%)',
    ],
  },
};

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const weapon = weaponsDetailData[params.id];

  if (!weapon) {
    return {
      title: 'Weapon Not Found',
    };
  }

  return {
    title: `${weapon.name} - Weapon Guide | Where Winds Meet`,
    description: weapon.description,
    keywords: ['where winds meet', weapon.name.toLowerCase(), 'weapon guide', weapon.type.toLowerCase()],
    openGraph: {
      title: weapon.name,
      description: weapon.description,
      type: 'article',
      images: [
        {
          url: `/images/weapons/${weapon.id}.jpg`,
          width: 1200,
          height: 630,
          alt: weapon.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: weapon.name,
      description: weapon.description,
      images: [`/images/weapons/${weapon.id}.jpg`],
    },
    alternates: {
      canonical: `https://wherewindsmeetgame.org/database/weapons/${params.id}`,
    },
  };
}

export default function WeaponDetailPage({ params }: PageProps) {
  const weapon = weaponsDetailData[params.id];

  if (!weapon) {
    notFound();
  }

  const rarityColors = {
    Common: 'text-gray-400 border-gray-400',
    Rare: 'text-blue-400 border-blue-400',
    Epic: 'text-purple-400 border-purple-400',
    Legendary: 'text-gold-bright border-gold-bright',
  };

  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        headline={weapon.name}
        description={weapon.description}
        author="WWM Database Team"
        datePublished="2025-11-18"
        dateModified="2025-11-18"
        image={`/images/weapons/${weapon.id}.jpg`}
        url={`https://wherewindsmeetgame.org/database/weapons/${params.id}`}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Database', url: 'https://wherewindsmeetgame.org/database' },
          { name: 'Weapons', url: 'https://wherewindsmeetgame.org/database/weapons' },
          { name: weapon.name, url: `https://wherewindsmeetgame.org/database/weapons/${params.id}` },
        ]}
      />

      <div className="min-h-screen bg-bg-primary pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Database', url: '/database' },
              { name: 'Weapons', url: '/database/weapons' },
              { name: weapon.name },
            ]}
          />

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold">
                {weapon.name}
              </h1>
              <span className={`px-4 py-1.5 rounded-full border-2 ${rarityColors[weapon.rarity]} font-ui text-sm font-semibold`}>
                {weapon.rarity}
              </span>
            </div>

            <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
              {weapon.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <span><strong className="text-text-primary">Type:</strong> {weapon.type}</span>
              <span>•</span>
              <span><strong className="text-text-primary">Level Required:</strong> {weapon.level}</span>
              <span>•</span>
              <span><strong className="text-text-primary">Rarity:</strong> {weapon.rarity}</span>
            </div>
          </header>

          {/* Main Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard icon={<Sword className="w-6 h-6" />} label="Base Damage" value={weapon.damage} />
            <StatCard icon={<Zap className="w-6 h-6" />} label="Attack Speed" value={weapon.attackSpeed} />
            <StatCard icon={<Target className="w-6 h-6" />} label="Crit Chance" value={`${weapon.criticalChance}%`} />
            <StatCard icon={<Shield className="w-6 h-6" />} label="Durability" value={weapon.stats.durability} />
          </div>

          {/* Special Ability */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gold-primary/10 to-blue-accent/10 rounded-lg border-2 border-gold-primary/50 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-gold-bright" />
                <div>
                  <h2 className="font-display text-2xl text-gold-primary font-bold">
                    {weapon.specialAbility.name}
                  </h2>
                  <p className="text-sm text-text-muted">{weapon.specialAbility.cooldown}</p>
                </div>
              </div>
              <p className="font-body text-text-secondary leading-relaxed">
                {weapon.specialAbility.description}
              </p>
            </div>
          </section>

          {/* Detailed Stats */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-gold-primary font-bold mb-6">Weapon Stats</h2>
            <div className="bg-bg-card rounded-lg border border-gold-dark/30 overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gold-dark/20">
                    <td className="px-6 py-4 font-ui text-text-muted">Base Attack</td>
                    <td className="px-6 py-4 font-ui text-text-primary font-semibold">{weapon.stats.baseAttack}</td>
                  </tr>
                  <tr className="border-b border-gold-dark/20">
                    <td className="px-6 py-4 font-ui text-text-muted">Attribute Scaling</td>
                    <td className="px-6 py-4 font-ui text-text-primary font-semibold">{weapon.stats.scaling}</td>
                  </tr>
                  <tr className="border-b border-gold-dark/20">
                    <td className="px-6 py-4 font-ui text-text-muted">Durability</td>
                    <td className="px-6 py-4 font-ui text-text-primary font-semibold">{weapon.stats.durability}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-ui text-text-muted">Weight Class</td>
                    <td className="px-6 py-4 font-ui text-text-primary font-semibold">{weapon.stats.weight}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Location & Drop Info */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-gold-primary font-bold mb-6">How to Obtain</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-bg-card rounded-lg border border-blue-accent/30 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-accent" />
                  <h3 className="font-display text-xl text-text-primary font-bold">Location</h3>
                </div>
                <p className="text-text-secondary">{weapon.location}</p>
              </div>

              <div className="bg-bg-card rounded-lg border border-green-500/30 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <h3 className="font-display text-xl text-text-primary font-bold">Drop Rate</h3>
                </div>
                <p className="text-text-secondary">{weapon.dropRate}</p>
              </div>
            </div>
          </section>

          {/* Farming Guide */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-gold-primary font-bold mb-6">Farming Guide</h2>
            <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
              <ol className="space-y-3">
                {weapon.farmingGuide.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gold-primary/20 text-gold-primary text-sm font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-text-secondary leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Upgrade Info */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-gold-primary font-bold mb-6">Upgrade Information</h2>
            <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
              <div className="mb-4">
                <span className="text-text-muted">Max Upgrade Level: </span>
                <span className="text-gold-bright font-bold text-xl">+{weapon.upgradeInfo.maxLevel}</span>
              </div>
              <div className="mb-4">
                <h3 className="font-ui text-text-primary font-semibold mb-2">Materials Needed per Upgrade:</h3>
                <ul className="space-y-1">
                  {weapon.upgradeInfo.materialsNeeded.map((material, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-secondary">
                      <span className="text-gold-bright">•</span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-text-muted">Upgrade Location: </span>
                <span className="text-text-primary font-semibold">{weapon.upgradeInfo.upgradeLocation}</span>
              </div>
            </div>
          </section>

          {/* Lore */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-gold-primary font-bold mb-6">Lore</h2>
            <div className="bg-gradient-to-r from-bg-card to-bg-secondary rounded-lg border border-gold-dark/30 p-8">
              <p className="font-serif text-text-secondary leading-relaxed italic text-lg">
                "{weapon.lore}"
              </p>
            </div>
          </section>

          {/* CTA for Build Planner */}
          <div className="bg-bg-card rounded-lg border border-gold-primary/30 p-8 text-center mb-12">
            <h3 className="font-display text-2xl text-gold-primary font-bold mb-4">
              Plan Your Build with {weapon.name}
            </h3>
            <p className="font-body text-text-secondary mb-6">
              Use our Build Planner to create the perfect character build around this weapon
            </p>
            <Button href="/tools/build-planner" variant="primary" size="lg">
              Open Build Planner
            </Button>
          </div>

          {/* Related Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <RelatedContent links={weapon.bestBuilds} title="Best Builds for This Weapon" variant="compact" />
            <RelatedContent links={weapon.alternativeWeapons} title="Alternative Weapons" variant="compact" />
          </div>
        </div>
      </div>
    </>
  );
}

// Stat Card Component
function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number | string }) {
  return (
    <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-gold-primary">{icon}</div>
        <span className="font-ui text-sm text-text-muted">{label}</span>
      </div>
      <div className="font-display text-3xl text-text-primary font-bold">{value}</div>
    </div>
  );
}

// Generate static params
export async function generateStaticParams() {
  return Object.keys(weaponsDetailData).map((id) => ({
    id,
  }));
}
