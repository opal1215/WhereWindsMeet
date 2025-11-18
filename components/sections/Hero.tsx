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

      {/* Very Light Overlay - almost invisible */}
      <div className="absolute inset-0 bg-black/15 -z-10" />

      {/* Title - Two lines with absolute positioning */}
      <div
        className="absolute left-1/2 text-center w-full px-5 md:px-10"
        style={{
          top: '140px',
          transform: 'translateX(-50%)',
        }}
      >
        <div
          className="font-display font-black"
          style={{
            fontSize: '4.5rem',
            fontWeight: 800,
            color: '#FFD700',
            lineHeight: '1',
            letterSpacing: '0.05em',
            marginBottom: '10px',
            textShadow: '0 0 30px rgba(255, 215, 0, 0.6), 3px 3px 10px rgba(0, 0, 0, 0.8)',
          }}
        >
          Find Your Way
        </div>
        <div
          className="font-display font-black"
          style={{
            fontSize: '4rem',
            fontWeight: 800,
            color: '#FFD700',
            lineHeight: '1',
            letterSpacing: '0.05em',
            textShadow: '0 0 30px rgba(255, 215, 0, 0.6), 3px 3px 10px rgba(0, 0, 0, 0.8)',
          }}
        >
          Through the Wuxia Winds
        </div>
      </div>

      {/* Subtitle - absolute positioning */}
      {subtitle && (
        <div
          className="absolute left-1/2 text-center w-full px-5 md:px-10"
          style={{
            top: '380px',
            transform: 'translateX(-50%)',
          }}
        >
          <p
            className="font-body text-white"
            style={{
              fontSize: '1rem',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            {subtitle}
          </p>
        </div>
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
