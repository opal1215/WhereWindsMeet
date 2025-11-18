'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Package, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';

interface DropItem {
  name: string;
  type: 'Weapon' | 'Armor' | 'Material' | 'Consumable' | 'Currency';
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  dropRate: number; // percentage
  quantity: string;
}

interface Boss {
  id: string;
  name: string;
  level: number;
  location: string;
  difficulty: 'Normal' | 'Elite' | 'World Boss' | 'Raid Boss';
  drops: DropItem[];
}

const bossData: Boss[] = [
  {
    id: 'volcano-lord',
    name: 'Volcano Lord',
    level: 50,
    location: 'Northern Frontier - Infernal Volcano',
    difficulty: 'World Boss',
    drops: [
      { name: 'Infernal Twinblades', type: 'Weapon', rarity: 'Legendary', dropRate: 5, quantity: '1' },
      { name: 'Flame Core', type: 'Material', rarity: 'Epic', dropRate: 25, quantity: '1-3' },
      { name: 'Volcanic Ore', type: 'Material', rarity: 'Rare', dropRate: 50, quantity: '3-5' },
      { name: 'Phoenix Feather', type: 'Material', rarity: 'Epic', dropRate: 15, quantity: '1' },
      { name: 'Gold Coins', type: 'Currency', rarity: 'Common', dropRate: 100, quantity: '5000-8000' },
    ],
  },
  {
    id: 'dragon-emperor',
    name: 'Dragon Emperor',
    level: 55,
    location: 'Dragon Valley - Imperial Peak',
    difficulty: 'Raid Boss',
    drops: [
      { name: 'Dragon Slayer Sword', type: 'Weapon', rarity: 'Legendary', dropRate: 8, quantity: '1' },
      { name: 'Dragon Scale', type: 'Material', rarity: 'Legendary', dropRate: 20, quantity: '1-2' },
      { name: 'Emperor\'s Crown', type: 'Armor', rarity: 'Legendary', dropRate: 10, quantity: '1' },
      { name: 'Dragon Heart', type: 'Material', rarity: 'Epic', dropRate: 35, quantity: '1' },
      { name: 'Gold Coins', type: 'Currency', rarity: 'Common', dropRate: 100, quantity: '10000-15000' },
    ],
  },
  {
    id: 'shadow-assassin',
    name: 'Shadow Assassin',
    level: 45,
    location: 'Dark Forest - Hidden Cave',
    difficulty: 'Elite',
    drops: [
      { name: 'Celestial Daggers', type: 'Weapon', rarity: 'Epic', dropRate: 12, quantity: '1' },
      { name: 'Shadow Essence', type: 'Material', rarity: 'Rare', dropRate: 40, quantity: '2-4' },
      { name: 'Stealth Cloak', type: 'Armor', rarity: 'Rare', dropRate: 30, quantity: '1' },
      { name: 'Gold Coins', type: 'Currency', rarity: 'Common', dropRate: 100, quantity: '2000-3000' },
    ],
  },
  {
    id: 'jade-guardian',
    name: 'Jade Guardian',
    level: 52,
    location: 'Imperial Palace - Throne Room',
    difficulty: 'World Boss',
    drops: [
      { name: 'Jade Emperor Polearm', type: 'Weapon', rarity: 'Legendary', dropRate: 6, quantity: '1' },
      { name: 'Imperial Jade', type: 'Material', rarity: 'Epic', dropRate: 30, quantity: '1-2' },
      { name: 'Guardian\'s Armor Set', type: 'Armor', rarity: 'Epic', dropRate: 20, quantity: '1 piece' },
      { name: 'Royal Seal', type: 'Material', rarity: 'Rare', dropRate: 45, quantity: '1' },
      { name: 'Gold Coins', type: 'Currency', rarity: 'Common', dropRate: 100, quantity: '6000-9000' },
    ],
  },
];

export default function DropTablePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedBoss, setExpandedBoss] = useState<string | null>(bossData[0]?.id || null);
  const [filterRarity, setFilterRarity] = useState<string>('All');
  const [filterType, setFilterType] = useState<string>('All');

  const filteredBosses = bossData.filter(boss =>
    boss.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    boss.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rarityColors = {
    Common: 'text-gray-400',
    Rare: 'text-blue-400',
    Epic: 'text-purple-400',
    Legendary: 'text-gold-bright',
  };

  return (
    <>
      {/* Schema Markup */}
      <WebSiteSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Tools', url: 'https://wherewindsmeetgame.org/tools' },
          { name: 'Drop Table', url: 'https://wherewindsmeetgame.org/tools/drop-table' },
        ]}
      />

      <div className="min-h-screen bg-bg-primary pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Tools', url: '/tools' },
              { name: 'Drop Table' },
            ]}
          />

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Package className="w-10 h-10 text-gold-primary" />
              <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold">
                Boss Drop Table
              </h1>
            </div>
            <p className="font-body text-lg text-text-secondary leading-relaxed max-w-3xl">
              Complete database of boss drops, loot tables, and drop rates. Plan your farming routes efficiently.
            </p>
          </header>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total Bosses" value={bossData.length} />
            <StatCard label="Legendary Drops" value={bossData.reduce((acc, boss) => acc + boss.drops.filter(d => d.rarity === 'Legendary').length, 0)} />
            <StatCard label="Epic Drops" value={bossData.reduce((acc, boss) => acc + boss.drops.filter(d => d.rarity === 'Epic').length, 0)} />
            <StatCard label="Total Drops" value={bossData.reduce((acc, boss) => acc + boss.drops.length, 0)} />
          </div>

          {/* Search and Filters */}
          <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search bosses or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-bg-secondary border border-gold-dark/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-gold-primary transition-colors"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-2">
                <select
                  value={filterRarity}
                  onChange={(e) => setFilterRarity(e.target.value)}
                  className="px-4 py-3 bg-bg-secondary border border-gold-dark/30 rounded-lg text-text-primary focus:outline-none focus:border-gold-primary transition-colors"
                >
                  <option value="All">All Rarities</option>
                  <option value="Legendary">Legendary</option>
                  <option value="Epic">Epic</option>
                  <option value="Rare">Rare</option>
                  <option value="Common">Common</option>
                </select>

                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-3 bg-bg-secondary border border-gold-dark/30 rounded-lg text-text-primary focus:outline-none focus:border-gold-primary transition-colors"
                >
                  <option value="All">All Types</option>
                  <option value="Weapon">Weapons</option>
                  <option value="Armor">Armor</option>
                  <option value="Material">Materials</option>
                </select>
              </div>
            </div>
          </div>

          {/* Boss Drop Tables */}
          <div className="space-y-4">
            {filteredBosses.map((boss) => {
              const isExpanded = expandedBoss === boss.id;

              // Filter drops based on selected filters
              let displayDrops = boss.drops;
              if (filterRarity !== 'All') {
                displayDrops = displayDrops.filter(drop => drop.rarity === filterRarity);
              }
              if (filterType !== 'All') {
                displayDrops = displayDrops.filter(drop => drop.type === filterType);
              }

              const difficultyColor =
                boss.difficulty === 'Raid Boss' ? 'text-red-400 border-red-400' :
                boss.difficulty === 'World Boss' ? 'text-gold-bright border-gold-bright' :
                boss.difficulty === 'Elite' ? 'text-purple-400 border-purple-400' :
                'text-blue-400 border-blue-400';

              return (
                <div
                  key={boss.id}
                  className="bg-bg-card rounded-lg border border-gold-dark/30 overflow-hidden"
                >
                  {/* Boss Header */}
                  <button
                    onClick={() => setExpandedBoss(isExpanded ? null : boss.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display text-2xl text-gold-primary font-bold text-left">
                            {boss.name}
                          </h3>
                          <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${difficultyColor}`}>
                            {boss.difficulty}
                          </span>
                        </div>
                        <div className="text-sm text-text-muted text-left">
                          Level {boss.level} • {boss.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right hidden md:block">
                        <div className="text-sm text-text-muted">Drops</div>
                        <div className="text-lg font-bold text-gold-bright">{displayDrops.length}</div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gold-primary" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gold-primary" />
                      )}
                    </div>
                  </button>

                  {/* Drop Table */}
                  {isExpanded && (
                    <div className="border-t border-gold-dark/20">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-bg-secondary">
                            <tr>
                              <th className="px-6 py-4 text-left font-display text-gold-primary">Item</th>
                              <th className="px-6 py-4 text-left font-display text-gold-primary">Type</th>
                              <th className="px-6 py-4 text-left font-display text-gold-primary">Rarity</th>
                              <th className="px-6 py-4 text-left font-display text-gold-primary">Drop Rate</th>
                              <th className="px-6 py-4 text-left font-display text-gold-primary">Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {displayDrops.map((drop, i) => (
                              <tr key={i} className="border-t border-gold-dark/20 hover:bg-bg-secondary/30 transition-colors">
                                <td className="px-6 py-4 font-ui text-text-primary font-semibold">
                                  {drop.name}
                                </td>
                                <td className="px-6 py-4 font-ui text-text-secondary">
                                  {drop.type}
                                </td>
                                <td className="px-6 py-4">
                                  <span className={`font-semibold ${rarityColors[drop.rarity]}`}>
                                    {drop.rarity}
                                  </span>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                    <div className="flex-grow max-w-[100px]">
                                      <div className="w-full bg-bg-primary rounded-full h-2">
                                        <div
                                          className="bg-gradient-gold h-2 rounded-full"
                                          style={{ width: `${drop.dropRate}%` }}
                                        />
                                      </div>
                                    </div>
                                    <span className="font-semibold text-gold-bright min-w-[45px]">
                                      {drop.dropRate}%
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 font-ui text-text-secondary">
                                  {drop.quantity}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Tips */}
          <div className="mt-8 bg-gradient-to-br from-blue-accent/10 to-gold-primary/10 rounded-lg border border-gold-dark/30 p-6">
            <h3 className="font-display text-xl text-gold-primary font-bold mb-3">
              Farming Tips
            </h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-0.5">•</span>
                <span><strong className="text-text-primary">World Bosses</strong> respawn every 4-6 hours - check spawn timers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-0.5">•</span>
                <span><strong className="text-text-primary">Elite Bosses</strong> can be farmed repeatedly with dungeon resets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-0.5">•</span>
                <span><strong className="text-text-primary">Raid Bosses</strong> are weekly lockouts - plan accordingly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-0.5">•</span>
                <span>Drop rates can be increased with luck buffs and party bonuses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// Stat Card Component
function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
      <div className="font-display text-3xl text-gold-bright font-bold mb-1">
        {value}
      </div>
      <div className="text-sm text-text-muted">{label}</div>
    </div>
  );
}
