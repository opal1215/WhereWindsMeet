import { Metadata } from 'next';
import { Sword, Filter, Search } from 'lucide-react';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DatabaseCard } from '@/components/database/DatabaseCard';
import { FilterBar } from '@/components/database/FilterBar';

// Weapon data interface
export interface Weapon {
  id: string;
  name: string;
  type: 'Sword' | 'Dual Blades' | 'Polearm' | 'Bow' | 'Fist';
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  damage: number;
  attackSpeed: number;
  level: number;
  description: string;
  location: string;
  specialAbility?: string;
  image: string;
}

// Example weapons data
const weaponsData: Weapon[] = [
  {
    id: 'infernal-twinblades',
    name: 'Infernal Twinblades',
    type: 'Dual Blades',
    rarity: 'Legendary',
    damage: 450,
    attackSpeed: 1.8,
    level: 50,
    description: 'Legendary dual blades forged in the depths of the Infernal Volcano. Each strike leaves a trail of flames.',
    location: 'Northern Frontier - Volcano Boss Drop',
    specialAbility: 'Flame Trail: Attacks leave burning damage over 5 seconds',
    image: '/images/weapons/infernal-twinblades.jpg',
  },
  {
    id: 'celestial-daggers',
    name: 'Celestial Daggers',
    type: 'Dual Blades',
    rarity: 'Epic',
    damage: 380,
    attackSpeed: 2.0,
    level: 45,
    description: 'Swift daggers blessed by the Celestial Palace. Favored by assassins and duelists.',
    location: 'Celestial Palace - Elite Mob Drop',
    specialAbility: 'Shadow Step: Increases dodge chance by 15%',
    image: '/images/weapons/celestial-daggers.jpg',
  },
  {
    id: 'dragon-slayer-sword',
    name: 'Dragon Slayer Sword',
    type: 'Sword',
    rarity: 'Legendary',
    damage: 520,
    attackSpeed: 1.2,
    level: 55,
    description: 'Massive sword capable of slaying dragons. Requires immense strength to wield effectively.',
    location: 'Dragon Valley - Final Boss',
    specialAbility: 'Dragon Bane: +50% damage against dragon-type enemies',
    image: '/images/weapons/dragon-slayer-sword.jpg',
  },
  {
    id: 'jade-emperor-polearm',
    name: 'Jade Emperor Polearm',
    type: 'Polearm',
    rarity: 'Legendary',
    damage: 480,
    attackSpeed: 1.5,
    level: 52,
    description: 'Imperial polearm wielded by the Jade Emperor\'s elite guards. Grants authority over the battlefield.',
    location: 'Imperial Palace - Quest Reward',
    specialAbility: 'Imperial Command: Increases party damage by 10%',
    image: '/images/weapons/jade-emperor-polearm.jpg',
  },
  {
    id: 'wind-walker-bow',
    name: 'Wind Walker Bow',
    type: 'Bow',
    rarity: 'Epic',
    damage: 400,
    attackSpeed: 1.6,
    level: 48,
    description: 'Bow crafted from ancient windwood. Arrows fly silently and strike with precision.',
    location: 'Windwood Forest - Hidden Chest',
    specialAbility: 'Silent Shot: Critical hits have 30% chance to reset cooldowns',
    image: '/images/weapons/wind-walker-bow.jpg',
  },
  {
    id: 'iron-fist-gauntlets',
    name: 'Iron Fist Gauntlets',
    type: 'Fist',
    rarity: 'Rare',
    damage: 320,
    attackSpeed: 2.2,
    level: 40,
    description: 'Heavy gauntlets forged from mountain iron. Perfect for martial artists who rely on raw power.',
    location: 'Shaolin Temple - Vendor',
    image: '/images/weapons/iron-fist-gauntlets.jpg',
  },
];

export const metadata: Metadata = {
  title: 'Weapons Database - All Weapons Guide',
  description: 'Complete database of all weapons in Where Winds Meet. Find stats, locations, and special abilities for every weapon type.',
  keywords: ['where winds meet weapons', 'wwm weapons database', 'weapon stats', 'weapon locations', 'best weapons'],
  openGraph: {
    title: 'Where Winds Meet Weapons Database',
    description: 'Complete guide to all weapons, including stats, locations, and special abilities.',
    type: 'website',
    images: [
      {
        url: '/images/og-weapons-database.jpg',
        width: 1200,
        height: 630,
        alt: 'Where Winds Meet Weapons Database',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where Winds Meet Weapons Database',
    description: 'Complete guide to all weapons in WWM',
    images: ['/images/og-weapons-database.jpg'],
  },
  alternates: {
    canonical: 'https://wherewindsmeetgame.org/database/weapons',
  },
};

export default function WeaponsDatabase() {
  // Group weapons by type
  const weaponTypes = ['All', 'Sword', 'Dual Blades', 'Polearm', 'Bow', 'Fist'];
  const rarities = ['All', 'Common', 'Rare', 'Epic', 'Legendary'];

  return (
    <>
      {/* Schema Markup */}
      <WebSiteSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Database', url: 'https://wherewindsmeetgame.org/database' },
          { name: 'Weapons', url: 'https://wherewindsmeetgame.org/database/weapons' },
        ]}
      />

      <div className="min-h-screen bg-bg-primary pt-14 pb-20">
        <div className="max-w-[1400px] mx-auto px-5">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Database', url: '/database' },
              { name: 'Weapons' },
            ]}
          />

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Sword className="w-10 h-10 text-gold-primary" />
              <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold">
                Weapons Database
              </h1>
            </div>
            <p className="font-body text-lg text-text-secondary leading-relaxed max-w-3xl">
              Comprehensive database of all weapons in Where Winds Meet. Browse by type, rarity, and level to find the perfect weapon for your build.
            </p>
          </header>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total Weapons" value={weaponsData.length} />
            <StatCard label="Legendary" value={weaponsData.filter(w => w.rarity === 'Legendary').length} color="text-gold-bright" />
            <StatCard label="Epic" value={weaponsData.filter(w => w.rarity === 'Epic').length} color="text-purple-400" />
            <StatCard label="Weapon Types" value={5} color="text-blue-accent" />
          </div>

          {/* Filter Bar */}
          <FilterBar
            types={weaponTypes}
            rarities={rarities}
            placeholder="Search weapons by name..."
          />

          {/* Weapons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {weaponsData.map((weapon) => (
              <DatabaseCard
                key={weapon.id}
                title={weapon.name}
                type={weapon.type}
                rarity={weapon.rarity}
                description={weapon.description}
                stats={[
                  { label: 'Damage', value: weapon.damage },
                  { label: 'Attack Speed', value: weapon.attackSpeed },
                  { label: 'Required Level', value: weapon.level },
                ]}
                location={weapon.location}
                specialAbility={weapon.specialAbility}
                image={weapon.image}
                href={`/database/weapons/${weapon.id}`}
              />
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-bg-card border border-gold-dark/30 rounded-lg p-6">
            <h3 className="font-display text-xl text-gold-primary font-bold mb-3">
              How to Use This Database
            </h3>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-1">•</span>
                <span><strong className="text-text-primary">Filter by Type:</strong> Click weapon type buttons to view specific categories</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-1">•</span>
                <span><strong className="text-text-primary">Filter by Rarity:</strong> Focus on Legendary and Epic weapons for endgame builds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-1">•</span>
                <span><strong className="text-text-primary">Search:</strong> Type weapon name to quickly find specific items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-1">•</span>
                <span><strong className="text-text-primary">Click Cards:</strong> View detailed stats, upgrade paths, and farming guides</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// Stat Card Component
function StatCard({ label, value, color = 'text-text-primary' }: { label: string; value: number; color?: string }) {
  return (
    <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
      <div className={`font-display text-3xl font-bold mb-1 ${color}`}>
        {value}
      </div>
      <div className="text-sm text-text-muted">{label}</div>
    </div>
  );
}
