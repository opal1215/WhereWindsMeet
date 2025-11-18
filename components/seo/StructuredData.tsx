/**
 * Structured Data (JSON-LD) Component for SEO
 *
 * This component helps Google understand your website structure better,
 * improving search visibility and enabling rich snippets in search results.
 */

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Website Schema - Use on homepage
 */
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Where Winds Meet Guides',
    alternateName: 'WWM Guides',
    url: 'https://wherewindsmeetgame.org',
    description:
      'Comprehensive guides, builds, and tools for Where Winds Meet - Master the Wuxia world with data-driven strategies',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://wherewindsmeetgame.org/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <StructuredData data={schema} />;
}

/**
 * Organization Schema - Use on homepage
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Where Winds Meet Guides',
    url: 'https://wherewindsmeetgame.org',
    logo: 'https://wherewindsmeetgame.org/favicon-512x512.png',
    description:
      'Fan-made wiki and guide platform for Where Winds Meet game',
    sameAs: [
      'https://twitter.com/wherewindsmeet',
      'https://youtube.com/@wherewindsmeet',
      'https://discord.gg/wherewindsmeet',
    ],
  };

  return <StructuredData data={schema} />;
}

/**
 * Article Schema - Use on blog posts/guides
 */
export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName = 'Where Winds Meet Guides Team',
  image,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image || 'https://wherewindsmeetgame.org/og-image.jpg',
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Where Winds Meet Guides',
      logo: {
        '@type': 'ImageObject',
        url: 'https://wherewindsmeetgame.org/favicon-512x512.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return <StructuredData data={schema} />;
}

/**
 * BreadcrumbList Schema - Improves navigation in search results
 */
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData data={schema} />;
}

/**
 * FAQ Schema - For FAQ sections
 */
export function FAQSchema({
  questions,
}: {
  questions: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return <StructuredData data={schema} />;
}

/**
 * VideoGame Schema - For game-related content
 */
export function VideoGameSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Where Winds Meet',
    description:
      'An immersive open-world Wuxia action RPG set in ancient China',
    gamePlatform: ['PlayStation 5', 'PC'],
    applicationCategory: 'Game',
    genre: ['Action RPG', 'Wuxia', 'Open World'],
  };

  return <StructuredData data={schema} />;
}
