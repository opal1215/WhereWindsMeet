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
