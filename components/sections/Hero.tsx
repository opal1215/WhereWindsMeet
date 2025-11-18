import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'compact';
  goldSubtitle?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage = '/images/hero-bg.webp',
  primaryCTA,
  secondaryCTA,
  variant = 'default',
  goldSubtitle = false,
}) => {
  const heightClass = variant === 'default' ? 'h-screen' : 'h-[60vh] min-h-[400px]';

  return (
    <section className={`relative ${heightClass}`}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={95}
        />
      </div>

      {/* Light Overlay - barely visible */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      {/* Content Container - positioned at top third */}
      <div className="max-w-4xl px-5 md:px-10 text-center mx-auto" style={{ paddingTop: '25vh' }}>
        {/* Title with correct sizing */}
        <h1
          className="font-display font-black bg-gradient-gold bg-clip-text text-transparent mb-5"
          style={{
            fontSize: variant === 'default' ? '3.5rem' : '2.5rem',
            lineHeight: '1.2',
            letterSpacing: '0.05em',
            textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
          }}
        >
          {title}
        </h1>

        {/* Subtitle with correct sizing */}
        {subtitle && (
          <p
            className={`font-body ${
              goldSubtitle
                ? 'bg-gradient-gold bg-clip-text text-transparent font-semibold'
                : 'text-white'
            }`}
            style={{
              fontSize: '1.2rem',
              marginBottom: '3rem',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            {subtitle}
          </p>
        )}

        {/* CTAs */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
            {primaryCTA && (
              <Button
                href={primaryCTA.href}
                variant="primary"
                size={variant === 'default' ? 'lg' : 'md'}
              >
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size={variant === 'default' ? 'lg' : 'md'}
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Scroll Indicator (only for default variant) */}
      {variant === 'default' && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
          </div>
        </div>
      )}
    </section>
  );
};
