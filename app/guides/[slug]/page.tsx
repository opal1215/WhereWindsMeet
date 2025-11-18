import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TableOfContents, TOCItem } from '@/components/ui/TableOfContents';
import { RelatedContent, RelatedLink } from '@/components/ui/RelatedContent';
import { FAQ, FAQItem } from '@/components/ui/FAQ';

// This would normally come from a database or CMS
// For now, we'll use static data as an example
const guidesData: Record<string, GuideData> = {
  'beginner-guide': {
    title: 'Where Winds Meet Beginner Guide',
    description: 'Complete guide for new players starting Where Winds Meet. Learn essential mechanics, combat basics, and progression systems.',
    author: 'WWM Guides Team',
    datePublished: '2025-11-16',
    dateModified: '2025-11-18',
    image: '/images/cards/beginner-guide.jpg',
    content: `
# Where Winds Meet Beginner Guide

Welcome to the world of Where Winds Meet! This comprehensive guide will help you start your Wuxia adventure on the right foot.

## What This Guide Covers

- Character creation and sect selection
- Basic combat mechanics
- Progression systems overview
- Essential tips for new players
- Common beginner mistakes to avoid

## Getting Started

### Choosing Your Sect

The first major decision you'll make is selecting your sect. Each of the 8 sects offers unique martial arts styles and philosophies.

**Recommended for Beginners:**
- **Wudang Sect**: Balanced offensive and defensive skills
- **Shaolin Temple**: Straightforward, powerful combat
- **Emei Sect**: Supportive abilities with good survivability

### Understanding Game Modes

Where Winds Meet offers two distinct gameplay modes:

1. **RPG Mode**: Single-player focused experience
2. **MMO Mode**: Multiplayer interactions and content

We recommend starting in RPG mode to learn the mechanics before transitioning to MMO mode.

## Combat Basics

### The Three Pillars of Combat

1. **Light Attacks**: Fast, low-damage strikes
2. **Heavy Attacks**: Slower, high-damage moves
3. **Skills**: Special abilities unique to your sect

### Stamina Management

Your stamina bar is crucial for both offense and defense. Never let it fully deplete during combat.

## Progression Systems

### Character Levels

- Main story quests provide the most experience
- Side quests offer valuable resources
- Daily activities help maintain steady progression

### Equipment and Gear

Start focusing on equipment quality once you reach level 20. Before that, story rewards are sufficient.

## Essential Tips

1. **Complete the Tutorial**: Don't skip it! It teaches crucial mechanics
2. **Unlock Fast Travel Early**: Makes exploration much easier
3. **Save Your Currency**: Don't spend premium currency on early-game items
4. **Join a Guild**: Even in RPG mode, guild benefits are valuable
5. **Experiment with Builds**: Try different skill combinations

## Common Mistakes to Avoid

- Ignoring defensive stats in favor of pure damage
- Skipping side quests that unlock important features
- Not utilizing the dodge/parry mechanics
- Selling quest items before checking requirements
- Rushing to endgame without learning class mechanics

## Next Steps

Once you've mastered these basics, check out our specialized guides:
- Leveling Guide for efficient progression
- Combat Overview for advanced mechanics
- Builds section for optimized character development
`,
    toc: [
      { id: 'what-this-guide-covers', text: 'What This Guide Covers', level: 2 },
      { id: 'getting-started', text: 'Getting Started', level: 2 },
      { id: 'choosing-your-sect', text: 'Choosing Your Sect', level: 3 },
      { id: 'understanding-game-modes', text: 'Understanding Game Modes', level: 3 },
      { id: 'combat-basics', text: 'Combat Basics', level: 2 },
      { id: 'the-three-pillars-of-combat', text: 'The Three Pillars of Combat', level: 3 },
      { id: 'stamina-management', text: 'Stamina Management', level: 3 },
      { id: 'progression-systems', text: 'Progression Systems', level: 2 },
      { id: 'essential-tips', text: 'Essential Tips', level: 2 },
      { id: 'common-mistakes-to-avoid', text: 'Common Mistakes to Avoid', level: 2 },
      { id: 'next-steps', text: 'Next Steps', level: 2 },
    ],
    relatedGuides: [
      {
        title: 'Leveling Guide',
        url: '/leveling-guide',
        description: 'Fast-track your character progression with optimized strategies',
      },
      {
        title: 'Combat Overview',
        url: '/combat-overview',
        description: 'Deep dive into combat mechanics and advanced techniques',
      },
      {
        title: 'Best Starting Builds',
        url: '/builds',
        description: 'Optimized builds for new players',
      },
    ],
    faqs: [
      {
        question: 'What is the best starting sect for beginners?',
        answer: 'Wudang Sect is generally recommended for beginners due to its balanced playstyle, straightforward skill rotation, and versatility in both PvE and PvP content.',
      },
      {
        question: 'How long does it take to reach max level?',
        answer: 'For casual players, expect 40-60 hours of gameplay to reach max level. Dedicated players following optimized leveling routes can achieve this in 25-35 hours.',
      },
      {
        question: 'Should I play RPG mode or MMO mode first?',
        answer: 'Start with RPG mode to learn mechanics and enjoy the story at your own pace. You can switch to MMO mode later for multiplayer content.',
      },
      {
        question: 'Can I change my sect later?',
        answer: 'Yes, but it requires significant resources and resets your sect-specific progression. It\'s better to choose carefully at the start or create an alt character.',
      },
    ],
  },
};

interface GuideData {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  content: string;
  toc: TOCItem[];
  relatedGuides: RelatedLink[];
  faqs: FAQItem[];
}

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = guidesData[params.slug];

  if (!guide) {
    return {
      title: 'Guide Not Found',
    };
  }

  return {
    title: guide.title,
    description: guide.description,
    keywords: ['where winds meet', 'wwm guide', guide.title.toLowerCase(), 'tutorial', 'tips'],
    authors: [{ name: guide.author }],
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      authors: [guide.author],
      images: [
        {
          url: guide.image,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
      images: [guide.image],
    },
    alternates: {
      canonical: `https://wherewindsmeetgame.org/guides/${params.slug}`,
    },
  };
}

export default function GuidePage({ params }: PageProps) {
  const guide = guidesData[params.slug];

  if (!guide) {
    notFound();
  }

  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        headline={guide.title}
        description={guide.description}
        author={guide.author}
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        image={guide.image}
        url={`https://wherewindsmeetgame.org/guides/${params.slug}`}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Guides', url: 'https://wherewindsmeetgame.org/guides' },
          { name: guide.title, url: `https://wherewindsmeetgame.org/guides/${params.slug}` },
        ]}
      />

      <div className="min-h-screen bg-bg-primary pt-24 pb-20">
        <div className="max-w-[1400px] mx-auto px-5">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Guides', url: '/guides' },
              { name: guide.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <article className="max-w-4xl">
              {/* Header */}
              <header className="mb-12">
                <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold mb-4">
                  {guide.title}
                </h1>
                <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
                  {guide.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-text-muted">
                  <span>By {guide.author}</span>
                  <span>•</span>
                  <span>Updated: {new Date(guide.dateModified).toLocaleDateString()}</span>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-invert prose-gold max-w-none">
                <div
                  className="font-body text-text-secondary leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: guide.content.replace(/\n/g, '<br/>') }}
                />
              </div>

              {/* Related Guides */}
              <RelatedContent links={guide.relatedGuides} title="Related Guides" />

              {/* FAQ Section */}
              <FAQ items={guide.faqs} />
            </article>

            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <TableOfContents items={guide.toc} />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

// Generate static params for all guides (optional, for SSG)
export async function generateStaticParams() {
  return Object.keys(guidesData).map((slug) => ({
    slug,
  }));
}
