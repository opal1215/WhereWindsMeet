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

      {/* Gradient Overlay - Dark to Transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-overlay/80 via-transparent to-bg-overlay/40 -z-10" />

      {/* Torn Paper Divider at Bottom - Reduced Height */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-bg-primary z-10"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          clipPath: 'polygon(0 100%, 100% 100%, 100% 20%, 95% 40%, 90% 20%, 85% 40%, 80% 20%, 75% 40%, 70% 20%, 65% 40%, 60% 20%, 55% 40%, 50% 20%, 45% 40%, 40% 20%, 35% 40%, 30% 20%, 25% 40%, 20% 20%, 15% 40%, 10% 20%, 5% 40%, 0 20%)'
        }}
      />
      {/* Overlap fix for the divider */}
      <div className="absolute -bottom-1 left-0 right-0 h-10 bg-bg-primary z-0"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 20%, 95% 40%, 90% 20%, 85% 40%, 80% 20%, 75% 40%, 70% 20%, 65% 40%, 60% 20%, 55% 40%, 50% 20%, 45% 40%, 40% 20%, 35% 40%, 30% 20%, 25% 40%, 20% 20%, 15% 40%, 10% 20%, 5% 40%, 0 20%)' }}
      />

      {/* Title and Subtitle - Fixed at Top */}
      <div className="absolute top-24 left-0 right-0 flex justify-center z-20">
        <div className="max-w-4xl px-5 md:px-10 text-center">
          {/* Title */}
          <h1
            className={`font-display font-bold text-text-on-dark mb-4 drop-shadow-lg ${variant === 'default'
              ? 'text-4xl md:text-5xl lg:text-6xl'
              : 'text-4xl md:text-5xl lg:text-7xl'
              }`}
            style={{
              lineHeight: '1.1',
              letterSpacing: '0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`font-body text-text-on-dark/90 drop-shadow-md ${variant === 'default' ? 'text-lg md:text-xl' : 'text-lg md:text-xl'
                }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* CTAs - Fixed at Bottom */}
      {(primaryCTA || secondaryCTA) && (
        <div className="absolute bottom-32 left-0 right-0 flex justify-center z-20">
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="group relative px-12 py-4 text-xl font-bold text-gold-bright transition-all duration-500 hover:scale-105"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {/* Ethereal Bamboo Shape Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30 backdrop-blur-sm border border-gold-primary/40 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] transition-all duration-500 group-hover:bg-gold-primary/10 group-hover:border-gold-bright group-hover:shadow-[0_0_25px_rgba(198,166,100,0.3)]" />

                {/* Subtle Inner Highlight */}
                <div className="absolute inset-[1px] border border-white/5 rounded-tl-[29px] rounded-br-[29px] rounded-tr-[3px] rounded-bl-[3px]" />

                {/* Text Content */}
                <span className="relative z-10 tracking-widest group-hover:text-white transition-colors duration-300 flex items-center gap-3 text-shadow-sm">
                  {primaryCTA.label}
                  <span className="text-lg opacity-70 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="relative px-8 py-3 text-lg font-medium text-text-on-dark/80 hover:text-gold-bright transition-colors duration-300 group"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                <span className="relative z-10 tracking-widest">{secondaryCTA.label}</span>
                {/* Mist-like underline effect */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent group-hover:w-full group-hover:via-gold-primary transition-all duration-500" />
              </Link>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
