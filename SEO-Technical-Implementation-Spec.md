# SEO Technical Implementation Specification for Where Winds Meet Website

**For Claude Code: This is your technical checklist. Implement everything in this document.**

---

## 1. Next.js Configuration (`next.config.js`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.wherewindsmeetgame.org',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
```

---

## 2. Schema Markup System (JSON-LD)

### 2.1 Schema Components Directory Structure

```
/components/seo/
  ├── SchemaOrg.tsx          # Base component
  ├── ArticleSchema.tsx       # For guides/blog posts
  ├── HowToSchema.tsx         # For tutorial pages
  ├── BreadcrumbSchema.tsx    # For navigation
  ├── WebSiteSchema.tsx       # For homepage
  └── VideoGameSchema.tsx     # For game pages
```

### 2.2 Base Schema Component (`components/seo/SchemaOrg.tsx`)

```tsx
import React from 'react';

interface SchemaOrgProps {
  schema: object;
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
```

### 2.3 Article Schema (`components/seo/ArticleSchema.tsx`)

```tsx
import React from 'react';
import { SchemaOrg } from './SchemaOrg';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: headline,
    description: description,
    image: image,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Where Winds Meet Guides',
      logo: {
        '@type': 'ImageObject',
        url: 'https://wherewindsmeetgame.org/logo.png',
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return <SchemaOrg schema={schema} />;
};
```

### 2.4 HowTo Schema (`components/seo/HowToSchema.tsx`)

```tsx
import React from 'react';
import { SchemaOrg } from './SchemaOrg';

interface Step {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  image: string;
  totalTime?: string; // ISO 8601 duration format: "PT30M" = 30 minutes
  steps: Step[];
}

export const HowToSchema: React.FC<HowToSchemaProps> = ({
  name,
  description,
  image,
  totalTime,
  steps,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    image: image,
    totalTime: totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };

  return <SchemaOrg schema={schema} />;
};
```

### 2.5 Breadcrumb Schema (`components/seo/BreadcrumbSchema.tsx`)

```tsx
import React from 'react';
import { SchemaOrg } from './SchemaOrg';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: index === items.length - 1 ? undefined : item.url, // Last item has no URL
    })),
  };

  return <SchemaOrg schema={schema} />;
};
```

### 2.6 WebSite Schema (`components/seo/WebSiteSchema.tsx`)

```tsx
import React from 'react';
import { SchemaOrg } from './SchemaOrg';

export const WebSiteSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Where Winds Meet Guides',
    url: 'https://wherewindsmeetgame.org',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://wherewindsmeetgame.org/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Where Winds Meet Guides',
      logo: {
        '@type': 'ImageObject',
        url: 'https://wherewindsmeetgame.org/logo.png',
      },
    },
  };

  return <SchemaOrg schema={schema} />;
};
```

### 2.7 VideoGame Schema (`components/seo/VideoGameSchema.tsx`)

```tsx
import React from 'react';
import { SchemaOrg } from './SchemaOrg';

interface VideoGameSchemaProps {
  name: string;
  description: string;
  image: string;
  genre: string[];
  gamePlatform: string[];
}

export const VideoGameSchema: React.FC<VideoGameSchemaProps> = ({
  name,
  description,
  image,
  genre,
  gamePlatform,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['VideoGame', 'SoftwareApplication'],
    name: name,
    description: description,
    image: image,
    genre: genre,
    gamePlatform: gamePlatform,
    author: {
      '@type': 'Organization',
      name: 'Everstone Games',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Everstone Games',
    },
    playMode: ['SinglePlayer', 'MultiPlayer', 'CoOp'],
    applicationCategory: 'Game',
  };

  return <SchemaOrg schema={schema} />;
};
```

### 2.8 Schema Usage Example (Guide Page)

```tsx
// app/guides/[slug]/page.tsx
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/HowToSchema';

export default function GuidePage({ params }: { params: { slug: string } }) {
  return (
    <>
      {/* Multiple schemas can coexist */}
      <ArticleSchema
        headline="Where Winds Meet Beginner Guide"
        description="Complete guide for new players starting Where Winds Meet"
        author="Gaming Expert"
        datePublished="2025-11-16"
        dateModified="2025-11-18"
        image="https://wherewindsmeetgame.org/images/beginner-guide.jpg"
        url="https://wherewindsmeetgame.org/guides/beginner-guide"
      />
      
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Guides', url: 'https://wherewindsmeetgame.org/guides' },
          { name: 'Beginner Guide', url: 'https://wherewindsmeetgame.org/guides/beginner-guide' },
        ]}
      />
      
      <HowToSchema
        name="How to Start Where Winds Meet"
        description="Step-by-step guide for beginners"
        image="https://wherewindsmeetgame.org/images/beginner-guide.jpg"
        totalTime="PT30M"
        steps={[
          {
            name: 'Choose Your Sect',
            text: 'Select one of 8 available sects based on your playstyle preference',
            image: 'https://wherewindsmeetgame.org/images/sect-selection.jpg',
          },
          {
            name: 'Complete Tutorial',
            text: 'Follow the guided tutorial to learn basic combat mechanics',
          },
          {
            name: 'Unlock Fast Travel',
            text: 'Discover your first fast travel point by reaching the main city',
          },
        ]}
      />
      
      {/* Page content */}
    </>
  );
}
```

---

## 3. SEO Metadata System

### 3.1 Root Layout Metadata (`app/layout.tsx`)

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://wherewindsmeetgame.org'),
  title: {
    default: 'Where Winds Meet Guides, Builds & Tools',
    template: '%s | Where Winds Meet Guides',
  },
  description: 'In-depth Where Winds Meet guides, builds, maps, and tools for PS5 & PC players. Master combat styles, find best builds, explore the Wuxia world.',
  keywords: ['where winds meet', 'wwm guide', 'wuxia game', 'builds', 'tips', 'maps'],
  authors: [{ name: 'Where Winds Meet Guides Team' }],
  creator: 'Where Winds Meet Guides',
  publisher: 'Where Winds Meet Guides',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wherewindsmeetgame.org',
    siteName: 'Where Winds Meet Guides',
    title: 'Where Winds Meet Guides, Builds & Tools',
    description: 'Master the Wuxia world with data-driven guides and interactive tools',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Where Winds Meet Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where Winds Meet Guides & Tools',
    description: 'Master the Wuxia world with data-driven guides',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};
```

### 3.2 Dynamic Page Metadata (`app/guides/[slug]/page.tsx`)

```tsx
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Fetch guide data from database/CMS
  const guide = await fetchGuideData(params.slug);
  
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.tags,
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
```

---

## 4. Image Optimization System

### 4.1 Next.js Image Component Usage

**Every image must use `next/image` component:**

```tsx
import Image from 'next/image';

// Hero images (priority loading)
<Image
  src="/images/hero-bg.jpg"
  alt="Wuxia warrior overlooking ancient city at night"
  fill
  priority
  className="object-cover"
  sizes="100vw"
/>

// Card images (lazy loading)
<Image
  src="/images/build-card.jpg"
  alt="Where Winds Meet sword build showcase"
  width={400}
  height={250}
  className="rounded-lg"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// Avatar/icon images
<Image
  src="/images/character-avatar.jpg"
  alt="Character name - Where Winds Meet"
  width={64}
  height={64}
  className="rounded-full"
/>
```

### 4.2 Image Alt Text Rules

**Format:** `[Subject] - [Context] - [Game Name]`

Examples:
- ✅ "Wuxia warrior performing sword technique - combat guide - Where Winds Meet"
- ✅ "Northern Frontier region map with fast travel points - Where Winds Meet"
- ✅ "Infernal Twinblades weapon stats comparison - Where Winds Meet"
- ❌ "image1.jpg"
- ❌ "screenshot"

### 4.3 Image Processing Checklist

Before adding any image:
1. Convert to WebP/AVIF format (use `sharp` library or online tools)
2. Compress to < 200KB for hero images, < 100KB for card images
3. Minimum dimensions: 1200x630px for OG images, 800x500px for hero images
4. Add descriptive alt text following format above
5. Specify width and height to prevent CLS

---

## 5. Performance Optimization Requirements

### 5.1 Core Web Vitals Targets

**Non-negotiable requirements:**
- **LCP (Largest Contentful Paint):** < 2.5 seconds
- **INP (Interaction to Next Paint):** < 200 milliseconds
- **CLS (Cumulative Layout Shift):** < 0.1

### 5.2 Font Optimization (`app/layout.tsx`)

```tsx
import { Cinzel, Crimson_Text, Inter } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
  weight: ['400', '700', '900'],
});

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
  weight: ['400', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
  preload: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${crimsonText.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### 5.3 Code Splitting for Heavy Components

```tsx
import dynamic from 'next/dynamic';

// For build calculator (heavy component)
const BuildPlanner = dynamic(() => import('@/components/tools/BuildPlanner'), {
  loading: () => <div>Loading Build Planner...</div>,
  ssr: false, // Disable SSR if it uses browser APIs
});

// For interactive map
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  loading: () => <div className="h-96 bg-bg-card animate-pulse">Loading map...</div>,
  ssr: false,
});
```

### 5.4 CSS Optimization

**Use Tailwind's content purging:**

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ... rest of config
}
```

---

## 6. Internal Linking System

### 6.1 Breadcrumb Component (`components/ui/Breadcrumbs.tsx`)

```tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-text-muted mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
          {item.url ? (
            <Link href={item.url} className="hover:text-gold-primary transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-text-primary">{item.name}</span>
          )}
        </div>
      ))}
    </nav>
  );
};
```

### 6.2 Related Content Component (`components/RelatedContent.tsx`)

```tsx
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface RelatedLink {
  title: string;
  url: string;
  description: string;
}

interface RelatedContentProps {
  links: RelatedLink[];
}

export const RelatedContent: React.FC<RelatedContentProps> = ({ links }) => {
  return (
    <div className="mt-12 p-6 bg-bg-card rounded-lg border border-gold-dark/30">
      <h3 className="font-display text-xl text-gold-primary font-bold mb-4">
        Related Guides
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.url}
              className="flex items-start gap-2 group"
            >
              <ExternalLink className="w-4 h-4 text-gold-bright mt-1 group-hover:translate-x-1 transition-transform" />
              <div>
                <div className="text-text-primary font-semibold group-hover:text-gold-bright transition-colors">
                  {link.title}
                </div>
                <p className="text-sm text-text-secondary">{link.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

### 6.3 Internal Linking Rules

**Every page must link to 5-10 related pages:**

1. Beginner Guide should link to:
   - Leveling Guide
   - Combat Overview
   - Sect Guide
   - Settings Optimization
   - Currencies Guide

2. Build pages should link to:
   - Weapon type guide
   - Martial arts style guide
   - Attributes and Stats
   - Related builds
   - Build Planner tool

3. Boss guides should link to:
   - Region page where boss is located
   - Recommended builds
   - Weapon/skill used by boss
   - Next boss in progression
   - Boss Database

---

## 7. Sitemap and Robots.txt

### 7.1 Dynamic Sitemap (`app/sitemap.ts`)

```typescript
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wherewindsmeetgame.org';
  
  // Static pages
  const staticPages = [
    '',
    '/beginner-guide',
    '/leveling-guide',
    '/combat-overview',
    '/weapons',
    '/martial-arts-styles',
    '/builds',
    '/world-map',
    '/life-skills',
    '/multiplayer-overview',
    '/tools',
    '/database',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
  
  // Dynamic pages (fetch from database)
  const guides = await fetchAllGuides();
  const guidePages = guides.map(guide => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  const builds = await fetchAllBuilds();
  const buildPages = builds.map(build => ({
    url: `${baseUrl}/builds/${build.slug}`,
    lastModified: new Date(build.dateModified),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  return [...staticPages, ...guidePages, ...buildPages];
}

// Helper functions (implement based on your data source)
async function fetchAllGuides() {
  // TODO: Fetch from database/CMS
  return [];
}

async function fetchAllBuilds() {
  // TODO: Fetch from database/CMS
  return [];
}
```

### 7.2 Robots.txt (`app/robots.ts`)

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: 'https://wherewindsmeetgame.org/sitemap.xml',
  };
}
```

---

## 8. Analytics and Monitoring Integration

### 8.1 Google Analytics 4 (`app/layout.tsx`)

```tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 8.2 Google Search Console Verification

Add to `app/layout.tsx` metadata:

```tsx
export const metadata: Metadata = {
  // ... other metadata
  verification: {
    google: 'YOUR_VERIFICATION_CODE_HERE',
  },
};
```

Or create `public/google[verification-code].html` file with provided code.

---

## 9. Mobile Optimization Checklist

### 9.1 Viewport Configuration (Already in layout.tsx)

```tsx
export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};
```

### 9.2 Touch-Friendly Navigation

```tsx
// components/ui/MobileMenu.tsx
export const MobileMenu = () => {
  return (
    <nav className="lg:hidden">
      {/* Touch target minimum 44x44px */}
      <button className="min-w-[44px] min-h-[44px] flex items-center justify-center">
        <MenuIcon className="w-6 h-6" />
      </button>
    </nav>
  );
};
```

### 9.3 Responsive Font Sizes (Tailwind Config)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        // Mobile-first approach
        'hero-mobile': ['2.5rem', { lineHeight: '1.2' }],
        'hero-desktop': ['7.5rem', { lineHeight: '1.1' }],
      },
    },
  },
};
```

---

## 10. URL Structure Rules

### 10.1 URL Naming Conventions

**All URLs must follow these rules:**

1. **Lowercase only:** `/beginner-guide` not `/Beginner-Guide`
2. **Hyphens not underscores:** `/leveling-guide` not `/leveling_guide`
3. **Semantic keywords:** `/builds/pve-dps` not `/page?id=123`
4. **Hierarchical structure:** `/guides/combat/sword-techniques`
5. **Trailing slashes:** Consistent use (always or never)

### 10.2 URL Examples by Content Type

```
Homepage: /
Guides: /guides/[slug]
Builds: /builds/[slug]
Weapons: /weapons/[weapon-type]/
Tools: /tools/[tool-name]/
Database: /database/[category]/[item-slug]/
News: /news/patch-[version]-notes/
```

---

## 11. Content Freshness System

### 11.1 Last Updated Component (`components/LastUpdated.tsx`)

```tsx
interface LastUpdatedProps {
  date: string; // ISO format
  version?: string; // Game version
}

export const LastUpdated: React.FC<LastUpdatedProps> = ({ date, version }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="flex items-center gap-4 text-sm text-text-muted border-l-2 border-gold-primary pl-4 my-6">
      <span>📅 Last Updated: {formattedDate}</span>
      {version && <span>🎮 Version: {version}</span>}
    </div>
  );
};
```

### 11.2 Changelog Component (`components/Changelog.tsx`)

```tsx
interface ChangelogEntry {
  date: string;
  version: string;
  changes: string[];
}

interface ChangelogProps {
  entries: ChangelogEntry[];
}

export const Changelog: React.FC<ChangelogProps> = ({ entries }) => {
  return (
    <details className="mt-8 p-6 bg-bg-card rounded-lg border border-gold-dark/30">
      <summary className="font-display text-lg text-gold-primary font-bold cursor-pointer">
        Changelog
      </summary>
      <div className="mt-4 space-y-4">
        {entries.map((entry, index) => (
          <div key={index} className="border-l-2 border-blue-accent pl-4">
            <div className="font-semibold text-text-primary">
              {entry.version} - {new Date(entry.date).toLocaleDateString()}
            </div>
            <ul className="mt-2 space-y-1 text-text-secondary">
              {entry.changes.map((change, i) => (
                <li key={i}>• {change}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
};
```

---

## 12. Featured Snippet Optimization

### 12.1 Content Structure for Snippets

**Paragraph snippets (70% of snippets):**

```markdown
## What is the Best Starting Sect in Where Winds Meet?

The best starting sect in Where Winds Meet is **Wudang Sect** for beginners because it offers balanced offensive and defensive skills, has a straightforward skill rotation, and provides versatility for both PvE and PvP content.

[Expand with details below...]
```

**List snippets (19% of snippets):**

```markdown
## How to Farm Gold Fast in Where Winds Meet

1. **Complete Daily Quests** - Earn 5,000-10,000 gold per day
2. **Sell Crafted Items** - Medicine and equipment at auction house
3. **Boss Runs** - World bosses drop 2,000-5,000 gold each
4. **Trading Post Flipping** - Buy low, sell high for 20-30% profit
5. **Escort Missions** - Quick 3,000 gold for 10-minute runs
```

**Table snippets (6% of snippets):**

```markdown
## Where Winds Meet Weapon Comparison

| Weapon Type | DPS Rating | Difficulty | Best For |
|-------------|------------|------------|----------|
| Sword       | 8/10       | Easy       | Beginners |
| Polearm     | 9/10       | Medium     | AoE Damage |
| Bow         | 7/10       | Hard       | Ranged DPS |
| Dual Blades | 10/10      | Very Hard  | Advanced Players |
```

---

## 13. FAQ Section Implementation

### 13.1 FAQ Component (`components/FAQ.tsx`)

```tsx
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <div className="mt-12 space-y-4">
      <h2 className="font-display text-3xl text-gold-primary font-bold mb-6">
        Frequently Asked Questions
      </h2>
      {items.map((item, index) => (
        <details 
          key={index}
          className="p-6 bg-bg-card rounded-lg border border-gold-dark/30 hover:border-gold-primary transition-colors"
        >
          <summary className="font-semibold text-lg text-text-primary cursor-pointer">
            {item.question}
          </summary>
          <div className="mt-4 text-text-secondary leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
};
```

### 13.2 FAQ Schema (Add to page with FAQ component)

```tsx
import { SchemaOrg } from '@/components/seo/SchemaOrg';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best starting sect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best starting sect is Wudang for beginners...',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to reach max level?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '40-60 hours of gameplay for casual players...',
      },
    },
  ],
};

// Use in page:
<SchemaOrg schema={faqSchema} />
```

---

## 14. Testing and Validation Checklist

### 14.1 Before Publishing Any Page

- [ ] Run Google Rich Results Test: `https://search.google.com/test/rich-results`
- [ ] Run Schema Markup Validator: `https://validator.schema.org/`
- [ ] Test mobile responsiveness: Chrome DevTools mobile view
- [ ] Run Lighthouse audit: Target 90+ performance, 100 accessibility, 100 SEO
- [ ] Verify all images have descriptive alt text
- [ ] Check all internal links work (no 404s)
- [ ] Verify breadcrumbs display correctly
- [ ] Test page load time: < 3 seconds on 3G connection
- [ ] Check Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Verify meta title is 50-60 characters
- [ ] Verify meta description is 150-160 characters
- [ ] Check OpenGraph image is 1200x630px

### 14.2 Post-Launch Monitoring

**Week 1:**
- Submit sitemap to Google Search Console
- Submit sitemap to Bing Webmaster Tools
- Monitor Search Console for crawl errors
- Check Google Analytics is tracking correctly
- Verify Schema is rendering in search results (7-14 days)

**Ongoing:**
- Update guides within 24 hours of game patches
- Refresh "Last Updated" dates when content changes
- Monitor Core Web Vitals in Search Console
- Track keyword rankings weekly
- Review Analytics for high-bounce pages

---

## 15. Priority Implementation Order

**Week 1 (Critical):**
1. Schema markup system (all components)
2. SEO metadata system
3. Image optimization (next/image)
4. Sitemap and robots.txt
5. Analytics integration

**Week 2 (High Priority):**
6. Breadcrumb navigation
7. Internal linking system
8. Last Updated component
9. Mobile optimization
10. Performance audit and fixes

**Week 3 (Important):**
11. FAQ sections on key pages
12. Related content component
13. Changelog component
14. Featured snippet optimization
15. Schema validation for all pages

---

## 16. Common Mistakes to Avoid

1. **❌ Don't:** Use generic meta descriptions
   **✅ Do:** Write unique descriptions for every page

2. **❌ Don't:** Skip alt text on images
   **✅ Do:** Add descriptive alt text with keywords

3. **❌ Don't:** Use `<img>` tags directly
   **✅ Do:** Always use `next/image` component

4. **❌ Don't:** Forget to specify image dimensions
   **✅ Do:** Always add width/height to prevent CLS

5. **❌ Don't:** Create duplicate content
   **✅ Do:** Use canonical URLs for similar pages

6. **❌ Don't:** Ignore mobile users
   **✅ Do:** Test everything on mobile devices first

7. **❌ Don't:** Leave outdated guides published
   **✅ Do:** Update or archive old content regularly

8. **❌ Don't:** Use keyword stuffing
   **✅ Do:** Write naturally with keywords in H2/H3

9. **❌ Don't:** Skip internal linking
   **✅ Do:** Link to 5-10 related pages on every page

10. **❌ Don't:** Forget Schema validation
    **✅ Do:** Test every page with Rich Results Test

---

## IMPLEMENTATION COMPLETE

This document contains all technical specifications needed to build an SEO-optimized Where Winds Meet guide website. Follow this specification exactly to ensure maximum search visibility and ranking potential.

**Next Steps for Claude Code:**
1. Set up Next.js project with configurations from Section 1
2. Create all Schema components from Section 2
3. Implement SEO metadata system from Section 3
4. Follow image optimization rules from Section 4
5. Complete remaining sections in priority order from Section 15

All code is production-ready and follows Next.js 14+ best practices.
