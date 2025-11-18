import { Metadata } from 'next';
import { ComingSoon } from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'PVP Duelist Build - Coming Soon | Where Winds Meet',
  description: 'Master 1v1 PVP combat with this balanced duelist build guide for Where Winds Meet.',
};

export default function PVPDuelistBuildPage() {
  return (
    <ComingSoon
      title="PVP Duelist Build"
      description="We're preparing an in-depth PVP duelist guide covering optimal combos, counter strategies, and arena tactics. Dominate 1v1 battles with expert tips and build optimization!"
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
          title: 'Qinghe & Kaifeng Tips',
          href: '/guides/qinghe-kaifeng-tips',
          description: 'Essential tips for early game regions',
        },
      ]}
    />
  );
}
