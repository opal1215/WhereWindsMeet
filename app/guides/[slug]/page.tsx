import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { RelatedContent } from '@/components/ui/RelatedContent';
import { FAQ } from '@/components/ui/FAQ';
import { getGuideBySlug, getAllGuides, generateTOC } from '@/lib/content';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return {
      title: 'Guide Not Found',
    };
  }

  const { metadata } = guide;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords || ['where winds meet', 'wwm guide', metadata.title.toLowerCase(), 'tutorial', 'tips'],
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
      canonical: `https://wherewindsmeetgame.org/guides/${params.slug}`,
    },
  };
}

export default function GuidePage({ params }: PageProps) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  const { metadata, content } = guide;

  // Generate TOC from markdown if not provided in frontmatter
  const toc = metadata.toc || generateTOC(content);

  // Convert markdown headings to HTML IDs for TOC navigation
  const contentWithIds = content.replace(/^(#{2,3})\s+(.+)$/gm, (match, hashes, text) => {
    const level = hashes.length;
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return `<h${level} id="${id}">${text}</h${level}>`;
  });

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
        url={`https://wherewindsmeetgame.org/guides/${params.slug}`}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Guides', url: 'https://wherewindsmeetgame.org/guides' },
          { name: metadata.title, url: `https://wherewindsmeetgame.org/guides/${params.slug}` },
        ]}
      />

      <div className="min-h-screen bg-bg-primary pt-24 pb-20">
        <div className="max-w-[1400px] mx-auto px-5">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Guides', url: '/guides' },
              { name: metadata.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <article className="max-w-4xl">
              {/* Header */}
              <header className="mb-12">
                <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold mb-4">
                  {metadata.title}
                </h1>
                <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
                  {metadata.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-text-muted">
                  <span>By {metadata.author}</span>
                  <span>•</span>
                  <span>Updated: {new Date(metadata.dateModified).toLocaleDateString()}</span>
                </div>
              </header>

              {/* Article Content */}
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
                  dangerouslySetInnerHTML={{ __html: contentWithIds.replace(/\n/g, '<br/>') }}
                />
              </div>

              {/* Related Guides */}
              {metadata.relatedGuides && metadata.relatedGuides.length > 0 && (
                <RelatedContent links={metadata.relatedGuides} title="Related Guides" />
              )}

              {/* FAQ Section */}
              {metadata.faqs && metadata.faqs.length > 0 && (
                <FAQ items={metadata.faqs} />
              )}
            </article>

            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <TableOfContents items={toc} />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

// Generate static params for all guides
export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}
