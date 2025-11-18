import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  showHome = true,
  className = '',
}) => {
  // Prepend home if requested
  const allItems = showHome
    ? [{ name: 'Home', url: '/' }, ...items]
    : items;

  return (
    <nav
      className={`flex items-center flex-wrap gap-2 text-sm text-text-muted mb-6 ${className}`}
      aria-label="Breadcrumb"
    >
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1;
        const isHome = index === 0 && showHome;

        return (
          <div key={index} className="flex items-center gap-2">
            {/* Separator */}
            {index > 0 && <ChevronRight className="w-4 h-4 text-gold-dark/50" />}

            {/* Item */}
            {item.url && !isLast ? (
              <Link
                href={item.url}
                className="hover:text-gold-primary transition-colors flex items-center gap-1.5"
              >
                {isHome && <Home className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ) : (
              <span
                className={`flex items-center gap-1.5 ${
                  isLast ? 'text-text-primary font-medium' : ''
                }`}
                aria-current={isLast ? 'page' : undefined}
              >
                {isHome && <Home className="w-4 h-4" />}
                <span>{item.name}</span>
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};
