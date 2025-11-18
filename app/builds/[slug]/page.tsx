import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/HowToSchema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { RelatedContent, RelatedLink } from '@/components/ui/RelatedContent';
import { Sword, Shield, Zap, Target, Heart, TrendingUp } from 'lucide-react';

// Build data structure
interface BuildData {
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
  playstyle: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  overview: string;
  stats: {
    damage: number;
    defense: number;
    mobility: number;
    difficulty: number;
  };
  weapons: string[];
  skills: string[];
  attributes: {
    name: string;
    value: string;
    priority: 'High' | 'Medium' | 'Low';
  }[];
  gameplay: string;
  strengths: string[];
  weaknesses: string[];
  steps: {
    name: string;
    text: string;
  }[];
  relatedBuilds: RelatedLink[];
}

const buildsData: Record<string, BuildData> = {
  'pve-dps': {
    title: 'PVE DPS Build - Infernal Twinblades',
    description: 'Maximum damage output build for endgame PVE content using Dual Blades. Perfect for boss fights and dungeons.',
    difficulty: 'Hard',
    playstyle: 'Aggressive Melee DPS',
    author: 'WWM Builds Team',
    datePublished: '2025-11-15',
    dateModified: '2025-11-18',
    image: '/images/cards/build-pve-dps.jpg',
    overview: 'This build focuses on maximizing burst damage and sustained DPS through aggressive dual blade combat. It requires precise timing and positioning but rewards skilled players with top-tier damage output.',
    stats: {
      damage: 95,
      defense: 40,
      mobility: 85,
      difficulty: 80,
    },
    weapons: ['Infernal Twinblades', 'Celestial Daggers (Alternative)'],
    skills: [
      'Phantom Strike',
      'Blade Fury',
      'Dancing Shadows',
      'Executioner\'s Dance',
      'Shadow Step',
    ],
    attributes: [
      { name: 'Strength', value: '60 points', priority: 'High' },
      { name: 'Agility', value: '80 points', priority: 'High' },
      { name: 'Critical Chance', value: '45%+', priority: 'High' },
      { name: 'Attack Speed', value: '30%+', priority: 'Medium' },
      { name: 'Vitality', value: '40 points', priority: 'Medium' },
      { name: 'Defense', value: '20 points', priority: 'Low' },
    ],
    gameplay: 'Open combat with Shadow Step to close distance, apply Blade Fury for damage buff, then alternate between Phantom Strike and Dancing Shadows. Save Executioner\'s Dance for execute phase (below 30% HP). Maintain high uptime on Blade Fury buff.',
    strengths: [
      'Highest single-target DPS in the game',
      'Excellent burst damage windows',
      'High mobility for dodging mechanics',
      'Strong execute potential',
    ],
    weaknesses: [
      'Low survivability - requires good positioning',
      'Heavily gear-dependent',
      'Difficult for beginners to master',
      'Weak against multiple enemies',
    ],
    steps: [
      {
        name: 'Early Game (Level 1-30)',
        text: 'Focus on leveling Agility and Strength equally. Use any dual blades available. Prioritize unlocking Shadow Step at level 15.',
      },
      {
        name: 'Mid Game (Level 31-50)',
        text: 'Farm for Infernal Twinblades in Northern Frontier region. Begin investing in Critical Chance gear. Unlock all core skills.',
      },
      {
        name: 'Late Game (Level 51+)',
        text: 'Optimize gear for Critical Chance and Attack Speed. Fine-tune skill rotation. Practice boss mechanics for maximum DPS uptime.',
      },
    ],
    relatedBuilds: [
      {
        title: 'PVE Tank Build',
        url: '/builds/pve-tank',
        description: 'Defensive build for survivability in group content',
      },
      {
        title: 'PVP Duelist Build',
        url: '/builds/pvp-duelist',
        description: 'Balanced build optimized for 1v1 combat',
      },
      {
        title: 'Hybrid DPS Build',
        url: '/builds/hybrid-dps',
        description: 'Ranged/melee hybrid for versatility',
      },
    ],
  },
};

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const build = buildsData[params.slug];

  if (!build) {
    return {
      title: 'Build Not Found',
    };
  }

  return {
    title: build.title,
    description: build.description,
    keywords: ['where winds meet', 'wwm build', 'build guide', build.playstyle.toLowerCase()],
    authors: [{ name: build.author }],
    openGraph: {
      title: build.title,
      description: build.description,
      type: 'article',
      publishedTime: build.datePublished,
      modifiedTime: build.dateModified,
      authors: [build.author],
      images: [
        {
          url: build.image,
          width: 1200,
          height: 630,
          alt: build.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: build.title,
      description: build.description,
      images: [build.image],
    },
    alternates: {
      canonical: `https://wherewindsmeetgame.org/builds/${params.slug}`,
    },
  };
}

export default function BuildPage({ params }: PageProps) {
  const build = buildsData[params.slug];

  if (!build) {
    notFound();
  }

  const difficultyColor = {
    'Easy': 'text-green-400',
    'Medium': 'text-yellow-400',
    'Hard': 'text-orange-400',
    'Very Hard': 'text-red-400',
  }[build.difficulty];

  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        headline={build.title}
        description={build.description}
        author={build.author}
        datePublished={build.datePublished}
        dateModified={build.dateModified}
        image={build.image}
        url={`https://wherewindsmeetgame.org/builds/${params.slug}`}
      />

      <HowToSchema
        name={build.title}
        description={build.description}
        image={build.image}
        steps={build.steps}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Builds', url: 'https://wherewindsmeetgame.org/builds' },
          { name: build.title, url: `https://wherewindsmeetgame.org/builds/${params.slug}` },
        ]}
      />

      <div className="min-h-screen bg-bg-primary pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Builds', url: '/builds' },
              { name: build.title },
            ]}
          />

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold">
                {build.title}
              </h1>
              <span className={`px-4 py-1.5 rounded-full border-2 border-current ${difficultyColor} font-ui text-sm font-semibold`}>
                {build.difficulty}
              </span>
            </div>

            <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
              {build.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <span><strong className="text-text-primary">Playstyle:</strong> {build.playstyle}</span>
              <span>•</span>
              <span>By {build.author}</span>
              <span>•</span>
              <span>Updated: {new Date(build.dateModified).toLocaleDateString()}</span>
            </div>
          </header>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard icon={<Sword className="w-6 h-6" />} label="Damage" value={build.stats.damage} />
            <StatCard icon={<Shield className="w-6 h-6" />} label="Defense" value={build.stats.defense} />
            <StatCard icon={<Zap className="w-6 h-6" />} label="Mobility" value={build.stats.mobility} />
            <StatCard icon={<Target className="w-6 h-6" />} label="Difficulty" value={build.stats.difficulty} />
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-gold-primary font-bold mb-4">Overview</h2>
            <p className="font-body text-text-secondary leading-relaxed">{build.overview}</p>
          </section>

          {/* Weapons & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card title="Weapons" description="" variant="compact">
              <ul className="space-y-2 mt-4">
                {build.weapons.map((weapon, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary">
                    <Sword className="w-4 h-4 text-gold-bright flex-shrink-0" />
                    <span>{weapon}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Core Skills" description="" variant="compact">
              <ul className="space-y-2 mt-4">
                {build.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary">
                    <Zap className="w-4 h-4 text-blue-accent flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Attributes */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-gold-primary font-bold mb-6">Attribute Distribution</h2>
            <div className="bg-bg-card rounded-lg border border-gold-dark/30 overflow-hidden">
              <table className="w-full">
                <thead className="bg-bg-secondary">
                  <tr>
                    <th className="px-6 py-4 text-left font-display text-gold-primary">Attribute</th>
                    <th className="px-6 py-4 text-left font-display text-gold-primary">Target Value</th>
                    <th className="px-6 py-4 text-left font-display text-gold-primary">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {build.attributes.map((attr, i) => (
                    <tr key={i} className="border-t border-gold-dark/20">
                      <td className="px-6 py-4 font-ui text-text-primary">{attr.name}</td>
                      <td className="px-6 py-4 font-ui text-text-secondary">{attr.value}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          attr.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                          attr.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {attr.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Gameplay */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-gold-primary font-bold mb-4">Gameplay Rotation</h2>
            <p className="font-body text-text-secondary leading-relaxed">{build.gameplay}</p>
          </section>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-bg-card rounded-lg border border-green-500/30 p-6">
              <h3 className="font-display text-xl text-green-400 font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Strengths
              </h3>
              <ul className="space-y-2">
                {build.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-card rounded-lg border border-red-500/30 p-6">
              <h3 className="font-display text-xl text-red-400 font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Weaknesses
              </h3>
              <ul className="space-y-2">
                {build.weaknesses.map((weakness, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Progression Steps */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-gold-primary font-bold mb-6">Progression Guide</h2>
            <div className="space-y-4">
              {build.steps.map((step, i) => (
                <div key={i} className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
                  <h3 className="font-display text-xl text-gold-bright font-bold mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-primary/20 text-gold-primary text-sm font-bold">
                      {i + 1}
                    </span>
                    {step.name}
                  </h3>
                  <p className="font-body text-text-secondary leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-bg-card rounded-lg border border-gold-primary/30 p-8 text-center mb-12">
            <h3 className="font-display text-2xl text-gold-primary font-bold mb-4">
              Try This Build in Our Build Planner
            </h3>
            <p className="font-body text-text-secondary mb-6">
              Customize this build, simulate damage, and optimize your gear choices
            </p>
            <Button href="/tools/build-planner" variant="primary" size="lg">
              Open Build Planner
            </Button>
          </div>

          {/* Related Builds */}
          <RelatedContent links={build.relatedBuilds} title="Related Builds" />
        </div>
      </div>
    </>
  );
}

// Stat Card Component
function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-gold-primary">{icon}</div>
        <span className="font-ui text-sm text-text-muted">{label}</span>
      </div>
      <div className="mb-2">
        <span className="font-display text-3xl text-text-primary font-bold">{value}</span>
        <span className="text-text-muted text-sm">/100</span>
      </div>
      <div className="w-full bg-bg-primary rounded-full h-2">
        <div
          className="bg-gradient-gold h-2 rounded-full transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

// Generate static params
export async function generateStaticParams() {
  return Object.keys(buildsData).map((slug) => ({
    slug,
  }));
}
