'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SchemaOrg } from '../seo/SchemaOrg';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  includeSchema?: boolean;
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  title = 'Frequently Asked Questions',
  includeSchema = true,
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate FAQ Schema
  const faqSchema = includeSchema ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      {faqSchema && <SchemaOrg schema={faqSchema} />}

      <div className={`mt-12 space-y-4 ${className}`}>
        <h2 className="font-display text-3xl text-gold-primary font-bold mb-6">
          {title}
        </h2>

        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-bg-card rounded-lg border border-gold-dark/30 hover:border-gold-primary transition-colors overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-lg text-text-primary group-hover:text-gold-bright transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-primary flex-shrink-0 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gold-dark/20">
                    <p className="font-body text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
