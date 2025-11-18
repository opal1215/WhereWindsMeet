import React from 'react';
import { SchemaOrg } from './SchemaOrg';

interface Step {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  image: string;
  totalTime?: string; // ISO 8601 duration format: "PT30M" = 30 minutes
  steps: Step[];
}

export const HowToSchema: React.FC<HowToSchemaProps> = ({
  name,
  description,
  image,
  totalTime,
  steps,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    image: image,
    totalTime: totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };

  return <SchemaOrg schema={schema} />;
};
