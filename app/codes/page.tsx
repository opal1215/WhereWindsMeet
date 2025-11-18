import { Metadata } from 'next';
import { Gift, Clock, Users, Tv, Check } from 'lucide-react';
import { CopyButton } from '@/components/ui/CopyButton';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { FAQ } from '@/components/ui/FAQ';

export const metadata: Metadata = {
  title: 'Where Winds Meet Codes - Free Echo Jade & Rewards (November 2025)',
  description: 'Get free Echo Jade, Coins, and exclusive rewards with active Where Winds Meet redeem codes. Updated daily for the international version released November 2025.',
  keywords: [
    'where winds meet codes',
    'wwm redeem codes',
    'where winds meet free rewards',
    'wwm echo jade free',
    'where winds meet codes november 2025',
    'wwm promo codes',
    'where winds meet gift codes',
    'wwm free echo jade',
  ],
  openGraph: {
    title: 'Where Winds Meet Codes - Free Echo Jade & Rewards (November 2025)',
    description: 'Get free Echo Jade, Coins, and exclusive rewards with active Where Winds Meet redeem codes. Updated daily.',
    type: 'article',
    publishedTime: '2025-11-18T00:00:00Z',
    modifiedTime: '2025-11-18T00:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where Winds Meet Codes - Free Rewards (Nov 2025)',
    description: 'Active redeem codes for Where Winds Meet. Get free Echo Jade and exclusive items!',
  },
  alternates: {
    canonical: 'https://wherewindsmeet.com/codes',
  },
};

interface Code {
  code: string;
  rewards: string[];
  value: number;
  notes?: string;
}

const activeCodes: Code[] = [
  {
    code: 'WWMGO1114',
    rewards: ['Echo Jade x 100', 'Resonating Melody x 1'],
    value: 100,
    notes: 'Highest value code - redeem this first!',
  },
  {
    code: 'WWMGO1115',
    rewards: ['Echo Jade x 40'],
    value: 40,
    notes: 'Great Echo Jade boost',
  },
  {
    code: 'WWMGLyoutube',
    rewards: ['Echo Jade x 20', 'Coins x 5,000', 'Inner Way Note: Chest x 2'],
    value: 20,
    notes: 'From official YouTube channel',
  },
  {
    code: 'WWMGLtiktok',
    rewards: ['Echo Jade x 10', 'Coins x 10,000'],
    value: 10,
    notes: 'From official TikTok channel',
  },
  {
    code: 'WWM251115',
    rewards: ['Echo Jade x 10', 'Coins x 5,000', 'Goose God Profile Background'],
    value: 10,
    notes: 'Exclusive cosmetic item included',
  },
];

const faqItems = [
  {
    question: 'How do I redeem codes in Where Winds Meet?',
    answer: 'Go to Settings > Other > Exchange Code, then enter the code exactly as shown and click Confirm to claim your rewards.',
  },
  {
    question: 'Are these codes still working?',
    answer: 'Yes! All codes listed on this page are currently active as of November 18, 2025. We update this page regularly to remove expired codes.',
  },
  {
    question: 'Can I use the same code multiple times?',
    answer: 'No, each code can only be redeemed once per account. Make sure to claim all available codes!',
  },
  {
    question: 'Do codes work on all servers?',
    answer: 'Yes, all codes listed here work on all servers with no regional restrictions for the international version.',
  },
  {
    question: 'What is Echo Jade used for?',
    answer: 'Echo Jade is the premium currency in Where Winds Meet. You can use it to purchase exclusive cosmetics, outfits, convenience items, and unlock special features.',
  },
  {
    question: 'When do new codes get released?',
    answer: 'New codes are typically released during special events, updates, and celebrations. Follow the official Where Winds Meet social media channels (TikTok, YouTube, Twitter) and bookmark this page for the latest codes!',
  },
];

const breadcrumbItems = [
  { name: 'Redeem Codes', url: '/codes' },
];

const breadcrumbSchemaItems = [
  { name: 'Home', url: 'https://wherewindsmeetgame.org' },
  { name: 'Redeem Codes', url: 'https://wherewindsmeetgame.org/codes' },
];

export default function CodesPage() {
  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbSchemaItems} />
      <ArticleSchema
        headline="Where Winds Meet Codes - Free Echo Jade & Rewards (November 2025)"
        description="Complete list of active redeem codes for Where Winds Meet with free Echo Jade, Coins, and exclusive rewards."
        datePublished="2025-11-18T00:00:00Z"
        dateModified="2025-11-18T00:00:00Z"
        author="WhereWindsMeet.com Team"
        image="https://wherewindsmeetgame.org/images/og-image.jpg"
        url="https://wherewindsmeetgame.org/codes"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary text-sm font-medium mb-4">
            <Gift className="w-4 h-4" />
            <span>5 Active Codes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Where Winds Meet <span className="text-gold-primary">Redeem Codes</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get free <strong className="text-gold-primary">Echo Jade</strong>, Coins, and exclusive rewards.
            All codes are active for the international version released November 16, 2025.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-text-muted text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Updated: November 18, 2025</span>
            </div>
          </div>
        </header>

        {/* Active Codes Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Gift className="w-7 h-7 text-gold-primary" />
            Active Codes (Sorted by Value)
          </h2>
          <div className="space-y-4">
            {activeCodes.map((item, index) => (
              <div
                key={item.code}
                className="bg-bg-card border border-gold-primary/20 rounded-lg p-6 hover:border-gold-primary/40 transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Code and Rewards */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold font-mono text-gold-primary tracking-wider">
                        {item.code}
                      </span>
                      {index === 0 && (
                        <span className="px-2 py-1 bg-gold-primary/20 border border-gold-primary/40 rounded text-gold-primary text-xs font-bold">
                          BEST VALUE
                        </span>
                      )}
                    </div>
                    <div className="space-y-1 mb-2">
                      {item.rewards.map((reward, i) => (
                        <div key={i} className="flex items-center gap-2 text-text-secondary">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-primary/60"></div>
                          <span>{reward}</span>
                        </div>
                      ))}
                    </div>
                    {item.notes && (
                      <p className="text-sm text-text-muted italic">{item.notes}</p>
                    )}
                  </div>

                  {/* Copy Button */}
                  <div className="flex-shrink-0">
                    <CopyButton text={item.code} label="Copy Code" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Redeem Section */}
        <section className="mb-16 bg-bg-secondary border border-blue-accent/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6">How to Redeem Codes</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold-primary/20 border border-gold-primary/40 rounded-full flex items-center justify-center text-gold-primary font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Launch Where Winds Meet</h3>
                <p className="text-text-secondary">Open the game and wait for it to fully load</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold-primary/20 border border-gold-primary/40 rounded-full flex items-center justify-center text-gold-primary font-bold">
                2
              </span>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Go to Settings</h3>
                <p className="text-text-secondary">Click the gear icon to open Settings menu</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold-primary/20 border border-gold-primary/40 rounded-full flex items-center justify-center text-gold-primary font-bold">
                3
              </span>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Navigate to Other → Exchange Code</h3>
                <p className="text-text-secondary">Select the "Other" tab, then click "Exchange Code"</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold-primary/20 border border-gold-primary/40 rounded-full flex items-center justify-center text-gold-primary font-bold">
                4
              </span>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Enter the Code</h3>
                <p className="text-text-secondary">Type or paste the code exactly as shown (case-sensitive)</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold-primary/20 border border-gold-primary/40 rounded-full flex items-center justify-center text-gold-primary font-bold">
                5
              </span>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">Claim Your Rewards</h3>
                <p className="text-text-secondary">Click "Confirm" and your rewards will be sent to your mailbox!</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Bonus Rewards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Bonus Rewards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Team System */}
            <div className="bg-bg-card border border-gold-primary/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Team System Rewards</h3>
                  <p className="text-text-secondary">
                    Join or create a team with your friends and claim rewards for up to <strong className="text-gold-primary">5 people</strong>.
                    Team up to maximize your Echo Jade earnings!
                  </p>
                </div>
              </div>
            </div>

            {/* Twitch Drops */}
            <div className="bg-bg-card border border-gold-primary/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Tv className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Twitch Drops</h3>
                  <p className="text-text-secondary">
                    Link your account and watch Where Winds Meet streams on Twitch to earn <strong className="text-purple-400">exclusive Twitch Drop rewards</strong>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-16 bg-blue-accent/5 border border-blue-accent/20 rounded-lg p-6">
          <h2 className="text-xl font-bold text-text-primary mb-4">Important Notes</h2>
          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>All codes work on <strong>all servers</strong> (no regional restrictions)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Each code can be redeemed <strong>once per account</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Codes are <strong>case-sensitive</strong> - enter them exactly as shown</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>New codes are added regularly - <strong>bookmark this page</strong>!</span>
            </li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section>
          <FAQ items={faqItems} title="Frequently Asked Questions" />
        </section>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-gold-primary/10 to-blue-accent/10 border border-gold-primary/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            New to Where Winds Meet?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Check out our comprehensive beginner's guide to learn the basics, master combat, and progress faster!
          </p>
          <a
            href="/guides/beginner-guide"
            className="inline-block px-8 py-3 bg-gold-primary hover:bg-gold-bright text-bg-primary font-bold rounded-lg transition-colors duration-200"
          >
            Read Beginner's Guide
          </a>
        </div>
      </article>
    </>
  );
}
