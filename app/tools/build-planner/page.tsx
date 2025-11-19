'use client';

import { useState } from 'react';
import { Wrench, Save, Share2, Trash2, Plus, Minus } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';

interface Attributes {
  strength: number; // External Attack & Defense
  agility: number;  // Internal Attack & Crit
  vitality: number; // HP & Defense
  intelligence: number; // Qi & Skill Haste
  spirit: number;   // Special Handling / Recovery
}

interface CalculatedStats {
  health: number;
  externalAttack: number;
  internalAttack: number;
  defense: number;
  critChance: number;
  critDamage: number;
}

const ATTRIBUTE_NAMES: (keyof Attributes)[] = ['strength', 'agility', 'vitality', 'intelligence', 'spirit'];
const MAX_LEVEL = 100;
const POINTS_PER_LEVEL = 5;
const MAX_TOTAL_POINTS = MAX_LEVEL * POINTS_PER_LEVEL;

export default function BuildPlannerPage() {
  const [buildName, setBuildName] = useState('My Build');
  const [level, setLevel] = useState(60);
  const [selectedWeapon, setSelectedWeapon] = useState('Sword');
  const [selectedPlaystyle, setSelectedPlaystyle] = useState('DPS');
  const [attributes, setAttributes] = useState<Attributes>({
    strength: 50,
    agility: 50,
    vitality: 40,
    intelligence: 30,
    spirit: 30,
  });

  const totalPointsUsed = Object.values(attributes).reduce((sum, val) => sum + val, 0);
  const availablePoints = (level * POINTS_PER_LEVEL) - totalPointsUsed;

  // Calculate derived stats based on research:
  // Strength -> External Attack
  // Agility -> Internal Attack + Crit
  // Vitality -> HP
  const calculatedStats: CalculatedStats = {
    health: 1500 + (attributes.vitality * 45) + (level * 20),
    externalAttack: 100 + (attributes.strength * 4.5) + (attributes.agility * 1.0),
    internalAttack: 100 + (attributes.agility * 4.5) + (attributes.intelligence * 2.0),
    defense: 80 + (attributes.vitality * 2.5) + (attributes.strength * 1.5),
    critChance: 5 + (attributes.agility * 0.15),
    critDamage: 150 + (attributes.agility * 0.5) + (attributes.strength * 0.2),
  };

  const handleAttributeChange = (attr: keyof Attributes, delta: number) => {
    setAttributes(prev => {
      const newValue = prev[attr] + delta;
      // Check constraints
      if (newValue < 0) return prev;
      if (delta > 0 && availablePoints <= 0) return prev;
      if (newValue > 300) return prev; // Max attribute cap increased for lvl 100

      return { ...prev, [attr]: newValue };
    });
  };

  const resetAttributes = () => {
    setAttributes({
      strength: 0,
      agility: 0,
      vitality: 0,
      intelligence: 0,
      spirit: 0,
    });
  };

  const weaponTypes = ['Sword', 'Dual Blades', 'Polearm', 'Bow', 'Fist'];
  const playstyles = ['External DPS', 'Internal DPS', 'Tank', 'Support'];

  // Recommended builds presets
  const presets = {
    'External Burst': { strength: 150, agility: 80, vitality: 50, intelligence: 10, spirit: 10 },
    'Internal Crit': { strength: 20, agility: 150, vitality: 40, intelligence: 80, spirit: 10 },
    'Iron Wall Tank': { strength: 80, agility: 20, vitality: 150, intelligence: 20, spirit: 30 },
    'Balanced Solo': { strength: 80, agility: 80, vitality: 80, intelligence: 30, spirit: 30 },
  };

  const loadPreset = (presetName: keyof typeof presets) => {
    setAttributes(presets[presetName]);
    setBuildName(presetName);
  };

  return (
    <>
      {/* Schema Markup */}
      <WebSiteSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Tools', url: 'https://wherewindsmeetgame.org/tools' },
          { name: 'Build Planner', url: 'https://wherewindsmeetgame.org/tools/build-planner' },
        ]}
      />

      <div className="min-h-screen bg-bg-primary pt-14 pb-20">
        <div className="max-w-[1400px] mx-auto px-5">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Tools', url: '/tools' },
              { name: 'Build Planner' },
            ]}
          />

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Wrench className="w-10 h-10 text-gold-primary" />
              <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold">
                Build Planner
              </h1>
            </div>
            <p className="font-body text-lg text-text-secondary leading-relaxed max-w-3xl">
              Plan your martial arts journey. Optimize for External or Internal mastery, calculate your combat stats, and prepare for the level 100 endgame.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            {/* Left Column - Build Configuration */}
            <div className="space-y-6">
              {/* Build Info */}
              <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
                <h2 className="font-display text-2xl text-gold-primary font-bold mb-6">Build Information</h2>

                <div className="space-y-4">
                  {/* Build Name */}
                  <div>
                    <label className="block text-sm text-text-muted mb-2 font-semibold">
                      Build Name
                    </label>
                    <input
                      type="text"
                      value={buildName}
                      onChange={(e) => setBuildName(e.target.value)}
                      className="w-full px-4 py-3 bg-bg-secondary border border-gold-dark/30 rounded-lg text-text-primary focus:outline-none focus:border-gold-primary transition-colors"
                      placeholder="Enter build name..."
                    />
                  </div>

                  {/* Level */}
                  <div>
                    <label className="block text-sm text-text-muted mb-2 font-semibold">
                      Character Level: {level}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max={MAX_LEVEL}
                      value={level}
                      onChange={(e) => setLevel(parseInt(e.target.value))}
                      className="w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer accent-gold-primary"
                    />
                    <div className="flex justify-between text-xs text-text-muted mt-1">
                      <span>Level 1</span>
                      <span>Level {MAX_LEVEL}</span>
                    </div>
                  </div>

                  {/* Weapon Type */}
                  <div>
                    <label className="block text-sm text-text-muted mb-2 font-semibold">
                      Weapon Type
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                      {weaponTypes.map(weapon => (
                        <button
                          key={weapon}
                          onClick={() => setSelectedWeapon(weapon)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedWeapon === weapon
                              ? 'bg-gold-primary text-bg-primary border-2 border-gold-primary'
                              : 'bg-bg-secondary text-text-secondary border-2 border-gold-dark/30 hover:border-gold-primary'
                            }`}
                        >
                          {weapon}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Playstyle */}
                  <div>
                    <label className="block text-sm text-text-muted mb-2 font-semibold">
                      Playstyle
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {playstyles.map(style => (
                        <button
                          key={style}
                          onClick={() => setSelectedPlaystyle(style)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedPlaystyle === style
                              ? 'bg-gold-primary text-bg-primary border-2 border-gold-primary'
                              : 'bg-bg-secondary text-text-secondary border-2 border-gold-dark/30 hover:border-gold-primary'
                            }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Attribute Distribution */}
              <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-2xl text-gold-primary font-bold">Attributes</h2>
                  <div className="text-right">
                    <div className="text-sm text-text-muted">Available Points</div>
                    <div className={`text-2xl font-bold ${availablePoints < 0 ? 'text-red-400' : 'text-gold-bright'}`}>
                      {availablePoints}
                    </div>
                  </div>
                </div>

                {/* Load Preset Buttons */}
                <div className="mb-6 pb-6 border-b border-gold-dark/20">
                  <label className="block text-sm text-text-muted mb-3 font-semibold">
                    Load Preset Build
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {Object.keys(presets).map(presetName => (
                      <button
                        key={presetName}
                        onClick={() => loadPreset(presetName as keyof typeof presets)}
                        className="px-3 py-2 rounded-lg text-xs font-semibold bg-blue-accent/20 text-blue-accent border border-blue-accent/30 hover:bg-blue-accent/30 transition-all"
                      >
                        {presetName}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {ATTRIBUTE_NAMES.map(attr => (
                    <AttributeControl
                      key={attr}
                      name={attr.charAt(0).toUpperCase() + attr.slice(1)}
                      value={attributes[attr]}
                      onIncrease={() => handleAttributeChange(attr, 1)}
                      onDecrease={() => handleAttributeChange(attr, -1)}
                      canIncrease={availablePoints > 0 && attributes[attr] < 300}
                      canDecrease={attributes[attr] > 0}
                    />
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gold-dark/20">
                  <button
                    onClick={resetAttributes}
                    className="w-full px-4 py-3 rounded-lg bg-red-500/20 text-red-400 border border-red-400/30 hover:bg-red-500/30 transition-all font-semibold flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Reset All Attributes
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="lg">
                  <Save className="w-5 h-5" />
                  Save Build
                </Button>
                <Button variant="secondary" size="lg">
                  <Share2 className="w-5 h-5" />
                  Share Build
                </Button>
              </div>
            </div>

            {/* Right Column - Stats Summary */}
            <div className="space-y-6">
              {/* Calculated Stats */}
              <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6 sticky top-24">
                <h2 className="font-display text-2xl text-gold-primary font-bold mb-6">Combat Stats</h2>

                <div className="space-y-4">
                  <StatDisplay label="Health (HP)" value={calculatedStats.health.toLocaleString()} color="text-red-400" />
                  <StatDisplay label="External Attack" value={calculatedStats.externalAttack.toFixed(0)} color="text-gold-bright" />
                  <StatDisplay label="Internal Attack" value={calculatedStats.internalAttack.toFixed(0)} color="text-blue-accent" />
                  <StatDisplay label="Defense" value={calculatedStats.defense.toFixed(0)} color="text-gray-300" />
                  <StatDisplay label="Crit Chance" value={`${calculatedStats.critChance.toFixed(1)}%`} color="text-purple-400" />
                  <StatDisplay label="Crit Damage" value={`${calculatedStats.critDamage.toFixed(0)}%`} color="text-orange-400" />
                </div>

                {/* Build Summary */}
                <div className="mt-6 pt-6 border-t border-gold-dark/20">
                  <h3 className="font-ui text-text-primary font-semibold mb-3">Build Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Level</span>
                      <span className="text-text-primary font-semibold">{level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Weapon</span>
                      <span className="text-text-primary font-semibold">{selectedWeapon}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Playstyle</span>
                      <span className="text-text-primary font-semibold">{selectedPlaystyle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Points Used</span>
                      <span className="text-text-primary font-semibold">{totalPointsUsed}/{level * POINTS_PER_LEVEL}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-br from-blue-accent/10 to-gold-primary/10 rounded-lg border border-gold-dark/30 p-6">
                <h3 className="font-display text-lg text-gold-primary font-bold mb-3">
                  Attribute Effects
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-bright mt-0.5">•</span>
                    <span><strong>Strength</strong>: Boosts External Attack & Defense. Key for heavy weapons.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-bright mt-0.5">•</span>
                    <span><strong>Agility</strong>: Boosts Internal Attack & Crit. Essential for burst damage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-bright mt-0.5">•</span>
                    <span><strong>Vitality</strong>: Increases HP & Defense. Critical for survival.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-bright mt-0.5">•</span>
                    <span><strong>Intelligence</strong>: Enhances Qi & Skill cooldowns.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Attribute Control Component
function AttributeControl({
  name,
  value,
  onIncrease,
  onDecrease,
  canIncrease,
  canDecrease,
}: {
  name: string;
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  canIncrease: boolean;
  canDecrease: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-bg-secondary rounded-lg border border-gold-dark/20">
      <div className="flex-grow">
        <div className="font-ui text-text-primary font-semibold mb-2">{name}</div>
        <div className="w-full bg-bg-primary rounded-full h-2">
          <div
            className="bg-gradient-gold h-2 rounded-full transition-all"
            style={{ width: `${(value / 300) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 ml-6">
        <button
          onClick={onDecrease}
          disabled={!canDecrease}
          className="w-8 h-8 rounded-lg bg-bg-primary border border-gold-dark/30 flex items-center justify-center text-text-primary hover:border-gold-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <Minus className="w-4 h-4" />
        </button>

        <div className="w-12 text-center font-bold text-xl text-gold-bright">
          {value}
        </div>

        <button
          onClick={onIncrease}
          disabled={!canIncrease}
          className="w-8 h-8 rounded-lg bg-bg-primary border border-gold-dark/30 flex items-center justify-center text-text-primary hover:border-gold-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Stat Display Component
function StatDisplay({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-bg-secondary rounded-lg border border-gold-dark/20">
      <span className="font-ui text-text-muted">{label}</span>
      <span className={`font-display text-2xl font-bold ${color}`}>{value}</span>
    </div>
  );
}
