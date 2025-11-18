import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          <div className="flex flex-col sm:flex-row gap-8 items-center mt-12">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="bg-white/[0.08] backdrop-blur-[20px] border-[1.5px] border-white/25 text-white px-8 py-3.5 text-base font-normal rounded-3xl transition-all duration-400 hover:px-9 hover:-translate-y-0.5 hover:border-gold-primary/40 hover:shadow-[0_8px_24px_rgba(212,175,55,0.2)]"
                style={{ letterSpacing: '1.5px' }}
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="bg-transparent border-none text-white/75 text-[15px] font-light px-6 py-3.5 underline decoration-gold-primary/30 underline-offset-[6px] decoration-1 transition-all duration-300 hover:text-gold-primary hover:decoration-gold-primary hover:-translate-y-px"
                style={{ letterSpacing: '1.5px' }}
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
