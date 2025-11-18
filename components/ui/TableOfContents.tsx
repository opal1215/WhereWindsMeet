'use client';

import React, { useEffect, useState } from 'react';
import { List } from 'lucide-react';

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  title?: string;
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  title = 'Table of Contents',
  className = '',
}) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`sticky top-24 ${className}`}>
      <div className="bg-bg-card border border-gold-dark/30 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-5 h-5 text-gold-primary" />
          <h3 className="font-display text-lg text-gold-primary font-bold">
            {title}
          </h3>
        </div>

        <ul className="space-y-2">
          {items.map((item) => {
            const isActive = activeId === item.id;
            const paddingLeft = (item.level - 1) * 16;

            return (
              <li key={item.id} style={{ paddingLeft: `${paddingLeft}px` }}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`text-sm text-left w-full py-1.5 px-3 rounded transition-all ${
                    isActive
                      ? 'text-gold-bright bg-gold-primary/10 border-l-2 border-gold-primary'
                      : 'text-text-secondary hover:text-gold-bright hover:bg-gold-primary/5'
                  }`}
                >
                  {item.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
