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
