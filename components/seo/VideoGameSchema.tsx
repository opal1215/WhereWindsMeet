import React from 'react';
import { SchemaOrg } from './SchemaOrg';

interface VideoGameSchemaProps {
  name: string;
  description: string;
  image: string;
  genre: string[];
  gamePlatform: string[];
}

export const VideoGameSchema: React.FC<VideoGameSchemaProps> = ({
  name,
  description,
  image,
  genre,
  gamePlatform,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['VideoGame', 'SoftwareApplication'],
    name: name,
    description: description,
    image: image,
    genre: genre,
    gamePlatform: gamePlatform,
    author: {
      '@type': 'Organization',
      name: 'Everstone Games',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Everstone Games',
    },
    playMode: ['SinglePlayer', 'MultiPlayer', 'CoOp'],
    applicationCategory: 'Game',
  };

  return <SchemaOrg schema={schema} />;
};
