import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  background?: 'primary' | 'secondary' | 'transparent';
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  title,
  subtitle,
  background = 'primary',
  containerWidth = 'lg',
  className = '',
  id,
}) => {
  // Background color mapping
  const bgColors = {
    primary: 'bg-bg-primary',
    secondary: 'bg-bg-secondary',
    transparent: 'bg-transparent',
  };

  // Container width mapping
  const widthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-[1200px]',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <section
      id={id}
      className={`py-section-y md:py-section-y px-5 ${bgColors[background]} relative overflow-hidden ${className}`}
    >
      <div className={`${widthClasses[containerWidth]} mx-auto`}>
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {/* Decorative Line (optional) */}
            <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-6" />

            {/* Title */}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl text-gold-primary font-bold mb-4">
                {title}
              </h2>
            )}

            {/* Subtitle */}
            {subtitle && (
              <p className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        <div>{children}</div>
      </div>

      {/* Optional decorative elements (can be enhanced later with actual images) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};
