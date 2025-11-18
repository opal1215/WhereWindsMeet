import { Metadata } from 'next';
import { ComingSoon } from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'PVE Tank Build - Coming Soon | Where Winds Meet',
  description: 'Comprehensive PVE Tank build guide for Where Winds Meet. Learn the best defensive builds for surviving tough encounters.',
};

export default function PVETankBuildPage() {
  return (
    <ComingSoon
      title="PVE Tank Build"
      description="We're crafting a comprehensive tank build guide with optimal defensive stats, skill rotations, and gear recommendations. This guide will help you become an unstoppable fortress in PVE content!"
      expectedDate="Coming in December 2025"
      relatedLinks={[
        {
          title: 'PVE DPS Build',
          href: '/builds/pve-dps',
          description: 'Maximum damage output for boss fights and dungeons',
        },
        {
          title: 'Combat Guide',
          href: '/guides/combat-guide-beginner-builds',
          description: 'Learn combat basics and beginner-friendly builds',
        },
        {
          title: 'First 3 Hours Guide',
          href: '/guides/first-3-hours-guide',
          description: 'Simple tips for your first gaming session',
        },
      ]}
    />
  );
}
