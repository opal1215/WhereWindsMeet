import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wherewindsmeetgame.org';

  // Static pages based on Information Architecture
  const staticPages = [
    // Root
    '',

    // High-Priority Pages
    '/codes', // Redeem codes - high traffic, updated frequently

    // Cluster A: Getting Started & Progression
    '/beginner-guide',
    '/leveling-guide',
    '/currencies-and-economy',
    '/game-modes-overview',
    '/settings-optimization',

    // Cluster B: Combat & Builds
    '/combat-overview',
    '/weapons',
    '/weapons/swords',
    '/weapons/polearms',
    '/weapons/bows',
    '/weapons/dual-blades',
    '/martial-arts-styles',
    '/builds',
    '/attributes-and-stats',

    // Cluster C: World & Exploration
    '/world-map',
    '/regions',
    '/fast-travel-and-movement',
    '/exploration-activities',

    // Cluster D: Life Skills & Economy
    '/life-skills',
    '/life-skills/medicine',
    '/life-skills/crafting',
    '/mini-games',
    '/farming-routes',

    // Cluster E: Multiplayer & Social
    '/multiplayer-overview',
    '/co-op-and-teams',
    '/pvp-modes',
    '/guilds-and-organizations',
    '/social-features',

    // Cluster F: Tools & Database
    '/tools',
    '/tools/build-planner',
    '/tools/map-tracker',
    '/tools/drop-table',
    '/tools/xp-calculator',
    '/tools/currency-planner',
    '/database',
    '/database/weapons',
    '/database/skills',
    '/database/items',
    '/database/bosses',

    // Cluster G: Meta & Updates
    '/news',
    '/tier-lists',
    '/meta-report',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : route === '/codes' ? 'daily' : 'monthly') as 'daily' | 'weekly' | 'monthly',
    priority: route === '' ? 1.0 : route === '/codes' ? 0.95 : route.startsWith('/beginner') ? 0.9 : 0.8,
  }));

  // TODO: Dynamic pages (fetch from database when implemented)
  // const guides = await fetchAllGuides();
  // const guidePages = guides.map(guide => ({
  //   url: `${baseUrl}/guides/${guide.slug}`,
  //   lastModified: new Date(guide.dateModified),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }));

  return [...staticPages];
}
