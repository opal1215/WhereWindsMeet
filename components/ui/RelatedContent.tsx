import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export interface RelatedLink {
  title: string;
  url: string;
  description: string;
}

interface RelatedContentProps {
  links: RelatedLink[];
  title?: string;
  variant?: 'default' | 'compact';
  className?: string;
}

export const RelatedContent: React.FC<RelatedContentProps> = ({
  links,
  title = 'Related Guides',
  variant = 'default',
  className = '',
}) => {
  const padding = variant === 'default' ? 'p-6' : 'p-4';

  return (
    <div
      className={`mt-12 ${padding} bg-bg-card rounded-lg border border-gold-dark/30 ${className}`}
    >
      {/* Title */}
      <h3 className="font-display text-xl text-gold-primary font-bold mb-4">
        {title}
      </h3>

      {/* Links */}
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className="flex items-start gap-2 group"
            >
              {/* Icon */}
              <ExternalLink className="w-4 h-4 text-gold-bright mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />

              {/* Content */}
              <div>
                <div className="text-text-primary font-semibold group-hover:text-gold-bright transition-colors">
                  {link.title}
                </div>
                {variant === 'default' && (
                  <p className="text-sm text-text-secondary mt-0.5">
                    {link.description}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
