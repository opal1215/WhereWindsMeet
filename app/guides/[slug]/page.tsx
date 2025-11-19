import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
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
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

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
      canonical: `https://wherewindsmeetgame.org/guides/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const { metadata, content } = guide;

  // Generate TOC from markdown if not provided in frontmatter
  const toc = metadata.toc || generateTOC(content);

  // MDX Components mapping
  const components = {
    // Add any custom components here if needed
  };

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
        url={`https://wherewindsmeetgame.org/guides/${slug}`}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wherewindsmeetgame.org' },
          { name: 'Guides', url: 'https://wherewindsmeetgame.org/guides' },
          { name: metadata.title, url: `https://wherewindsmeetgame.org/guides/${slug}` },
        ]}
      />

      <div className="min-h-screen bg-bg-primary pt-14 pb-20">
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
            <article className="max-w-[800px]">
              {/* Header */}
              <header className="mb-12">
                <h1 className="font-display text-4xl md:text-5xl text-text-primary font-bold mb-4">
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
                  <MDXRemote source={content} components={components} options={options} />
                </div>
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
