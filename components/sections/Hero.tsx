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
  const heightClass = variant === 'default' ? 'h-screen min-h-[600px]' : 'h-[60vh] min-h-[400px]';

  return (
    <section className={`relative ${heightClass}`}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Subtle Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent -z-10" />

      {/* Title and Subtitle - Fixed at Top */}
      <div className="absolute top-16 left-0 right-0 flex justify-center">
        <div className="max-w-4xl px-5 md:px-10 text-center">
          {/* Title */}
          <h1
            className={`font-display font-bold text-white mb-4 ${
              variant === 'default'
                ? 'text-3xl md:text-4xl lg:text-5xl'
                : 'text-4xl md:text-5xl lg:text-7xl'
            }`}
            style={{
              lineHeight: '1.2',
              letterSpacing: '0.01em',
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`font-body text-white/80 ${
                variant === 'default' ? 'text-base md:text-lg' : 'text-lg md:text-xl'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* CTAs - Fixed at Bottom */}
      {(primaryCTA || secondaryCTA) && (
        <div className="absolute bottom-20 left-0 right-0 flex justify-center">
          <div className="flex flex-col sm:flex-row gap-3">
            {primaryCTA && (
              <Button
                href={primaryCTA.href}
                variant="primary"
                size="md"
              >
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="md"
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
