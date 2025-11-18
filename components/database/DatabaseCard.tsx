import React from 'react';
import Link from 'next/link';
import { MapPin, Sparkles } from 'lucide-react';

interface DatabaseCardProps {
  title: string;
  type: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  description: string;
  stats: { label: string; value: number | string }[];
  location: string;
  specialAbility?: string;
  image: string;
  href: string;
}

const rarityColors = {
  Common: 'border-gray-400 text-gray-400',
  Rare: 'border-blue-400 text-blue-400',
  Epic: 'border-purple-400 text-purple-400',
  Legendary: 'border-gold-bright text-gold-bright',
};

const rarityGlow = {
  Common: 'hover:shadow-gray-400/20',
  Rare: 'hover:shadow-blue-400/20',
  Epic: 'hover:shadow-purple-400/20',
  Legendary: 'hover:shadow-gold-bright/20',
};

export const DatabaseCard: React.FC<DatabaseCardProps> = ({
  title,
  type,
  rarity,
  description,
  stats,
  location,
  specialAbility,
  image,
  href,
}) => {
  return (
    <Link href={href}>
      <div className={`group bg-bg-card rounded-lg border-2 ${rarityColors[rarity]} p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg ${rarityGlow[rarity]} cursor-pointer h-full flex flex-col`}>
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-display text-xl text-text-primary font-bold group-hover:text-gold-bright transition-colors">
              {title}
            </h3>
            <span className={`text-xs font-semibold px-2 py-1 rounded ${rarityColors[rarity]} border`}>
              {rarity}
            </span>
          </div>
          <div className="text-sm text-text-muted">{type}</div>
        </div>

        {/* Image Placeholder */}
        <div className="w-full h-40 bg-bg-secondary rounded-lg mb-4 flex items-center justify-center border border-gold-dark/20 overflow-hidden">
          <div className="text-text-muted text-sm">
            {/* Placeholder - will be replaced with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-gold-dark/10 to-blue-accent/10" />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gold-dark/20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-bold text-gold-primary">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="w-4 h-4 text-blue-accent mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-xs text-text-muted mb-0.5">Location</div>
            <div className="text-sm text-text-secondary">{location}</div>
          </div>
        </div>

        {/* Special Ability */}
        {specialAbility && (
          <div className="flex items-start gap-2 bg-gold-primary/5 rounded-lg p-3 border border-gold-dark/30">
            <Sparkles className="w-4 h-4 text-gold-bright mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs text-gold-bright mb-0.5 font-semibold">Special Ability</div>
              <div className="text-sm text-text-secondary">{specialAbility}</div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};
