import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowLeft, Home } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description?: string;
  expectedDate?: string;
  relatedLinks?: Array<{ title: string; href: string; description: string }>;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({
  title,
  description = "We're working hard to bring you this feature. Stay tuned!",
  expectedDate,
  relatedLinks,
}) => {
  return (
    <div className="min-h-screen bg-bg-primary pt-14 pb-20 flex items-center">
      <div className="max-w-[900px] mx-auto px-5 w-full">
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-gold mb-8 animate-pulse">
            <Sparkles className="w-12 h-12 text-bg-primary" />
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl text-gold-primary font-bold mb-6">
            {title}
          </h1>

          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gold-primary/20 border border-gold-primary/40 rounded-full text-gold-bright font-ui text-sm font-semibold">
              Coming Soon
            </span>
          </div>

          {/* Description */}
          <p className="font-body text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            {description}
          </p>

          {/* Expected Date */}
          {expectedDate && (
            <p className="font-ui text-sm text-text-muted">
              Expected: <span className="text-gold-bright">{expectedDate}</span>
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-bg-primary font-ui font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold-primary/40 text-gold-bright font-ui font-semibold rounded-lg hover:bg-gold-primary/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Browse Guides
            </Link>
          </div>
        </div>

        {/* Related Content */}
        {relatedLinks && relatedLinks.length > 0 && (
          <div className="border-t border-gold-dark/30 pt-12">
            <h2 className="font-display text-2xl text-gold-primary font-semibold mb-8 text-center">
              Meanwhile, Check Out These
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group p-6 bg-bg-card border border-gold-dark/30 rounded-lg hover:border-gold-primary/40 hover:bg-bg-card/80 transition-all"
                >
                  <h3 className="font-display text-lg text-text-primary font-semibold mb-2 group-hover:text-gold-bright transition-colors">
                    {link.title}
                  </h3>
                  <p className="font-ui text-sm text-text-secondary leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Signup (Optional) */}
        <div className="mt-16 p-8 bg-bg-card border border-gold-dark/30 rounded-lg text-center">
          <h3 className="font-display text-xl text-gold-primary font-semibold mb-3">
            Want to be notified when this launches?
          </h3>
          <p className="font-ui text-sm text-text-secondary mb-6">
            Follow us on Twitter or join our Discord for the latest updates!
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-bg-secondary border border-gold-dark/30 text-text-secondary hover:text-gold-bright hover:border-gold-primary/40 font-ui text-sm rounded-lg transition-all"
            >
              Twitter
            </a>
            <a
              href="https://discord.gg/wherewindsmeet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-bg-secondary border border-gold-dark/30 text-text-secondary hover:text-gold-bright hover:border-gold-primary/40 font-ui text-sm rounded-lg transition-all"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
