# Where Winds Meet Website - Complete Master Skill

## Skill Overview
This is the **complete specification** for building WhereWindsMeetgame.org, a third-party fan site for the Wuxia action RPG "Where Winds Meet". This skill combines:
1. **Information Architecture (IA)** - Site structure and content organization
2. **Design System** - Visual identity and component specifications
3. **Implementation Guide** - Step-by-step development checklist

When Claude Code needs to build any part of this website, it should reference this single master skill for all decisions.

---

# PART 1: INFORMATION ARCHITECTURE

## 1.1 Site Positioning

**Official Site (wherewindsmeetgame.com):**
- Game downloads, news, events, account management
- Black + gold color scheme
- Official branding and announcements

**Our Site (wherewindsmeetgame.org):**
- Third-party fan site (clearly stated)
- Guides, builds, maps, tools, wiki
- **Gold + Deep Blue** color scheme (differentiation!)
- "Wuxia Adventure Guide" positioning

**Key Differentiation:**
- NOT trying to be the official site
- Focus on player utility: guides, tools, data
- Community-driven content
- Regular version updates with timestamps

---

## 1.2 Complete URL Structure

### Root
- `/` - Homepage (hero + cluster overviews)

### Cluster A: Getting Started & Progression
- `/beginner-guide/` - New player overview
- `/leveling-guide/` - Character progression roadmap
- `/currencies-and-economy/` - Currency system explained
- `/game-modes-overview/` - RPG vs MMO modes
- `/settings-optimization/` - Graphics/controls optimization

### Cluster B: Combat & Builds
- `/combat-overview/` - Combat system mechanics
- `/weapons/` - Weapon types overview
  - `/weapons/swords/`
  - `/weapons/polearms/`
  - `/weapons/bows/`
  - `/weapons/dual-blades/`
- `/martial-arts-styles/` - Fighting styles overview
  - `/martial-arts-styles/{style-name}-guide/`
- `/builds/` - Build guides hub
  - `/builds/pve-dps/`
  - `/builds/pve-tank/`
  - `/builds/pvp-duelist/`
  - `/builds/solo-explorer/`
  - `/builds/{build-name}/` - Individual build pages
- `/attributes-and-stats/` - Stat system deep dive

### Cluster C: World & Exploration
- `/world-map/` - Interactive map hub
- `/regions/` - Region overview
  - `/regions/{region-name}/`
- `/fast-travel-and-movement/` - Traversal systems
- `/exploration-activities/` - Side content guide

### Cluster D: Life Skills & Economy
- `/life-skills/` - Life skills overview
  - `/life-skills/medicine/` - Physician gameplay
  - `/life-skills/crafting/` - Item crafting
  - `/life-skills/housing-or-decor/` - Housing (if exists)
- `/mini-games/` - Casual activities
- `/farming-routes/` - Resource farming guides

### Cluster E: Multiplayer & Social
- `/multiplayer-overview/` - Multiplayer systems
- `/co-op-and-teams/` - Cooperative gameplay
- `/pvp-modes/` - PVP modes guide
- `/guilds-and-organizations/` - Guild systems
- `/social-features/` - Social mechanics

### Cluster F: Tools & Database
- `/tools/` - Tools hub
  - `/tools/build-planner/` - Build simulator
  - `/tools/map-tracker/` - Resource map
  - `/tools/drop-table/` - Loot database
  - `/tools/xp-calculator/` - XP calculator
  - `/tools/currency-planner/` - Currency planner
- `/database/` - Wiki database
  - `/database/weapons/`
  - `/database/skills/`
  - `/database/items/`
  - `/database/bosses/`

### Cluster G: Meta & Updates
- `/news/` - Curated news/analysis
  - `/news/patch-{version}-notes/`
  - `/news/season-{number}-guide/`
- `/tier-lists/` - Meta tier lists
- `/meta-report/` - PVE/PVP meta analysis

---

## 1.3 Homepage Structure Blueprint

**Section 1: Hero (Full viewport)**
- Background: Game screenshot (deep blue night + golden accents)
- H1: "WHERE WINDS MEET" (giant gold text)
- Subtitle: "Your Wuxia Adventure Begins Here"
- CTAs: [Beginner Guide] [Top Builds]

**Section 2: Getting Started (4 cards in 2x2 grid)**
- Card 1: Beginner Guide → `/beginner-guide/`
- Card 2: Leveling Guide → `/leveling-guide/`
- Card 3: Game Modes → `/game-modes-overview/`
- Card 4: Settings → `/settings-optimization/`

**Section 3: Popular Builds (horizontal scroll)**
- 4-5 build cards with images
- Each links to `/builds/{build-name}/`
- Last updated dates visible

**Section 4: World & Maps (split layout)**
- Left: Text + CTA
- Right: Map preview image
- Link to `/world-map/`

**Section 5: Interactive Tools (3-column grid)**
- Build Planner
- XP Calculator
- Drop Table Browser
- (Some can show "Coming Soon")

**Section 6: EEAT Trust Section**
- "About WhereWindsMeetgame.org"
- Third-party disclaimer
- Version tracking commitment
- Update frequency

**Footer**
- 3-column layout
- Links, social, legal
- Copyright notice

---

# PART 2: DESIGN SYSTEM

## 2.1 Color System

### Primary Palette
```css
/* Background Colors */
--bg-primary: #0A1628;        /* Deep blue-black (main background) */
--bg-secondary: #132B47;      /* Secondary deep blue */
--bg-card: #1A3A5C;           /* Card background */
--bg-overlay: rgba(10, 22, 40, 0.85);

/* Gold Colors (WWM DNA) */
--gold-primary: #D4AF37;      /* Main gold */
--gold-bright: #F0D87C;       /* Bright gold (hover/highlights) */
--gold-dark: #B8952E;         /* Dark gold (shadows/borders) */
--gold-subtle: rgba(212, 175, 55, 0.15);

/* Blue Accents */
--blue-accent: #4A90E2;       /* Bright blue (links/CTAs) */
--blue-muted: #2C5282;        /* Mid blue (secondary elements) */

/* Text Colors */
--text-primary: #F5F1E8;      /* Off-white (main text) */
--text-secondary: #B8C5D6;    /* Light blue-gray (secondary text) */
--text-muted: #7A8BA3;        /* Muted blue-gray (captions/meta) */
--text-gold: #D4AF37;         /* Gold text (highlights) */

/* Semantic Colors */
--success: #4CAF50;
--warning: #FFA726;
--error: #EF5350;
--info: #4A90E2;
```

### Gradients
```css
--gradient-gold: linear-gradient(135deg, #F0D87C 0%, #D4AF37 100%);
--gradient-hero: linear-gradient(180deg, rgba(10, 22, 40, 0.6) 0%, rgba(10, 22, 40, 0.85) 100%);
--gradient-card-hover: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%);
```

---

## 2.2 Typography

### Font Stack
```css
--font-display: 'Cinzel', 'Cinzel Decorative', serif;  /* Headers */
--font-body: 'Crimson Text', 'Georgia', serif;         /* Body text */
--font-ui: 'Inter', -apple-system, sans-serif;         /* UI elements */
```

### Font Sizes
```css
--text-9xl: 120px;    /* Hero H1 */
--text-5xl: 48px;     /* Section H2 */
--text-2xl: 24px;     /* Card titles */
--text-lg: 18px;      /* Body */
--text-base: 16px;    /* Base */

/* Mobile: multiply by 0.65-0.75 */
```

### Font Weights
```css
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
--weight-black: 900;
```

### Line Heights
```css
--leading-tight: 1.2;     /* Headers */
--leading-normal: 1.6;    /* Body */
--leading-relaxed: 1.8;   /* Large body */
--leading-loose: 2.0;     /* Long-form */
```

---

## 2.3 Spacing System (Base: 8px)

```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-8: 64px;
--space-10: 80px;
--space-12: 96px;

--section-padding-y: 120px;        /* Desktop */
--section-padding-y-mobile: 60px;  /* Mobile */
```

---

## 2.4 Layout System

### Container Widths
```css
--container-xs: 640px;
--container-sm: 768px;
--container-md: 1024px;
--container-lg: 1200px;
--container-xl: 1400px;
```

### Breakpoints
```css
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;

/* Usage */
@media (min-width: 1024px) { /* Desktop */ }
@media (max-width: 1023px) { /* Tablet */ }
@media (max-width: 767px)  { /* Mobile */ }
```

---

## 2.5 Component Specifications

### Buttons
```css
.btn-primary {
  background: transparent;
  border: 2px solid var(--gold-primary);
  color: var(--gold-bright);
  padding: 14px 32px;
  border-radius: 8px;
  font-family: var(--font-ui);
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--gold-primary);
  color: var(--bg-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(212, 175, 55, 0.3);
}
```

### Cards
```css
.card {
  background: var(--bg-card);
  border: 1px solid rgba(184, 149, 46, 0.3);
  border-radius: 16px;
  padding: 40px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--gold-primary);
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.2);
}

.card-title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  color: var(--text-primary);
  font-weight: var(--weight-bold);
}

.card-description {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

.card-link {
  color: var(--gold-bright);
  font-weight: var(--weight-semibold);
  transition: all 0.2s ease;
}

.card-link:hover {
  color: var(--gold-primary);
  transform: translateX(5px);
}
```

### Navigation Bar
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 22, 40, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  padding: 20px 40px;
  z-index: 1000;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-display);
  font-size: var(--text-xl);
  color: var(--gold-primary);
  font-weight: var(--weight-bold);
}

.navbar-link {
  color: var(--text-secondary);
  font-family: var(--font-ui);
  font-size: var(--text-base);
  transition: color 0.2s ease;
}

.navbar-link:hover {
  color: var(--gold-bright);
}
```

---

## 2.6 Hero Section (Homepage)

```css
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-hero);
  z-index: -1;
}

.hero-title {
  font-family: var(--font-display);
  font-size: var(--text-9xl);
  font-weight: var(--weight-black);
  background: var(--gradient-gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-5);
}

.hero-subtitle {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  color: var(--text-primary);
  opacity: 0.9;
  margin-bottom: var(--space-8);
}
```

---

## 2.7 Section Container Pattern

**Son of Oak Breathing Rhythm:**
```
[Section with --section-padding-y: 120px top/bottom]
  ↓
  [Max-width container: --container-lg]
    ↓
    [Section header: centered, --space-10 margin-bottom]
      - Section title (gold, --text-5xl)
      - Section subtitle (--text-xl, max-width 600px)
    ↓
    [Content grid/cards]
```

**Alternating backgrounds:**
- Even sections: `--bg-secondary`
- Odd sections: `--bg-primary`

---

## 2.8 Animations

```css
/* Timing functions */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);

/* Fade in up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply on scroll with Intersection Observer */
```

---

## 2.9 Decorative Elements

### Gold Brush Strokes
- Use as section dividers
- PNG with transparency
- Width: 150-250px, centered
- Opacity: 0.6-0.8

### Chinese Cloud Patterns
- Background decorations (position: absolute)
- Gold color, opacity: 0.1-0.15
- Top-right or bottom-left corners

### Mountain Silhouettes
- Bottom of hero sections
- Gold outline, opacity: 0.1
- 50-60% width

---

## 2.10 Icon System

**Use: Lucide React or Heroicons**

Required icons:
- `BookOpen` - Guides
- `Zap` - Leveling
- `Gamepad2` - Game modes
- `Settings` - Settings
- `Sword` - Builds
- `Map` - World map
- `Calculator` - Tools
- `Users` - Community
- `ExternalLink` - External links
- `ChevronRight` - Navigation

---

## 2.11 Required Assets

### Images (User to provide via AI generation)
1. **Hero background** (1920x1080): Wuxia warrior at night, deep blue + gold
2. **Section backgrounds** (1920x800, 3-5 images): Various game scenes
3. **Decorative elements** (PNG): Gold brush strokes, cloud patterns
4. **Favicon** (512x512): Sword + wind symbol, gold on deep blue

### Fonts (Google Fonts - free)
- Cinzel (display headers)
- Crimson Text (body text)
- Inter (UI elements)

---

## 2.12 Favicon Configuration

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">
<link rel="manifest" href="/site.webmanifest">
```

site.webmanifest:
```json
{
  "name": "Where Winds Meet Guides",
  "short_name": "WWM Guides",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#0A1628",
  "background_color": "#0A1628",
  "display": "standalone"
}
```

---

## 2.13 SEO Meta Tags Template

```html
<title>Where Winds Meet Guides, Builds & Tools | WhereWindsMeetgame.org</title>
<meta name="description" content="In-depth Where Winds Meet guides, builds, maps, and tools for PS5 & PC players. Master combat styles, find best builds, explore the Wuxia world with data-driven strategies.">

<meta property="og:type" content="website">
<meta property="og:url" content="https://wherewindsmeetgame.org/">
<meta property="og:title" content="Where Winds Meet Guides & Tools">
<meta property="og:description" content="Master the Wuxia world with data-driven guides and interactive tools">
<meta property="og:image" content="https://wherewindsmeetgame.org/og-image.jpg">

<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="Where Winds Meet Guides & Tools">
<meta property="twitter:description" content="Master the Wuxia world with data-driven guides">
<meta property="twitter:image" content="https://wherewindsmeetgame.org/twitter-image.jpg">

<link rel="canonical" href="https://wherewindsmeetgame.org/">
```

---

## 2.14 Accessibility Requirements

- Text contrast: WCAG AA minimum (4.5:1 normal, 3:1 large)
- Focus states: 2px gold outline with 2px offset
- Alt text: Descriptive for content images, empty for decorative
- Keyboard navigation: Full support for all interactive elements

---

# PART 3: IMPLEMENTATION GUIDE FOR CLAUDE CODE

## 3.1 Tech Stack Recommendations

**Frontend:**
- Next.js 14+ (React framework with SSR/SSG)
- Tailwind CSS (utility-first CSS, easy to implement design system)
- Lucide React (icon library)

**Why this stack:**
- Next.js: SEO-friendly, fast, file-based routing matches our IA
- Tailwind: Can directly map our CSS variables to config
- Easy deployment (Vercel)

---

## 3.2 Implementation Phases

### Phase 1: Project Setup (Day 1)
```bash
# Create Next.js project
npx create-next-app@latest wherewindsmeetgame --typescript --tailwind --app

# Install dependencies
npm install lucide-react @fontsource/cinzel @fontsource/crimson-text
```

**Configure Tailwind with our design system:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A1628',
        'bg-secondary': '#132B47',
        'bg-card': '#1A3A5C',
        'gold-primary': '#D4AF37',
        'gold-bright': '#F0D87C',
        'gold-dark': '#B8952E',
        'blue-accent': '#4A90E2',
        'text-primary': '#F5F1E8',
        'text-secondary': '#B8C5D6',
        'text-muted': '#7A8BA3',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Crimson Text', 'Georgia', 'serif'],
        ui: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '9xl': '120px',
        '5xl': '48px',
      },
      spacing: {
        'section-y': '120px',
      },
    },
  },
}
```

### Phase 2: Create Base Components (Day 1-2)
```
/components
  /ui
    - Button.tsx
    - Card.tsx
    - Navbar.tsx
  /sections
    - Hero.tsx
    - SectionContainer.tsx
```

### Phase 3: Build Homepage (Day 2-3)
```
/app
  - page.tsx (homepage)
  - layout.tsx (root layout with navbar/footer)
```

Sections:
1. Hero section with background image
2. Getting Started grid (2x2 cards)
3. Popular Builds (horizontal scroll)
4. World & Maps preview
5. Tools section
6. About/EEAT
7. Footer

### Phase 4: Create Page Templates (Day 3-4)
```
/app
  /beginner-guide
    - page.tsx
  /builds
    - page.tsx
    /[slug]
      - page.tsx
  /tools
    - page.tsx
```

### Phase 5: Add Assets & Polish (Day 4-5)
- Add user-provided images to `/public/images/`
- Add favicon files to `/public/`
- Configure metadata in each page
- Add scroll animations (Intersection Observer)
- Test responsive design

### Phase 6: SEO & Performance (Day 5)
- Generate sitemap.xml
- Add robots.txt
- Optimize images (Next.js Image component)
- Add meta tags to all pages
- Test Lighthouse scores

---

## 3.3 File Structure

```
wherewindsmeetgame/
├── app/
│   ├── layout.tsx              # Root layout (navbar, footer, fonts)
│   ├── page.tsx                # Homepage
│   ├── beginner-guide/
│   │   └── page.tsx
│   ├── leveling-guide/
│   │   └── page.tsx
│   ├── builds/
│   │   ├── page.tsx            # Builds hub
│   │   └── [slug]/
│   │       └── page.tsx        # Individual build
│   ├── tools/
│   │   └── page.tsx
│   └── ...                     # Other pages per IA
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Navbar.tsx
│   └── sections/
│       ├── Hero.tsx
│       └── SectionContainer.tsx
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   └── ...
│   ├── decorations/
│   │   ├── gold-brush-1.png
│   │   └── cloud-pattern-1.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   └── site.webmanifest
├── styles/
│   └── globals.css             # Global styles, CSS variables
├── tailwind.config.js
└── package.json
```

---

## 3.4 Critical Implementation Notes

### For Homepage Hero:
```tsx
<section className="relative h-screen min-h-[600px] flex items-center justify-center">
  <Image 
    src="/images/hero-bg.jpg"
    alt="Wuxia warrior overlooking ancient city"
    fill
    className="object-cover -z-20"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 to-bg-primary/85 -z-10" />
  
  <div className="max-w-4xl px-10 text-center">
    <h1 className="font-display text-9xl font-black bg-gradient-to-br from-gold-bright to-gold-primary bg-clip-text text-transparent">
      WHERE WINDS MEET
    </h1>
    <p className="font-body text-xl text-text-primary/90 mt-5 mb-8">
      Your Wuxia Adventure Begins Here
    </p>
    <div className="flex gap-5 justify-center">
      <Button variant="primary">Beginner Guide</Button>
      <Button variant="primary">Top Builds</Button>
    </div>
  </div>
</section>
```

### For Cards:
```tsx
<div className="bg-bg-card border border-gold-dark/30 rounded-2xl p-10 transition-all hover:-translate-y-1 hover:border-gold-primary hover:shadow-[0_12px_32px_rgba(212,175,55,0.2)]">
  <h3 className="font-display text-2xl text-text-primary font-bold mb-3">
    Beginner Guide
  </h3>
  <p className="font-body text-base text-text-secondary leading-relaxed mb-4">
    Learn the basics of Where Winds Meet...
  </p>
  <a className="text-gold-bright font-semibold hover:text-gold-primary transition-all hover:translate-x-1">
    Read More →
  </a>
</div>
```

### For Section Containers:
```tsx
<section className="py-section-y px-5 bg-bg-primary relative overflow-hidden">
  <div className="max-w-[1200px] mx-auto">
    <div className="text-center mb-10">
      <h2 className="font-display text-5xl text-gold-primary font-bold mb-4">
        New to Where Winds Meet?
      </h2>
      <p className="font-body text-xl text-text-secondary max-w-[600px] mx-auto leading-relaxed">
        Start your journey with these essential guides...
      </p>
    </div>
    
    {/* Content (cards grid, etc) */}
  </div>
</section>
```

---

## 3.5 Testing Checklist

Before launch:
- [ ] All pages load without errors
- [ ] Navbar links work on all pages
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] Images load properly and are optimized
- [ ] Favicon appears in browser tab
- [ ] Meta tags show correctly in social preview
- [ ] Hover effects work on cards/buttons
- [ ] Text contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Page load time < 3s

---

## 3.6 Deployment

**Recommended: Vercel (free tier)**
1. Push code to GitHub
2. Connect repo to Vercel
3. Configure domain: wherewindsmeetgame.org
4. Deploy

**Environment variables (if needed later):**
- Database connection strings
- API keys for tools

---

# PART 4: CONTENT GUIDELINES

## 4.1 Writing Tone (From Market Research)

**Target audience:** Western gamers unfamiliar with Wuxia

**Voice characteristics:**
- Friendly and approachable (not professorial)
- "Veteran player helping a friend" tone
- Clear and direct (no marketing fluff)
- Acknowledges confusion ("This system can be confusing...")
- Practical over theoretical

**Example good opening:**
> "If you're just starting Where Winds Meet, the amount of systems can feel overwhelming. This guide covers the 5 things you should focus on in your first few hours so you don't waste resources."

**Example bad opening:**
> "Welcome to the ultimate comprehensive encyclopedia of Where Winds Meet mechanics..."

## 4.2 Structure for Guide Pages

```
# [Page Title]

## What This Guide Covers
- Bullet point summary (3-5 items)

## [First Main Section]
Content...

## [Second Main Section]
Content...

## Quick Tips
- Bullet point checklist

## Last Updated
Version X.X | Date
```

## 4.3 SEO Keywords (From IA Research)

**High-priority keywords:**
- "where winds meet guide"
- "where winds meet builds"
- "where winds meet beginner tips"
- "wwm [specific topic]"

**Use naturally in:**
- Page titles
- H1 headings
- First paragraph
- Meta descriptions

---

# END OF MASTER SKILL

## Quick Reference for Claude Code

**When building a page, reference:**
1. Part 1 (IA) → URL structure and page hierarchy
2. Part 2 (Design System) → Colors, fonts, components
3. Part 3 (Implementation) → Code patterns and file structure
4. Part 4 (Content) → Writing guidelines

**Key design principles:**
- Gold + Deep Blue (not black)
- Son of Oak breathing space
- Mobile-first responsive
- WCAG AA accessibility
- Fast load times

**This skill is the single source of truth for all design and structure decisions on WhereWindsMeetgame.org.**

Last Updated: 2025-11-18
Version: 1.0
