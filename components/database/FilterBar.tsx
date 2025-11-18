'use client';

import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  types: string[];
  rarities: string[];
  placeholder?: string;
  onFilterChange?: (filters: FilterState) => void;
}

export interface FilterState {
  search: string;
  type: string;
  rarity: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  types,
  rarities,
  placeholder = 'Search...',
  onFilterChange,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    type: 'All',
    rarity: 'All',
  });

  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <div className="bg-bg-card rounded-lg border border-gold-dark/30 p-6">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative flex-grow w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            placeholder={placeholder}
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-bg-secondary border border-gold-dark/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-gold-primary transition-colors"
          />
        </div>

        {/* Filter Toggle Button (Mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center gap-2 px-4 py-3 bg-bg-secondary border border-gold-dark/30 rounded-lg text-text-primary hover:border-gold-primary transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Options */}
      <div className={`mt-4 space-y-4 ${showFilters ? 'block' : 'hidden'} md:block`}>
        {/* Type Filter */}
        <div>
          <label className="block text-sm text-text-muted mb-2 font-semibold">
            Weapon Type
          </label>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => handleFilterChange('type', type)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filters.type === type
                    ? 'bg-gold-primary text-bg-primary border-2 border-gold-primary'
                    : 'bg-bg-secondary text-text-secondary border-2 border-gold-dark/30 hover:border-gold-primary'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Rarity Filter */}
        <div>
          <label className="block text-sm text-text-muted mb-2 font-semibold">
            Rarity
          </label>
          <div className="flex flex-wrap gap-2">
            {rarities.map((rarity) => {
              const rarityColor =
                rarity === 'Legendary' ? 'border-gold-bright text-gold-bright' :
                rarity === 'Epic' ? 'border-purple-400 text-purple-400' :
                rarity === 'Rare' ? 'border-blue-400 text-blue-400' :
                rarity === 'Common' ? 'border-gray-400 text-gray-400' :
                'border-gold-dark/30 text-text-secondary';

              return (
                <button
                  key={rarity}
                  onClick={() => handleFilterChange('rarity', rarity)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border-2 ${
                    filters.rarity === rarity
                      ? `${rarityColor} bg-current/10`
                      : 'bg-bg-secondary text-text-secondary border-gold-dark/30 hover:border-gold-primary'
                  }`}
                >
                  {rarity}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Filters Count */}
      {(filters.type !== 'All' || filters.rarity !== 'All' || filters.search) && (
        <div className="mt-4 pt-4 border-t border-gold-dark/20">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">
              Active filters: {[filters.type !== 'All', filters.rarity !== 'All', filters.search].filter(Boolean).length}
            </span>
            <button
              onClick={() => {
                setFilters({ search: '', type: 'All', rarity: 'All' });
                if (onFilterChange) {
                  onFilterChange({ search: '', type: 'All', rarity: 'All' });
                }
              }}
              className="text-sm text-gold-bright hover:text-gold-primary transition-colors font-semibold"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
