import { WebSiteSchema } from '@/components/seo/WebSiteSchema';

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />

      <main className="min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="max-w-4xl px-10 text-center">
          <h1 className="font-display text-6xl md:text-9xl font-black bg-gradient-gold bg-clip-text text-transparent mb-5">
            WHERE WINDS MEET
          </h1>
          <p className="font-body text-xl text-text-primary/90 mb-8">
            Your Wuxia Adventure Begins Here
          </p>
          <p className="font-ui text-text-secondary">
            🚀 Website is under construction...
          </p>
          <p className="font-ui text-sm text-text-muted mt-4">
            SEO infrastructure and page framework are being built.
          </p>
        </div>
      </main>
    </>
  );
}
