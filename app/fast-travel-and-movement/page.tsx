import { Metadata } from 'next';
import { ComingSoon } from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'Fast Travel & Movement Guide - Coming Soon | Where Winds Meet',
  description: 'Master fast travel systems and movement mechanics in Where Winds Meet with our comprehensive guide.',
};

export default function FastTravelPage() {
  return (
    <ComingSoon
      title="Fast Travel & Movement Guide"
      description="We're putting together a complete guide to fast travel points, mount systems, gliding mechanics, and advanced movement techniques. Get around the world efficiently!"
      expectedDate="Coming in December 2025"
      relatedLinks={[
        {
          title: 'First 3 Hours Guide',
          href: '/guides/first-3-hours-guide',
          description: 'Learn basic movement and unlock fast travel',
        },
        {
          title: 'Qinghe & Kaifeng Tips',
          href: '/guides/qinghe-kaifeng-tips',
          description: 'Exploration tips for early regions',
        },
        {
          title: 'Combat Guide',
          href: '/guides/combat-guide-beginner-builds',
          description: 'Master combat movement and positioning',
        },
      ]}
    />
  );
}
