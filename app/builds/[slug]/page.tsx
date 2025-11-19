import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/HowToSchema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { RelatedContent } from '@/components/ui/RelatedContent';
import { SocialShare } from '@/components/ui/SocialShare';
import { Sword, Shield, Zap, Target, Heart, TrendingUp } from 'lucide-react';
import { getBuildBySlug, getAllBuilds } from '@/lib/content';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const build = getBuildBySlug(slug);

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
      canonical: `https://wherewindsmeetgame.org/builds/${slug}`,
    },
  };
}

export default async function BuildPage({ params }: PageProps) {
  const { slug } = await params;
  const build = getBuildBySlug(slug);

  if (!build) {
    notFound();
  }

  const { metadata, content } = build;

  const difficultyColor = {
    'Easy': 'text-green-600',
    'Medium': 'text-yellow-600',
    'Hard': 'text-orange-600',
    'Very Hard': 'text-red-600',
  }[metadata.difficulty];

  // MDX Options
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeHighlight,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ] as any,
    },
  };

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
        url={`https://wherewindsmeetgame.org/builds/${slug}`}
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
          { name: metadata.title, url: `https://wherewindsmeetgame.org/builds/${slug}` },
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
              <h1 className="font-display text-4xl md:text-5xl text-text-primary font-bold">
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

            {/* Social Share Buttons */}
            <SocialShare
              url={`https://wherewindsmeetgame.org/builds/${slug}`}
              title={metadata.title}
            />
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
            <div className="prose prose-stone max-w-none">
              <div
                className="article-content font-body text-text-secondary
                  [&_h1]:font-display [&_h1]:text-5xl [&_h1]:md:text-[48px] [&_h1]:text-text-primary [&_h1]:font-bold [&_h1]:mt-12 [&_h1]:mb-6 [&_h1]:leading-tight
                  [&_h2]:font-display [&_h2]:text-3xl [&_h2]:md:text-[32px] [&_h2]:text-text-primary [&_h2]:font-semibold [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:pb-3 [&_h2]:border-b-2 [&_h2]:border-gold-primary/30 [&_h2]:leading-snug
                  [&_h3]:font-display [&_h3]:text-2xl [&_h3]:md:text-[24px] [&_h3]:text-text-primary [&_h3]:font-semibold [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:leading-normal
                  [&_h4]:font-display [&_h4]:text-xl [&_h4]:text-text-primary [&_h4]:font-medium [&_h4]:mt-8 [&_h4]:mb-3
                  [&_p]:text-lg [&_p]:leading-[1.8] [&_p]:mb-6 [&_p]:text-text-secondary
                  [&_ul]:text-lg [&_ul]:leading-[1.8] [&_ul]:mb-6 [&_ul]:pl-8 [&_ul]:space-y-3
                  [&_ol]:text-lg [&_ol]:leading-[1.8] [&_ol]:mb-6 [&_ol]:pl-8 [&_ol]:space-y-3
                  [&_li]:text-text-secondary [&_li]:mb-3
                  [&_strong]:text-text-primary [&_strong]:font-bold
                  [&_em]:text-text-secondary [&_em]:italic
                  [&_a]:text-accent-indigo [&_a]:underline [&_a]:hover:text-accent-red [&_a]:transition-colors
                  [&_code]:text-base [&_code]:bg-bg-secondary [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-text-primary [&_code]:font-mono
                  [&_pre]:text-[15px] [&_pre]:leading-relaxed [&_pre]:p-6 [&_pre]:bg-bg-secondary [&_pre]:border [&_pre]:border-gold-dark/20 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:mb-6
                  [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-text-secondary
                  [&_blockquote]:border-l-4 [&_blockquote]:border-gold-primary [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-text-secondary/90 [&_blockquote]:bg-bg-secondary/30
                  [&_hr]:border-gold-dark/30 [&_hr]:my-12"
              >
                <MDXRemote source={content} options={options} />
              </div>
            </div>
          </section>

          {/* Weapons & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card title="Weapons" description="" variant="compact">
              <ul className="space-y-2 mt-4">
                {metadata.weapons.map((weapon, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary">
                    <Sword className="w-4 h-4 text-gold-dark flex-shrink-0" />
                    <span>{weapon}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Core Skills" description="" variant="compact">
              <ul className="space-y-2 mt-4">
                {metadata.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary">
                    <Zap className="w-4 h-4 text-accent-indigo flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Attributes */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-text-primary font-bold mb-6">Attribute Distribution</h2>
            <div className="bg-bg-card rounded-lg border border-gold-dark/30 overflow-hidden">
              <table className="w-full">
                <thead className="bg-bg-secondary">
                  <tr>
                    <th className="px-6 py-4 text-left font-display text-text-primary font-semibold">Attribute</th>
                    <th className="px-6 py-4 text-left font-display text-text-primary font-semibold">Target Value</th>
                    <th className="px-6 py-4 text-left font-display text-text-primary font-semibold">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {metadata.attributes.map((attr, i) => (
                    <tr key={i} className="border-t border-gold-dark/20">
                      <td className="px-6 py-4 font-ui text-text-primary">{attr.name}</td>
                      <td className="px-6 py-4 font-ui text-text-secondary">{attr.value}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${attr.priority === 'High' ? 'bg-red-500/20 text-red-600' :
                            attr.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-600' :
                              'bg-blue-500/20 text-blue-600'
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
            <h2 className="font-display text-3xl text-text-primary font-bold mb-4">Gameplay Rotation</h2>
            <p className="font-body text-text-secondary leading-relaxed text-lg">{metadata.gameplay}</p>
          </section>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-bg-card rounded-lg border border-green-500/30 p-6">
              <h3 className="font-display text-xl text-green-600 font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Strengths
              </h3>
              <ul className="space-y-2">
                {metadata.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-card rounded-lg border border-red-500/30 p-6">
              <h3 className="font-display text-xl text-red-600 font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Weaknesses
              </h3>
              <ul className="space-y-2">
                {metadata.weaknesses.map((weakness, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Progression Steps */}
          <section className="mb-12">
            <h2 className="font-display text-3xl text-text-primary font-bold mb-6">Progression Guide</h2>
            <div className="space-y-4">
              {metadata.steps.map((step, i) => (
                <div key={i} className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
                  <h3 className="font-display text-xl text-text-primary font-bold mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-primary/20 text-gold-dark text-sm font-bold">
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
            <h3 className="font-display text-2xl text-text-primary font-bold mb-4">
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
        <div className="text-gold-dark">{icon}</div>
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
