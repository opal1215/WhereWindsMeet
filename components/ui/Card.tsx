import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  image?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  href,
  image,
  icon,
  variant = 'default',
  className = '',
  children,
}) => {
  // Base styles - Earthy Paper Look
  const baseStyles = 'bg-bg-card border border-gold-dark/20 rounded-xl transition-all duration-300 hover:border-gold-primary/60 hover:-translate-y-1 hover:shadow-card';

  // Variant styles - Unified padding
  const variantStyles = {
    default: 'p-8',
    compact: 'p-6',
    featured: 'p-10 border-2 border-gold-primary/40 bg-bg-secondary',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {/* Image (if provided) */}
      {image && (
        <div className="mb-6 -mx-10 -mt-10 rounded-t-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {/* Icon (if provided and no image) */}
      {icon && !image && (
        <div className="mb-4 text-gold-primary">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="font-display text-2xl text-text-primary font-bold mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-base text-text-secondary leading-relaxed mb-4">
        {description}
      </p>

      {/* Custom children content */}
      {children}

      {/* Link indicator (if href provided) */}
      {href && (
        <div className="flex items-center gap-2 text-gold-dark font-bold group-hover:text-gold-primary transition-all group-hover:translate-x-1">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </>
  );

  // Render as Link if href is provided
  if (href) {
    return (
      <Link href={href} className={`${combinedStyles} group block`}>
        {content}
      </Link>
    );
  }

  // Render as div
  return (
    <div className={combinedStyles}>
      {content}
    </div>
  );
};
