'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Calculator, TrendingUp, Target, Award } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';

// XP curve data based on research (Level 100 Cap)
// Note: Significant grind increase around level 40-50
const XP_TABLE: Record<number, number> = {
  1: 0,
  5: 1500,
  10: 8000,
  15: 25000,
  20: 60000,
  25: 120000,
  30: 250000,
  35: 450000,
  40: 800000, // Grind starts
  45: 1500000,
  50: 2500000, // Breakthrough required
  55: 4000000,
  60: 6000000,
  70: 12000000,
  80: 25000000,
  90: 50000000,
  100: 100000000, // Max Level
};

// Interpolate XP for levels not in table
function getXPForLevel(level: number): number {
  if (XP_TABLE[level]) return XP_TABLE[level];

  // Find nearest known levels
  const levels = Object.keys(XP_TABLE).map(Number).sort((a, b) => a - b);
  const lowerLevel = levels.reverse().find(l => l < level) || 1;
  const upperLevel = levels.find(l => l > level) || 100;

  // Linear interpolation
  const lowerXP = XP_TABLE[lowerLevel];
  const upperXP = XP_TABLE[upperLevel];
  const ratio = (level - lowerLevel) / (upperLevel - lowerLevel);

  return Math.floor(lowerXP + (upperXP - lowerXP) * ratio);
}

export default function XPCalculatorPage() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(0);
  const [targetLevel, setTargetLevel] = useState(60);

  const currentLevelXP = getXPForLevel(currentLevel);
  const nextLevelXP = getXPForLevel(currentLevel + 1);
  const targetLevelXP = getXPForLevel(targetLevel);

  const xpNeeded = Math.max(0, targetLevelXP - (currentLevelXP + currentXP));
  const progressToNextLevel = ((currentXP) / (nextLevelXP - currentLevelXP)) * 100;
  const overallProgress = ((currentLevelXP + currentXP) / targetLevelXP) * 100;

  // Activity XP rates (Adjusted for authentic gameplay loops)
  const activities = [
    { name: 'Main Story Quest (Chapter)', xp: 50000, icon: '📜' },
    { name: 'Daily Bounty (Suspended)', xp: 15000, icon: '💰' },
    { name: 'World Boss (First Kill)', xp: 100000, icon: '👹' },
    { name: 'Dungeon Run (Elite)', xp: 35000, icon: '🏰' },
    { name: 'Side Quest', xp: 8000, icon: '📋' },
    { name: 'Exploration Chest', xp: 2500, icon: '💎' },
  ];

  return (
    <>
      {/* Schema Markup */}
      <WebSiteSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Tools', url: 'https://wherewindsmeetgame.org/tools' },
          { name: 'XP Calculator', url: 'https://wherewindsmeetgame.org/tools/xp-calculator' },
        ]}
      />

      <div className="min-h-screen bg-bg-primary pt-14 pb-20">
        <div className="max-w-[1000px] mx-auto px-5">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Tools', url: '/tools' },
              { name: 'XP Calculator' },
            ]}
          />

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Calculator className="w-10 h-10 text-gold-primary" />
              <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold">
                XP Calculator
              </h1>
            </div>
            <p className="font-body text-lg text-text-secondary leading-relaxed max-w-3xl">
              Plan your path to Level 100. Calculate the XP needed for your next breakthrough and optimize your daily farming routine.
            </p>
          </header>

          {/* Calculator Inputs */}
          <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-8 mb-8">
            <h2 className="font-display text-2xl text-gold-primary font-bold mb-6">Your Progress</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Current Level */}
              <div>
                <label className="block text-sm text-text-muted mb-2 font-semibold">
                  Current Level
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={currentLevel}
                  onChange={(e) => setCurrentLevel(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                  className="w-full px-4 py-3 bg-bg-secondary border border-gold-dark/30 rounded-lg text-text-primary text-xl font-bold focus:outline-none focus:border-gold-primary transition-colors"
                />
              </div>

              {/* Current XP */}
              <div>
                <label className="block text-sm text-text-muted mb-2 font-semibold">
                  Current XP (at this level)
                </label>
                <input
                  type="number"
                  min="0"
                  max={nextLevelXP - currentLevelXP}
                  value={currentXP}
                  onChange={(e) => setCurrentXP(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-4 py-3 bg-bg-secondary border border-gold-dark/30 rounded-lg text-text-primary text-xl font-bold focus:outline-none focus:border-gold-primary transition-colors"
                />
                <p className="text-xs text-text-muted mt-1">
                  Max: {(nextLevelXP - currentLevelXP).toLocaleString()} XP
                </p>
              </div>

              {/* Target Level */}
              <div>
                <label className="block text-sm text-text-muted mb-2 font-semibold">
                  Target Level
                </label>
                <input
                  type="number"
                  min={currentLevel + 1}
                  max="100"
                  value={targetLevel}
                  onChange={(e) => setTargetLevel(Math.max(currentLevel + 1, Math.min(100, parseInt(e.target.value) || 60)))}
                  className="w-full px-4 py-3 bg-bg-secondary border border-gold-dark/30 rounded-lg text-text-primary text-xl font-bold focus:outline-none focus:border-gold-primary transition-colors"
                />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-text-muted">Progress to Level {currentLevel + 1}</span>
                <span className="text-sm text-gold-bright font-semibold">{progressToNextLevel.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-bg-primary rounded-full h-3">
                <div
                  className="bg-gradient-gold h-3 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, progressToNextLevel)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ResultCard
              icon={<Target className="w-6 h-6" />}
              label="XP Needed"
              value={xpNeeded.toLocaleString()}
              color="text-gold-bright"
            />
            <ResultCard
              icon={<TrendingUp className="w-6 h-6" />}
              label="Levels to Gain"
              value={targetLevel - currentLevel}
              color="text-blue-accent"
            />
            <ResultCard
              icon={<Award className="w-6 h-6" />}
              label="Overall Progress"
              value={`${overallProgress.toFixed(1)}%`}
              color="text-green-400"
            />
          </div>

          {/* Activity Breakdown */}
          <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-8">
            <h2 className="font-display text-2xl text-gold-primary font-bold mb-6">
              Activities Needed to Reach Level {targetLevel}
            </h2>

            <div className="space-y-4">
              {activities.map((activity, i) => {
                const count = Math.ceil(xpNeeded / activity.xp);
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-bg-secondary rounded-lg border border-gold-dark/20 hover:border-gold-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{activity.icon}</span>
                      <div>
                        <div className="font-ui text-text-primary font-semibold">
                          {activity.name}
                        </div>
                        <div className="text-sm text-text-muted">
                          {activity.xp.toLocaleString()} XP each
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-2xl text-gold-bright font-bold">
                        {count.toLocaleString()}
                      </div>
                      <div className="text-xs text-text-muted">
                        {count === 1 ? 'time' : 'times'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 bg-gradient-to-br from-blue-accent/10 to-gold-primary/10 rounded-lg border border-gold-dark/30 p-6">
            <h3 className="font-display text-xl text-gold-primary font-bold mb-3">
              Leveling Tips
            </h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-0.5">•</span>
                <span><strong>Breakthroughs</strong>: At levels 20, 40, and 60, you must complete a breakthrough quest to continue leveling.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-0.5">•</span>
                <span><strong>Daily Bounties</strong>: The most efficient XP source for levels 40-60. Don't miss them!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-bright mt-0.5">•</span>
                <span><strong>Exploration</strong>: Finding chests and solving puzzles grants significant XP and is key for early game leveling.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// Result Card Component
function ResultCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string | number; color: string }) {
  return (
    <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className={color}>{icon}</div>
        <span className="font-ui text-sm text-text-muted">{label}</span>
      </div>
      <div className={`font-display text-3xl font-bold ${color}`}>
        {value}
      </div>
    </div>
  );
}
