import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/HowToSchema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { RelatedContent } from '@/components/ui/RelatedContent';
import { Sword, Shield, Zap, Target, Heart, TrendingUp } from 'lucide-react';
import { getBuildBySlug, getAllBuilds } from '@/lib/content';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const build = getBuildBySlug(params.slug);

  if (!build) {
    return {
      title: 'Build Not Found',
    };
  }

  const { metadata } = build;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: ['where winds meet', 'wwm build', 'build guide', metadata.playstyle.toLowerCase()],
    authors: [{ name: metadata.author }],
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      publishedTime: metadata.datePublished,
      modifiedTime: metadata.dateModified,
      authors: [metadata.author],
      images: [
        {
          url: metadata.image,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image],
    },
    alternates: {
      canonical: `https://wherewindsmeetgame.org/builds/${params.slug}`,
    },
  };
}

export default function BuildPage({ params }: PageProps) {
  const build = getBuildBySlug(params.slug);

  if (!build) {
    notFound();
  }

  const { metadata, content } = build;

  const difficultyColor = {
    'Easy': 'text-green-400',
    'Medium': 'text-yellow-400',
    'Hard': 'text-orange-400',
    'Very Hard': 'text-red-400',
  }[metadata.difficulty];

  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        headline={metadata.title}
        description={metadata.description}
        author={metadata.author}
        datePublished={metadata.datePublished}
        dateModified={metadata.dateModified}
        image={metadata.image}
        url={`https://wherewindsmeetgame.org/builds/${params.slug}`}
      />

      <HowToSchema
        name={metadata.title}
        description={metadata.description}
        image={metadata.image}
        steps={metadata.steps}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Builds', url: 'https://wherewindsmeetgame.org/builds' },
          { name: metadata.title, url: `https://wherewindsmeetgame.org/builds/${params.slug}` },
        ]}
      />

      <div className="min-h-screen bg-bg-primary pt-14 pb-20">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Builds', url: '/builds' },
              { name: metadata.title },
            ]}
          />

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold">
                {metadata.title}
              </h1>
              <span className={`px-4 py-1.5 rounded-full border-2 border-current ${difficultyColor} font-ui text-sm font-semibold`}>
                {metadata.difficulty}
              </span>
            </div>

            <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
              {metadata.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <span><strong className="text-text-primary">Playstyle:</strong> {metadata.playstyle}</span>
              <span>•</span>
              <span>By {metadata.author}</span>
              <span>•</span>
              <span>Updated: {new Date(metadata.dateModified).toLocaleDateString()}</span>
            </div>
          </header>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard icon={<Sword className="w-6 h-6" />} label="Damage" value={metadata.stats.damage} />
            <StatCard icon={<Shield className="w-6 h-6" />} label="Defense" value={metadata.stats.defense} />
            <StatCard icon={<Zap className="w-6 h-6" />} label="Mobility" value={metadata.stats.mobility} />
            <StatCard icon={<Target className="w-6 h-6" />} label="Difficulty" value={metadata.stats.difficulty} />
          </div>

          {/* Build Content */}
          <section className="mb-12">
            <div className="prose prose-invert prose-gold max-w-none">
              <div
                className="font-body text-text-secondary leading-relaxed space-y-6
                  [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-gold-primary [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4
                  [&_h3]:font-display [&_h3]:text-2xl [&_h3]:text-gold-bright [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3
                  [&_ul]:space-y-2 [&_ul]:my-4
                  [&_ol]:space-y-2 [&_ol]:my-4
                  [&_li]:text-text-secondary
                  [&_strong]:text-text-primary [&_strong]:font-semibold
                  [&_p]:my-4 [&_p]:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }}
              />
            </div>
          </section>

          {/* Weapons & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card title="Weapons" description="" variant="compact">
              <ul className="space-y-2 mt-4">
                {metadata.weapons.map((weapon, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary">
                    <Sword className="w-4 h-4 text-gold-bright flex-shrink-0" />
                    <span>{weapon}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Core Skills" description="" variant="compact">
              <ul className="space-y-2 mt-4">
                {metadata.skills.map((skill, i) => (
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
                  {metadata.attributes.map((attr, i) => (
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
            <p className="font-body text-text-secondary leading-relaxed">{metadata.gameplay}</p>
          </section>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-bg-card rounded-lg border border-green-500/30 p-6">
              <h3 className="font-display text-xl text-green-400 font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Strengths
              </h3>
              <ul className="space-y-2">
                {metadata.strengths.map((strength, i) => (
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
                {metadata.weaknesses.map((weakness, i) => (
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
              {metadata.steps.map((step, i) => (
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
          {metadata.relatedBuilds && metadata.relatedBuilds.length > 0 && (
            <RelatedContent links={metadata.relatedBuilds} title="Related Builds" />
          )}
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
  const builds = getAllBuilds();
  return builds.map((build) => ({
    slug: build.slug,
  }));
}
