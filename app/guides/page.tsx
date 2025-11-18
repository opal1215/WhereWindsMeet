import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { Card } from '@/components/ui/Card';
import { BookOpen, Zap, Map, Sword } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Where Winds Meet Guides - Beginner Tips & Strategies',
  description: 'Complete guide collection for Where Winds Meet. Learn combat, exploration, builds, and essential tips for PS5 and PC players.',
  keywords: ['where winds meet guides', 'wwm tips', 'beginner guide', 'combat guide', 'where winds meet tutorials'],
  openGraph: {
    title: 'Where Winds Meet Guides - Beginner Tips & Strategies',
    description: 'Complete guide collection for Where Winds Meet. Learn combat, exploration, builds, and essential tips for PS5 and PC players.',
    type: 'website',
  },
};

export default function GuidesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Where Winds Meet Guides"
        subtitle="Everything you need to master the game"
        variant="compact"
      />

      {/* Getting Started Guides */}
      <SectionContainer
        title="Getting Started"
        subtitle="Essential guides for new players"
        background="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Is Where Winds Meet for You?"
            description="Honest breakdown for Souls players, Genshin fans, and MMO veterans. Learn if this game matches your playstyle."
            href="/guides/is-where-winds-meet-for-you"
            icon={<BookOpen className="w-8 h-8" />}
          />
          <Card
            title="First 3 Hours Guide"
            description="Simple tips for your first session. What to do first, what to ignore, and how to enjoy without feeling overwhelmed."
            href="/guides/first-3-hours-guide"
            icon={<Zap className="w-8 h-8" />}
          />
        </div>
      </SectionContainer>

      {/* Regional Guides */}
      <SectionContainer
        title="Regional Guides"
        subtitle="Explore the world and discover secrets"
        background="primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Qinghe & Kaifeng Tips"
            description="15 little things the game never explains. Small tricks, warnings, and quality-of-life advice for early regions."
            href="/guides/qinghe-kaifeng-tips"
            icon={<Map className="w-8 h-8" />}
          />
        </div>
      </SectionContainer>

      {/* Combat & Builds */}
      <SectionContainer
        title="Combat & Builds"
        subtitle="Master the combat system and optimize your character"
        background="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Combat Guide & Simple Builds"
            description="Practical combat overview for beginners: weapons, martial arts, and easy builds that feel good to play."
            href="/guides/combat-guide-beginner-builds"
            icon={<Sword className="w-8 h-8" />}
          />
        </div>
      </SectionContainer>
    </>
  );
}
