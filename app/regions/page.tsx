import { Metadata } from 'next';
import { ComingSoon } from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'Region Guides - Coming Soon | Where Winds Meet',
  description: 'Comprehensive guides for all regions in Where Winds Meet including quests, secrets, and points of interest.',
};

export default function RegionsPage() {
  return (
    <ComingSoon
      title="Region Guides"
      description="We're creating detailed guides for every region in the game! Each guide will cover main quests, side activities, hidden treasures, boss locations, and lore insights."
      expectedDate="Coming in January 2026"
      relatedLinks={[
        {
          title: 'Qinghe & Kaifeng Tips',
          href: '/guides/qinghe-kaifeng-tips',
          description: 'Essential tips for the first two regions',
        },
        {
          title: 'Is WWM for You?',
          href: '/guides/is-where-winds-meet-for-you',
          description: 'Learn what makes this game special',
        },
        {
          title: 'All Guides',
          href: '/guides',
          description: 'Browse all available guides',
        },
      ]}
    />
  );
}
