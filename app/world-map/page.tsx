import { Metadata } from 'next';
import { ComingSoon } from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'Interactive World Map - Coming Soon | Where Winds Meet',
  description: 'Explore the complete world of Where Winds Meet with our interactive map featuring fast travel points, resources, and hidden locations.',
};

export default function WorldMapPage() {
  return (
    <ComingSoon
      title="Interactive World Map"
      description="We're building a fully interactive map with all fast travel points, resource locations, boss spawn areas, hidden secrets, and collectibles. Navigate the Wuxia world like never before!"
      expectedDate="Coming in January 2026"
      relatedLinks={[
        {
          title: 'Qinghe & Kaifeng Tips',
          href: '/guides/qinghe-kaifeng-tips',
          description: 'Essential exploration tips for early regions',
        },
        {
          title: 'First 3 Hours Guide',
          href: '/guides/first-3-hours-guide',
          description: 'Learn the basics and unlock fast travel',
        },
        {
          title: 'Redemption Codes',
          href: '/codes',
          description: 'Free rewards to help your journey',
        },
      ]}
    />
  );
}
